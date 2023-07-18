from mage_ai.ai.generator import Generator
from mage_ai.api.resources.GenericResource import GenericResource


class LlmResource(GenericResource):
    @classmethod
    def create(self, payload, user, **kwargs):
        response = Generator.generate(payload.get('use_case'), payload.get('request'))

        return self(dict(
            use_case=payload.get('use_case'),
            response=response,
        ), user, **kwargs)
