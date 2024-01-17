import json
import os
from dataclasses import dataclass, field
from enum import Enum
from typing import Any, Dict, List, Tuple, Union

import pandas as pd

from mage_ai.data_preparation.models.constants import DATAFRAME_ANALYSIS_MAX_COLUMNS
from mage_ai.server.kernel_output_parser import DataType
from mage_ai.shared.array import find
from mage_ai.shared.custom_logger import DX_PRINTER
from mage_ai.shared.hash import ignore_keys_with_blank_values
from mage_ai.shared.models import BaseDataClass


class DynamicBlockFlag(str, Enum):
    CLONE_OF_ORIGINAL = 'clone_of_original'
    DYNAMIC = 'dynamic'
    DYNAMIC_CHILD = 'dynamic_child'
    ORIGINAL = 'original'
    REDUCE_OUTPUT = 'reduce_output'
    REPLICATED = 'replicated'
    SPAWN_OF_DYNAMIC_CHILD = 'spawn_of_dynamic_child'


def build_dynamic_block_uuid(
    block_uuid: str,
    metadata: Dict = None,
    index: int = None,
    indexes: List[int] = None,
    upstream_block_uuid: str = None,
    upstream_block_uuids: List[str] = None,
) -> str:
    """
    Generates a dynamic block UUID based on the given parameters.

    Args:
        block_uuid (str): The UUID of the parent block.
        metadata (Dict): The metadata of the block.
        index (int): The index of the dynamic block.
        upstream_block_uuid (str, optional): The UUID of the upstream block.

    Returns:
        str: The generated dynamic block UUID.
    """
    block_uuid_subname = metadata.get('block_uuid', index) if metadata else index
    uuid = f'{block_uuid}:{block_uuid_subname}'

    if upstream_block_uuids:
        uuid = ':'.join([
            str(block_uuid),
            '__'.join([str(i) for i in upstream_block_uuids]),
            str(block_uuid_subname),
        ])
    elif upstream_block_uuid:
        parts = upstream_block_uuid.split(':')
        if len(parts) >= 2:
            upstream_indexes = ':'.join(parts[1:])
            uuid = f'{uuid}:{upstream_indexes}'

    return uuid


def extract_dynamic_block_index(block_run_block_uuid: str) -> int:
    if block_run_block_uuid:
        parts = block_run_block_uuid.split(':')
        if len(parts) >= 2:
            return parts[-1]


def is_dynamic_block(block) -> bool:
    """
    Checks if the given block is a dynamic block.

    Args:
        block: The block.

    Returns:
        bool: True if the block is a dynamic block, False otherwise.
    """
    return block.configuration and block.configuration.get('dynamic', False)


def should_reduce_output(block) -> bool:
    """
    Checks if the given block should reduce its output.

    Args:
        block: The block.

    Returns:
        bool: True if the block should reduce its output, False otherwise.
    """
    if not block or not block.configuration or not block.configuration.get('reduce_output', False):
        return False
    return True


def has_dynamic_block_upstream_parent(block) -> bool:
    return block.upstream_blocks and any([is_dynamic_block(b) for b in block.upstream_blocks])


def is_dynamic_block_child(block) -> bool:
    """
    Checks if the given block is a dynamic block child.

    Args:
        block: The block.

    Returns:
        bool: True if the block is a dynamic block child, False otherwise.
    """
    dynamic_or_child = []

    for upstream_block in block.upstream_blocks:
        if is_dynamic_block(upstream_block) or is_dynamic_block_child(upstream_block):
            dynamic_or_child.append(upstream_block)

    if len(dynamic_or_child) == 0:
        return False

    dynamic_or_child_with_reduce = list(filter(lambda x: should_reduce_output(x), dynamic_or_child))

    return len(dynamic_or_child) > len(dynamic_or_child_with_reduce)


def is_replicated_block(block) -> bool:
    return True if block and block.replicated_block else False


def is_original_dynamic_child_block(
    block,
    block_run_block_uuid: int = None,
    block_run_id: int = None,
) -> bool:
    # Check to see if its the original non-cloned version.
    block_run = None

    def __get_block_run(block_run_id=block_run_id):
        from mage_ai.orchestration.db.models.schedules import BlockRun
        return BlockRun.query.get(block_run_id)

    if block:
        if not block_run_block_uuid and block_run_id:
            block_run = __get_block_run()
            block_run_block_uuid = block_run.block_uuid

        if block_run_block_uuid and block.uuid == block_run_block_uuid:
            return True

    if not block_run and not block_run_id:
        return False

    if not block_run:
        block_run = __get_block_run()

    if block and block.uuid == block_run.block_uuid:
        return True

    wrapper = DynamicBlockWrapperBase()
    wrapper.hydrate(block=block, block_run=block_run)

    return wrapper.is_dynamic_child() and wrapper.is_original(include_clone=True)


