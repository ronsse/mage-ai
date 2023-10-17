(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2484],{59739:function(n,e,t){"use strict";var o=t(56669);function r(){}function u(){}u.resetWarningCache=r,n.exports=function(){function n(n,e,t,r,u,i){if(i!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:u,resetWarningCache:r};return t.PropTypes=t,t}},47329:function(n,e,t){n.exports=t(59739)()},56669:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},85108:function(n,e,t){"use strict";t.d(e,{G8:function(){return d},SR:function(){return E},VR:function(){return l},_H:function(){return A},x8:function(){return m}});var o,r,u,i,c,a,l,s=t(82394),f=t(35058);!function(n){n.COLUMNS="columns",n.METRICS="metrics",n.NUMBER="number"}(l||(l={}));var _={noCode:[{label:function(){return"time column"},settings:{maxValues:1},type:l.COLUMNS,uuid:f.eN},{label:function(){return"time interval"},options:[f.aE.ORIGINAL,f.aE.SECOND,f.aE.MINUTE,f.aE.HOUR,f.aE.DAY,f.aE.WEEK,f.aE.MONTH,f.aE.YEAR],uuid:f.Yg},{label:function(){return"metrics"},type:l.METRICS,uuid:f.bE}]},d=(o={},(0,s.Z)(o,f.oV.BAR_CHART,{noCode:[{label:function(){return"group by columns"},type:l.COLUMNS,uuid:f.eN},{label:function(){return"metrics"},type:l.METRICS,uuid:f.bE},{autoRun:!0,label:function(){return"chart style"},options:[f.JT.HORIZONTAL,f.JT.VERTICAL],uuid:f.R8},{autoRun:!0,label:function(){return"sort direction"},options:[null,f.MP.ASCENDING,f.MP.DESCENDING],uuid:f.$1}],code:[{label:function(){return"variable name of x-axis values"},monospace:!0,uuid:f.a3},{label:function(){return"variable name of y-axis values"},monospace:!0,uuid:f.rj}]}),(0,s.Z)(o,f.oV.HISTOGRAM,{noCode:[{label:function(){return"number column for chart"},settings:{maxValues:1},type:l.COLUMNS,uuid:f.eN},{autoRun:!0,label:function(){return"Number of buckets"},type:l.NUMBER,uuid:f.m7}],code:[{label:function(){return"variable name of values"},monospace:!0,uuid:f.a3}]}),(0,s.Z)(o,f.oV.LINE_CHART,{noCode:[{label:function(){return"group by columns"},settings:{maxValues:1},type:l.COLUMNS,uuid:f.eN},{label:function(){return"metrics"},type:l.METRICS,uuid:f.bE}],code:[{label:function(){return"variable name of x-axis values"},monospace:!0,uuid:f.a3},{label:function(){return"variable name of y-axis values"},monospace:!0,uuid:f.rj},{label:function(){return"labels of lines in chart (comma separated)"},uuid:f.e}]}),(0,s.Z)(o,f.oV.PIE_CHART,{noCode:[{label:function(){return"column for chart"},settings:{maxValues:1},type:l.COLUMNS,uuid:f.eN},{autoRun:!0,label:function(){return"Number of slices"},type:l.NUMBER,uuid:f.m7}],code:[{label:function(){return"variable name of values"},monospace:!0,uuid:f.a3}]}),(0,s.Z)(o,f.oV.TABLE,{noCode:[{label:function(){return"columns"},type:l.COLUMNS,uuid:f.eN},{label:function(){return"max number of rows"},type:l.NUMBER,uuid:f.PG}],code:[{label:function(){return"variable name of columns"},monospace:!0,uuid:f.a3},{label:function(){return"variable name of rows"},monospace:!0,uuid:f.rj}]}),(0,s.Z)(o,f.oV.TIME_SERIES_BAR_CHART,_),(0,s.Z)(o,f.oV.TIME_SERIES_LINE_CHART,_),o),m=(r={},(0,s.Z)(r,f.oV.BAR_CHART,{configuration:function(n){var e;return e={},(0,s.Z)(e,f.a3,"x"),(0,s.Z)(e,f.rj,"y"),(0,s.Z)(e,f.R8,f.JT.VERTICAL),e},content:function(n){return"columns = df_1.columns\nx = df_1.columns[:7]\ny = [[v] for v in [len(df_1[col].unique()) for col in x]]\n"}}),(0,s.Z)(r,f.oV.HISTOGRAM,{configuration:function(n){var e;return e={},(0,s.Z)(e,f.m7,10),(0,s.Z)(e,f.a3,"x"),e},content:function(n){return"columns = df_1.columns\ncol = list(filter(lambda x: df_1[x].dtype == float or df_1[x].dtype == int, columns))[0]\nx = df_1[col]\n"}}),(0,s.Z)(r,f.oV.LINE_CHART,{configuration:function(n){var e;return e={},(0,s.Z)(e,f.a3,"x"),(0,s.Z)(e,f.rj,"y"),e},content:function(n){return"columns = df_1.columns\ncols = list(filter(lambda x: df_1[x].dtype == float or df_1[x].dtype == int, columns))\nx = df_1[cols[0]]\ny = [df_1[cols[1]]]\n"}}),(0,s.Z)(r,f.oV.PIE_CHART,{configuration:function(n){var e;return e={},(0,s.Z)(e,f.m7,7),(0,s.Z)(e,f.a3,"x"),e},content:function(n){return"x = df_1[df_1.columns[0]]"}}),(0,s.Z)(r,f.oV.TABLE,{configuration:function(n){var e;return e={},(0,s.Z)(e,f.PG,10),(0,s.Z)(e,f.a3,"x"),(0,s.Z)(e,f.rj,"y"),e},content:function(n){return"x = df_1.columns\ny = df_1.to_numpy()"}}),(0,s.Z)(r,f.oV.TIME_SERIES_BAR_CHART,{configuration:function(n){return(0,s.Z)({},f.Yg,f.aE.ORIGINAL)}}),(0,s.Z)(r,f.oV.TIME_SERIES_LINE_CHART,{configuration:function(n){return(0,s.Z)({},f.Yg,f.aE.ORIGINAL)}}),r),E=(a={},(0,s.Z)(a,f.oV.BAR_CHART,(u={},(0,s.Z)(u,f.a3,(function(){return"must be a list of booleans, dates, integers, floats, or strings."})),(0,s.Z)(u,f.rj,(function(){return"must be a list of lists containing integers or floats."})),u)),(0,s.Z)(a,f.oV.HISTOGRAM,(0,s.Z)({},f.a3,(function(){return"must be a list of integers or floats."}))),(0,s.Z)(a,f.oV.LINE_CHART,(i={},(0,s.Z)(i,f.a3,(function(){return"must be a list of integers or floats."})),(0,s.Z)(i,f.rj,(function(){return"must be a list of lists containing integers or floats. Each list is a single line in the chart."})),i)),(0,s.Z)(a,f.oV.PIE_CHART,(0,s.Z)({},f.a3,(function(){return"must be a list of booleans, dates, integers, floats, or strings."}))),(0,s.Z)(a,f.oV.TABLE,(c={},(0,s.Z)(c,f.a3,(function(){return"must be a list of strings."})),(0,s.Z)(c,f.rj,(function(){return"must be a list of lists containing booleans, dates, integers, floats, or strings."})),c)),a),A=[{label:function(){return"% of missing values"},widgetTemplate:function(n){var e,t=n.block;return{name:"missing values for ".concat(null===t||void 0===t?void 0:t.uuid),configuration:(e={},(0,s.Z)(e,f.a3,"columns_with_mising_values"),(0,s.Z)(e,f.rj,"percentage_of_missing_values"),(0,s.Z)(e,f.R8,f.JT.HORIZONTAL),(0,s.Z)(e,f.$1,f.MP.DESCENDING),(0,s.Z)(e,"chart_type",f.oV.BAR_CHART),e),content:"number_of_rows = len(df_1.index)\ncolumns_with_mising_values = []\npercentage_of_missing_values = []\nfor col in df_1.columns:\n    missing = df_1[col].isna().sum()\n    if missing > 0:\n        columns_with_mising_values.append(col)\n        percentage_of_missing_values.append(100 * missing / number_of_rows)\n"}}},{label:function(){return"Unique values"},widgetTemplate:function(n){var e,t=n.block;return{name:"unique values for ".concat(null===t||void 0===t?void 0:t.uuid),configuration:(e={},(0,s.Z)(e,f.a3,"columns"),(0,s.Z)(e,f.rj,"number_of_unique_values"),(0,s.Z)(e,f.R8,f.JT.HORIZONTAL),(0,s.Z)(e,f.$1,f.MP.DESCENDING),(0,s.Z)(e,"chart_type",f.oV.BAR_CHART),e),content:"columns = df_1.columns\nnumber_of_unique_values = [df_1[col].nunique() for col in columns]\n"}}},{label:function(){return"Most frequent values"},widgetTemplate:function(n){var e,t=n.block;return{name:"most frequent values for ".concat(null===t||void 0===t?void 0:t.uuid),configuration:(e={},(0,s.Z)(e,f.JJ,3e3),(0,s.Z)(e,f.ED,"column_index"),(0,s.Z)(e,f.a3,"columns"),(0,s.Z)(e,f.rj,"rows"),(0,s.Z)(e,"chart_type",f.oV.TABLE),e),content:"columns = ['mode value', 'frequency', '% of values']\n\ncolumn_index = []\nrows = []\nfor col in df_1.columns:\n    value_counts = df_1[col].value_counts()\n    if len(value_counts.index) == 0:\n        continue\n    column_value = value_counts.index[0]\n    value = value_counts[column_value]\n    number_of_rows = df_1[col].count()\n    column_index.append(col)\n    rows.append([\n        column_value,\n        f'{round(100 * value / number_of_rows, 2)}%',\n        value,\n      ])\n"}}},{label:function(){return"Summary overview"},widgetTemplate:function(n){var e,t=n.block;return{name:"summary overview for ".concat(null===t||void 0===t?void 0:t.uuid),configuration:(e={},(0,s.Z)(e,f.JJ,3e3),(0,s.Z)(e,f.ED,"stats"),(0,s.Z)(e,f.a3,"headers"),(0,s.Z)(e,f.rj,"rows"),(0,s.Z)(e,"chart_type",f.oV.TABLE),e),content:"from mage_ai.data_cleaner.column_types.column_type_detector import infer_column_types\n\n\nheaders = ['value']\nstats = ['Columns', 'Rows']\nrows = [[len(df_1.columns)], [len(df_1.index)]]\n\ncol_counts = {}\nfor col, col_type in infer_column_types(df_1).items():\n    col_type_name = col_type.value\n    if not col_counts.get(col_type_name):\n        col_counts[col_type_name] = 0\n    col_counts[col_type_name] += 1\n\nfor col_type, count in sorted(col_counts.items()):\n    stats.append(f'# of {col_type}')\n    rows.append([count])\n"}}},{label:function(){return"Feature profiles"},widgetTemplate:function(n){var e,t=n.block;return{name:"feature profiles for ".concat(null===t||void 0===t?void 0:t.uuid),configuration:(e={},(0,s.Z)(e,f.JJ,3e3),(0,s.Z)(e,f.ED,"stats"),(0,s.Z)(e,f.a3,"columns"),(0,s.Z)(e,f.rj,"rows"),(0,s.Z)(e,"chart_type",f.oV.TABLE),e),content:"from mage_ai.data_cleaner.column_types.column_type_detector import infer_column_types\nimport statistics\n\n\ncolumns_and_types = infer_column_types(df_1).items()\ncolumns = [t[0] for t in columns_and_types]\nstats = ['Type', 'Missing values', 'Unique values', 'Min', 'Max', 'Mean', 'Median', 'Mode']\nrows = [[] for _ in stats]\n\nfor col, col_type in columns_and_types:\n    series = df_1[col]\n    min_value = None\n    max_value = None\n    mean = None\n    median = None\n\n    not_null = series[series.notnull()]\n\n    if col_type.value in ['number', 'number_with_decimals']:\n        count = len(not_null.index)\n        if count >= 1:\n            mean = round(not_null.sum() / count, 2)\n            median = sorted(not_null)[int(count / 2)]\n        min_value = round(series.min(), 2)\n        max_value = round(series.max(), 2)\n    else:\n        min_value = not_null.astype(str).min()\n        max_value = not_null.astype(str).max()\n\n    _, mode = sorted(\n      [(v, k) for k, v in not_null.value_counts().items()],\n      reverse=True,\n    )[0]\n\n    for idx, value in enumerate([\n        col_type.value,\n        len(series[series.isna()].index),\n        len(series.unique()),\n        min_value,\n        max_value,\n        mean,\n        median,\n        mode,\n    ]):\n      rows[idx].append(value)\n"}}}]},8454:function(n,e,t){"use strict";var o,r,u,i;t.d(e,{Q0:function(){return o},qs:function(){return r}}),function(n){n.ADD="add",n.AVERAGE="average",n.CLEAN_COLUMN_NAME="clean_column_name",n.COUNT="count",n.COUNT_DISTINCT="count_distinct",n.CUSTOM="custom",n.DIFF="diff",n.DROP_DUPLICATE="drop_duplicate",n.EXPAND_COLUMN="expand_column",n.EXPLODE="explode",n.FILTER="filter",n.FIRST="first",n.FIX_SYNTAX_ERRORS="fix_syntax_errors",n.GROUP="group",n.IMPUTE="impute",n.JOIN="join",n.LAST="last",n.LIMIT="limit",n.MAX="max",n.MEDIAN="median",n.MIN="min",n.MODE="mode",n.NORMALIZE="normalize",n.REFORMAT="reformat",n.REMOVE="remove",n.REMOVE_OUTLIERS="remove_outliers",n.SCALE="scale",n.SELECT="select",n.SHIFT_DOWN="shift_down",n.SHIFT_UP="shift_up",n.SORT="sort",n.STANDARDIZE="standardize",n.SUM="sum",n.UNION="union",n.UPDATE_TYPE="update_type",n.UPDATE_VALUE="update_value"}(o||(o={})),function(n){n.COLUMN="column",n.ROW="row"}(r||(r={})),function(n){n.NOT_APPLIED="not_applied",n.COMPLETED="completed"}(u||(u={})),function(n){n.FEATURE="feature"}(i||(i={}))},44425:function(n,e,t){"use strict";t.d(e,{$W:function(){return T},DA:function(){return E},HX:function(){return N},J8:function(){return O},L8:function(){return c},LE:function(){return _},Lk:function(){return v},Lq:function(){return d},M5:function(){return m},Q3:function(){return R},Qj:function(){return b},Ut:function(){return y},V4:function(){return S},VZ:function(){return p},dO:function(){return f},f2:function(){return D},iZ:function(){return C},t6:function(){return a},tf:function(){return s}});var o,r,u,i,c,a,l=t(82394);!function(n){n.CONDITION="condition",n.DBT_SNAPSHOT="snapshot",n.DYNAMIC="dynamic",n.DYNAMIC_CHILD="dynamic_child",n.REDUCE_OUTPUT="reduce_output",n.REPLICA="replica"}(c||(c={})),function(n){n.MARKDOWN="markdown",n.PYTHON="python",n.R="r",n.SQL="sql",n.YAML="yaml"}(a||(a={}));var s,f=(o={},(0,l.Z)(o,a.MARKDOWN,"MD"),(0,l.Z)(o,a.PYTHON,"PY"),(0,l.Z)(o,a.R,"R"),(0,l.Z)(o,a.SQL,"SQL"),(0,l.Z)(o,a.YAML,"YAML"),o),_=(r={},(0,l.Z)(r,a.MARKDOWN,"Markdown"),(0,l.Z)(r,a.PYTHON,"Python"),(0,l.Z)(r,a.R,"R"),(0,l.Z)(r,a.SQL,"SQL"),(0,l.Z)(r,a.YAML,"YAML"),r);!function(n){n.CALLBACK="callback",n.CHART="chart",n.CONDITIONAL="conditional",n.CUSTOM="custom",n.DATA_EXPORTER="data_exporter",n.DATA_LOADER="data_loader",n.DBT="dbt",n.EXTENSION="extension",n.GLOBAL_DATA_PRODUCT="global_data_product",n.SCRATCHPAD="scratchpad",n.SENSOR="sensor",n.MARKDOWN="markdown",n.TRANSFORMER="transformer"}(s||(s={}));var d,m=[s.CALLBACK,s.CONDITIONAL,s.EXTENSION];!function(n){n.BLUE="blue",n.GREY="grey",n.PINK="pink",n.PURPLE="purple",n.TEAL="teal",n.YELLOW="yellow"}(d||(d={}));var E,A,T=[s.CHART,s.CUSTOM,s.DATA_EXPORTER,s.DATA_LOADER,s.SCRATCHPAD,s.SENSOR,s.MARKDOWN,s.TRANSFORMER],R=[s.CUSTOM,s.DATA_EXPORTER,s.DATA_LOADER,s.SCRATCHPAD,s.SENSOR,s.MARKDOWN,s.TRANSFORMER],p=[s.DATA_EXPORTER,s.DATA_LOADER],O=[s.DATA_EXPORTER,s.DATA_LOADER,s.TRANSFORMER],N=[s.DATA_EXPORTER,s.DATA_LOADER,s.DBT,s.TRANSFORMER],b=[s.CHART,s.SCRATCHPAD,s.SENSOR,s.MARKDOWN],C=[s.CALLBACK,s.CHART,s.EXTENSION,s.SCRATCHPAD,s.MARKDOWN],v=[s.CUSTOM,s.DATA_EXPORTER,s.DATA_LOADER,s.SENSOR,s.TRANSFORMER];!function(n){n.EXECUTED="executed",n.FAILED="failed",n.NOT_EXECUTED="not_executed",n.UPDATED="updated"}(E||(E={})),function(n){n.BLOCK_FILE="block_file",n.CUSTOM_BLOCK_TEMPLATE="custom_block_template",n.MAGE_TEMPLATE="mage_template"}(A||(A={}));var D=[s.CUSTOM,s.DATA_EXPORTER,s.DATA_LOADER,s.TRANSFORMER],S=(u={},(0,l.Z)(u,s.CALLBACK,"Callback"),(0,l.Z)(u,s.CHART,"Chart"),(0,l.Z)(u,s.CONDITIONAL,"Conditional"),(0,l.Z)(u,s.CUSTOM,"Custom"),(0,l.Z)(u,s.DATA_EXPORTER,"Data exporter"),(0,l.Z)(u,s.DATA_LOADER,"Data loader"),(0,l.Z)(u,s.DBT,"DBT"),(0,l.Z)(u,s.EXTENSION,"Extension"),(0,l.Z)(u,s.GLOBAL_DATA_PRODUCT,"Global data product"),(0,l.Z)(u,s.MARKDOWN,"Markdown"),(0,l.Z)(u,s.SCRATCHPAD,"Scratchpad"),(0,l.Z)(u,s.SENSOR,"Sensor"),(0,l.Z)(u,s.TRANSFORMER,"Transformer"),u),y=[s.DATA_LOADER,s.TRANSFORMER,s.DATA_EXPORTER,s.SENSOR];i={},(0,l.Z)(i,s.DATA_EXPORTER,"DE"),(0,l.Z)(i,s.DATA_LOADER,"DL"),(0,l.Z)(i,s.SCRATCHPAD,"SP"),(0,l.Z)(i,s.SENSOR,"SR"),(0,l.Z)(i,s.MARKDOWN,"MD"),(0,l.Z)(i,s.TRANSFORMER,"TF")},35058:function(n,e,t){"use strict";t.d(e,{$1:function(){return A},BD:function(){return O},CK:function(){return h},ED:function(){return a},JJ:function(){return c},JT:function(){return P},MP:function(){return w},Mi:function(){return Z},Mv:function(){return b},PG:function(){return s},Pi:function(){return M},R8:function(){return u},Sv:function(){return R},Tv:function(){return g},Yf:function(){return y},Yg:function(){return _},a3:function(){return m},aE:function(){return H},aZ:function(){return I},bE:function(){return f},bk:function(){return S},bn:function(){return U},c0:function(){return j},cH:function(){return T},e:function(){return l},eN:function(){return i},eW:function(){return C},m$:function(){return N},m7:function(){return r},mW:function(){return D},nq:function(){return v},oV:function(){return o},os:function(){return x},pA:function(){return L},rj:function(){return E},sc:function(){return p},v8:function(){return d}});var o,r="buckets",u="chart_style",i="group_by",c="height",a="index",l="legend_labels",s="limit",f="metrics",_="time_interval",d="width_percentage",m="x",E="y",A="y_sort_order",T="data_provider",R="data_provider_database",p="data_provider_profile",O="data_provider_schema",N="data_provider_table",b="dbt_profile_target",C="dbt_project_name",v="export_write_policy",D="limit",S="unique_upstream_table_name",y="upstream_block_configuration",I="table_name",Z="use_raw_sql",M="dbt",L="command",g=[m,E];!function(n){n.BAR_CHART="bar chart",n.CUSTOM="custom",n.HISTOGRAM="histogram",n.LINE_CHART="line chart",n.PIE_CHART="pie chart",n.TABLE="table",n.TIME_SERIES_BAR_CHART="time series bar chart",n.TIME_SERIES_LINE_CHART="time series line chart"}(o||(o={}));var P,x,h=[o.BAR_CHART,o.HISTOGRAM,o.LINE_CHART,o.PIE_CHART,o.TABLE,o.TIME_SERIES_BAR_CHART,o.TIME_SERIES_LINE_CHART];!function(n){n.HORIZONTAL="horizontal",n.VERTICAL="vertical"}(P||(P={})),function(n){n.AVERAGE="average",n.COUNT="count",n.COUNT_DISTINCT="count_distinct",n.MAX="max",n.MEDIAN="median",n.MIN="min",n.MODE="mode",n.SUM="sum"}(x||(x={}));var w,H,U=[x.AVERAGE,x.COUNT,x.COUNT_DISTINCT,x.MAX,x.MEDIAN,x.MIN,x.MODE,x.SUM];function j(n){return"".concat(n.aggregation,"(").concat(n.column,")")}!function(n){n.ASCENDING="ascending",n.DESCENDING="descending"}(w||(w={})),function(n){n.DAY="day",n.HOUR="hour",n.MINUTE="minute",n.MONTH="month",n.ORIGINAL="original",n.SECOND="second",n.WEEK="week",n.YEAR="year"}(H||(H={}))},46732:function(n,e,t){"use strict";var o=t(82394),r=t(26304),u=(t(82684),t(50724)),i=t(70374),c=t(28598),a=["children","items","open","onClickCallback","onClickOutside","parentRef","uuid","zIndex"];function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}e.Z=function(n){var e=n.children,t=n.items,o=n.open,l=n.onClickCallback,f=n.onClickOutside,_=n.parentRef,d=n.uuid,m=n.zIndex,E=(0,r.Z)(n,a),A=(0,c.jsxs)("div",{style:{position:"relative",zIndex:(f?3:2)+(m||0)},children:[(0,c.jsx)("div",{ref:_,children:e}),(0,c.jsx)(i.Z,s(s({},E),{},{items:t,onClickCallback:l,open:o,parentRef:_,uuid:d}))]});return f?(0,c.jsx)(u.Z,{onClickOutside:f,open:!0,children:A}):A}},6943:function(n,e,t){"use strict";t.r(e);var o=t(77837),r=t(38860),u=t.n(r),i=t(39440),c=t(93808),a=t(28598);function l(){return(0,a.jsx)(i.Z,{uuid:"dashboard"})}l.getInitialProps=(0,o.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",{});case 1:case"end":return n.stop()}}),n)}))),e.default=(0,c.Z)(l)},91162:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/block-layout",function(){return t(6943)}])},80022:function(n,e,t){"use strict";function o(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}t.d(e,{Z:function(){return o}})},15544:function(n,e,t){"use strict";function o(n){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},o(n)}t.d(e,{Z:function(){return o}})},99177:function(n,e,t){"use strict";function o(n,e){return o=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},o(n,e)}function r(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&o(n,e)}t.d(e,{Z:function(){return r}})},93189:function(n,e,t){"use strict";t.d(e,{Z:function(){return u}});var o=t(12539),r=t(80022);function u(n,e){if(e&&("object"===o(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,r.Z)(n)}}},function(n){n.O(0,[3662,5716,341,8789,1751,5896,2714,2631,4783,8013,600,8264,6833,5810,3859,976,9440,9774,2888,179],(function(){return e=91162,n(n.s=e);var e}));var e=n.O();_N_E=e}]);