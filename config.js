System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "app/index.js",
      "npm:react@0.14.0",
      "npm:react-dom@0.14.0",
      "npm:react@0.14.0/react",
      "npm:react-dom@0.14.0/index",
      "npm:react@0.14.0/lib/ReactDOM",
      "npm:react@0.14.0/lib/React",
      "github:jspm/nodelibs-process@0.1.2",
      "npm:react@0.14.0/lib/ReactDOMTextComponent",
      "npm:react@0.14.0/lib/ReactCurrentOwner",
      "npm:react@0.14.0/lib/ReactDefaultInjection",
      "npm:react@0.14.0/lib/ReactInstanceHandles",
      "npm:react@0.14.0/lib/ReactMount",
      "npm:react@0.14.0/lib/ReactPerf",
      "npm:react@0.14.0/lib/ReactReconciler",
      "npm:react@0.14.0/lib/ReactUpdates",
      "npm:react@0.14.0/lib/ReactVersion",
      "npm:react@0.14.0/lib/findDOMNode",
      "npm:react@0.14.0/lib/renderSubtreeIntoContainer",
      "npm:fbjs@0.3.1/lib/warning",
      "npm:fbjs@0.3.1/lib/ExecutionEnvironment",
      "npm:react@0.14.0/lib/ReactIsomorphic",
      "npm:react@0.14.0/lib/ReactDOMServer",
      "npm:react@0.14.0/lib/Object.assign",
      "npm:react@0.14.0/lib/deprecated",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:react@0.14.0/lib/DOMChildrenOperations",
      "npm:react@0.14.0/lib/DOMPropertyOperations",
      "npm:react@0.14.0/lib/ReactComponentBrowserEnvironment",
      "npm:react@0.14.0/lib/escapeTextContentForBrowser",
      "npm:react@0.14.0/lib/setTextContent",
      "npm:react@0.14.0/lib/validateDOMNesting",
      "npm:react@0.14.0/lib/BeforeInputEventPlugin",
      "npm:react@0.14.0/lib/ChangeEventPlugin",
      "npm:react@0.14.0/lib/ClientReactRootIndex",
      "npm:react@0.14.0/lib/DefaultEventPluginOrder",
      "npm:react@0.14.0/lib/EnterLeaveEventPlugin",
      "npm:react@0.14.0/lib/HTMLDOMPropertyConfig",
      "npm:react@0.14.0/lib/ReactBrowserComponentMixin",
      "npm:react@0.14.0/lib/ReactDefaultBatchingStrategy",
      "npm:react@0.14.0/lib/ReactDOMComponent",
      "npm:react@0.14.0/lib/ReactEventListener",
      "npm:react@0.14.0/lib/ReactInjection",
      "npm:react@0.14.0/lib/ReactReconcileTransaction",
      "npm:react@0.14.0/lib/SelectEventPlugin",
      "npm:react@0.14.0/lib/ServerReactRootIndex",
      "npm:react@0.14.0/lib/SimpleEventPlugin",
      "npm:react@0.14.0/lib/SVGDOMPropertyConfig",
      "npm:react@0.14.0/lib/ReactDefaultPerf",
      "npm:react@0.14.0/lib/ReactRootIndex",
      "npm:fbjs@0.3.1/lib/invariant",
      "npm:react@0.14.0/lib/DOMProperty",
      "npm:react@0.14.0/lib/ReactBrowserEventEmitter",
      "npm:react@0.14.0/lib/ReactDOMFeatureFlags",
      "npm:react@0.14.0/lib/ReactElement",
      "npm:react@0.14.0/lib/ReactEmptyComponentRegistry",
      "npm:react@0.14.0/lib/ReactInstanceMap",
      "npm:react@0.14.0/lib/ReactMarkupChecksum",
      "npm:react@0.14.0/lib/ReactUpdateQueue",
      "npm:fbjs@0.3.1/lib/emptyObject",
      "npm:fbjs@0.3.1/lib/containsNode",
      "npm:react@0.14.0/lib/instantiateReactComponent",
      "npm:react@0.14.0/lib/setInnerHTML",
      "npm:react@0.14.0/lib/shouldUpdateReactComponent",
      "npm:react@0.14.0/lib/ReactRef",
      "npm:react@0.14.0/lib/CallbackQueue",
      "npm:react@0.14.0/lib/PooledClass",
      "npm:react@0.14.0/lib/Transaction",
      "npm:fbjs@0.3.1/lib/emptyFunction",
      "npm:react@0.14.0/lib/ReactChildren",
      "npm:react@0.14.0/lib/ReactComponent",
      "npm:react@0.14.0/lib/ReactClass",
      "npm:react@0.14.0/lib/ReactDOMFactories",
      "npm:react@0.14.0/lib/ReactElementValidator",
      "npm:react@0.14.0/lib/ReactPropTypes",
      "npm:react@0.14.0/lib/onlyChild",
      "npm:react@0.14.0/lib/ReactServerRendering",
      "npm:process@0.11.2",
      "npm:react@0.14.0/lib/Danger",
      "npm:react@0.14.0/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.14.0/lib/quoteAttributeValueForBrowser",
      "npm:react@0.14.0/lib/ReactDOMIDOperations",
      "npm:react@0.14.0/lib/EventConstants",
      "npm:react@0.14.0/lib/EventPropagators",
      "npm:react@0.14.0/lib/FallbackCompositionState",
      "npm:react@0.14.0/lib/SyntheticCompositionEvent",
      "npm:react@0.14.0/lib/SyntheticInputEvent",
      "npm:fbjs@0.3.1/lib/keyOf",
      "npm:react@0.14.0/lib/EventPluginHub",
      "npm:react@0.14.0/lib/SyntheticEvent",
      "npm:react@0.14.0/lib/getEventTarget",
      "npm:react@0.14.0/lib/isEventSupported",
      "npm:react@0.14.0/lib/isTextInputElement",
      "npm:react@0.14.0/lib/SyntheticMouseEvent",
      "npm:react@0.14.0/lib/AutoFocusUtils",
      "npm:react@0.14.0/lib/CSSPropertyOperations",
      "npm:react@0.14.0/lib/ReactDOMButton",
      "npm:react@0.14.0/lib/ReactDOMInput",
      "npm:react@0.14.0/lib/ReactDOMOption",
      "npm:react@0.14.0/lib/ReactDOMSelect",
      "npm:react@0.14.0/lib/ReactDOMTextarea",
      "npm:react@0.14.0/lib/ReactMultiChild",
      "npm:fbjs@0.3.1/lib/shallowEqual",
      "npm:fbjs@0.3.1/lib/EventListener",
      "npm:fbjs@0.3.1/lib/getUnboundedScrollPosition",
      "npm:react@0.14.0/lib/ReactComponentEnvironment",
      "npm:react@0.14.0/lib/ReactEmptyComponent",
      "npm:react@0.14.0/lib/ReactNativeComponent",
      "npm:react@0.14.0/lib/ReactInputSelection",
      "npm:fbjs@0.3.1/lib/getActiveElement",
      "npm:react@0.14.0/lib/SyntheticClipboardEvent",
      "npm:react@0.14.0/lib/SyntheticFocusEvent",
      "npm:react@0.14.0/lib/SyntheticKeyboardEvent",
      "npm:react@0.14.0/lib/SyntheticDragEvent",
      "npm:react@0.14.0/lib/SyntheticTouchEvent",
      "npm:react@0.14.0/lib/SyntheticUIEvent",
      "npm:react@0.14.0/lib/SyntheticWheelEvent",
      "npm:react@0.14.0/lib/getEventCharCode",
      "npm:react@0.14.0/lib/ReactDefaultPerfAnalysis",
      "npm:fbjs@0.3.1/lib/performanceNow",
      "npm:react@0.14.0/lib/EventPluginRegistry",
      "npm:react@0.14.0/lib/ReactEventEmitterMixin",
      "npm:react@0.14.0/lib/ViewportMetrics",
      "npm:react@0.14.0/lib/adler32",
      "npm:fbjs@0.3.1/lib/isTextNode",
      "npm:react@0.14.0/lib/ReactCompositeComponent",
      "npm:react@0.14.0/lib/ReactOwner",
      "npm:react@0.14.0/lib/traverseAllChildren",
      "npm:react@0.14.0/lib/ReactNoopUpdateQueue",
      "npm:react@0.14.0/lib/ReactPropTypeLocations",
      "npm:react@0.14.0/lib/ReactPropTypeLocationNames",
      "npm:fbjs@0.3.1/lib/keyMirror",
      "npm:fbjs@0.3.1/lib/mapObject",
      "npm:react@0.14.0/lib/getIteratorFn",
      "npm:react@0.14.0/lib/ReactServerBatchingStrategy",
      "npm:react@0.14.0/lib/ReactServerRenderingTransaction",
      "npm:process@0.11.2/browser",
      "npm:fbjs@0.3.1/lib/createNodesFromMarkup",
      "npm:fbjs@0.3.1/lib/getMarkupWrap",
      "npm:react@0.14.0/lib/accumulateInto",
      "npm:react@0.14.0/lib/forEachAccumulated",
      "npm:react@0.14.0/lib/getTextContentAccessor",
      "npm:react@0.14.0/lib/EventPluginUtils",
      "npm:react@0.14.0/lib/ReactErrorUtils",
      "npm:react@0.14.0/lib/getEventModifierState",
      "npm:fbjs@0.3.1/lib/focusNode",
      "npm:react@0.14.0/lib/CSSProperty",
      "npm:fbjs@0.3.1/lib/camelizeStyleName",
      "npm:react@0.14.0/lib/dangerousStyleValue",
      "npm:fbjs@0.3.1/lib/hyphenateStyleName",
      "npm:fbjs@0.3.1/lib/memoizeStringOnly",
      "npm:react@0.14.0/lib/LinkedValueUtils",
      "npm:react@0.14.0/lib/ReactChildReconciler",
      "npm:react@0.14.0/lib/flattenChildren",
      "npm:react@0.14.0/lib/ReactDOMSelection",
      "npm:react@0.14.0/lib/getEventKey",
      "npm:fbjs@0.3.1/lib/performance",
      "npm:fbjs@0.3.1/lib/isNode",
      "npm:fbjs@0.3.1/lib/camelize",
      "npm:fbjs@0.3.1/lib/createArrayFromMixed",
      "npm:react@0.14.0/lib/getNodeForCharacterOffset",
      "npm:fbjs@0.3.1/lib/hyphenate",
      "npm:fbjs@0.3.1/lib/toArray"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.25",
    "babel-runtime": "npm:babel-runtime@5.8.25",
    "core-js": "npm:core-js@1.2.1",
    "history": "npm:history@1.12.4",
    "react": "npm:react@0.14.0",
    "react-dom": "npm:react-dom@0.14.0",
    "react-router": "npm:react-router@1.0.0-rc3",
    "rgx": "npm:rgx@0.2.1",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.1"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.4"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asap@2.0.3": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.25": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.5.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:core-js@1.2.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:domain-browser@1.1.4": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through": "npm:through@2.3.8"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fbjs@0.3.1": {
      "core-js": "npm:core-js@1.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.0.4",
      "ua-parser-js": "npm:ua-parser-js@0.7.9",
      "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
    },
    "npm:history@1.12.3": {
      "deep-equal": "npm:deep-equal@1.0.1",
      "invariant": "npm:invariant@2.1.1",
      "qs": "npm:qs@4.0.0",
      "warning": "npm:warning@2.1.0"
    },
    "npm:history@1.12.4": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "deep-equal": "npm:deep-equal@1.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "invariant": "npm:invariant@2.1.1",
      "qs": "npm:qs@4.0.0",
      "warning": "npm:warning@2.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.1.1": {
      "loose-envify": "npm:loose-envify@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:js-tokens@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:loose-envify@1.0.0": {
      "js-tokens": "npm:js-tokens@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:promise@7.0.4": {
      "asap": "npm:asap@2.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:react-dom@0.14.0": {
      "react": "npm:react@0.14.0"
    },
    "npm:react-router@1.0.0-rc3": {
      "history": "npm:history@1.12.3",
      "invariant": "npm:invariant@2.1.1",
      "warning": "npm:warning@2.1.0"
    },
    "npm:react@0.14.0": {
      "envify": "npm:envify@3.4.0",
      "fbjs": "npm:fbjs@0.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:rgx@0.2.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:ua-parser-js@0.7.9": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:warning@2.1.0": {
      "loose-envify": "npm:loose-envify@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