def uuid_for_output_variables(
    block,
    block_uuid: str = None,
    dynamic_block_index: int = None,
    dynamic_block_uuid: str = None,
    join_character: str = None,
    **kwargs,
) -> Tuple[str, bool]:
    changed = False

    block_uuid_0 = block_uuid
    dynamic_block_index_0 = dynamic_block_index

    if block_uuid is None:
        block_uuid = block.uuid

    if dynamic_block_uuid:
        block_uuid = dynamic_block_uuid
        dynamic_block_index = None

    if dynamic_block_index is not None or is_dynamic_block_child(block):
        parts = block_uuid.split(':')

        if len(parts) >= 2:
            block_uuid = parts[0]

            if dynamic_block_index is None:
                dynamic_block_index = parts[-1]

        if dynamic_block_index is not None:
            # We only need the base name and the final index to create the folder structure:
            # e.g. block_uuid/[dynamic_block_index]
            # e.g. block_uuid/0/output_0/data.json
            # [dynamic_block_index] if used for each dynamic child so that it has a folder
            # to store its output.
            # dynamic_block_index = dynamic_block_uuid.split(':')[-1]
            # block_uuid = os.path.join(block_uuid, str(dynamic_block_index))
            arr = [str(block_uuid), str(dynamic_block_index)]
            if join_character:
                block_uuid = join_character.join(arr)
            else:
                block_uuid = os.path.join(*arr)
            changed = True

    DX_PRINTER.debug(
        block=block,
        block_uuid=block_uuid,
        block_uuid_0=block_uuid_0,
        changed=changed,
        dynamic_block_index=dynamic_block_index,
        dynamic_block_index_0=dynamic_block_index_0,
        dynamic_block_uuid=dynamic_block_uuid,
        __uuid='uuid_for_output_variables',
    )

    return (block_uuid, changed)


def mock_dynamic_in_real_scenario(block, **kwargs) -> Dict:
    options = kwargs.copy()

    for upstream_block in block.upstream_blocks:
        if is_dynamic_block(upstream_block) or is_dynamic_block_child(upstream_block):
            if options.get('dynamic_block_index') is None:
                options['dynamic_block_index'] = 0
            if options.get('dynamic_block_uuid') is None:
                dynamic_block_index = options.get('dynamic_block_index')
                if dynamic_block_index is None:
                    dynamic_block_index = 0

                options['dynamic_block_uuid'] = build_dynamic_block_uuid(
                    block.uuid,
                    index=dynamic_block_index,
                )
            if not options.get('dynamic_block_indexes'):
                options['dynamic_block_indexes'] = {}
            if upstream_block.uuid not in options['dynamic_block_indexes']:
                options['dynamic_block_indexes'][upstream_block.uuid] = 0

    return options


def transform_dataframe_for_display(dataframe: pd.DataFrame) -> Dict:
    data = None
    if isinstance(dataframe, pd.DataFrame):
        columns_to_display = dataframe.columns.tolist()[:DATAFRAME_ANALYSIS_MAX_COLUMNS]
        row_count, column_count = dataframe.shape

        data = dict(
            columns=columns_to_display,
            rows=json.loads(
                dataframe[columns_to_display].to_json(orient='split')
            )['data'],
            index=list(dataframe.index),
            shape=[row_count, column_count],
        )
    else:
        data = dict(
            columns=['col0'],
            rows=[[dataframe]],
            index=[0],
            shape=[1, 1],
        )

    return dict(
        data=data,
        type=DataType.TABLE,
    )


def format_output(child_data: Union[
    List[Union[Dict, int, str, pd.DataFrame]],
    pd.DataFrame
]) -> Dict:
    if isinstance(child_data, list):
        item = child_data[0]
        if isinstance(item, pd.DataFrame):
            child_data = [child_data]
        elif isinstance(item, dict):
            child_data = pd.DataFrame(child_data)
        else:
            child_data = pd.DataFrame(
                [dict(col=value) for value in child_data],
            )
    elif isinstance(child_data, pd.DataFrame):
        return child_data

    return child_data


def transform_output(
    output: Tuple[
        Union[
            List[Union[Dict, int, str, pd.DataFrame]],
            pd.DataFrame
        ],
        List[Dict]
    ],
):
    child_data = None
    metadata = None
    if len(output) >= 1:
        child_data = output[0]

        if len(output) >= 2:
            metadata = output[1]

    if child_data is None:
        return []

    child_data = format_output(child_data)

    if isinstance(child_data, tuple):
        return transform_output(child_data)
    elif isinstance(child_data, list):
        child_data = [transform_dataframe_for_display(data) for data in child_data]
    else:
        child_data = transform_dataframe_for_display(child_data)

    if metadata is not None:
        metadata = transform_dataframe_for_display(format_output(metadata))

    return child_data, metadata


def transform_output_for_display(
    output: Tuple[
        Union[
            List[Union[Dict, int, str, pd.DataFrame]],
            pd.DataFrame
        ],
        List[Dict]
    ],
) -> List[Dict]:
    child_data, metadata = transform_output(output)

    return dict(
        data=dict(
            columns=['child_data', 'metadata'],
            index=[0, 1],
            rows=[child_data, metadata],
            shape=[2, 2],
        ),
        type=DataType.TABLE,
        multi_output=True,
    )


def transform_output_for_display_dynamic_child(
    outputs: List[
        Tuple[
            Union[
                List[Union[Dict, int, str, pd.DataFrame]],
                pd.DataFrame
            ],
            List[Dict]
        ]
    ],
) -> List[Dict]:
    columns = []
    child_data_arr = []
    rows_count = []

    for idx, output in enumerate(outputs):
        child_data, metadata = transform_output(output)

        column = f'child_{idx}'
        if metadata and isinstance(metadata, dict):
            if metadata.get('block_uuid'):
                column = metadata.get('block_uuid')
        columns.append(column)

        if child_data and isinstance(child_data, dict):
            data = child_data.get('data')
            if data and isinstance(data, dict):
                shape = data.get('shape')
                if shape and isinstance(shape, list) and len(shape) >= 1:
                    rows_count.append(shape[0])

        child_data_arr.append(child_data)

    return dict(
        data=dict(
            columns=columns,
            index=[idx for idx, _i in enumerate(child_data_arr)],
            rows=child_data_arr,
            shape=[max(rows_count) if rows_count else 0, len(columns)],
        ),
        type=DataType.TABLE,
        multi_output=True,
    )


def create_combinations(combinations: List[Any]) -> List[Any]:
    def __create_combinations(combinations_inner: List[Any]) -> List[Any]:
        combos = []

        for idx, arr in enumerate(combinations_inner):
            for value in arr:
                combinations_next = combinations_inner[(idx + 1):]
                if len(combinations_next) >= 1:
                    for combos_down in __create_combinations(combinations_next):
                        combos.append([value] + combos_down)
                else:
                    combos.append([value])

        return combos

    count = len(combinations)
    arr = __create_combinations(combinations)
    return [combo for combo in arr if len(combo) == count]


def build_combinations_for_dynamic_child(block, **kwargs):
    pipeline = block.pipeline

    dynamic_counts = []
    index_of_dynamic_blocks = []

    input_vars, kwargs_vars, upstream_block_uuids = block.fetch_input_variables(
        None,
        dynamic_block_index=None,
        dynamic_block_indexes=None,
        dynamic_upstream_block_uuids=None,
        execution_partition=None,
        from_notebook=True,
        global_vars=kwargs.get('global_vars'),
        metadata=None,
    )

    for idx, upstream_block_uuid in enumerate(upstream_block_uuids):
        count = 1
        is_dynamic = False

        upstream_block = pipeline.get_block(upstream_block_uuid)
        if is_dynamic_block(upstream_block):
            is_dynamic = True
            if idx < len(input_vars):
                count = len(input_vars[idx])

        index_of_dynamic_blocks.append(is_dynamic)
        dynamic_counts.append([idx for idx, _i in enumerate(range(count))])

    combinations = create_combinations(dynamic_counts)

    settings = []
    for dynamic_block_index, arr in enumerate(combinations):
        # dynamic_block_index = 0
        # arr = [1, 2, 3, 4]

        # dynamic_block_indexes = { 'dynamic_parent': 1 }
        dynamic_block_indexes = {}
        for idx, upstream_block_uuid in enumerate(upstream_block_uuids):
            # idx = 0
            # upstream_block_uuid = dynamic_parent
            # index_of_dynamic_blocks = [True, False, True, False]
            if index_of_dynamic_blocks[idx]:
                # index_of_dynamic_blocks[0] = index_of_dynamic_blocks[0] = True
                # arr[idx] = arr[0] = 1
                dynamic_block_indexes[upstream_block_uuid] = arr[idx]

        settings.append(dict(
            dynamic_block_index=dynamic_block_index,
            dynamic_block_indexes=dynamic_block_indexes,
        ))

    return settings


@dataclass
class DynamicBlockWrapperBase(BaseDataClass):
    block: Any = None
    block_run_block_uuid: str = None
    block_uuid: str = None
    children: List[BaseDataClass] = field(default_factory=lambda: [])
    clones: List[BaseDataClass] = field(default_factory=lambda: [])
    dynamic_block_index: int = None
    dynamic_block_indexes: Dict = None
    factory: Any = None
    flags: List[DynamicBlockFlag] = field(default_factory=lambda: [])
    index: int = None
    metadata_instructions: BaseDataClass = field(default_factory=lambda: {})
    siblings: List[BaseDataClass] = field(default_factory=lambda: [])
    spawns: List[BaseDataClass] = field(default_factory=lambda: [])
    upstream_dynamic_blocks: List[BaseDataClass] = field(default_factory=lambda: [])
    upstream_dynamic_child_blocks: List[BaseDataClass] = field(default_factory=lambda: [])
    uuid: str = None


@dataclass
class DynamicBlockWrapper(BaseDataClass):
    block: Any = None
    block_run_block_uuid: str = None
    block_uuid: str = None
    # If the current block is a dynamic block, then the children are the dynamic child blocks
    # that are created from this block’s output.
    children: List[DynamicBlockWrapperBase] = field(default_factory=lambda: [])
    # If the current block is the original, then clones are the other blocks that the original
    # created to handle the responsibility of controlling what block runs are created
    # from an upstream dynamic block.
    clones: List[DynamicBlockWrapperBase] = field(default_factory=lambda: [])
    dynamic_block_index: int = None
    dynamic_block_indexes: Dict = None
    factory: Any = None
    flags: List[DynamicBlockFlag] = field(default_factory=lambda: [])
    metadata_instructions: BaseDataClass = None
    # Other blocks at the same level; other cloned blocks, other spawns, etc.
    siblings: List[DynamicBlockWrapperBase] = field(default_factory=lambda: [])
    # If the current block is an original dynamic child block or cloned dynamic child block,
    # then spawns are the blocks that are created based on the original or cloned upstream
    # dynamic block’s (e.g. a direct parent block) output.
    spawns: List[DynamicBlockWrapperBase] = field(default_factory=lambda: [])
    # Upstream blocks that are dynamic blocks.
    upstream_dynamic_blocks: List[DynamicBlockWrapperBase] = field(default_factory=lambda: [])
    # Upstream blocks that are dynamic child blocks.
    upstream_dynamic_child_blocks: List[DynamicBlockWrapperBase] = field(default_factory=lambda: [])
    # Unique identifier used as a suffix in the block run.
    uuid: str = None

    def __post_init__(self):
        self.factory._wrapper = self

        block_run = self.factory.block_run()

        self.block = self.factory.block
        self.block_uuid = self.block.uuid if self.block else None
        self.block_run_block_uuid = block_run.block_uuid if block_run else None
        self.uuid = self.block_run_block_uuid or self.block_uuid

        if block_run:
            config = block_run.metrics or {}
            self.dynamic_block_index = config.get('dynamic_block_index')
            self.dynamic_block_indexes = config.get('dynamic_block_indexes')

            metadata = config.get('metadata') or {}

            self.flags = [DynamicBlockFlag(v) for v in metadata.get('flags') or []]
            if metadata.get('clone_original', False):
                self.flags.append(DynamicBlockFlag.CLONE_OF_ORIGINAL)
            self.flags = list(set(self.flags))

            for key in [
                'uuid',
            ]:
                value = metadata.get(key) or None
                if value:
                    setattr(self, key, value)

            for key in [
                'children',
                'clones',
                'siblings',
                'spawns',
                'upstream_dynamic_blocks',
                'upstream_dynamic_child_blocks',
            ]:
                values = metadata.get(key) or None
                if values:
                    setattr(self, key, [self.load(**m) for m in values])

    def is_original(self, include_clone: bool = False) -> bool:
        if DynamicBlockFlag.ORIGINAL in (self.flags or []) or (
            include_clone and self.is_clone_of_original()
        ):
            return True

        if not self.block:
            return False

        return self.block.uuid == self.block_run_block_uuid or \
            (self.is_replicated() and self.block.uuid_replicated == self.block_run_block_uuid)

    def is_replicated(self) -> bool:
        return DynamicBlockFlag.REPLICATED in (self.flags or []) or is_replicated_block(self.block)

    def is_clone_of_original(self) -> bool:
        return DynamicBlockFlag.CLONE_OF_ORIGINAL in (self.flags or []) and not self.is_original()

    def is_dynamic(self) -> bool:
        if DynamicBlockFlag.DYNAMIC in (self.flags or []):
            return True
        return self.block and is_dynamic_block(self.block)

    def is_dynamic_child(self) -> bool:
        if DynamicBlockFlag.DYNAMIC_CHILD in (self.flags or []):
            return True
        return self.block and is_dynamic_block_child(self.block)

    def is_dynamic_squared(self) -> bool:
        return self.is_dynamic() and self.is_dynamic_child()

    def is_spawn(self) -> bool:
        if DynamicBlockFlag.SPAWN_OF_DYNAMIC_CHILD in (self.flags or []):
            return True

        return (self.block or self.block_uuid) and \
            self.block_run_block_uuid and \
            ((self.block and self.block.uuid != self.block_run_block_uuid) or
                (self.block_uuid and self.block_uuid != self.block_run_block_uuid)) and \
            not self.is_original(include_clone=True)

    def should_reduce_output(self) -> bool:
        if DynamicBlockFlag.REDUCE_OUTPUT in (self.flags or []):
            return True
        return self.block and should_reduce_output(self.block)

    def get_dynamic_block_index_from_parent(
        self,
        block_run_block_uuid: str,
    ) -> int:
        if not self.dynamic_block_indexes:
            block_run = self.factory.block_run()
            if block_run and block_run.metrics:
                self.dynamic_block_indexes = (block_run.metrics or {}).get(
                    'dynamic_block_indexes',
                )

        if self.dynamic_block_indexes:
            return (self.dynamic_block_indexes or {}).get(block_run_block_uuid)

    def get_parent_block_uuid_for_output_variables(
        self,
        block,
        block_run_block_uuid: str,
    ) -> str:
        dynamic_block_index_from_parent = self.get_dynamic_block_index_from_parent(
            block_run_block_uuid,
        )

        return uuid_for_output_variables(
            block,
            block_uuid=block_run_block_uuid,
            dynamic_block_index=dynamic_block_index_from_parent,
            join_character=':',
        )[0]

    def get_dynamic_block_index(self) -> int:
        if self.dynamic_block_index is not None:
            return self.dynamic_block_index

        block_run = self.factory.block_run()
        if block_run and block_run.metrics:
            self.dynamic_block_index = (block_run.metrics or {}).get(
                'dynamic_block_index',
            )

        return self.dynamic_block_index

    def to_dict_base(self, **kwargs) -> dict:
        data = dict(
            dynamic_block_index=self.get_dynamic_block_index(),
        )

        flags = []
        if self.is_original():
            flags.append(DynamicBlockFlag.ORIGINAL)
        if self.is_clone_of_original():
            flags.append(DynamicBlockFlag.CLONE_OF_ORIGINAL)
        if self.is_dynamic():
            flags.append(DynamicBlockFlag.DYNAMIC)
        if self.is_dynamic_child():
            flags.append(DynamicBlockFlag.DYNAMIC_CHILD)
        if self.is_spawn():
            flags.append(DynamicBlockFlag.SPAWN_OF_DYNAMIC_CHILD)
        if self.should_reduce_output():
            flags.append(DynamicBlockFlag.REDUCE_OUTPUT)

        flags = list(set(flags + (self.flags or [])))
        if len(flags) >= 1:
            data['flags'] = [v.value for v in flags if isinstance(v, DynamicBlockFlag)]

        for key in [
            'block_run_block_uuid',
            'block_uuid',
            'uuid',
        ]:
            if getattr(self, key) is not None:
                data[key] = getattr(self, key)

        return ignore_keys_with_blank_values(data)

    def to_dict(
        self,
        include_all: bool = False,
        use_metadata_instructions: bool = False,
        **kwargs,
    ) -> dict:
        if use_metadata_instructions:
            return ignore_keys_with_blank_values(dict(
                clone_original=self.metadata_instructions.clone_original,
                original=self.metadata_instructions.original.to_dict_base(),
                upstream=self.metadata_instructions.upstream.to_dict_base(),
            ))

        data = self.to_dict_base(**kwargs)
        if include_all:
            for key in [
                'children',
                'clones',
                'siblings',
                'spawns',
                'upstream_dynamic_blocks',
                'upstream_dynamic_child_blocks',
            ]:
                values = getattr(self, key) or None
                if values:
                    data[key] = [v.to_dict_base(**kwargs) for v in values]

        return ignore_keys_with_blank_values(data)


@dataclass
class MetadataInstructions(BaseDataClass):
    clone_original: bool = False
    original: DynamicBlockWrapper = None
    parent: DynamicBlockWrapper = None
    upstream: DynamicBlockWrapper = None

    def __post_init__(self):
        self.serialize_attribute_class('original', DynamicBlockWrapper)
        self.serialize_attribute_class('parent', DynamicBlockWrapper)
        self.serialize_attribute_class('upstream', DynamicBlockWrapper)


def dynamically_created_child_block_runs(pipeline, block, block_runs: List):
    def _find_child(br, block=block, pipeline=pipeline):
        block2 = pipeline.get_block(br.block_uuid)
        return br.block_uuid != block.uuid and block2 and block2.uuid == block.uuid

    return list(filter(_find_child, block_runs))


def all_upstreams_completed(block, block_runs: List) -> bool:
    pipeline = block.pipeline

    block_runs_for_current_block = filter(
        lambda br: block.uuid == pipeline.get_block(br.block_uuid).uuid,
        block_runs,
    )

    upstream_block_uuids_mapping = {}
    for br in block_runs_for_current_block:
        # If this dynamic child block has upstream blocks that were dynamically created:
        if br.metrics and br.metrics.get('dynamic_upstream_block_uuids'):
            for up_uuid in br.metrics.get('dynamic_upstream_block_uuids') or []:
                up_block = pipeline.get_block(up_uuid)
                if up_block and up_block.uuid not in upstream_block_uuids_mapping:
                    upstream_block_uuids_mapping[up_block.uuid] = []
                # Create a mapping of the original upstream block
                # to all of its dynamic child block’s block run’s block_uuid
                upstream_block_uuids_mapping[up_block.uuid].append(up_uuid)

    completed_checks = []
    # Check that all the upstream block for this block is completed.
    for upstream_block in block.upstream_blocks:
        # If the upstream block’s UUID is in the mapping, that means it had an upstream block
        # that was a dynamic child block; and it’s upstream was dynamically created.
        if upstream_block.uuid in upstream_block_uuids_mapping:
            br_uuids = upstream_block_uuids_mapping[upstream_block.uuid]
            for br_uuid in br_uuids:
                up_block_run = find(
                    lambda br, br_uuid=br_uuid: br.block_uuid == br_uuid,
                    block_runs,
                )

                if up_block_run:
                    completed = 'completed' == up_block_run.status
                    completed_checks.append(completed)
                    if not completed:
                        return False
                else:
                    # If there is no block run, then it never completed.
                    completed_checks.append(False)
                    return False
        elif upstream_block.upstream_blocks:
            # If the upstream block has other upstream blocks that don’t have
            # dynamically created upstream blocks:
            completed = all_upstreams_completed(
                upstream_block,
                block_runs,
            )
            completed_checks.append(completed)
            if not completed:
                return False

            # for up_upstream_block in upstream_block.upstream_blocks:
        else:
            # If the upstream block has no upstream blocks,
            # check to see if its single block run is completed.
            up_block_run = find(
                lambda br, upstream_block=upstream_block: br.block_uuid == upstream_block.uuid,
                block_runs,
            )

            if up_block_run:
                completed = 'completed' == up_block_run.status
                completed_checks.append(completed)
                if not completed:
                    return False
            else:
                # If there is no block run, then it never completed.
                completed_checks.append(False)
                return False

    return all(completed_checks)
