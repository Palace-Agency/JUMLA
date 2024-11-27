import {
  require_react
} from "./chunk-65KY755N.js";
import {
  __commonJS,
  __toESM
} from "./chunk-V4OQ3NZ2.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf3(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf3(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf3(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf3(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf3(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf3(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf3(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf3(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf3(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf3(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf3(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf3(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf3(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf3;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames5() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames5.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames5.default = classNames5;
        module.exports = classNames5;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames5;
        });
      } else {
        window.classNames = classNames5;
      }
    })();
  }
});

// node_modules/libphonenumber-js/metadata.min.json.js
var metadata_min_json_default = { "version": 4, "country_calling_codes": { "1": ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], "7": ["RU", "KZ"], "20": ["EG"], "27": ["ZA"], "30": ["GR"], "31": ["NL"], "32": ["BE"], "33": ["FR"], "34": ["ES"], "36": ["HU"], "39": ["IT", "VA"], "40": ["RO"], "41": ["CH"], "43": ["AT"], "44": ["GB", "GG", "IM", "JE"], "45": ["DK"], "46": ["SE"], "47": ["NO", "SJ"], "48": ["PL"], "49": ["DE"], "51": ["PE"], "52": ["MX"], "53": ["CU"], "54": ["AR"], "55": ["BR"], "56": ["CL"], "57": ["CO"], "58": ["VE"], "60": ["MY"], "61": ["AU", "CC", "CX"], "62": ["ID"], "63": ["PH"], "64": ["NZ"], "65": ["SG"], "66": ["TH"], "81": ["JP"], "82": ["KR"], "84": ["VN"], "86": ["CN"], "90": ["TR"], "91": ["IN"], "92": ["PK"], "93": ["AF"], "94": ["LK"], "95": ["MM"], "98": ["IR"], "211": ["SS"], "212": ["MA", "EH"], "213": ["DZ"], "216": ["TN"], "218": ["LY"], "220": ["GM"], "221": ["SN"], "222": ["MR"], "223": ["ML"], "224": ["GN"], "225": ["CI"], "226": ["BF"], "227": ["NE"], "228": ["TG"], "229": ["BJ"], "230": ["MU"], "231": ["LR"], "232": ["SL"], "233": ["GH"], "234": ["NG"], "235": ["TD"], "236": ["CF"], "237": ["CM"], "238": ["CV"], "239": ["ST"], "240": ["GQ"], "241": ["GA"], "242": ["CG"], "243": ["CD"], "244": ["AO"], "245": ["GW"], "246": ["IO"], "247": ["AC"], "248": ["SC"], "249": ["SD"], "250": ["RW"], "251": ["ET"], "252": ["SO"], "253": ["DJ"], "254": ["KE"], "255": ["TZ"], "256": ["UG"], "257": ["BI"], "258": ["MZ"], "260": ["ZM"], "261": ["MG"], "262": ["RE", "YT"], "263": ["ZW"], "264": ["NA"], "265": ["MW"], "266": ["LS"], "267": ["BW"], "268": ["SZ"], "269": ["KM"], "290": ["SH", "TA"], "291": ["ER"], "297": ["AW"], "298": ["FO"], "299": ["GL"], "350": ["GI"], "351": ["PT"], "352": ["LU"], "353": ["IE"], "354": ["IS"], "355": ["AL"], "356": ["MT"], "357": ["CY"], "358": ["FI", "AX"], "359": ["BG"], "370": ["LT"], "371": ["LV"], "372": ["EE"], "373": ["MD"], "374": ["AM"], "375": ["BY"], "376": ["AD"], "377": ["MC"], "378": ["SM"], "380": ["UA"], "381": ["RS"], "382": ["ME"], "383": ["XK"], "385": ["HR"], "386": ["SI"], "387": ["BA"], "389": ["MK"], "420": ["CZ"], "421": ["SK"], "423": ["LI"], "500": ["FK"], "501": ["BZ"], "502": ["GT"], "503": ["SV"], "504": ["HN"], "505": ["NI"], "506": ["CR"], "507": ["PA"], "508": ["PM"], "509": ["HT"], "590": ["GP", "BL", "MF"], "591": ["BO"], "592": ["GY"], "593": ["EC"], "594": ["GF"], "595": ["PY"], "596": ["MQ"], "597": ["SR"], "598": ["UY"], "599": ["CW", "BQ"], "670": ["TL"], "672": ["NF"], "673": ["BN"], "674": ["NR"], "675": ["PG"], "676": ["TO"], "677": ["SB"], "678": ["VU"], "679": ["FJ"], "680": ["PW"], "681": ["WF"], "682": ["CK"], "683": ["NU"], "685": ["WS"], "686": ["KI"], "687": ["NC"], "688": ["TV"], "689": ["PF"], "690": ["TK"], "691": ["FM"], "692": ["MH"], "850": ["KP"], "852": ["HK"], "853": ["MO"], "855": ["KH"], "856": ["LA"], "880": ["BD"], "886": ["TW"], "960": ["MV"], "961": ["LB"], "962": ["JO"], "963": ["SY"], "964": ["IQ"], "965": ["KW"], "966": ["SA"], "967": ["YE"], "968": ["OM"], "970": ["PS"], "971": ["AE"], "972": ["IL"], "973": ["BH"], "974": ["QA"], "975": ["BT"], "976": ["MN"], "977": ["NP"], "992": ["TJ"], "993": ["TM"], "994": ["AZ"], "995": ["GE"], "996": ["KG"], "998": ["UZ"] }, "countries": { "AC": ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]], "AD": ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]], "AE": ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"], "AF": ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"], "AG": ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"], "AI": ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"], "AL": ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"], "AM": ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"], "AO": ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]], "AR": ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"], "AS": ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"], "AT": ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"], "AU": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|7(?:[013-57-9]\\d|2[0-8]))\\d|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90)))\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|3\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], "AW": ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]], "AX": ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"], "AZ": ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"], "BA": ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"], "BB": ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"], "BD": ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|2[23]"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"], "BE": ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"], "BF": ["226", "00", "[025-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]]], "BG": ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"], "BH": ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]], "BI": ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]], "BJ": ["229", "00", "[24-689]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]]]], "BL": ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}"]]], "BM": ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"], "BN": ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]], "BO": ["591", "00(?:1\\d)?", "8001\\d{5}|(?:[2-467]\\d|50)\\d{6}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[235]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"], "BQ": ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"], "BR": ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], "BS": ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"], "BT": ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]]], "BW": ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]], "BY": ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"], "BZ": ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]], "CA": ["1", "011", "(?:[2-8]\\d|90)\\d{8}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|90[25])[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]], "CC": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], "CD": ["243", "00", "(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["5"], "0$1"]], "0"], "CF": ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]], "CG": ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]], "CH": ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"], "CI": ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]], "CK": ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]], "CL": ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]], "CM": ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]], "CN": ["86", "00|1(?:[12]\\d|79)\\d\\d00", "(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]", "(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"], "CO": ["57", "00(?:4(?:[14]4|56)|[579])", "(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["46"]], ["(\\d{3})(\\d{7})", "$1 $2", ["6|90"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"], "CR": ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"], "CU": ["53", "119", "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"], "CV": ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]], "CW": ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"], "CX": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], "CY": ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]], "CZ": ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]], "DE": ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|31)"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"], "DJ": ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]], "DK": ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]], "DM": ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"], "DO": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"], "DZ": ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"], "EC": ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"], "EE": ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], "EG": ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"], "EH": ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"], "ER": ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"], "ES": ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]], "ET": ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], "0"], "FI": ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{5})", "$1", ["20[2-59]"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"], ["(\\d)(\\d{4,9})", "$1 $2", ["(?:1[49]|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"], "FJ": ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "FK": ["500", "00", "[2-7]\\d{4}", [5]], "FM": ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]], "FO": ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"], "FR": ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"], "GA": ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"], "GB": ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-35])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"], "GD": ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"], "GE": ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"], "GF": ["594", "00", "[56]94\\d{6}|(?:80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"], "GG": ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]], "GH": ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"], "GI": ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], "GL": ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]], "GM": ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], "GN": ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], "GP": ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}"]]], "GQ": ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], "GR": ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]], "GT": ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], "GU": ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"], "GW": ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]], "GY": ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], "HK": ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "HN": ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]], "HR": ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9], [["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6|7[245]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"], "HT": ["509", "00", "(?:[2-489]\\d|55)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]], "HU": ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"], "ID": ["62", "00[89]", "00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"], "IE": ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "IL": ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"], "IM": ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0", "1624$1", 0, "74576|(?:16|7[56])24"], "IN": ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"], "IO": ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]], "IQ": ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], "IR": ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"], "IS": ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "IT": ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, [["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}", [6, 7, 8, 9, 10, 11]], ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], ["3[2-8]\\d{9,10}", [11, 12]], 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], "JE": ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]], "JM": ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"], "JO": ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], "JP": ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]], "0", 0, "(000[259]\\d{6})$|(?:(?:003768)0?)|0", "$1"], "KE": ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], "KG": ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "KH": ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], "KI": ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"], "KM": ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]], "KN": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"], "KP": ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"], "KR": ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[36]0|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"], "KW": ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]], "KY": ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"], "KZ": ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"], "LA": ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[0135-9]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"], "LB": ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"], "LC": ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"], "LI": ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"], "LK": ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"], "LR": ["231", "00", "(?:[245]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"]], "0"], "LS": ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]], "LT": ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(0-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(0-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(0-$1)", 1]], "0", 0, "[08]"], "LU": ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"], "LV": ["371", "00", "(?:[268]\\d|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]]], "LY": ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"], "MA": ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-46-9]|3[3-9]|9)|8(?:0[89]|92)"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-4]|5[01]|8[0-3]))\\d{6}"], ["80[0-7]\\d{6}"], ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]], "MC": ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"], "MD": ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"], "ME": ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"], "MF": ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}"]]], "MG": ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"], "MH": ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"], "MK": ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"], "ML": ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]], "MM": ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|452|678|86", "[12]|452|6788|86"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"], "MN": ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"], "MO": ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]], "MP": ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"], "MQ": ["596", "00", "596\\d{6}|(?:69|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]|8(?:0[6-9]|[36])"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "MR": ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], "MS": ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"], "MT": ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]], "MU": ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"], "MV": ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "MW": ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"], "MX": ["52", "0[09]", "[2-9]\\d{9}", [10], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "MY": ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"], "MZ": ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], "NA": ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], "NC": ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]], "NE": ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[0467]"]]]], "NF": ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"], "NG": ["234", "009", "38\\d{6}|[78]\\d{9,13}|(?:20|9\\d)\\d{8}", [8, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["3"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"], "NI": ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]], "NL": ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"], "NO": ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"], "NP": ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"], "NR": ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]]], "NU": ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]], "NZ": ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"], "OM": ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]], "PA": ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]], "PE": ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "], "PF": ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], "PG": ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "PH": ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"], "PK": ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"], "PL": ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]], "PM": ["508", "00", "[45]\\d{5}|(?:708|8\\d\\d)\\d{6}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "PR": ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"], "PS": ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], "PT": ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]], "PW": ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], "PY": ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"], "QA": ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[16]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]], "RE": ["262", "00", "(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"], ["69(?:2\\d\\d|3(?:[06][0-6]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-5]|76(?:2[278]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]], "RO": ["40", "00", "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "], "RS": ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"], "RU": ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"], "RW": ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"], "SA": ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"], "SB": ["677", "0[01]", "[6-9]\\d{6}|[1-6]\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]]], "SC": ["248", "010|0[0-2]", "(?:[2489]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "SD": ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], "SE": ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"], "SG": ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], "SH": ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"], "SI": ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"], "SJ": ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"], "SK": ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"], "SL": ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"], "SM": ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"], "SN": ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]], "SO": ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|77|9[2-9]"]]], "0"], "SR": ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]]], "SS": ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], "ST": ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]], "SV": ["503", "00", "[267]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], "SX": ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"], "SY": ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]], "0"], "SZ": ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]], "TA": ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"], "TC": ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"], "TD": ["235", "00|16", "(?:22|[689]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "TG": ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], "TH": ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], "TJ": ["992", "810", "[0-57-9]\\d{8}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3(?:[1245]|3[12])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"], "TK": ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]], "TL": ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]], "TM": ["993", "810", "(?:[1-6]\\d|71)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[67]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], "TN": ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]], "TO": ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]], "TR": ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"], "TT": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"], "TV": ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], "TW": ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"], "TZ": ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"], "UA": ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"], "UG": ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"], "US": ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["(?:3052(?:0[0-8]|[1-9]\\d)|5056(?:[0-35-9]\\d|4[468])|7302[0-4]\\d)\\d{4}|(?:305[3-9]|472[24]|505[2-57-9]|7306|983[2-47-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-47-9]|1[02-9]|2[013569]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, 0, ["305209\\d{4}"]]], "UY": ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [6, 7, 8, 9, 10, 11, 12, 13], [["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "], "UZ": ["998", "00", "(?:20|33|[5-79]\\d|88)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"]]]], "VA": ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11, 12], 0, 0, 0, 0, 0, 0, "06698"], "VC": ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"], "VE": ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"], "VG": ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"], "VI": ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"], "VN": ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"], "VU": ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]], "WF": ["681", "00", "(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[47-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], "WS": ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], "XK": ["383", "00", "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"], ["(\\d{2})(\\d{7,10})", "$1 $2", ["3"], "0$1"]], "0"], "YE": ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"], "YT": ["262", "00", "(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}"], ["639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]], "ZA": ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], "ZM": ["260", "00", "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], "0"], "ZW": ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"] }, "nonGeographic": { "800": ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]], "808": ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]], "870": ["870", 0, "7\\d{11}|[35-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]], "878": ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]], "881": ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]], "882": ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, ["348[57]\\d{7}", [11]], 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]], "883": ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]], "888": ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]], "979": ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]] } };

// node_modules/react-phone-number-input/modules/PhoneInputWithCountry.js
var import_react11 = __toESM(require_react(), 1);
var import_prop_types9 = __toESM(require_prop_types(), 1);
var import_classnames4 = __toESM(require_classnames(), 1);

// node_modules/react-phone-number-input/modules/InputSmart.js
var import_react3 = __toESM(require_react(), 1);
var import_prop_types2 = __toESM(require_prop_types(), 1);

// node_modules/input-format/modules/react/Input.js
var import_react = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);

// node_modules/input-format/modules/edit.js
function edit(value, caret, operation) {
  switch (operation) {
    case "Backspace":
      if (caret > 0) {
        value = value.slice(0, caret - 1) + value.slice(caret);
        caret--;
      }
      break;
    case "Delete":
      value = value.slice(0, caret) + value.slice(caret + 1);
      break;
  }
  return {
    value,
    caret
  };
}

// node_modules/input-format/modules/parse.js
function parse(text, caret_position, parse_character) {
  var context = {};
  var value = "";
  var focused_input_character_index = 0;
  var index = 0;
  while (index < text.length) {
    var character = parse_character(text[index], value, context);
    if (character !== void 0) {
      value += character;
      if (caret_position !== void 0) {
        if (caret_position === index) {
          focused_input_character_index = value.length - 1;
        } else if (caret_position > index) {
          focused_input_character_index = value.length;
        }
      }
    }
    index++;
  }
  if (caret_position === void 0) {
    focused_input_character_index = value.length;
  }
  var result2 = {
    value,
    caret: focused_input_character_index
  };
  return result2;
}

// node_modules/input-format/modules/helpers.js
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function count_occurences(symbol, string) {
  var count = 0;
  for (var _iterator = _createForOfIteratorHelperLoose(string.split("")), _step; !(_step = _iterator()).done; ) {
    var character = _step.value;
    if (character === symbol) {
      count++;
    }
  }
  return count;
}

// node_modules/input-format/modules/closeBraces.js
function closeBraces(retained_template, template) {
  var placeholder = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "x";
  var empty_placeholder = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : " ";
  var cut_before = retained_template.length;
  var opening_braces = count_occurences("(", retained_template);
  var closing_braces = count_occurences(")", retained_template);
  var dangling_braces = opening_braces - closing_braces;
  while (dangling_braces > 0 && cut_before < template.length) {
    retained_template += template[cut_before].replace(placeholder, empty_placeholder);
    if (template[cut_before] === ")") {
      dangling_braces--;
    }
    cut_before++;
  }
  return retained_template;
}

// node_modules/input-format/modules/templateFormatter.js
function _createForOfIteratorHelperLoose2(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray2(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray2(o, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function templateFormatter_default(template) {
  var placeholder = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "x";
  var should_close_braces = arguments.length > 2 ? arguments[2] : void 0;
  if (!template) {
    return function(value) {
      return {
        text: value
      };
    };
  }
  var characters_in_template = count_occurences(placeholder, template);
  return function(value) {
    if (!value) {
      return {
        text: "",
        template
      };
    }
    var value_character_index = 0;
    var filled_in_template = "";
    for (var _iterator = _createForOfIteratorHelperLoose2(template.split("")), _step; !(_step = _iterator()).done; ) {
      var character = _step.value;
      if (character !== placeholder) {
        filled_in_template += character;
        continue;
      }
      filled_in_template += value[value_character_index];
      value_character_index++;
      if (value_character_index === value.length) {
        if (value.length < characters_in_template) {
          break;
        }
      }
    }
    if (should_close_braces) {
      filled_in_template = closeBraces(filled_in_template, template);
    }
    return {
      text: filled_in_template,
      template
    };
  };
}

// node_modules/input-format/modules/format.js
function format(value, caret, formatter) {
  if (typeof formatter === "string") {
    formatter = templateFormatter_default(formatter);
  }
  var _ref = formatter(value) || {}, text = _ref.text, template = _ref.template;
  if (text === void 0) {
    text = value;
  }
  if (template) {
    if (caret === void 0) {
      caret = text.length;
    } else {
      var index = 0;
      var found = false;
      var possibly_last_input_character_index = -1;
      while (index < text.length && index < template.length) {
        if (text[index] !== template[index]) {
          if (caret === 0) {
            found = true;
            caret = index;
            break;
          }
          possibly_last_input_character_index = index;
          caret--;
        }
        index++;
      }
      if (!found) {
        caret = possibly_last_input_character_index + 1;
      }
    }
  }
  return {
    text,
    caret
  };
}

// node_modules/input-format/modules/dom.js
function isReadOnly(element) {
  return element.hasAttribute("readonly");
}
function getSelection(element) {
  if (element.selectionStart === element.selectionEnd) {
    return;
  }
  return {
    start: element.selectionStart,
    end: element.selectionEnd
  };
}
var Keys = {
  Backspace: 8,
  Delete: 46
};
function getOperation(event) {
  switch (event.keyCode) {
    case Keys.Backspace:
      return "Backspace";
    case Keys.Delete:
      return "Delete";
  }
}
function getCaretPosition(element) {
  return element.selectionStart;
}
function setCaretPosition(element, caret_position) {
  if (caret_position === void 0) {
    return;
  }
  if (isAndroid()) {
    setTimeout(function() {
      return element.setSelectionRange(caret_position, caret_position);
    }, 0);
  } else {
    element.setSelectionRange(caret_position, caret_position);
  }
}
function isAndroid() {
  if (typeof navigator !== "undefined") {
    return ANDROID_USER_AGENT_REG_EXP.test(navigator.userAgent);
  }
}
var ANDROID_USER_AGENT_REG_EXP = /Android/i;

// node_modules/input-format/modules/inputControl.js
function onChange(event, input, _parse, _format, on_change) {
  formatInputText(input, _parse, _format, void 0, on_change);
}
function onKeyDown(event, input, _parse, _format, on_change) {
  if (isReadOnly(input)) {
    return;
  }
  var operation = getOperation(event);
  switch (operation) {
    case "Delete":
    case "Backspace":
      event.preventDefault();
      var selection = getSelection(input);
      if (selection) {
        eraseSelection(input, selection);
        return formatInputText(input, _parse, _format, void 0, on_change);
      }
      return formatInputText(input, _parse, _format, operation, on_change);
    default:
  }
}
function eraseSelection(input, selection) {
  var text = input.value;
  text = text.slice(0, selection.start) + text.slice(selection.end);
  input.value = text;
  setCaretPosition(input, selection.start);
}
function formatInputText(input, _parse, _format, operation, on_change) {
  var _parse2 = parse(input.value, getCaretPosition(input), _parse), value = _parse2.value, caret = _parse2.caret;
  if (operation) {
    var newValueAndCaret = edit(value, caret, operation);
    value = newValueAndCaret.value;
    caret = newValueAndCaret.caret;
  }
  var formatted = format(value, caret, _format);
  var text = formatted.text;
  caret = formatted.caret;
  input.value = text;
  setCaretPosition(input, caret);
  on_change(value);
}

// node_modules/input-format/modules/react/Input.js
var _excluded = ["value", "parse", "format", "inputComponent", "onChange", "onKeyDown"];
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function Input(_ref, ref) {
  var value = _ref.value, parse3 = _ref.parse, format3 = _ref.format, InputComponent = _ref.inputComponent, onChange2 = _ref.onChange, onKeyDown2 = _ref.onKeyDown, rest = _objectWithoutProperties(_ref, _excluded);
  var internalRef = (0, import_react.useRef)();
  var setRef = (0, import_react.useCallback)(function(instance) {
    internalRef.current = instance;
    if (ref) {
      if (typeof ref === "function") {
        ref(instance);
      } else {
        ref.current = instance;
      }
    }
  }, [ref]);
  var _onChange = (0, import_react.useCallback)(function(event) {
    return onChange(event, internalRef.current, parse3, format3, onChange2);
  }, [internalRef, parse3, format3, onChange2]);
  var _onKeyDown = (0, import_react.useCallback)(function(event) {
    if (onKeyDown2) {
      onKeyDown2(event);
    }
    if (event.defaultPrevented) {
      return;
    }
    return onKeyDown(event, internalRef.current, parse3, format3, onChange2);
  }, [internalRef, parse3, format3, onChange2, onKeyDown2]);
  return import_react.default.createElement(InputComponent, _extends({}, rest, {
    ref: setRef,
    value: format3(isEmptyValue(value) ? "" : value).text,
    onKeyDown: _onKeyDown,
    onChange: _onChange
  }));
}
Input = import_react.default.forwardRef(Input);
Input.propTypes = {
  // Parses a single characher of `<input/>` text.
  parse: import_prop_types.default.func.isRequired,
  // Formats `value` into `<input/>` text.
  format: import_prop_types.default.func.isRequired,
  // Renders `<input/>` by default.
  inputComponent: import_prop_types.default.elementType.isRequired,
  // `<input/>` `type` attribute.
  type: import_prop_types.default.string.isRequired,
  // Is parsed from <input/> text.
  value: import_prop_types.default.string,
  // This handler is called each time `<input/>` text is changed.
  onChange: import_prop_types.default.func.isRequired,
  // Passthrough
  onKeyDown: import_prop_types.default.func,
  onCut: import_prop_types.default.func,
  onPaste: import_prop_types.default.func
};
Input.defaultProps = {
  // Renders `<input/>` by default.
  inputComponent: "input",
  // `<input/>` `type` attribute.
  type: "text"
};
var Input_default = Input;
function isEmptyValue(value) {
  return value === void 0 || value === null;
}

// node_modules/libphonenumber-js/es6/ParseError.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result2;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result2 = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result2 = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result2);
  };
}
function _possibleConstructorReturn(self, call2) {
  if (call2 && (_typeof(call2) === "object" || typeof call2 === "function")) {
    return call2;
  } else if (call2 !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2)) return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2)) return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2) _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
var ParseError = function(_Error) {
  _inherits(ParseError2, _Error);
  var _super = _createSuper(ParseError2);
  function ParseError2(code) {
    var _this;
    _classCallCheck(this, ParseError2);
    _this = _super.call(this, code);
    Object.setPrototypeOf(_assertThisInitialized(_this), ParseError2.prototype);
    _this.name = _this.constructor.name;
    return _this;
  }
  return _createClass(ParseError2);
}(_wrapNativeSuper(Error));

// node_modules/libphonenumber-js/es6/constants.js
var MIN_LENGTH_FOR_NSN = 2;
var MAX_LENGTH_FOR_NSN = 17;
var MAX_LENGTH_COUNTRY_CODE = 3;
var VALID_DIGITS = "0-9０-９٠-٩۰-۹";
var DASHES = "-‐-―−ー－";
var SLASHES = "／/";
var DOTS = "．.";
var WHITESPACE = "  ­​⁠　";
var BRACKETS = "()（）［］\\[\\]";
var TILDES = "~⁓∼～";
var VALID_PUNCTUATION = "".concat(DASHES).concat(SLASHES).concat(DOTS).concat(WHITESPACE).concat(BRACKETS).concat(TILDES);
var PLUS_CHARS = "+＋";

// node_modules/libphonenumber-js/es6/tools/semver-compare.js
function semver_compare_default(a, b) {
  a = a.split("-");
  b = b.split("-");
  var pa = a[0].split(".");
  var pb = b[0].split(".");
  for (var i = 0; i < 3; i++) {
    var na = Number(pa[i]);
    var nb = Number(pb[i]);
    if (na > nb) return 1;
    if (nb > na) return -1;
    if (!isNaN(na) && isNaN(nb)) return 1;
    if (isNaN(na) && !isNaN(nb)) return -1;
  }
  if (a[1] && b[1]) {
    return a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0;
  }
  return !a[1] && b[1] ? 1 : a[1] && !b[1] ? -1 : 0;
}

// node_modules/libphonenumber-js/es6/helpers/isObject.js
var objectConstructor = {}.constructor;
function isObject(object) {
  return object !== void 0 && object !== null && object.constructor === objectConstructor;
}

// node_modules/libphonenumber-js/es6/metadata.js
function _typeof2(obj) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof2(obj);
}
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties2(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties2(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var V3 = "1.2.0";
var V4 = "1.7.35";
var DEFAULT_EXT_PREFIX = " ext. ";
var CALLING_CODE_REG_EXP = /^\d+$/;
var Metadata = function() {
  function Metadata2(metadata2) {
    _classCallCheck2(this, Metadata2);
    validateMetadata(metadata2);
    this.metadata = metadata2;
    setVersion.call(this, metadata2);
  }
  _createClass2(Metadata2, [{
    key: "getCountries",
    value: function getCountries3() {
      return Object.keys(this.metadata.countries).filter(function(_) {
        return _ !== "001";
      });
    }
  }, {
    key: "getCountryMetadata",
    value: function getCountryMetadata(countryCode) {
      return this.metadata.countries[countryCode];
    }
  }, {
    key: "nonGeographic",
    value: function nonGeographic() {
      if (this.v1 || this.v2 || this.v3) return;
      return this.metadata.nonGeographic || this.metadata.nonGeographical;
    }
  }, {
    key: "hasCountry",
    value: function hasCountry(country2) {
      return this.getCountryMetadata(country2) !== void 0;
    }
  }, {
    key: "hasCallingCode",
    value: function hasCallingCode(callingCode) {
      if (this.getCountryCodesForCallingCode(callingCode)) {
        return true;
      }
      if (this.nonGeographic()) {
        if (this.nonGeographic()[callingCode]) {
          return true;
        }
      } else {
        var countryCodes = this.countryCallingCodes()[callingCode];
        if (countryCodes && countryCodes.length === 1 && countryCodes[0] === "001") {
          return true;
        }
      }
    }
  }, {
    key: "isNonGeographicCallingCode",
    value: function isNonGeographicCallingCode(callingCode) {
      if (this.nonGeographic()) {
        return this.nonGeographic()[callingCode] ? true : false;
      } else {
        return this.getCountryCodesForCallingCode(callingCode) ? false : true;
      }
    }
    // Deprecated.
  }, {
    key: "country",
    value: function country2(countryCode) {
      return this.selectNumberingPlan(countryCode);
    }
  }, {
    key: "selectNumberingPlan",
    value: function selectNumberingPlan(countryCode, callingCode) {
      if (countryCode && CALLING_CODE_REG_EXP.test(countryCode)) {
        callingCode = countryCode;
        countryCode = null;
      }
      if (countryCode && countryCode !== "001") {
        if (!this.hasCountry(countryCode)) {
          throw new Error("Unknown country: ".concat(countryCode));
        }
        this.numberingPlan = new NumberingPlan(this.getCountryMetadata(countryCode), this);
      } else if (callingCode) {
        if (!this.hasCallingCode(callingCode)) {
          throw new Error("Unknown calling code: ".concat(callingCode));
        }
        this.numberingPlan = new NumberingPlan(this.getNumberingPlanMetadata(callingCode), this);
      } else {
        this.numberingPlan = void 0;
      }
      return this;
    }
  }, {
    key: "getCountryCodesForCallingCode",
    value: function getCountryCodesForCallingCode(callingCode) {
      var countryCodes = this.countryCallingCodes()[callingCode];
      if (countryCodes) {
        if (countryCodes.length === 1 && countryCodes[0].length === 3) {
          return;
        }
        return countryCodes;
      }
    }
  }, {
    key: "getCountryCodeForCallingCode",
    value: function getCountryCodeForCallingCode(callingCode) {
      var countryCodes = this.getCountryCodesForCallingCode(callingCode);
      if (countryCodes) {
        return countryCodes[0];
      }
    }
  }, {
    key: "getNumberingPlanMetadata",
    value: function getNumberingPlanMetadata(callingCode) {
      var countryCode = this.getCountryCodeForCallingCode(callingCode);
      if (countryCode) {
        return this.getCountryMetadata(countryCode);
      }
      if (this.nonGeographic()) {
        var metadata2 = this.nonGeographic()[callingCode];
        if (metadata2) {
          return metadata2;
        }
      } else {
        var countryCodes = this.countryCallingCodes()[callingCode];
        if (countryCodes && countryCodes.length === 1 && countryCodes[0] === "001") {
          return this.metadata.countries["001"];
        }
      }
    }
    // Deprecated.
  }, {
    key: "countryCallingCode",
    value: function countryCallingCode() {
      return this.numberingPlan.callingCode();
    }
    // Deprecated.
  }, {
    key: "IDDPrefix",
    value: function IDDPrefix() {
      return this.numberingPlan.IDDPrefix();
    }
    // Deprecated.
  }, {
    key: "defaultIDDPrefix",
    value: function defaultIDDPrefix() {
      return this.numberingPlan.defaultIDDPrefix();
    }
    // Deprecated.
  }, {
    key: "nationalNumberPattern",
    value: function nationalNumberPattern() {
      return this.numberingPlan.nationalNumberPattern();
    }
    // Deprecated.
  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      return this.numberingPlan.possibleLengths();
    }
    // Deprecated.
  }, {
    key: "formats",
    value: function formats() {
      return this.numberingPlan.formats();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixForParsing",
    value: function nationalPrefixForParsing() {
      return this.numberingPlan.nationalPrefixForParsing();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixTransformRule",
    value: function nationalPrefixTransformRule() {
      return this.numberingPlan.nationalPrefixTransformRule();
    }
    // Deprecated.
  }, {
    key: "leadingDigits",
    value: function leadingDigits() {
      return this.numberingPlan.leadingDigits();
    }
    // Deprecated.
  }, {
    key: "hasTypes",
    value: function hasTypes() {
      return this.numberingPlan.hasTypes();
    }
    // Deprecated.
  }, {
    key: "type",
    value: function type(_type) {
      return this.numberingPlan.type(_type);
    }
    // Deprecated.
  }, {
    key: "ext",
    value: function ext() {
      return this.numberingPlan.ext();
    }
  }, {
    key: "countryCallingCodes",
    value: function countryCallingCodes() {
      if (this.v1) return this.metadata.country_phone_code_to_countries;
      return this.metadata.country_calling_codes;
    }
    // Deprecated.
  }, {
    key: "chooseCountryByCountryCallingCode",
    value: function chooseCountryByCountryCallingCode(callingCode) {
      return this.selectNumberingPlan(callingCode);
    }
  }, {
    key: "hasSelectedNumberingPlan",
    value: function hasSelectedNumberingPlan() {
      return this.numberingPlan !== void 0;
    }
  }]);
  return Metadata2;
}();
var NumberingPlan = function() {
  function NumberingPlan2(metadata2, globalMetadataObject) {
    _classCallCheck2(this, NumberingPlan2);
    this.globalMetadataObject = globalMetadataObject;
    this.metadata = metadata2;
    setVersion.call(this, globalMetadataObject.metadata);
  }
  _createClass2(NumberingPlan2, [{
    key: "callingCode",
    value: function callingCode() {
      return this.metadata[0];
    }
    // Formatting information for regions which share
    // a country calling code is contained by only one region
    // for performance reasons. For example, for NANPA region
    // ("North American Numbering Plan Administration",
    //  which includes USA, Canada, Cayman Islands, Bahamas, etc)
    // it will be contained in the metadata for `US`.
  }, {
    key: "getDefaultCountryMetadataForRegion",
    value: function getDefaultCountryMetadataForRegion() {
      return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
    }
    // Is always present.
  }, {
    key: "IDDPrefix",
    value: function IDDPrefix() {
      if (this.v1 || this.v2) return;
      return this.metadata[1];
    }
    // Is only present when a country supports multiple IDD prefixes.
  }, {
    key: "defaultIDDPrefix",
    value: function defaultIDDPrefix() {
      if (this.v1 || this.v2) return;
      return this.metadata[12];
    }
  }, {
    key: "nationalNumberPattern",
    value: function nationalNumberPattern() {
      if (this.v1 || this.v2) return this.metadata[1];
      return this.metadata[2];
    }
    // "possible length" data is always present in Google's metadata.
  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      if (this.v1) return;
      return this.metadata[this.v2 ? 2 : 3];
    }
  }, {
    key: "_getFormats",
    value: function _getFormats(metadata2) {
      return metadata2[this.v1 ? 2 : this.v2 ? 3 : 4];
    }
    // For countries of the same region (e.g. NANPA)
    // formats are all stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "formats",
    value: function formats() {
      var _this = this;
      var formats2 = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
      return formats2.map(function(_) {
        return new Format(_, _this);
      });
    }
  }, {
    key: "nationalPrefix",
    value: function nationalPrefix() {
      return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
    }
  }, {
    key: "_getNationalPrefixFormattingRule",
    value: function _getNationalPrefixFormattingRule(metadata2) {
      return metadata2[this.v1 ? 4 : this.v2 ? 5 : 6];
    }
    // For countries of the same region (e.g. NANPA)
    // national prefix formatting rule is stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixFormattingRule",
    value: function nationalPrefixFormattingRule() {
      return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "_nationalPrefixForParsing",
    value: function _nationalPrefixForParsing() {
      return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
    }
  }, {
    key: "nationalPrefixForParsing",
    value: function nationalPrefixForParsing() {
      return this._nationalPrefixForParsing() || this.nationalPrefix();
    }
  }, {
    key: "nationalPrefixTransformRule",
    value: function nationalPrefixTransformRule() {
      return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
    }
  }, {
    key: "_getNationalPrefixIsOptionalWhenFormatting",
    value: function _getNationalPrefixIsOptionalWhenFormatting() {
      return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
    }
    // For countries of the same region (e.g. NANPA)
    // "national prefix is optional when formatting" flag is
    // stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function nationalPrefixIsOptionalWhenFormattingInNationalFormat() {
      return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "leadingDigits",
    value: function leadingDigits() {
      return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
    }
  }, {
    key: "types",
    value: function types() {
      return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
    }
  }, {
    key: "hasTypes",
    value: function hasTypes() {
      if (this.types() && this.types().length === 0) {
        return false;
      }
      return !!this.types();
    }
  }, {
    key: "type",
    value: function type(_type2) {
      if (this.hasTypes() && getType(this.types(), _type2)) {
        return new Type(getType(this.types(), _type2), this);
      }
    }
  }, {
    key: "ext",
    value: function ext() {
      if (this.v1 || this.v2) return DEFAULT_EXT_PREFIX;
      return this.metadata[13] || DEFAULT_EXT_PREFIX;
    }
  }]);
  return NumberingPlan2;
}();
var Format = function() {
  function Format2(format3, metadata2) {
    _classCallCheck2(this, Format2);
    this._format = format3;
    this.metadata = metadata2;
  }
  _createClass2(Format2, [{
    key: "pattern",
    value: function pattern() {
      return this._format[0];
    }
  }, {
    key: "format",
    value: function format3() {
      return this._format[1];
    }
  }, {
    key: "leadingDigitsPatterns",
    value: function leadingDigitsPatterns() {
      return this._format[2] || [];
    }
  }, {
    key: "nationalPrefixFormattingRule",
    value: function nationalPrefixFormattingRule() {
      return this._format[3] || this.metadata.nationalPrefixFormattingRule();
    }
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function nationalPrefixIsOptionalWhenFormattingInNationalFormat() {
      return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
  }, {
    key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
    value: function nationalPrefixIsMandatoryWhenFormattingInNationalFormat() {
      return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
    // Checks whether national prefix formatting rule contains national prefix.
  }, {
    key: "usesNationalPrefix",
    value: function usesNationalPrefix() {
      return this.nationalPrefixFormattingRule() && // Check that national prefix formatting rule is not a "dummy" one.
      !FIRST_GROUP_ONLY_PREFIX_PATTERN.test(this.nationalPrefixFormattingRule()) ? true : false;
    }
  }, {
    key: "internationalFormat",
    value: function internationalFormat() {
      return this._format[5] || this.format();
    }
  }]);
  return Format2;
}();
var FIRST_GROUP_ONLY_PREFIX_PATTERN = /^\(?\$1\)?$/;
var Type = function() {
  function Type2(type, metadata2) {
    _classCallCheck2(this, Type2);
    this.type = type;
    this.metadata = metadata2;
  }
  _createClass2(Type2, [{
    key: "pattern",
    value: function pattern() {
      if (this.metadata.v1) return this.type;
      return this.type[0];
    }
  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      if (this.metadata.v1) return;
      return this.type[1] || this.metadata.possibleLengths();
    }
  }]);
  return Type2;
}();
function getType(types, type) {
  switch (type) {
    case "FIXED_LINE":
      return types[0];
    case "MOBILE":
      return types[1];
    case "TOLL_FREE":
      return types[2];
    case "PREMIUM_RATE":
      return types[3];
    case "PERSONAL_NUMBER":
      return types[4];
    case "VOICEMAIL":
      return types[5];
    case "UAN":
      return types[6];
    case "PAGER":
      return types[7];
    case "VOIP":
      return types[8];
    case "SHARED_COST":
      return types[9];
  }
}
function validateMetadata(metadata2) {
  if (!metadata2) {
    throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
  }
  if (!isObject(metadata2) || !isObject(metadata2.countries)) {
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(isObject(metadata2) ? "an object of shape: { " + Object.keys(metadata2).join(", ") + " }" : "a " + typeOf(metadata2) + ": " + metadata2, "."));
  }
}
var typeOf = function typeOf2(_) {
  return _typeof2(_);
};
function getCountryCallingCode(country2, metadata2) {
  metadata2 = new Metadata(metadata2);
  if (metadata2.hasCountry(country2)) {
    return metadata2.country(country2).countryCallingCode();
  }
  throw new Error("Unknown country: ".concat(country2));
}
function isSupportedCountry(country2, metadata2) {
  return metadata2.countries.hasOwnProperty(country2);
}
function setVersion(metadata2) {
  var version = metadata2.version;
  if (typeof version === "number") {
    this.v1 = version === 1;
    this.v2 = version === 2;
    this.v3 = version === 3;
    this.v4 = version === 4;
  } else {
    if (!version) {
      this.v1 = true;
    } else if (semver_compare_default(version, V3) === -1) {
      this.v2 = true;
    } else if (semver_compare_default(version, V4) === -1) {
      this.v3 = true;
    } else {
      this.v4 = true;
    }
  }
}

// node_modules/libphonenumber-js/es6/helpers/extension/createExtensionPattern.js
var RFC3966_EXTN_PREFIX = ";ext=";
var getExtensionDigitsPattern = function getExtensionDigitsPattern2(maxLength) {
  return "([".concat(VALID_DIGITS, "]{1,").concat(maxLength, "})");
};
function createExtensionPattern(purpose) {
  var extLimitAfterExplicitLabel = "20";
  var extLimitAfterLikelyLabel = "15";
  var extLimitAfterAmbiguousChar = "9";
  var extLimitWhenNotSure = "6";
  var possibleSeparatorsBetweenNumberAndExtLabel = "[  \\t,]*";
  var possibleCharsAfterExtLabel = "[:\\.．]?[  \\t,-]*";
  var optionalExtnSuffix = "#?";
  var explicitExtLabels = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)";
  var ambiguousExtLabels = "(?:[xｘ#＃~～]|int|ｉｎｔ)";
  var ambiguousSeparator = "[- ]+";
  var possibleSeparatorsNumberExtLabelNoComma = "[  \\t]*";
  var autoDiallingAndExtLabelsFound = "(?:,{2}|;)";
  var rfcExtn = RFC3966_EXTN_PREFIX + getExtensionDigitsPattern(extLimitAfterExplicitLabel);
  var explicitExtn = possibleSeparatorsBetweenNumberAndExtLabel + explicitExtLabels + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterExplicitLabel) + optionalExtnSuffix;
  var ambiguousExtn = possibleSeparatorsBetweenNumberAndExtLabel + ambiguousExtLabels + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterAmbiguousChar) + optionalExtnSuffix;
  var americanStyleExtnWithSuffix = ambiguousSeparator + getExtensionDigitsPattern(extLimitWhenNotSure) + "#";
  var autoDiallingExtn = possibleSeparatorsNumberExtLabelNoComma + autoDiallingAndExtLabelsFound + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterLikelyLabel) + optionalExtnSuffix;
  var onlyCommasExtn = possibleSeparatorsNumberExtLabelNoComma + "(?:,)+" + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterAmbiguousChar) + optionalExtnSuffix;
  return rfcExtn + "|" + explicitExtn + "|" + ambiguousExtn + "|" + americanStyleExtnWithSuffix + "|" + autoDiallingExtn + "|" + onlyCommasExtn;
}

// node_modules/libphonenumber-js/es6/helpers/isViablePhoneNumber.js
var MIN_LENGTH_PHONE_NUMBER_PATTERN = "[" + VALID_DIGITS + "]{" + MIN_LENGTH_FOR_NSN + "}";
var VALID_PHONE_NUMBER = "[" + PLUS_CHARS + "]{0,1}(?:[" + VALID_PUNCTUATION + "]*[" + VALID_DIGITS + "]){3,}[" + VALID_PUNCTUATION + VALID_DIGITS + "]*";
var VALID_PHONE_NUMBER_START_REG_EXP = new RegExp("^[" + PLUS_CHARS + "]{0,1}(?:[" + VALID_PUNCTUATION + "]*[" + VALID_DIGITS + "]){1,2}$", "i");
var VALID_PHONE_NUMBER_WITH_EXTENSION = VALID_PHONE_NUMBER + // Phone number extensions
"(?:" + createExtensionPattern() + ")?";
var VALID_PHONE_NUMBER_PATTERN = new RegExp(
  // Either a short two-digit-only phone number
  "^" + MIN_LENGTH_PHONE_NUMBER_PATTERN + "$|^" + VALID_PHONE_NUMBER_WITH_EXTENSION + "$",
  "i"
);
function isViablePhoneNumber(number) {
  return number.length >= MIN_LENGTH_FOR_NSN && VALID_PHONE_NUMBER_PATTERN.test(number);
}
function isViablePhoneNumberStart(number) {
  return VALID_PHONE_NUMBER_START_REG_EXP.test(number);
}

// node_modules/libphonenumber-js/es6/helpers/extension/extractExtension.js
var EXTN_PATTERN = new RegExp("(?:" + createExtensionPattern() + ")$", "i");
function extractExtension(number) {
  var start = number.search(EXTN_PATTERN);
  if (start < 0) {
    return {};
  }
  var numberWithoutExtension = number.slice(0, start);
  var matches = number.match(EXTN_PATTERN);
  var i = 1;
  while (i < matches.length) {
    if (matches[i]) {
      return {
        number: numberWithoutExtension,
        ext: matches[i]
      };
    }
    i++;
  }
}

// node_modules/libphonenumber-js/es6/helpers/parseDigits.js
function _createForOfIteratorHelperLoose3(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray3(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray3(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray3(o, minLen);
}
function _arrayLikeToArray3(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var DIGITS = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "０": "0",
  // Fullwidth digit 0
  "１": "1",
  // Fullwidth digit 1
  "２": "2",
  // Fullwidth digit 2
  "３": "3",
  // Fullwidth digit 3
  "４": "4",
  // Fullwidth digit 4
  "５": "5",
  // Fullwidth digit 5
  "６": "6",
  // Fullwidth digit 6
  "７": "7",
  // Fullwidth digit 7
  "８": "8",
  // Fullwidth digit 8
  "９": "9",
  // Fullwidth digit 9
  "٠": "0",
  // Arabic-indic digit 0
  "١": "1",
  // Arabic-indic digit 1
  "٢": "2",
  // Arabic-indic digit 2
  "٣": "3",
  // Arabic-indic digit 3
  "٤": "4",
  // Arabic-indic digit 4
  "٥": "5",
  // Arabic-indic digit 5
  "٦": "6",
  // Arabic-indic digit 6
  "٧": "7",
  // Arabic-indic digit 7
  "٨": "8",
  // Arabic-indic digit 8
  "٩": "9",
  // Arabic-indic digit 9
  "۰": "0",
  // Eastern-Arabic digit 0
  "۱": "1",
  // Eastern-Arabic digit 1
  "۲": "2",
  // Eastern-Arabic digit 2
  "۳": "3",
  // Eastern-Arabic digit 3
  "۴": "4",
  // Eastern-Arabic digit 4
  "۵": "5",
  // Eastern-Arabic digit 5
  "۶": "6",
  // Eastern-Arabic digit 6
  "۷": "7",
  // Eastern-Arabic digit 7
  "۸": "8",
  // Eastern-Arabic digit 8
  "۹": "9"
  // Eastern-Arabic digit 9
};
function parseDigit(character) {
  return DIGITS[character];
}
function parseDigits(string) {
  var result2 = "";
  for (var _iterator = _createForOfIteratorHelperLoose3(string.split("")), _step; !(_step = _iterator()).done; ) {
    var character = _step.value;
    var digit = parseDigit(character);
    if (digit) {
      result2 += digit;
    }
  }
  return result2;
}

// node_modules/libphonenumber-js/es6/parseIncompletePhoneNumber.js
function _createForOfIteratorHelperLoose4(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray4(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray4(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray4(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray4(o, minLen);
}
function _arrayLikeToArray4(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function parseIncompletePhoneNumber(string) {
  var result2 = "";
  for (var _iterator = _createForOfIteratorHelperLoose4(string.split("")), _step; !(_step = _iterator()).done; ) {
    var character = _step.value;
    result2 += parsePhoneNumberCharacter(character, result2) || "";
  }
  return result2;
}
function parsePhoneNumberCharacter(character, prevParsedCharacters, emitEvent) {
  if (character === "+") {
    if (prevParsedCharacters) {
      if (typeof emitEvent === "function") {
        emitEvent("end");
      }
      return;
    }
    return "+";
  }
  return parseDigit(character);
}

// node_modules/libphonenumber-js/es6/helpers/mergeArrays.js
function _createForOfIteratorHelperLoose5(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray5(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray5(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray5(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray5(o, minLen);
}
function _arrayLikeToArray5(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function mergeArrays(a, b) {
  var merged = a.slice();
  for (var _iterator = _createForOfIteratorHelperLoose5(b), _step; !(_step = _iterator()).done; ) {
    var element = _step.value;
    if (a.indexOf(element) < 0) {
      merged.push(element);
    }
  }
  return merged.sort(function(a2, b2) {
    return a2 - b2;
  });
}

// node_modules/libphonenumber-js/es6/helpers/checkNumberLength.js
function checkNumberLength(nationalNumber, metadata2) {
  return checkNumberLengthForType(nationalNumber, void 0, metadata2);
}
function checkNumberLengthForType(nationalNumber, type, metadata2) {
  var type_info = metadata2.type(type);
  var possible_lengths = type_info && type_info.possibleLengths() || metadata2.possibleLengths();
  if (!possible_lengths) {
    return "IS_POSSIBLE";
  }
  if (type === "FIXED_LINE_OR_MOBILE") {
    if (!metadata2.type("FIXED_LINE")) {
      return checkNumberLengthForType(nationalNumber, "MOBILE", metadata2);
    }
    var mobile_type = metadata2.type("MOBILE");
    if (mobile_type) {
      possible_lengths = mergeArrays(possible_lengths, mobile_type.possibleLengths());
    }
  } else if (type && !type_info) {
    return "INVALID_LENGTH";
  }
  var actual_length = nationalNumber.length;
  var minimum_length = possible_lengths[0];
  if (minimum_length === actual_length) {
    return "IS_POSSIBLE";
  }
  if (minimum_length > actual_length) {
    return "TOO_SHORT";
  }
  if (possible_lengths[possible_lengths.length - 1] < actual_length) {
    return "TOO_LONG";
  }
  return possible_lengths.indexOf(actual_length, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}

// node_modules/libphonenumber-js/es6/isPossible.js
function isPossiblePhoneNumber(input, options, metadata2) {
  if (options === void 0) {
    options = {};
  }
  metadata2 = new Metadata(metadata2);
  if (options.v2) {
    if (!input.countryCallingCode) {
      throw new Error("Invalid phone number object passed");
    }
    metadata2.selectNumberingPlan(input.countryCallingCode);
  } else {
    if (!input.phone) {
      return false;
    }
    if (input.country) {
      if (!metadata2.hasCountry(input.country)) {
        throw new Error("Unknown country: ".concat(input.country));
      }
      metadata2.country(input.country);
    } else {
      if (!input.countryCallingCode) {
        throw new Error("Invalid phone number object passed");
      }
      metadata2.selectNumberingPlan(input.countryCallingCode);
    }
  }
  if (metadata2.possibleLengths()) {
    return isPossibleNumber(input.phone || input.nationalNumber, metadata2);
  } else {
    if (input.countryCallingCode && metadata2.isNonGeographicCallingCode(input.countryCallingCode)) {
      return true;
    } else {
      throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
    }
  }
}
function isPossibleNumber(nationalNumber, metadata2) {
  switch (checkNumberLength(nationalNumber, metadata2)) {
    case "IS_POSSIBLE":
      return true;
    default:
      return false;
  }
}

// node_modules/libphonenumber-js/es6/helpers/matchesEntirely.js
function matchesEntirely(text, regular_expression) {
  text = text || "";
  return new RegExp("^(?:" + regular_expression + ")$").test(text);
}

// node_modules/libphonenumber-js/es6/helpers/getNumberType.js
function _createForOfIteratorHelperLoose6(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray6(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray6(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray6(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray6(o, minLen);
}
function _arrayLikeToArray6(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var NON_FIXED_LINE_PHONE_TYPES = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
function getNumberType(input, options, metadata2) {
  options = options || {};
  if (!input.country && !input.countryCallingCode) {
    return;
  }
  metadata2 = new Metadata(metadata2);
  metadata2.selectNumberingPlan(input.country, input.countryCallingCode);
  var nationalNumber = options.v2 ? input.nationalNumber : input.phone;
  if (!matchesEntirely(nationalNumber, metadata2.nationalNumberPattern())) {
    return;
  }
  if (isNumberTypeEqualTo(nationalNumber, "FIXED_LINE", metadata2)) {
    if (metadata2.type("MOBILE") && metadata2.type("MOBILE").pattern() === "") {
      return "FIXED_LINE_OR_MOBILE";
    }
    if (!metadata2.type("MOBILE")) {
      return "FIXED_LINE_OR_MOBILE";
    }
    if (isNumberTypeEqualTo(nationalNumber, "MOBILE", metadata2)) {
      return "FIXED_LINE_OR_MOBILE";
    }
    return "FIXED_LINE";
  }
  for (var _iterator = _createForOfIteratorHelperLoose6(NON_FIXED_LINE_PHONE_TYPES), _step; !(_step = _iterator()).done; ) {
    var type = _step.value;
    if (isNumberTypeEqualTo(nationalNumber, type, metadata2)) {
      return type;
    }
  }
}
function isNumberTypeEqualTo(nationalNumber, type, metadata2) {
  type = metadata2.type(type);
  if (!type || !type.pattern()) {
    return false;
  }
  if (type.possibleLengths() && type.possibleLengths().indexOf(nationalNumber.length) < 0) {
    return false;
  }
  return matchesEntirely(nationalNumber, type.pattern());
}

// node_modules/libphonenumber-js/es6/isValid.js
function isValidNumber(input, options, metadata2) {
  options = options || {};
  metadata2 = new Metadata(metadata2);
  metadata2.selectNumberingPlan(input.country, input.countryCallingCode);
  if (metadata2.hasTypes()) {
    return getNumberType(input, options, metadata2.metadata) !== void 0;
  }
  var nationalNumber = options.v2 ? input.nationalNumber : input.phone;
  return matchesEntirely(nationalNumber, metadata2.nationalNumberPattern());
}

// node_modules/libphonenumber-js/es6/helpers/getPossibleCountriesForNumber.js
function getPossibleCountriesForNumber(callingCode, nationalNumber, metadata2) {
  var _metadata = new Metadata(metadata2);
  var possibleCountries = _metadata.getCountryCodesForCallingCode(callingCode);
  if (!possibleCountries) {
    return [];
  }
  return possibleCountries.filter(function(country2) {
    return couldNationalNumberBelongToCountry(nationalNumber, country2, metadata2);
  });
}
function couldNationalNumberBelongToCountry(nationalNumber, country2, metadata2) {
  var _metadata = new Metadata(metadata2);
  _metadata.selectNumberingPlan(country2);
  if (_metadata.numberingPlan.possibleLengths().indexOf(nationalNumber.length) >= 0) {
    return true;
  }
  return false;
}

// node_modules/libphonenumber-js/es6/helpers/applyInternationalSeparatorStyle.js
function applyInternationalSeparatorStyle(formattedNumber) {
  return formattedNumber.replace(new RegExp("[".concat(VALID_PUNCTUATION, "]+"), "g"), " ").trim();
}

// node_modules/libphonenumber-js/es6/helpers/formatNationalNumberUsingFormat.js
var FIRST_GROUP_PATTERN = /(\$\d)/;
function formatNationalNumberUsingFormat(number, format3, _ref) {
  var useInternationalFormat = _ref.useInternationalFormat, withNationalPrefix = _ref.withNationalPrefix, carrierCode = _ref.carrierCode, metadata2 = _ref.metadata;
  var formattedNumber = number.replace(new RegExp(format3.pattern()), useInternationalFormat ? format3.internationalFormat() : (
    // This library doesn't use `domestic_carrier_code_formatting_rule`,
    // because that one is only used when formatting phone numbers
    // for dialing from a mobile phone, and this is not a dialing library.
    // carrierCode && format.domesticCarrierCodeFormattingRule()
    // 	// First, replace the $CC in the formatting rule with the desired carrier code.
    // 	// Then, replace the $FG in the formatting rule with the first group
    // 	// and the carrier code combined in the appropriate way.
    // 	? format.format().replace(FIRST_GROUP_PATTERN, format.domesticCarrierCodeFormattingRule().replace('$CC', carrierCode))
    // 	: (
    // 		withNationalPrefix && format.nationalPrefixFormattingRule()
    // 			? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule())
    // 			: format.format()
    // 	)
    withNationalPrefix && format3.nationalPrefixFormattingRule() ? format3.format().replace(FIRST_GROUP_PATTERN, format3.nationalPrefixFormattingRule()) : format3.format()
  ));
  if (useInternationalFormat) {
    return applyInternationalSeparatorStyle(formattedNumber);
  }
  return formattedNumber;
}

// node_modules/libphonenumber-js/es6/helpers/getIddPrefix.js
var SINGLE_IDD_PREFIX_REG_EXP = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function getIddPrefix(country2, callingCode, metadata2) {
  var countryMetadata = new Metadata(metadata2);
  countryMetadata.selectNumberingPlan(country2, callingCode);
  if (countryMetadata.defaultIDDPrefix()) {
    return countryMetadata.defaultIDDPrefix();
  }
  if (SINGLE_IDD_PREFIX_REG_EXP.test(countryMetadata.IDDPrefix())) {
    return countryMetadata.IDDPrefix();
  }
}

// node_modules/libphonenumber-js/es6/helpers/RFC3966.js
function formatRFC3966(_ref) {
  var number = _ref.number, ext = _ref.ext;
  if (!number) {
    return "";
  }
  if (number[0] !== "+") {
    throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
  }
  return "tel:".concat(number).concat(ext ? ";ext=" + ext : "");
}

// node_modules/libphonenumber-js/es6/format.js
function _createForOfIteratorHelperLoose7(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray7(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray7(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray7(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray7(o, minLen);
}
function _arrayLikeToArray7(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DEFAULT_OPTIONS = {
  formatExtension: function formatExtension(formattedNumber, extension, metadata2) {
    return "".concat(formattedNumber).concat(metadata2.ext()).concat(extension);
  }
};
function formatNumber2(input, format3, options, metadata2) {
  if (options) {
    options = _objectSpread(_objectSpread({}, DEFAULT_OPTIONS), options);
  } else {
    options = DEFAULT_OPTIONS;
  }
  metadata2 = new Metadata(metadata2);
  if (input.country && input.country !== "001") {
    if (!metadata2.hasCountry(input.country)) {
      throw new Error("Unknown country: ".concat(input.country));
    }
    metadata2.country(input.country);
  } else if (input.countryCallingCode) {
    metadata2.selectNumberingPlan(input.countryCallingCode);
  } else return input.phone || "";
  var countryCallingCode = metadata2.countryCallingCode();
  var nationalNumber = options.v2 ? input.nationalNumber : input.phone;
  var number;
  switch (format3) {
    case "NATIONAL":
      if (!nationalNumber) {
        return "";
      }
      number = formatNationalNumber(nationalNumber, input.carrierCode, "NATIONAL", metadata2, options);
      return addExtension(number, input.ext, metadata2, options.formatExtension);
    case "INTERNATIONAL":
      if (!nationalNumber) {
        return "+".concat(countryCallingCode);
      }
      number = formatNationalNumber(nationalNumber, null, "INTERNATIONAL", metadata2, options);
      number = "+".concat(countryCallingCode, " ").concat(number);
      return addExtension(number, input.ext, metadata2, options.formatExtension);
    case "E.164":
      return "+".concat(countryCallingCode).concat(nationalNumber);
    case "RFC3966":
      return formatRFC3966({
        number: "+".concat(countryCallingCode).concat(nationalNumber),
        ext: input.ext
      });
    case "IDD":
      if (!options.fromCountry) {
        return;
      }
      var formattedNumber = formatIDD(nationalNumber, input.carrierCode, countryCallingCode, options.fromCountry, metadata2);
      return addExtension(formattedNumber, input.ext, metadata2, options.formatExtension);
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(format3, '"'));
  }
}
function formatNationalNumber(number, carrierCode, formatAs, metadata2, options) {
  var format3 = chooseFormatForNumber(metadata2.formats(), number);
  if (!format3) {
    return number;
  }
  return formatNationalNumberUsingFormat(number, format3, {
    useInternationalFormat: formatAs === "INTERNATIONAL",
    withNationalPrefix: format3.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && options && options.nationalPrefix === false ? false : true,
    carrierCode,
    metadata: metadata2
  });
}
function chooseFormatForNumber(availableFormats, nationalNnumber) {
  for (var _iterator = _createForOfIteratorHelperLoose7(availableFormats), _step; !(_step = _iterator()).done; ) {
    var format3 = _step.value;
    if (format3.leadingDigitsPatterns().length > 0) {
      var lastLeadingDigitsPattern = format3.leadingDigitsPatterns()[format3.leadingDigitsPatterns().length - 1];
      if (nationalNnumber.search(lastLeadingDigitsPattern) !== 0) {
        continue;
      }
    }
    if (matchesEntirely(nationalNnumber, format3.pattern())) {
      return format3;
    }
  }
}
function addExtension(formattedNumber, ext, metadata2, formatExtension2) {
  return ext ? formatExtension2(formattedNumber, ext, metadata2) : formattedNumber;
}
function formatIDD(nationalNumber, carrierCode, countryCallingCode, fromCountry, metadata2) {
  var fromCountryCallingCode = getCountryCallingCode(fromCountry, metadata2.metadata);
  if (fromCountryCallingCode === countryCallingCode) {
    var formattedNumber = formatNationalNumber(nationalNumber, carrierCode, "NATIONAL", metadata2);
    if (countryCallingCode === "1") {
      return countryCallingCode + " " + formattedNumber;
    }
    return formattedNumber;
  }
  var iddPrefix = getIddPrefix(fromCountry, void 0, metadata2.metadata);
  if (iddPrefix) {
    return "".concat(iddPrefix, " ").concat(countryCallingCode, " ").concat(formatNationalNumber(nationalNumber, null, "INTERNATIONAL", metadata2));
  }
}

// node_modules/libphonenumber-js/es6/PhoneNumber.js
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass3(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties3(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties3(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var USE_NON_GEOGRAPHIC_COUNTRY_CODE = false;
var PhoneNumber = function() {
  function PhoneNumber2(countryOrCountryCallingCode, nationalNumber, metadata2) {
    _classCallCheck3(this, PhoneNumber2);
    if (!countryOrCountryCallingCode) {
      throw new TypeError("`country` or `countryCallingCode` not passed");
    }
    if (!nationalNumber) {
      throw new TypeError("`nationalNumber` not passed");
    }
    if (!metadata2) {
      throw new TypeError("`metadata` not passed");
    }
    var _getCountryAndCountry = getCountryAndCountryCallingCode(countryOrCountryCallingCode, metadata2), country2 = _getCountryAndCountry.country, countryCallingCode = _getCountryAndCountry.countryCallingCode;
    this.country = country2;
    this.countryCallingCode = countryCallingCode;
    this.nationalNumber = nationalNumber;
    this.number = "+" + this.countryCallingCode + this.nationalNumber;
    this.getMetadata = function() {
      return metadata2;
    };
  }
  _createClass3(PhoneNumber2, [{
    key: "setExt",
    value: function setExt(ext) {
      this.ext = ext;
    }
  }, {
    key: "getPossibleCountries",
    value: function getPossibleCountries() {
      if (this.country) {
        return [this.country];
      }
      return getPossibleCountriesForNumber(this.countryCallingCode, this.nationalNumber, this.getMetadata());
    }
  }, {
    key: "isPossible",
    value: function isPossible() {
      return isPossiblePhoneNumber(this, {
        v2: true
      }, this.getMetadata());
    }
  }, {
    key: "isValid",
    value: function isValid() {
      return isValidNumber(this, {
        v2: true
      }, this.getMetadata());
    }
  }, {
    key: "isNonGeographic",
    value: function isNonGeographic() {
      var metadata2 = new Metadata(this.getMetadata());
      return metadata2.isNonGeographicCallingCode(this.countryCallingCode);
    }
  }, {
    key: "isEqual",
    value: function isEqual(phoneNumber) {
      return this.number === phoneNumber.number && this.ext === phoneNumber.ext;
    }
    // This function was originally meant to be an equivalent for `validatePhoneNumberLength()`,
    // but later it was found out that it doesn't include the possible `TOO_SHORT` result
    // returned from `parsePhoneNumberWithError()` in the original `validatePhoneNumberLength()`,
    // so eventually I simply commented out this method from the `PhoneNumber` class
    // and just left the `validatePhoneNumberLength()` function, even though that one would require
    // and additional step to also validate the actual country / calling code of the phone number.
    // validateLength() {
    // 	const metadata = new Metadata(this.getMetadata())
    // 	metadata.selectNumberingPlan(this.countryCallingCode)
    // 	const result = checkNumberLength(this.nationalNumber, metadata)
    // 	if (result !== 'IS_POSSIBLE') {
    // 		return result
    // 	}
    // }
  }, {
    key: "getType",
    value: function getType2() {
      return getNumberType(this, {
        v2: true
      }, this.getMetadata());
    }
  }, {
    key: "format",
    value: function format3(_format, options) {
      return formatNumber2(this, _format, options ? _objectSpread2(_objectSpread2({}, options), {}, {
        v2: true
      }) : {
        v2: true
      }, this.getMetadata());
    }
  }, {
    key: "formatNational",
    value: function formatNational(options) {
      return this.format("NATIONAL", options);
    }
  }, {
    key: "formatInternational",
    value: function formatInternational(options) {
      return this.format("INTERNATIONAL", options);
    }
  }, {
    key: "getURI",
    value: function getURI(options) {
      return this.format("RFC3966", options);
    }
  }]);
  return PhoneNumber2;
}();
var isCountryCode = function isCountryCode2(value) {
  return /^[A-Z]{2}$/.test(value);
};
function getCountryAndCountryCallingCode(countryOrCountryCallingCode, metadataJson) {
  var country2;
  var countryCallingCode;
  var metadata2 = new Metadata(metadataJson);
  if (isCountryCode(countryOrCountryCallingCode)) {
    country2 = countryOrCountryCallingCode;
    metadata2.selectNumberingPlan(country2);
    countryCallingCode = metadata2.countryCallingCode();
  } else {
    countryCallingCode = countryOrCountryCallingCode;
    if (USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
      if (metadata2.isNonGeographicCallingCode(countryCallingCode)) {
        country2 = "001";
      }
    }
  }
  return {
    country: country2,
    countryCallingCode
  };
}

// node_modules/libphonenumber-js/es6/helpers/stripIddPrefix.js
var CAPTURING_DIGIT_PATTERN = new RegExp("([" + VALID_DIGITS + "])");
function stripIddPrefix(number, country2, callingCode, metadata2) {
  if (!country2) {
    return;
  }
  var countryMetadata = new Metadata(metadata2);
  countryMetadata.selectNumberingPlan(country2, callingCode);
  var IDDPrefixPattern = new RegExp(countryMetadata.IDDPrefix());
  if (number.search(IDDPrefixPattern) !== 0) {
    return;
  }
  number = number.slice(number.match(IDDPrefixPattern)[0].length);
  var matchedGroups = number.match(CAPTURING_DIGIT_PATTERN);
  if (matchedGroups && matchedGroups[1] != null && matchedGroups[1].length > 0) {
    if (matchedGroups[1] === "0") {
      return;
    }
  }
  return number;
}

// node_modules/libphonenumber-js/es6/helpers/extractNationalNumberFromPossiblyIncompleteNumber.js
function extractNationalNumberFromPossiblyIncompleteNumber(number, metadata2) {
  if (number && metadata2.numberingPlan.nationalPrefixForParsing()) {
    var prefixPattern = new RegExp("^(?:" + metadata2.numberingPlan.nationalPrefixForParsing() + ")");
    var prefixMatch = prefixPattern.exec(number);
    if (prefixMatch) {
      var nationalNumber;
      var carrierCode;
      var capturedGroupsCount = prefixMatch.length - 1;
      var hasCapturedGroups = capturedGroupsCount > 0 && prefixMatch[capturedGroupsCount];
      if (metadata2.nationalPrefixTransformRule() && hasCapturedGroups) {
        nationalNumber = number.replace(prefixPattern, metadata2.nationalPrefixTransformRule());
        if (capturedGroupsCount > 1) {
          carrierCode = prefixMatch[1];
        }
      } else {
        var prefixBeforeNationalNumber = prefixMatch[0];
        nationalNumber = number.slice(prefixBeforeNationalNumber.length);
        if (hasCapturedGroups) {
          carrierCode = prefixMatch[1];
        }
      }
      var nationalPrefix;
      if (hasCapturedGroups) {
        var possiblePositionOfTheFirstCapturedGroup = number.indexOf(prefixMatch[1]);
        var possibleNationalPrefix = number.slice(0, possiblePositionOfTheFirstCapturedGroup);
        if (possibleNationalPrefix === metadata2.numberingPlan.nationalPrefix()) {
          nationalPrefix = metadata2.numberingPlan.nationalPrefix();
        }
      } else {
        nationalPrefix = prefixMatch[0];
      }
      return {
        nationalNumber,
        nationalPrefix,
        carrierCode
      };
    }
  }
  return {
    nationalNumber: number
  };
}

// node_modules/libphonenumber-js/es6/helpers/extractNationalNumber.js
function extractNationalNumber(number, metadata2) {
  var _extractNationalNumbe = extractNationalNumberFromPossiblyIncompleteNumber(number, metadata2), carrierCode = _extractNationalNumbe.carrierCode, nationalNumber = _extractNationalNumbe.nationalNumber;
  if (nationalNumber !== number) {
    if (!shouldHaveExtractedNationalPrefix(number, nationalNumber, metadata2)) {
      return {
        nationalNumber: number
      };
    }
    if (metadata2.possibleLengths()) {
      if (!isPossibleIncompleteNationalNumber(nationalNumber, metadata2)) {
        return {
          nationalNumber: number
        };
      }
    }
  }
  return {
    nationalNumber,
    carrierCode
  };
}
function shouldHaveExtractedNationalPrefix(nationalNumberBefore, nationalNumberAfter, metadata2) {
  if (matchesEntirely(nationalNumberBefore, metadata2.nationalNumberPattern()) && !matchesEntirely(nationalNumberAfter, metadata2.nationalNumberPattern())) {
    return false;
  }
  return true;
}
function isPossibleIncompleteNationalNumber(nationalNumber, metadata2) {
  switch (checkNumberLength(nationalNumber, metadata2)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return false;
    default:
      return true;
  }
}

// node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCodeFromInternationalNumberWithoutPlusSign.js
function extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(number, country2, callingCode, metadata2) {
  var countryCallingCode = country2 ? getCountryCallingCode(country2, metadata2) : callingCode;
  if (number.indexOf(countryCallingCode) === 0) {
    metadata2 = new Metadata(metadata2);
    metadata2.selectNumberingPlan(country2, callingCode);
    var possibleShorterNumber = number.slice(countryCallingCode.length);
    var _extractNationalNumbe = extractNationalNumber(possibleShorterNumber, metadata2), possibleShorterNationalNumber = _extractNationalNumbe.nationalNumber;
    var _extractNationalNumbe2 = extractNationalNumber(number, metadata2), nationalNumber = _extractNationalNumbe2.nationalNumber;
    if (!matchesEntirely(nationalNumber, metadata2.nationalNumberPattern()) && matchesEntirely(possibleShorterNationalNumber, metadata2.nationalNumberPattern()) || checkNumberLength(nationalNumber, metadata2) === "TOO_LONG") {
      return {
        countryCallingCode,
        number: possibleShorterNumber
      };
    }
  }
  return {
    number
  };
}

// node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCode.js
function extractCountryCallingCode(number, country2, callingCode, metadata2) {
  if (!number) {
    return {};
  }
  var isNumberWithIddPrefix;
  if (number[0] !== "+") {
    var numberWithoutIDD = stripIddPrefix(number, country2, callingCode, metadata2);
    if (numberWithoutIDD && numberWithoutIDD !== number) {
      isNumberWithIddPrefix = true;
      number = "+" + numberWithoutIDD;
    } else {
      if (country2 || callingCode) {
        var _extractCountryCallin = extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(number, country2, callingCode, metadata2), countryCallingCode = _extractCountryCallin.countryCallingCode, shorterNumber = _extractCountryCallin.number;
        if (countryCallingCode) {
          return {
            countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
            countryCallingCode,
            number: shorterNumber
          };
        }
      }
      return {
        // No need to set it to `UNSPECIFIED`. It can be just `undefined`.
        // countryCallingCodeSource: 'UNSPECIFIED',
        number
      };
    }
  }
  if (number[1] === "0") {
    return {};
  }
  metadata2 = new Metadata(metadata2);
  var i = 2;
  while (i - 1 <= MAX_LENGTH_COUNTRY_CODE && i <= number.length) {
    var _countryCallingCode = number.slice(1, i);
    if (metadata2.hasCallingCode(_countryCallingCode)) {
      metadata2.selectNumberingPlan(_countryCallingCode);
      return {
        countryCallingCodeSource: isNumberWithIddPrefix ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
        countryCallingCode: _countryCallingCode,
        number: number.slice(i)
      };
    }
    i++;
  }
  return {};
}

// node_modules/libphonenumber-js/es6/helpers/getCountryByNationalNumber.js
function _createForOfIteratorHelperLoose8(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray8(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray8(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray8(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray8(o, minLen);
}
function _arrayLikeToArray8(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function getCountryByNationalNumber(nationalPhoneNumber, _ref) {
  var countries = _ref.countries, defaultCountry = _ref.defaultCountry, metadata2 = _ref.metadata;
  metadata2 = new Metadata(metadata2);
  for (var _iterator = _createForOfIteratorHelperLoose8(countries), _step; !(_step = _iterator()).done; ) {
    var country2 = _step.value;
    metadata2.country(country2);
    if (metadata2.leadingDigits()) {
      if (nationalPhoneNumber && nationalPhoneNumber.search(metadata2.leadingDigits()) === 0) {
        return country2;
      }
    } else if (getNumberType({
      phone: nationalPhoneNumber,
      country: country2
    }, void 0, metadata2.metadata)) {
      return country2;
    }
  }
}

// node_modules/libphonenumber-js/es6/helpers/getCountryByCallingCode.js
var USE_NON_GEOGRAPHIC_COUNTRY_CODE2 = false;
function getCountryByCallingCode(callingCode, _ref) {
  var nationalPhoneNumber = _ref.nationalNumber, defaultCountry = _ref.defaultCountry, metadata2 = _ref.metadata;
  if (USE_NON_GEOGRAPHIC_COUNTRY_CODE2) {
    if (metadata2.isNonGeographicCallingCode(callingCode)) {
      return "001";
    }
  }
  var possibleCountries = metadata2.getCountryCodesForCallingCode(callingCode);
  if (!possibleCountries) {
    return;
  }
  if (possibleCountries.length === 1) {
    return possibleCountries[0];
  }
  return getCountryByNationalNumber(nationalPhoneNumber, {
    countries: possibleCountries,
    defaultCountry,
    metadata: metadata2.metadata
  });
}

// node_modules/libphonenumber-js/es6/helpers/extractPhoneContext.js
var PLUS_SIGN = "+";
var RFC3966_VISUAL_SEPARATOR_ = "[\\-\\.\\(\\)]?";
var RFC3966_PHONE_DIGIT_ = "([" + VALID_DIGITS + "]|" + RFC3966_VISUAL_SEPARATOR_ + ")";
var RFC3966_GLOBAL_NUMBER_DIGITS_ = "^\\" + PLUS_SIGN + RFC3966_PHONE_DIGIT_ + "*[" + VALID_DIGITS + "]" + RFC3966_PHONE_DIGIT_ + "*$";
var RFC3966_GLOBAL_NUMBER_DIGITS_PATTERN_ = new RegExp(RFC3966_GLOBAL_NUMBER_DIGITS_, "g");
var ALPHANUM_ = VALID_DIGITS;
var RFC3966_DOMAINLABEL_ = "[" + ALPHANUM_ + "]+((\\-)*[" + ALPHANUM_ + "])*";
var VALID_ALPHA_ = "a-zA-Z";
var RFC3966_TOPLABEL_ = "[" + VALID_ALPHA_ + "]+((\\-)*[" + ALPHANUM_ + "])*";
var RFC3966_DOMAINNAME_ = "^(" + RFC3966_DOMAINLABEL_ + "\\.)*" + RFC3966_TOPLABEL_ + "\\.?$";
var RFC3966_DOMAINNAME_PATTERN_ = new RegExp(RFC3966_DOMAINNAME_, "g");
var RFC3966_PREFIX_ = "tel:";
var RFC3966_PHONE_CONTEXT_ = ";phone-context=";
var RFC3966_ISDN_SUBADDRESS_ = ";isub=";
function extractPhoneContext(numberToExtractFrom) {
  var indexOfPhoneContext = numberToExtractFrom.indexOf(RFC3966_PHONE_CONTEXT_);
  if (indexOfPhoneContext < 0) {
    return null;
  }
  var phoneContextStart = indexOfPhoneContext + RFC3966_PHONE_CONTEXT_.length;
  if (phoneContextStart >= numberToExtractFrom.length) {
    return "";
  }
  var phoneContextEnd = numberToExtractFrom.indexOf(";", phoneContextStart);
  if (phoneContextEnd >= 0) {
    return numberToExtractFrom.substring(phoneContextStart, phoneContextEnd);
  } else {
    return numberToExtractFrom.substring(phoneContextStart);
  }
}
function isPhoneContextValid(phoneContext) {
  if (phoneContext === null) {
    return true;
  }
  if (phoneContext.length === 0) {
    return false;
  }
  return RFC3966_GLOBAL_NUMBER_DIGITS_PATTERN_.test(phoneContext) || RFC3966_DOMAINNAME_PATTERN_.test(phoneContext);
}

// node_modules/libphonenumber-js/es6/helpers/extractFormattedPhoneNumberFromPossibleRfc3966NumberUri.js
function extractFormattedPhoneNumberFromPossibleRfc3966NumberUri(numberToParse, _ref) {
  var extractFormattedPhoneNumber2 = _ref.extractFormattedPhoneNumber;
  var phoneContext = extractPhoneContext(numberToParse);
  if (!isPhoneContextValid(phoneContext)) {
    throw new ParseError("NOT_A_NUMBER");
  }
  var phoneNumberString;
  if (phoneContext === null) {
    phoneNumberString = extractFormattedPhoneNumber2(numberToParse) || "";
  } else {
    phoneNumberString = "";
    if (phoneContext.charAt(0) === PLUS_SIGN) {
      phoneNumberString += phoneContext;
    }
    var indexOfRfc3966Prefix = numberToParse.indexOf(RFC3966_PREFIX_);
    var indexOfNationalNumber;
    if (indexOfRfc3966Prefix >= 0) {
      indexOfNationalNumber = indexOfRfc3966Prefix + RFC3966_PREFIX_.length;
    } else {
      indexOfNationalNumber = 0;
    }
    var indexOfPhoneContext = numberToParse.indexOf(RFC3966_PHONE_CONTEXT_);
    phoneNumberString += numberToParse.substring(indexOfNationalNumber, indexOfPhoneContext);
  }
  var indexOfIsdn = phoneNumberString.indexOf(RFC3966_ISDN_SUBADDRESS_);
  if (indexOfIsdn > 0) {
    phoneNumberString = phoneNumberString.substring(0, indexOfIsdn);
  }
  if (phoneNumberString !== "") {
    return phoneNumberString;
  }
}

// node_modules/libphonenumber-js/es6/parse.js
var MAX_INPUT_STRING_LENGTH = 250;
var PHONE_NUMBER_START_PATTERN = new RegExp("[" + PLUS_CHARS + VALID_DIGITS + "]");
var AFTER_PHONE_NUMBER_END_PATTERN = new RegExp("[^" + VALID_DIGITS + "#]+$");
var USE_NON_GEOGRAPHIC_COUNTRY_CODE3 = false;
function parse2(text, options, metadata2) {
  options = options || {};
  metadata2 = new Metadata(metadata2);
  if (options.defaultCountry && !metadata2.hasCountry(options.defaultCountry)) {
    if (options.v2) {
      throw new ParseError("INVALID_COUNTRY");
    }
    throw new Error("Unknown country: ".concat(options.defaultCountry));
  }
  var _parseInput = parseInput(text, options.v2, options.extract), formattedPhoneNumber = _parseInput.number, ext = _parseInput.ext, error = _parseInput.error;
  if (!formattedPhoneNumber) {
    if (options.v2) {
      if (error === "TOO_SHORT") {
        throw new ParseError("TOO_SHORT");
      }
      throw new ParseError("NOT_A_NUMBER");
    }
    return {};
  }
  var _parsePhoneNumber = parsePhoneNumber(formattedPhoneNumber, options.defaultCountry, options.defaultCallingCode, metadata2), country2 = _parsePhoneNumber.country, nationalNumber = _parsePhoneNumber.nationalNumber, countryCallingCode = _parsePhoneNumber.countryCallingCode, countryCallingCodeSource = _parsePhoneNumber.countryCallingCodeSource, carrierCode = _parsePhoneNumber.carrierCode;
  if (!metadata2.hasSelectedNumberingPlan()) {
    if (options.v2) {
      throw new ParseError("INVALID_COUNTRY");
    }
    return {};
  }
  if (!nationalNumber || nationalNumber.length < MIN_LENGTH_FOR_NSN) {
    if (options.v2) {
      throw new ParseError("TOO_SHORT");
    }
    return {};
  }
  if (nationalNumber.length > MAX_LENGTH_FOR_NSN) {
    if (options.v2) {
      throw new ParseError("TOO_LONG");
    }
    return {};
  }
  if (options.v2) {
    var phoneNumber = new PhoneNumber(countryCallingCode, nationalNumber, metadata2.metadata);
    if (country2) {
      phoneNumber.country = country2;
    }
    if (carrierCode) {
      phoneNumber.carrierCode = carrierCode;
    }
    if (ext) {
      phoneNumber.ext = ext;
    }
    phoneNumber.__countryCallingCodeSource = countryCallingCodeSource;
    return phoneNumber;
  }
  var valid = (options.extended ? metadata2.hasSelectedNumberingPlan() : country2) ? matchesEntirely(nationalNumber, metadata2.nationalNumberPattern()) : false;
  if (!options.extended) {
    return valid ? result(country2, nationalNumber, ext) : {};
  }
  return {
    country: country2,
    countryCallingCode,
    carrierCode,
    valid,
    possible: valid ? true : options.extended === true && metadata2.possibleLengths() && isPossibleNumber(nationalNumber, metadata2) ? true : false,
    phone: nationalNumber,
    ext
  };
}
function _extractFormattedPhoneNumber(text, extract, throwOnError) {
  if (!text) {
    return;
  }
  if (text.length > MAX_INPUT_STRING_LENGTH) {
    if (throwOnError) {
      throw new ParseError("TOO_LONG");
    }
    return;
  }
  if (extract === false) {
    return text;
  }
  var startsAt = text.search(PHONE_NUMBER_START_PATTERN);
  if (startsAt < 0) {
    return;
  }
  return text.slice(startsAt).replace(AFTER_PHONE_NUMBER_END_PATTERN, "");
}
function parseInput(text, v2, extract) {
  var number = extractFormattedPhoneNumberFromPossibleRfc3966NumberUri(text, {
    extractFormattedPhoneNumber: function extractFormattedPhoneNumber2(text2) {
      return _extractFormattedPhoneNumber(text2, extract, v2);
    }
  });
  if (!number) {
    return {};
  }
  if (!isViablePhoneNumber(number)) {
    if (isViablePhoneNumberStart(number)) {
      return {
        error: "TOO_SHORT"
      };
    }
    return {};
  }
  var withExtensionStripped = extractExtension(number);
  if (withExtensionStripped.ext) {
    return withExtensionStripped;
  }
  return {
    number
  };
}
function result(country2, nationalNumber, ext) {
  var result2 = {
    country: country2,
    phone: nationalNumber
  };
  if (ext) {
    result2.ext = ext;
  }
  return result2;
}
function parsePhoneNumber(formattedPhoneNumber, defaultCountry, defaultCallingCode, metadata2) {
  var _extractCountryCallin = extractCountryCallingCode(parseIncompletePhoneNumber(formattedPhoneNumber), defaultCountry, defaultCallingCode, metadata2.metadata), countryCallingCodeSource = _extractCountryCallin.countryCallingCodeSource, countryCallingCode = _extractCountryCallin.countryCallingCode, number = _extractCountryCallin.number;
  var country2;
  if (countryCallingCode) {
    metadata2.selectNumberingPlan(countryCallingCode);
  } else if (number && (defaultCountry || defaultCallingCode)) {
    metadata2.selectNumberingPlan(defaultCountry, defaultCallingCode);
    if (defaultCountry) {
      country2 = defaultCountry;
    } else {
      if (USE_NON_GEOGRAPHIC_COUNTRY_CODE3) {
        if (metadata2.isNonGeographicCallingCode(defaultCallingCode)) {
          country2 = "001";
        }
      }
    }
    countryCallingCode = defaultCallingCode || getCountryCallingCode(defaultCountry, metadata2.metadata);
  } else return {};
  if (!number) {
    return {
      countryCallingCodeSource,
      countryCallingCode
    };
  }
  var _extractNationalNumbe = extractNationalNumber(parseIncompletePhoneNumber(number), metadata2), nationalNumber = _extractNationalNumbe.nationalNumber, carrierCode = _extractNationalNumbe.carrierCode;
  var exactCountry = getCountryByCallingCode(countryCallingCode, {
    nationalNumber,
    defaultCountry,
    metadata: metadata2
  });
  if (exactCountry) {
    country2 = exactCountry;
    if (exactCountry === "001") {
    } else {
      metadata2.country(country2);
    }
  }
  return {
    country: country2,
    countryCallingCode,
    countryCallingCodeSource,
    nationalNumber,
    carrierCode
  };
}

// node_modules/libphonenumber-js/es6/parsePhoneNumberWithError_.js
function ownKeys3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys3(Object(source), true).forEach(function(key) {
      _defineProperty3(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys3(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function parsePhoneNumberWithError(text, options, metadata2) {
  return parse2(text, _objectSpread3(_objectSpread3({}, options), {}, {
    v2: true
  }), metadata2);
}

// node_modules/libphonenumber-js/es6/normalizeArguments.js
function ownKeys4(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys4(Object(source), true).forEach(function(key) {
      _defineProperty4(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys4(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray9(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray9(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray9(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray9(o, minLen);
}
function _arrayLikeToArray9(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function normalizeArguments(args) {
  var _Array$prototype$slic = Array.prototype.slice.call(args), _Array$prototype$slic2 = _slicedToArray(_Array$prototype$slic, 4), arg_1 = _Array$prototype$slic2[0], arg_2 = _Array$prototype$slic2[1], arg_3 = _Array$prototype$slic2[2], arg_4 = _Array$prototype$slic2[3];
  var text;
  var options;
  var metadata2;
  if (typeof arg_1 === "string") {
    text = arg_1;
  } else throw new TypeError("A text for parsing must be a string.");
  if (!arg_2 || typeof arg_2 === "string") {
    if (arg_4) {
      options = arg_3;
      metadata2 = arg_4;
    } else {
      options = void 0;
      metadata2 = arg_3;
    }
    if (arg_2) {
      options = _objectSpread4({
        defaultCountry: arg_2
      }, options);
    }
  } else if (isObject(arg_2)) {
    if (arg_3) {
      options = arg_2;
      metadata2 = arg_3;
    } else {
      metadata2 = arg_2;
    }
  } else throw new Error("Invalid second argument: ".concat(arg_2));
  return {
    text,
    options,
    metadata: metadata2
  };
}

// node_modules/libphonenumber-js/es6/parsePhoneNumber_.js
function ownKeys5(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys5(Object(source), true).forEach(function(key) {
      _defineProperty5(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys5(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function parsePhoneNumber2(text, options, metadata2) {
  if (options && options.defaultCountry && !isSupportedCountry(options.defaultCountry, metadata2)) {
    options = _objectSpread5(_objectSpread5({}, options), {}, {
      defaultCountry: void 0
    });
  }
  try {
    return parsePhoneNumberWithError(text, options, metadata2);
  } catch (error) {
    if (error instanceof ParseError) {
    } else {
      throw error;
    }
  }
}

// node_modules/libphonenumber-js/es6/parsePhoneNumber.js
function parsePhoneNumber3() {
  var _normalizeArguments = normalizeArguments(arguments), text = _normalizeArguments.text, options = _normalizeArguments.options, metadata2 = _normalizeArguments.metadata;
  return parsePhoneNumber2(text, options, metadata2);
}

// node_modules/libphonenumber-js/es6/isValidPhoneNumber.js
function ownKeys6(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys6(Object(source), true).forEach(function(key) {
      _defineProperty6(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys6(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty6(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function isValidPhoneNumber() {
  var _normalizeArguments = normalizeArguments(arguments), text = _normalizeArguments.text, options = _normalizeArguments.options, metadata2 = _normalizeArguments.metadata;
  options = _objectSpread6(_objectSpread6({}, options), {}, {
    extract: false
  });
  var phoneNumber = parsePhoneNumber2(text, options, metadata2);
  return phoneNumber && phoneNumber.isValid() || false;
}

// node_modules/libphonenumber-js/es6/isPossiblePhoneNumber.js
function ownKeys7(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread7(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys7(Object(source), true).forEach(function(key) {
      _defineProperty7(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys7(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty7(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function isPossiblePhoneNumber2() {
  var _normalizeArguments = normalizeArguments(arguments), text = _normalizeArguments.text, options = _normalizeArguments.options, metadata2 = _normalizeArguments.metadata;
  options = _objectSpread7(_objectSpread7({}, options), {}, {
    extract: false
  });
  var phoneNumber = parsePhoneNumber2(text, options, metadata2);
  return phoneNumber && phoneNumber.isPossible() || false;
}

// node_modules/libphonenumber-js/es6/findNumbers/LRUCache.js
function _defineProperties4(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass4(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties4(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties4(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _classCallCheck4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var Node = _createClass4(function Node2(key, value) {
  var next = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
  var prev = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  _classCallCheck4(this, Node2);
  this.key = key;
  this.value = value;
  this.next = next;
  this.prev = prev;
});
var LRUCache = function() {
  function LRUCache2() {
    var limit2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;
    _classCallCheck4(this, LRUCache2);
    this.size = 0;
    this.limit = limit2;
    this.head = null;
    this.tail = null;
    this.cache = {};
  }
  _createClass4(LRUCache2, [{
    key: "put",
    value: function put(key, value) {
      this.ensureLimit();
      if (!this.head) {
        this.head = this.tail = new Node(key, value);
      } else {
        var node = new Node(key, value, this.head);
        this.head.prev = node;
        this.head = node;
      }
      this.cache[key] = this.head;
      this.size++;
    }
    // Read from cache map and make that node as new Head of LinkedList
  }, {
    key: "get",
    value: function get(key) {
      if (this.cache[key]) {
        var value = this.cache[key].value;
        this.remove(key);
        this.put(key, value);
        return value;
      }
      console.log("Item not available in cache for key ".concat(key));
    }
  }, {
    key: "ensureLimit",
    value: function ensureLimit() {
      if (this.size === this.limit) {
        this.remove(this.tail.key);
      }
    }
  }, {
    key: "remove",
    value: function remove(key) {
      var node = this.cache[key];
      if (node.prev !== null) {
        node.prev.next = node.next;
      } else {
        this.head = node.next;
      }
      if (node.next !== null) {
        node.next.prev = node.prev;
      } else {
        this.tail = node.prev;
      }
      delete this.cache[key];
      this.size--;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.head = null;
      this.tail = null;
      this.size = 0;
      this.cache = {};
    }
    // // Invokes the callback function with every node of the chain and the index of the node.
    // forEach(fn) {
    //   let node = this.head;
    //   let counter = 0;
    //   while (node) {
    //     fn(node, counter);
    //     node = node.next;
    //     counter++;
    //   }
    // }
    // // To iterate over LRU with a 'for...of' loop
    // *[Symbol.iterator]() {
    //   let node = this.head;
    //   while (node) {
    //     yield node;
    //     node = node.next;
    //   }
    // }
  }]);
  return LRUCache2;
}();

// node_modules/libphonenumber-js/es6/findNumbers/RegExpCache.js
function _classCallCheck5(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties5(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass5(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties5(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties5(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var RegExpCache = function() {
  function RegExpCache2(size) {
    _classCallCheck5(this, RegExpCache2);
    this.cache = new LRUCache(size);
  }
  _createClass5(RegExpCache2, [{
    key: "getPatternForRegExp",
    value: function getPatternForRegExp(pattern) {
      var regExp = this.cache.get(pattern);
      if (!regExp) {
        regExp = new RegExp("^" + pattern);
        this.cache.put(pattern, regExp);
      }
      return regExp;
    }
  }]);
  return RegExpCache2;
}();

// node_modules/libphonenumber-js/es6/findNumbers/util.js
function limit(lower, upper) {
  if (lower < 0 || upper <= 0 || upper < lower) {
    throw new TypeError();
  }
  return "{".concat(lower, ",").concat(upper, "}");
}
function trimAfterFirstMatch(regexp, string) {
  var index = string.search(regexp);
  if (index >= 0) {
    return string.slice(0, index);
  }
  return string;
}
function startsWith(string, substring) {
  return string.indexOf(substring) === 0;
}
function endsWith(string, substring) {
  return string.indexOf(substring, string.length - substring.length) === string.length - substring.length;
}

// node_modules/libphonenumber-js/es6/findNumbers/utf-8.js
var _pZ = "   ᠎ - \u2028\u2029  　";
var pZ = "[".concat(_pZ, "]");
var PZ = "[^".concat(_pZ, "]");
var _pN = "0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൦-൵๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꩐-꩙꯰-꯹０-９";
var _pNd = "0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꩐-꩙꯰-꯹０-９";
var pNd = "[".concat(_pNd, "]");
var _pL = "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ";
var pL = "[".concat(_pL, "]");
var pL_regexp = new RegExp(pL);
var _pSc = "$¢-¥֏؋৲৳৻૱௹฿៛₠-₹꠸﷼﹩＄￠￡￥￦";
var pSc = "[".concat(_pSc, "]");
var pSc_regexp = new RegExp(pSc);
var _pMn = "̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣤ-ࣾऀ-ंऺ़ु-ै्॑-ॗॢॣঁ়ু-ৄ্ৢৣਁਂ਼ੁੂੇੈੋ-੍ੑੰੱੵઁં઼ુ-ૅેૈ્ૢૣଁ଼ିୁ-ୄ୍ୖୢୣஂீ்ా-ీె-ైొ-్ౕౖౢౣ಼ಿೆೌ್ೢೣു-ൄ്ൢൣ්ි-ුූัิ-ฺ็-๎ັິ-ູົຼ່-ໍཱ༹༘༙༵༷-ཾྀ-྄྆྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္်ွှၘၙၞ-ၠၱ-ၴႂႅႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧᤨᤲ᤹-᤻ᨘᨗᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀᮁᮢ-ᮥᮨᮩ᯦᮫ᯨᯩᯭᯯ-ᯱᰬ-ᰳᰶ᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᷀-ᷦ᷼-᷿⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〭꙯ꙴ-꙽ꚟ꛰꛱ꠂ꠆ꠋꠥꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꨩ-ꨮꨱꨲꨵꨶꩃꩌꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫬꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︦";
var pMn = "[".concat(_pMn, "]");
var pMn_regexp = new RegExp(pMn);
var _InBasic_Latin = "\0-";
var _InLatin_1_Supplement = "-ÿ";
var _InLatin_Extended_A = "Ā-ſ";
var _InLatin_Extended_Additional = "Ḁ-ỿ";
var _InLatin_Extended_B = "ƀ-ɏ";
var _InCombining_Diacritical_Marks = "̀-ͯ";
var latinLetterRegexp = new RegExp("[" + _InBasic_Latin + _InLatin_1_Supplement + _InLatin_Extended_A + _InLatin_Extended_Additional + _InLatin_Extended_B + _InCombining_Diacritical_Marks + "]");
function isLatinLetter(letter) {
  if (!pL_regexp.test(letter) && !pMn_regexp.test(letter)) {
    return false;
  }
  return latinLetterRegexp.test(letter);
}
function isInvalidPunctuationSymbol(character) {
  return character === "%" || pSc_regexp.test(character);
}

// node_modules/libphonenumber-js/es6/findNumbers/matchPhoneNumberStringAgainstPhoneNumber.js
function matchPhoneNumberStringAgainstPhoneNumber(phoneNumberString, phoneNumber, metadata2) {
  var phoneNumberStringContainsCallingCode = true;
  var parsedPhoneNumber = parsePhoneNumber3(phoneNumberString, metadata2);
  if (!parsedPhoneNumber) {
    phoneNumberStringContainsCallingCode = false;
    parsedPhoneNumber = parsePhoneNumber3(phoneNumberString, {
      defaultCallingCode: phoneNumber.countryCallingCode
    }, metadata2);
  }
  if (!parsedPhoneNumber) {
    return "INVALID_NUMBER";
  }
  if (phoneNumber.ext) {
    if (parsedPhoneNumber.ext !== phoneNumber.ext) {
      return "NO_MATCH";
    }
  } else {
    if (parsedPhoneNumber.ext) {
      return "NO_MATCH";
    }
  }
  if (phoneNumberStringContainsCallingCode) {
    if (phoneNumber.countryCallingCode !== parsedPhoneNumber.countryCallingCode) {
      return "NO_MATCH";
    }
  }
  if (phoneNumber.number === parsedPhoneNumber.number) {
    if (phoneNumberStringContainsCallingCode) {
      return "EXACT_MATCH";
    } else {
      return "NSN_MATCH";
    }
  }
  if (phoneNumber.nationalNumber.indexOf(parsedPhoneNumber.nationalNumber) === 0 || parsedPhoneNumber.nationalNumber.indexOf(phoneNumber.nationalNumber) === 0) {
    return "SHORT_NSN_MATCH";
  }
  return "NO_MATCH";
}

// node_modules/libphonenumber-js/es6/findNumbers/Leniency.js
function _createForOfIteratorHelperLoose9(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray10(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray10(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray10(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray10(o, minLen);
}
function _arrayLikeToArray10(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var Leniency_default = {
  /**
   * Phone numbers accepted are "possible", but not necessarily "valid".
   */
  POSSIBLE: function POSSIBLE(phoneNumber, _ref) {
    var candidate = _ref.candidate, metadata2 = _ref.metadata;
    return true;
  },
  /**
   * Phone numbers accepted are "possible" and "valid".
   * Numbers written in national format must have their national-prefix
   * present if it is usually written for a number of this type.
   */
  VALID: function VALID(phoneNumber, _ref2) {
    var candidate = _ref2.candidate, defaultCountry = _ref2.defaultCountry, metadata2 = _ref2.metadata;
    if (!phoneNumber.isValid() || !containsOnlyValidXChars(phoneNumber, candidate, metadata2)) {
      return false;
    }
    return true;
  },
  /**
   * Phone numbers accepted are "valid" and
   * are grouped in a possible way for this locale. For example, a US number written as
   * "65 02 53 00 00" and "650253 0000" are not accepted at this leniency level, whereas
   * "650 253 0000", "650 2530000" or "6502530000" are.
   * Numbers with more than one '/' symbol in the national significant number
   * are also dropped at this level.
   *
   * Warning: This level might result in lower coverage especially for regions outside of
   * country code "+1". If you are not sure about which level to use,
   * email the discussion group libphonenumber-discuss@googlegroups.com.
   */
  STRICT_GROUPING: function STRICT_GROUPING(phoneNumber, _ref3) {
    var candidate = _ref3.candidate, defaultCountry = _ref3.defaultCountry, metadata2 = _ref3.metadata, regExpCache = _ref3.regExpCache;
    if (!phoneNumber.isValid() || !containsOnlyValidXChars(phoneNumber, candidate, metadata2) || containsMoreThanOneSlashInNationalNumber(phoneNumber, candidate) || !isNationalPrefixPresentIfRequired(phoneNumber, {
      defaultCountry,
      metadata: metadata2
    })) {
      return false;
    }
    return checkNumberGroupingIsValid(phoneNumber, candidate, metadata2, allNumberGroupsRemainGrouped, regExpCache);
  },
  /**
   * Phone numbers accepted are "valid" and are grouped in the same way
   * that we would have formatted it, or as a single block.
   * For example, a US number written as "650 2530000" is not accepted
   * at this leniency level, whereas "650 253 0000" or "6502530000" are.
   * Numbers with more than one '/' symbol are also dropped at this level.
   *
   * Warning: This level might result in lower coverage especially for regions outside of
   * country code "+1". If you are not sure about which level to use, email the discussion group
   * libphonenumber-discuss@googlegroups.com.
   */
  EXACT_GROUPING: function EXACT_GROUPING(phoneNumber, _ref4) {
    var candidate = _ref4.candidate, defaultCountry = _ref4.defaultCountry, metadata2 = _ref4.metadata, regExpCache = _ref4.regExpCache;
    if (!phoneNumber.isValid() || !containsOnlyValidXChars(phoneNumber, candidate, metadata2) || containsMoreThanOneSlashInNationalNumber(phoneNumber, candidate) || !isNationalPrefixPresentIfRequired(phoneNumber, {
      defaultCountry,
      metadata: metadata2
    })) {
      return false;
    }
    return checkNumberGroupingIsValid(phoneNumber, candidate, metadata2, allNumberGroupsAreExactlyPresent, regExpCache);
  }
};
function containsOnlyValidXChars(phoneNumber, candidate, metadata2) {
  for (var index = 0; index < candidate.length - 1; index++) {
    var charAtIndex = candidate.charAt(index);
    if (charAtIndex === "x" || charAtIndex === "X") {
      var charAtNextIndex = candidate.charAt(index + 1);
      if (charAtNextIndex === "x" || charAtNextIndex === "X") {
        index++;
        if (matchPhoneNumberStringAgainstPhoneNumber(candidate.substring(index), phoneNumber, metadata2) !== "NSN_MATCH") {
          return false;
        }
      } else {
        var ext = parseDigits(candidate.substring(index));
        if (ext) {
          if (phoneNumber.ext !== ext) {
            return false;
          }
        } else {
          if (phoneNumber.ext) {
            return false;
          }
        }
      }
    }
  }
  return true;
}
function isNationalPrefixPresentIfRequired(phoneNumber, _ref5) {
  var defaultCountry = _ref5.defaultCountry, _metadata = _ref5.metadata;
  if (phoneNumber.__countryCallingCodeSource !== "FROM_DEFAULT_COUNTRY") {
    return true;
  }
  var metadata2 = new Metadata(_metadata);
  metadata2.selectNumberingPlan(phoneNumber.countryCallingCode);
  var phoneNumberRegion = phoneNumber.country || getCountryByCallingCode(phoneNumber.countryCallingCode, {
    nationalNumber: phoneNumber.nationalNumber,
    defaultCountry,
    metadata: metadata2
  });
  var nationalNumber = phoneNumber.nationalNumber;
  var format3 = chooseFormatForNumber(metadata2.numberingPlan.formats(), nationalNumber);
  if (format3.nationalPrefixFormattingRule()) {
    if (metadata2.numberingPlan.nationalPrefixIsOptionalWhenFormattingInNationalFormat()) {
      return true;
    }
    if (!format3.usesNationalPrefix()) {
      return true;
    }
    return Boolean(phoneNumber.nationalPrefix);
  }
  return true;
}
function containsMoreThanOneSlashInNationalNumber(phoneNumber, candidate) {
  var firstSlashInBodyIndex = candidate.indexOf("/");
  if (firstSlashInBodyIndex < 0) {
    return false;
  }
  var secondSlashInBodyIndex = candidate.indexOf("/", firstSlashInBodyIndex + 1);
  if (secondSlashInBodyIndex < 0) {
    return false;
  }
  var candidateHasCountryCode = phoneNumber.__countryCallingCodeSource === "FROM_NUMBER_WITH_PLUS_SIGN" || phoneNumber.__countryCallingCodeSource === "FROM_NUMBER_WITHOUT_PLUS_SIGN";
  if (candidateHasCountryCode && parseDigits(candidate.substring(0, firstSlashInBodyIndex)) === phoneNumber.countryCallingCode) {
    return candidate.slice(secondSlashInBodyIndex + 1).indexOf("/") >= 0;
  }
  return true;
}
function checkNumberGroupingIsValid(number, candidate, metadata2, checkGroups, regExpCache) {
  throw new Error("This part of code hasn't been ported");
  var normalizedCandidate = normalizeDigits(
    candidate,
    true
    /* keep non-digits */
  );
  var formattedNumberGroups = getNationalNumberGroups(metadata2, number, null);
  if (checkGroups(metadata2, number, normalizedCandidate, formattedNumberGroups)) {
    return true;
  }
  var alternateFormats = MetadataManager.getAlternateFormatsForCountry(number.getCountryCode());
  var nationalSignificantNumber = util.getNationalSignificantNumber(number);
  if (alternateFormats) {
    for (var _iterator = _createForOfIteratorHelperLoose9(alternateFormats.numberFormats()), _step; !(_step = _iterator()).done; ) {
      var alternateFormat = _step.value;
      if (alternateFormat.leadingDigitsPatterns().length > 0) {
        var leadingDigitsRegExp = regExpCache.getPatternForRegExp("^" + alternateFormat.leadingDigitsPatterns()[0]);
        if (!leadingDigitsRegExp.test(nationalSignificantNumber)) {
          continue;
        }
      }
      formattedNumberGroups = getNationalNumberGroups(metadata2, number, alternateFormat);
      if (checkGroups(metadata2, number, normalizedCandidate, formattedNumberGroups)) {
        return true;
      }
    }
  }
  return false;
}
function getNationalNumberGroups(metadata2, number, formattingPattern) {
  throw new Error("This part of code hasn't been ported");
  if (formattingPattern) {
    var nationalSignificantNumber = util.getNationalSignificantNumber(number);
    return util.formatNsnUsingPattern(nationalSignificantNumber, formattingPattern, "RFC3966", metadata2).split("-");
  }
  var rfc3966Format = formatNumber(number, "RFC3966", metadata2);
  var endIndex = rfc3966Format.indexOf(";");
  if (endIndex < 0) {
    endIndex = rfc3966Format.length;
  }
  var startIndex = rfc3966Format.indexOf("-") + 1;
  return rfc3966Format.slice(startIndex, endIndex).split("-");
}
function allNumberGroupsAreExactlyPresent(metadata2, number, normalizedCandidate, formattedNumberGroups) {
  throw new Error("This part of code hasn't been ported");
  var candidateGroups = normalizedCandidate.split(NON_DIGITS_PATTERN);
  var candidateNumberGroupIndex = number.hasExtension() ? candidateGroups.length - 2 : candidateGroups.length - 1;
  if (candidateGroups.length == 1 || candidateGroups[candidateNumberGroupIndex].contains(util.getNationalSignificantNumber(number))) {
    return true;
  }
  var formattedNumberGroupIndex = formattedNumberGroups.length - 1;
  while (formattedNumberGroupIndex > 0 && candidateNumberGroupIndex >= 0) {
    if (candidateGroups[candidateNumberGroupIndex] !== formattedNumberGroups[formattedNumberGroupIndex]) {
      return false;
    }
    formattedNumberGroupIndex--;
    candidateNumberGroupIndex--;
  }
  return candidateNumberGroupIndex >= 0 && endsWith(candidateGroups[candidateNumberGroupIndex], formattedNumberGroups[0]);
}
function allNumberGroupsRemainGrouped(metadata2, number, normalizedCandidate, formattedNumberGroups) {
  throw new Error("This part of code hasn't been ported");
  var fromIndex = 0;
  if (number.getCountryCodeSource() !== CountryCodeSource.FROM_DEFAULT_COUNTRY) {
    var countryCode = String(number.getCountryCode());
    fromIndex = normalizedCandidate.indexOf(countryCode) + countryCode.length();
  }
  for (var i = 0; i < formattedNumberGroups.length; i++) {
    fromIndex = normalizedCandidate.indexOf(formattedNumberGroups[i], fromIndex);
    if (fromIndex < 0) {
      return false;
    }
    fromIndex += formattedNumberGroups[i].length();
    if (i == 0 && fromIndex < normalizedCandidate.length()) {
      var region = util.getRegionCodeForCountryCode(number.getCountryCode());
      if (util.getNddPrefixForRegion(region, true) != null && Character.isDigit(normalizedCandidate.charAt(fromIndex))) {
        var nationalSignificantNumber = util.getNationalSignificantNumber(number);
        return startsWith(normalizedCandidate.slice(fromIndex - formattedNumberGroups[i].length), nationalSignificantNumber);
      }
    }
  }
  return normalizedCandidate.slice(fromIndex).contains(number.getExtension());
}

// node_modules/libphonenumber-js/es6/findNumbers/parsePreCandidate.js
var SECOND_NUMBER_START_PATTERN = /[\\/] *x/;
function parsePreCandidate(candidate) {
  return trimAfterFirstMatch(SECOND_NUMBER_START_PATTERN, candidate);
}

// node_modules/libphonenumber-js/es6/findNumbers/isValidPreCandidate.js
var SLASH_SEPARATED_DATES = /(?:(?:[0-3]?\d\/[01]?\d)|(?:[01]?\d\/[0-3]?\d))\/(?:[12]\d)?\d{2}/;
var TIME_STAMPS = /[12]\d{3}[-/]?[01]\d[-/]?[0-3]\d +[0-2]\d$/;
var TIME_STAMPS_SUFFIX_LEADING = /^:[0-5]\d/;
function isValidPreCandidate(candidate, offset, text) {
  if (SLASH_SEPARATED_DATES.test(candidate)) {
    return false;
  }
  if (TIME_STAMPS.test(candidate)) {
    var followingText = text.slice(offset + candidate.length);
    if (TIME_STAMPS_SUFFIX_LEADING.test(followingText)) {
      return false;
    }
  }
  return true;
}

// node_modules/libphonenumber-js/es6/findNumbers/isValidCandidate.js
var OPENING_PARENS = "(\\[（［";
var CLOSING_PARENS = ")\\]）］";
var NON_PARENS = "[^".concat(OPENING_PARENS).concat(CLOSING_PARENS, "]");
var LEAD_CLASS = "[".concat(OPENING_PARENS).concat(PLUS_CHARS, "]");
var LEAD_CLASS_LEADING = new RegExp("^" + LEAD_CLASS);
var BRACKET_PAIR_LIMIT = limit(0, 3);
var MATCHING_BRACKETS_ENTIRE = new RegExp("^(?:[" + OPENING_PARENS + "])?(?:" + NON_PARENS + "+[" + CLOSING_PARENS + "])?" + NON_PARENS + "+(?:[" + OPENING_PARENS + "]" + NON_PARENS + "+[" + CLOSING_PARENS + "])" + BRACKET_PAIR_LIMIT + NON_PARENS + "*$");
var PUB_PAGES = /\d{1,5}-+\d{1,5}\s{0,4}\(\d{1,4}/;
function isValidCandidate(candidate, offset, text, leniency) {
  if (!MATCHING_BRACKETS_ENTIRE.test(candidate) || PUB_PAGES.test(candidate)) {
    return;
  }
  if (leniency !== "POSSIBLE") {
    if (offset > 0 && !LEAD_CLASS_LEADING.test(candidate)) {
      var previousChar = text[offset - 1];
      if (isInvalidPunctuationSymbol(previousChar) || isLatinLetter(previousChar)) {
        return false;
      }
    }
    var lastCharIndex = offset + candidate.length;
    if (lastCharIndex < text.length) {
      var nextChar = text[lastCharIndex];
      if (isInvalidPunctuationSymbol(nextChar) || isLatinLetter(nextChar)) {
        return false;
      }
    }
  }
  return true;
}

// node_modules/libphonenumber-js/es6/PhoneNumberMatcher.js
function _createForOfIteratorHelperLoose10(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray11(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray11(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray11(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray11(o, minLen);
}
function _arrayLikeToArray11(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _classCallCheck6(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties6(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass6(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties6(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties6(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var USE_NON_GEOGRAPHIC_COUNTRY_CODE4 = false;
var EXTN_PATTERNS_FOR_MATCHING = createExtensionPattern("matching");
var INNER_MATCHES = [
  // Breaks on the slash - e.g. "651-234-2345/332-445-1234"
  "\\/+(.*)/",
  // Note that the bracket here is inside the capturing group, since we consider it part of the
  // phone number. Will match a pattern like "(650) 223 3345 (754) 223 3321".
  "(\\([^(]*)",
  // Breaks on a hyphen - e.g. "12345 - 332-445-1234 is my number."
  // We require a space on either side of the hyphen for it to be considered a separator.
  "(?:".concat(pZ, "-|-").concat(pZ, ")").concat(pZ, "*(.+)"),
  // Various types of wide hyphens. Note we have decided not to enforce a space here, since it's
  // possible that it's supposed to be used to break two numbers without spaces, and we haven't
  // seen many instances of it used within a number.
  "[‒-―－]".concat(pZ, "*(.+)"),
  // Breaks on a full stop - e.g. "12345. 332-445-1234 is my number."
  "\\.+".concat(pZ, "*([^.]+)"),
  // Breaks on space - e.g. "3324451234 8002341234"
  "".concat(pZ, "+(").concat(PZ, "+)")
];
var leadLimit = limit(0, 2);
var punctuationLimit = limit(0, 4);
var digitBlockLimit = MAX_LENGTH_FOR_NSN + MAX_LENGTH_COUNTRY_CODE;
var blockLimit = limit(0, digitBlockLimit);
var punctuation = "[".concat(VALID_PUNCTUATION, "]") + punctuationLimit;
var digitSequence = pNd + limit(1, digitBlockLimit);
var PATTERN = "(?:" + LEAD_CLASS + punctuation + ")" + leadLimit + digitSequence + "(?:" + punctuation + digitSequence + ")" + blockLimit + "(?:" + EXTN_PATTERNS_FOR_MATCHING + ")?";
var UNWANTED_END_CHAR_PATTERN = new RegExp("[^".concat(_pN).concat(_pL, "#]+$"));
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
var PhoneNumberMatcher = function() {
  function PhoneNumberMatcher2() {
    var text = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var metadata2 = arguments.length > 2 ? arguments[2] : void 0;
    _classCallCheck6(this, PhoneNumberMatcher2);
    options = {
      v2: options.v2,
      defaultCallingCode: options.defaultCallingCode,
      defaultCountry: options.defaultCountry && isSupportedCountry(options.defaultCountry, metadata2) ? options.defaultCountry : void 0,
      leniency: options.leniency || (options.extended ? "POSSIBLE" : "VALID"),
      maxTries: options.maxTries || MAX_SAFE_INTEGER
    };
    if (!options.leniency) {
      throw new TypeError("`leniency` is required");
    }
    if (options.leniency !== "POSSIBLE" && options.leniency !== "VALID") {
      throw new TypeError('Invalid `leniency`: "'.concat(options.leniency, '". Supported values: "POSSIBLE", "VALID".'));
    }
    if (options.maxTries < 0) {
      throw new TypeError("`maxTries` must be `>= 0`");
    }
    this.text = text;
    this.options = options;
    this.metadata = metadata2;
    this.leniency = Leniency_default[options.leniency];
    if (!this.leniency) {
      throw new TypeError('Unknown leniency: "'.concat(options.leniency, '"'));
    }
    this.maxTries = options.maxTries;
    this.PATTERN = new RegExp(PATTERN, "ig");
    this.state = "NOT_READY";
    this.searchIndex = 0;
    this.regExpCache = new RegExpCache(32);
  }
  _createClass6(PhoneNumberMatcher2, [{
    key: "find",
    value: function find() {
      var matches;
      while (this.maxTries > 0 && (matches = this.PATTERN.exec(this.text)) !== null) {
        var candidate = matches[0];
        var offset = matches.index;
        candidate = parsePreCandidate(candidate);
        if (isValidPreCandidate(candidate, offset, this.text)) {
          var match = (
            // Try to come up with a valid match given the entire candidate.
            this.parseAndVerify(candidate, offset, this.text) || this.extractInnerMatch(candidate, offset, this.text)
          );
          if (match) {
            if (this.options.v2) {
              return {
                startsAt: match.startsAt,
                endsAt: match.endsAt,
                number: match.phoneNumber
              };
            } else {
              var phoneNumber = match.phoneNumber;
              var result2 = {
                startsAt: match.startsAt,
                endsAt: match.endsAt,
                phone: phoneNumber.nationalNumber
              };
              if (phoneNumber.country) {
                if (USE_NON_GEOGRAPHIC_COUNTRY_CODE4 && country === "001") {
                  result2.countryCallingCode = phoneNumber.countryCallingCode;
                } else {
                  result2.country = phoneNumber.country;
                }
              } else {
                result2.countryCallingCode = phoneNumber.countryCallingCode;
              }
              if (phoneNumber.ext) {
                result2.ext = phoneNumber.ext;
              }
              return result2;
            }
          }
        }
        this.maxTries--;
      }
    }
    /**
     * Attempts to extract a match from `substring`
     * if the substring itself does not qualify as a match.
     */
  }, {
    key: "extractInnerMatch",
    value: function extractInnerMatch(substring, offset, text) {
      for (var _iterator = _createForOfIteratorHelperLoose10(INNER_MATCHES), _step; !(_step = _iterator()).done; ) {
        var innerMatchPattern = _step.value;
        var isFirstMatch = true;
        var candidateMatch = void 0;
        var innerMatchRegExp = new RegExp(innerMatchPattern, "g");
        while (this.maxTries > 0 && (candidateMatch = innerMatchRegExp.exec(substring)) !== null) {
          if (isFirstMatch) {
            var _candidate = trimAfterFirstMatch(UNWANTED_END_CHAR_PATTERN, substring.slice(0, candidateMatch.index));
            var _match2 = this.parseAndVerify(_candidate, offset, text);
            if (_match2) {
              return _match2;
            }
            this.maxTries--;
            isFirstMatch = false;
          }
          var candidate = trimAfterFirstMatch(UNWANTED_END_CHAR_PATTERN, candidateMatch[1]);
          var candidateIndexGuess = substring.indexOf(candidate, candidateMatch.index);
          var match = this.parseAndVerify(candidate, offset + candidateIndexGuess, text);
          if (match) {
            return match;
          }
          this.maxTries--;
        }
      }
    }
    /**
     * Parses a phone number from the `candidate` using `parse` and
     * verifies it matches the requested `leniency`. If parsing and verification succeed,
     * a corresponding `PhoneNumberMatch` is returned, otherwise this method returns `null`.
     *
     * @param candidate  the candidate match
     * @param offset  the offset of {@code candidate} within {@link #text}
     * @return  the parsed and validated phone number match, or null
     */
  }, {
    key: "parseAndVerify",
    value: function parseAndVerify(candidate, offset, text) {
      if (!isValidCandidate(candidate, offset, text, this.options.leniency)) {
        return;
      }
      var phoneNumber = parsePhoneNumber3(candidate, {
        extended: true,
        defaultCountry: this.options.defaultCountry,
        defaultCallingCode: this.options.defaultCallingCode
      }, this.metadata);
      if (!phoneNumber) {
        return;
      }
      if (!phoneNumber.isPossible()) {
        return;
      }
      if (this.leniency(phoneNumber, {
        candidate,
        defaultCountry: this.options.defaultCountry,
        metadata: this.metadata,
        regExpCache: this.regExpCache
      })) {
        return {
          startsAt: offset,
          endsAt: offset + candidate.length,
          phoneNumber
        };
      }
    }
  }, {
    key: "hasNext",
    value: function hasNext() {
      if (this.state === "NOT_READY") {
        this.lastMatch = this.find();
        if (this.lastMatch) {
          this.state = "READY";
        } else {
          this.state = "DONE";
        }
      }
      return this.state === "READY";
    }
  }, {
    key: "next",
    value: function next() {
      if (!this.hasNext()) {
        throw new Error("No next element");
      }
      var result2 = this.lastMatch;
      this.lastMatch = null;
      this.state = "NOT_READY";
      return result2;
    }
  }]);
  return PhoneNumberMatcher2;
}();

// node_modules/libphonenumber-js/es6/AsYouTypeState.js
function _classCallCheck7(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties7(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass7(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties7(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties7(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var AsYouTypeState = function() {
  function AsYouTypeState2(_ref) {
    var onCountryChange = _ref.onCountryChange, onCallingCodeChange = _ref.onCallingCodeChange;
    _classCallCheck7(this, AsYouTypeState2);
    this.onCountryChange = onCountryChange;
    this.onCallingCodeChange = onCallingCodeChange;
  }
  _createClass7(AsYouTypeState2, [{
    key: "reset",
    value: function reset(_ref2) {
      var country2 = _ref2.country, callingCode = _ref2.callingCode;
      this.international = false;
      this.missingPlus = false;
      this.IDDPrefix = void 0;
      this.callingCode = void 0;
      this.digits = "";
      this.resetNationalSignificantNumber();
      this.initCountryAndCallingCode(country2, callingCode);
    }
  }, {
    key: "resetNationalSignificantNumber",
    value: function resetNationalSignificantNumber() {
      this.nationalSignificantNumber = this.getNationalDigits();
      this.nationalSignificantNumberMatchesInput = true;
      this.nationalPrefix = void 0;
      this.carrierCode = void 0;
      this.complexPrefixBeforeNationalSignificantNumber = void 0;
    }
  }, {
    key: "update",
    value: function update(properties) {
      for (var _i = 0, _Object$keys = Object.keys(properties); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        this[key] = properties[key];
      }
    }
  }, {
    key: "initCountryAndCallingCode",
    value: function initCountryAndCallingCode(country2, callingCode) {
      this.setCountry(country2);
      this.setCallingCode(callingCode);
    }
  }, {
    key: "setCountry",
    value: function setCountry(country2) {
      this.country = country2;
      this.onCountryChange(country2);
    }
  }, {
    key: "setCallingCode",
    value: function setCallingCode(callingCode) {
      this.callingCode = callingCode;
      this.onCallingCodeChange(callingCode, this.country);
    }
  }, {
    key: "startInternationalNumber",
    value: function startInternationalNumber(country2, callingCode) {
      this.international = true;
      this.initCountryAndCallingCode(country2, callingCode);
    }
  }, {
    key: "appendDigits",
    value: function appendDigits(nextDigits) {
      this.digits += nextDigits;
    }
  }, {
    key: "appendNationalSignificantNumberDigits",
    value: function appendNationalSignificantNumberDigits(nextDigits) {
      this.nationalSignificantNumber += nextDigits;
    }
    /**
     * Returns the part of `this.digits` that corresponds to the national number.
     * Basically, all digits that have been input by the user, except for the
     * international prefix and the country calling code part
     * (if the number is an international one).
     * @return {string}
     */
  }, {
    key: "getNationalDigits",
    value: function getNationalDigits() {
      if (this.international) {
        return this.digits.slice((this.IDDPrefix ? this.IDDPrefix.length : 0) + (this.callingCode ? this.callingCode.length : 0));
      }
      return this.digits;
    }
  }, {
    key: "getDigitsWithoutInternationalPrefix",
    value: function getDigitsWithoutInternationalPrefix() {
      if (this.international) {
        if (this.IDDPrefix) {
          return this.digits.slice(this.IDDPrefix.length);
        }
      }
      return this.digits;
    }
  }]);
  return AsYouTypeState2;
}();

// node_modules/libphonenumber-js/es6/AsYouTypeFormatter.util.js
function _createForOfIteratorHelperLoose11(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray12(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray12(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray12(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray12(o, minLen);
}
function _arrayLikeToArray12(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var DIGIT_PLACEHOLDER = "x";
var DIGIT_PLACEHOLDER_MATCHER = new RegExp(DIGIT_PLACEHOLDER);
function repeat(string, times) {
  if (times < 1) {
    return "";
  }
  var result2 = "";
  while (times > 1) {
    if (times & 1) {
      result2 += string;
    }
    times >>= 1;
    string += string;
  }
  return result2 + string;
}
function cutAndStripNonPairedParens(string, cutBeforeIndex) {
  if (string[cutBeforeIndex] === ")") {
    cutBeforeIndex++;
  }
  return stripNonPairedParens(string.slice(0, cutBeforeIndex));
}
function stripNonPairedParens(string) {
  var dangling_braces = [];
  var i = 0;
  while (i < string.length) {
    if (string[i] === "(") {
      dangling_braces.push(i);
    } else if (string[i] === ")") {
      dangling_braces.pop();
    }
    i++;
  }
  var start = 0;
  var cleared_string = "";
  dangling_braces.push(string.length);
  for (var _i = 0, _dangling_braces = dangling_braces; _i < _dangling_braces.length; _i++) {
    var index = _dangling_braces[_i];
    cleared_string += string.slice(start, index);
    start = index + 1;
  }
  return cleared_string;
}
function populateTemplateWithDigits(template, position, digits) {
  for (var _iterator2 = _createForOfIteratorHelperLoose11(digits.split("")), _step2; !(_step2 = _iterator2()).done; ) {
    var digit = _step2.value;
    if (template.slice(position + 1).search(DIGIT_PLACEHOLDER_MATCHER) < 0) {
      return;
    }
    position = template.search(DIGIT_PLACEHOLDER_MATCHER);
    template = template.replace(DIGIT_PLACEHOLDER_MATCHER, digit);
  }
  return [template, position];
}

// node_modules/libphonenumber-js/es6/AsYouTypeFormatter.complete.js
function formatCompleteNumber(state, format3, _ref) {
  var metadata2 = _ref.metadata, shouldTryNationalPrefixFormattingRule = _ref.shouldTryNationalPrefixFormattingRule, getSeparatorAfterNationalPrefix = _ref.getSeparatorAfterNationalPrefix;
  var matcher = new RegExp("^(?:".concat(format3.pattern(), ")$"));
  if (matcher.test(state.nationalSignificantNumber)) {
    return formatNationalNumberWithAndWithoutNationalPrefixFormattingRule(state, format3, {
      metadata: metadata2,
      shouldTryNationalPrefixFormattingRule,
      getSeparatorAfterNationalPrefix
    });
  }
}
function canFormatCompleteNumber(nationalSignificantNumber, metadata2) {
  return checkNumberLength(nationalSignificantNumber, metadata2) === "IS_POSSIBLE";
}
function formatNationalNumberWithAndWithoutNationalPrefixFormattingRule(state, format3, _ref2) {
  var metadata2 = _ref2.metadata, shouldTryNationalPrefixFormattingRule = _ref2.shouldTryNationalPrefixFormattingRule, getSeparatorAfterNationalPrefix = _ref2.getSeparatorAfterNationalPrefix;
  var nationalSignificantNumber = state.nationalSignificantNumber, international = state.international, nationalPrefix = state.nationalPrefix, carrierCode = state.carrierCode;
  if (shouldTryNationalPrefixFormattingRule(format3)) {
    var formattedNumber = formatNationalNumber2(state, format3, {
      useNationalPrefixFormattingRule: true,
      getSeparatorAfterNationalPrefix,
      metadata: metadata2
    });
    if (formattedNumber) {
      return formattedNumber;
    }
  }
  return formatNationalNumber2(state, format3, {
    useNationalPrefixFormattingRule: false,
    getSeparatorAfterNationalPrefix,
    metadata: metadata2
  });
}
function formatNationalNumber2(state, format3, _ref3) {
  var metadata2 = _ref3.metadata, useNationalPrefixFormattingRule = _ref3.useNationalPrefixFormattingRule, getSeparatorAfterNationalPrefix = _ref3.getSeparatorAfterNationalPrefix;
  var formattedNationalNumber = formatNationalNumberUsingFormat(state.nationalSignificantNumber, format3, {
    carrierCode: state.carrierCode,
    useInternationalFormat: state.international,
    withNationalPrefix: useNationalPrefixFormattingRule,
    metadata: metadata2
  });
  if (!useNationalPrefixFormattingRule) {
    if (state.nationalPrefix) {
      formattedNationalNumber = state.nationalPrefix + getSeparatorAfterNationalPrefix(format3) + formattedNationalNumber;
    } else if (state.complexPrefixBeforeNationalSignificantNumber) {
      formattedNationalNumber = state.complexPrefixBeforeNationalSignificantNumber + " " + formattedNationalNumber;
    }
  }
  if (isValidFormattedNationalNumber(formattedNationalNumber, state)) {
    return formattedNationalNumber;
  }
}
function isValidFormattedNationalNumber(formattedNationalNumber, state) {
  return parseDigits(formattedNationalNumber) === state.getNationalDigits();
}

// node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternParser.js
function _classCallCheck8(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties8(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass8(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties8(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties8(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var PatternParser = function() {
  function PatternParser2() {
    _classCallCheck8(this, PatternParser2);
  }
  _createClass8(PatternParser2, [{
    key: "parse",
    value: function parse3(pattern) {
      this.context = [{
        or: true,
        instructions: []
      }];
      this.parsePattern(pattern);
      if (this.context.length !== 1) {
        throw new Error("Non-finalized contexts left when pattern parse ended");
      }
      var _this$context$ = this.context[0], branches = _this$context$.branches, instructions = _this$context$.instructions;
      if (branches) {
        return {
          op: "|",
          args: branches.concat([expandSingleElementArray(instructions)])
        };
      }
      if (instructions.length === 0) {
        throw new Error("Pattern is required");
      }
      if (instructions.length === 1) {
        return instructions[0];
      }
      return instructions;
    }
  }, {
    key: "startContext",
    value: function startContext(context) {
      this.context.push(context);
    }
  }, {
    key: "endContext",
    value: function endContext() {
      this.context.pop();
    }
  }, {
    key: "getContext",
    value: function getContext() {
      return this.context[this.context.length - 1];
    }
  }, {
    key: "parsePattern",
    value: function parsePattern(pattern) {
      if (!pattern) {
        throw new Error("Pattern is required");
      }
      var match = pattern.match(OPERATOR);
      if (!match) {
        if (ILLEGAL_CHARACTER_REGEXP.test(pattern)) {
          throw new Error("Illegal characters found in a pattern: ".concat(pattern));
        }
        this.getContext().instructions = this.getContext().instructions.concat(pattern.split(""));
        return;
      }
      var operator = match[1];
      var before = pattern.slice(0, match.index);
      var rightPart = pattern.slice(match.index + operator.length);
      switch (operator) {
        case "(?:":
          if (before) {
            this.parsePattern(before);
          }
          this.startContext({
            or: true,
            instructions: [],
            branches: []
          });
          break;
        case ")":
          if (!this.getContext().or) {
            throw new Error('")" operator must be preceded by "(?:" operator');
          }
          if (before) {
            this.parsePattern(before);
          }
          if (this.getContext().instructions.length === 0) {
            throw new Error('No instructions found after "|" operator in an "or" group');
          }
          var _this$getContext = this.getContext(), branches = _this$getContext.branches;
          branches.push(expandSingleElementArray(this.getContext().instructions));
          this.endContext();
          this.getContext().instructions.push({
            op: "|",
            args: branches
          });
          break;
        case "|":
          if (!this.getContext().or) {
            throw new Error('"|" operator can only be used inside "or" groups');
          }
          if (before) {
            this.parsePattern(before);
          }
          if (!this.getContext().branches) {
            if (this.context.length === 1) {
              this.getContext().branches = [];
            } else {
              throw new Error('"branches" not found in an "or" group context');
            }
          }
          this.getContext().branches.push(expandSingleElementArray(this.getContext().instructions));
          this.getContext().instructions = [];
          break;
        case "[":
          if (before) {
            this.parsePattern(before);
          }
          this.startContext({
            oneOfSet: true
          });
          break;
        case "]":
          if (!this.getContext().oneOfSet) {
            throw new Error('"]" operator must be preceded by "[" operator');
          }
          this.endContext();
          this.getContext().instructions.push({
            op: "[]",
            args: parseOneOfSet(before)
          });
          break;
        default:
          throw new Error("Unknown operator: ".concat(operator));
      }
      if (rightPart) {
        this.parsePattern(rightPart);
      }
    }
  }]);
  return PatternParser2;
}();
function parseOneOfSet(pattern) {
  var values = [];
  var i = 0;
  while (i < pattern.length) {
    if (pattern[i] === "-") {
      if (i === 0 || i === pattern.length - 1) {
        throw new Error("Couldn't parse a one-of set pattern: ".concat(pattern));
      }
      var prevValue = pattern[i - 1].charCodeAt(0) + 1;
      var nextValue = pattern[i + 1].charCodeAt(0) - 1;
      var value = prevValue;
      while (value <= nextValue) {
        values.push(String.fromCharCode(value));
        value++;
      }
    } else {
      values.push(pattern[i]);
    }
    i++;
  }
  return values;
}
var ILLEGAL_CHARACTER_REGEXP = /[\(\)\[\]\?\:\|]/;
var OPERATOR = new RegExp(
  // any of:
  "(\\||\\(\\?\\:|\\)|\\[|\\])"
);
function expandSingleElementArray(array) {
  if (array.length === 1) {
    return array[0];
  }
  return array;
}

// node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternMatcher.js
function _createForOfIteratorHelperLoose12(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray13(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray13(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray13(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray13(o, minLen);
}
function _arrayLikeToArray13(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _classCallCheck9(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties9(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass9(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties9(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties9(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var PatternMatcher = function() {
  function PatternMatcher2(pattern) {
    _classCallCheck9(this, PatternMatcher2);
    this.matchTree = new PatternParser().parse(pattern);
  }
  _createClass9(PatternMatcher2, [{
    key: "match",
    value: function match(string) {
      var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, allowOverflow = _ref.allowOverflow;
      if (!string) {
        throw new Error("String is required");
      }
      var result2 = _match(string.split(""), this.matchTree, true);
      if (result2 && result2.match) {
        delete result2.matchedChars;
      }
      if (result2 && result2.overflow) {
        if (!allowOverflow) {
          return;
        }
      }
      return result2;
    }
  }]);
  return PatternMatcher2;
}();
function _match(characters, tree, last) {
  if (typeof tree === "string") {
    var characterString = characters.join("");
    if (tree.indexOf(characterString) === 0) {
      if (characters.length === tree.length) {
        return {
          match: true,
          matchedChars: characters
        };
      }
      return {
        partialMatch: true
        // matchedChars: characters
      };
    }
    if (characterString.indexOf(tree) === 0) {
      if (last) {
        if (characters.length > tree.length) {
          return {
            overflow: true
          };
        }
      }
      return {
        match: true,
        matchedChars: characters.slice(0, tree.length)
      };
    }
    return;
  }
  if (Array.isArray(tree)) {
    var restCharacters = characters.slice();
    var i = 0;
    while (i < tree.length) {
      var subtree = tree[i];
      var result2 = _match(restCharacters, subtree, last && i === tree.length - 1);
      if (!result2) {
        return;
      } else if (result2.overflow) {
        return result2;
      } else if (result2.match) {
        restCharacters = restCharacters.slice(result2.matchedChars.length);
        if (restCharacters.length === 0) {
          if (i === tree.length - 1) {
            return {
              match: true,
              matchedChars: characters
            };
          } else {
            return {
              partialMatch: true
              // matchedChars: characters
            };
          }
        }
      } else {
        if (result2.partialMatch) {
          return {
            partialMatch: true
            // matchedChars: characters
          };
        } else {
          throw new Error("Unsupported match result:\n".concat(JSON.stringify(result2, null, 2)));
        }
      }
      i++;
    }
    if (last) {
      return {
        overflow: true
      };
    }
    return {
      match: true,
      matchedChars: characters.slice(0, characters.length - restCharacters.length)
    };
  }
  switch (tree.op) {
    case "|":
      var partialMatch;
      for (var _iterator = _createForOfIteratorHelperLoose12(tree.args), _step; !(_step = _iterator()).done; ) {
        var branch = _step.value;
        var _result = _match(characters, branch, last);
        if (_result) {
          if (_result.overflow) {
            return _result;
          } else if (_result.match) {
            return {
              match: true,
              matchedChars: _result.matchedChars
            };
          } else {
            if (_result.partialMatch) {
              partialMatch = true;
            } else {
              throw new Error("Unsupported match result:\n".concat(JSON.stringify(_result, null, 2)));
            }
          }
        }
      }
      if (partialMatch) {
        return {
          partialMatch: true
          // matchedChars: ...
        };
      }
      return;
    case "[]":
      for (var _iterator2 = _createForOfIteratorHelperLoose12(tree.args), _step2; !(_step2 = _iterator2()).done; ) {
        var _char = _step2.value;
        if (characters[0] === _char) {
          if (characters.length === 1) {
            return {
              match: true,
              matchedChars: characters
            };
          }
          if (last) {
            return {
              overflow: true
            };
          }
          return {
            match: true,
            matchedChars: [_char]
          };
        }
      }
      return;
    default:
      throw new Error("Unsupported instruction tree: ".concat(tree));
  }
}

// node_modules/libphonenumber-js/es6/AsYouTypeFormatter.js
function _createForOfIteratorHelperLoose13(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray14(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray14(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray14(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray14(o, minLen);
}
function _arrayLikeToArray14(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _classCallCheck10(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties10(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass10(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties10(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties10(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var DUMMY_DIGIT = "9";
var LONGEST_NATIONAL_PHONE_NUMBER_LENGTH = 15;
var LONGEST_DUMMY_PHONE_NUMBER = repeat(DUMMY_DIGIT, LONGEST_NATIONAL_PHONE_NUMBER_LENGTH);
var NATIONAL_PREFIX_SEPARATORS_PATTERN = /[- ]/;
var SUPPORT_LEGACY_FORMATTING_PATTERNS = true;
var CREATE_CHARACTER_CLASS_PATTERN = SUPPORT_LEGACY_FORMATTING_PATTERNS && function() {
  return /\[([^\[\]])*\]/g;
};
var CREATE_STANDALONE_DIGIT_PATTERN = SUPPORT_LEGACY_FORMATTING_PATTERNS && function() {
  return /\d(?=[^,}][^,}])/g;
};
var NON_ALTERING_FORMAT_REG_EXP = new RegExp("[" + VALID_PUNCTUATION + "]*\\$1[" + VALID_PUNCTUATION + "]*(\\$\\d[" + VALID_PUNCTUATION + "]*)*$");
var MIN_LEADING_DIGITS_LENGTH = 3;
var AsYouTypeFormatter = function() {
  function AsYouTypeFormatter2(_ref) {
    var state = _ref.state, metadata2 = _ref.metadata;
    _classCallCheck10(this, AsYouTypeFormatter2);
    this.metadata = metadata2;
    this.resetFormat();
  }
  _createClass10(AsYouTypeFormatter2, [{
    key: "resetFormat",
    value: function resetFormat() {
      this.chosenFormat = void 0;
      this.template = void 0;
      this.nationalNumberTemplate = void 0;
      this.populatedNationalNumberTemplate = void 0;
      this.populatedNationalNumberTemplatePosition = -1;
    }
  }, {
    key: "reset",
    value: function reset(numberingPlan, state) {
      this.resetFormat();
      if (numberingPlan) {
        this.isNANP = numberingPlan.callingCode() === "1";
        this.matchingFormats = numberingPlan.formats();
        if (state.nationalSignificantNumber) {
          this.narrowDownMatchingFormats(state);
        }
      } else {
        this.isNANP = void 0;
        this.matchingFormats = [];
      }
    }
    /**
     * Formats an updated phone number.
     * @param  {string} nextDigits — Additional phone number digits.
     * @param  {object} state — `AsYouType` state.
     * @return {[string]} Returns undefined if the updated phone number can't be formatted using any of the available formats.
     */
  }, {
    key: "format",
    value: function format3(nextDigits, state) {
      var _this = this;
      if (canFormatCompleteNumber(state.nationalSignificantNumber, this.metadata)) {
        for (var _iterator = _createForOfIteratorHelperLoose13(this.matchingFormats), _step; !(_step = _iterator()).done; ) {
          var format4 = _step.value;
          var formattedCompleteNumber = formatCompleteNumber(state, format4, {
            metadata: this.metadata,
            shouldTryNationalPrefixFormattingRule: function shouldTryNationalPrefixFormattingRule(format5) {
              return _this.shouldTryNationalPrefixFormattingRule(format5, {
                international: state.international,
                nationalPrefix: state.nationalPrefix
              });
            },
            getSeparatorAfterNationalPrefix: function getSeparatorAfterNationalPrefix(format5) {
              return _this.getSeparatorAfterNationalPrefix(format5);
            }
          });
          if (formattedCompleteNumber) {
            this.resetFormat();
            this.chosenFormat = format4;
            this.setNationalNumberTemplate(formattedCompleteNumber.replace(/\d/g, DIGIT_PLACEHOLDER), state);
            this.populatedNationalNumberTemplate = formattedCompleteNumber;
            this.populatedNationalNumberTemplatePosition = this.template.lastIndexOf(DIGIT_PLACEHOLDER);
            return formattedCompleteNumber;
          }
        }
      }
      return this.formatNationalNumberWithNextDigits(nextDigits, state);
    }
    // Formats the next phone number digits.
  }, {
    key: "formatNationalNumberWithNextDigits",
    value: function formatNationalNumberWithNextDigits(nextDigits, state) {
      var previouslyChosenFormat = this.chosenFormat;
      var newlyChosenFormat = this.chooseFormat(state);
      if (newlyChosenFormat) {
        if (newlyChosenFormat === previouslyChosenFormat) {
          return this.formatNextNationalNumberDigits(nextDigits);
        } else {
          return this.formatNextNationalNumberDigits(state.getNationalDigits());
        }
      }
    }
  }, {
    key: "narrowDownMatchingFormats",
    value: function narrowDownMatchingFormats(_ref2) {
      var _this2 = this;
      var nationalSignificantNumber = _ref2.nationalSignificantNumber, nationalPrefix = _ref2.nationalPrefix, international = _ref2.international;
      var leadingDigits = nationalSignificantNumber;
      var leadingDigitsPatternIndex = leadingDigits.length - MIN_LEADING_DIGITS_LENGTH;
      if (leadingDigitsPatternIndex < 0) {
        leadingDigitsPatternIndex = 0;
      }
      this.matchingFormats = this.matchingFormats.filter(function(format3) {
        return _this2.formatSuits(format3, international, nationalPrefix) && _this2.formatMatches(format3, leadingDigits, leadingDigitsPatternIndex);
      });
      if (this.chosenFormat && this.matchingFormats.indexOf(this.chosenFormat) === -1) {
        this.resetFormat();
      }
    }
  }, {
    key: "formatSuits",
    value: function formatSuits(format3, international, nationalPrefix) {
      if (nationalPrefix && !format3.usesNationalPrefix() && // !format.domesticCarrierCodeFormattingRule() &&
      !format3.nationalPrefixIsOptionalWhenFormattingInNationalFormat()) {
        return false;
      }
      if (!international && !nationalPrefix && format3.nationalPrefixIsMandatoryWhenFormattingInNationalFormat()) {
        return false;
      }
      return true;
    }
  }, {
    key: "formatMatches",
    value: function formatMatches(format3, leadingDigits, leadingDigitsPatternIndex) {
      var leadingDigitsPatternsCount = format3.leadingDigitsPatterns().length;
      if (leadingDigitsPatternsCount === 0) {
        return true;
      }
      leadingDigitsPatternIndex = Math.min(leadingDigitsPatternIndex, leadingDigitsPatternsCount - 1);
      var leadingDigitsPattern = format3.leadingDigitsPatterns()[leadingDigitsPatternIndex];
      if (leadingDigits.length < MIN_LEADING_DIGITS_LENGTH) {
        try {
          return new PatternMatcher(leadingDigitsPattern).match(leadingDigits, {
            allowOverflow: true
          }) !== void 0;
        } catch (error) {
          console.error(error);
          return true;
        }
      }
      return new RegExp("^(".concat(leadingDigitsPattern, ")")).test(leadingDigits);
    }
  }, {
    key: "getFormatFormat",
    value: function getFormatFormat(format3, international) {
      return international ? format3.internationalFormat() : format3.format();
    }
  }, {
    key: "chooseFormat",
    value: function chooseFormat(state) {
      var _this3 = this;
      var _loop = function _loop2() {
        var format3 = _step2.value;
        if (_this3.chosenFormat === format3) {
          return "break";
        }
        if (!NON_ALTERING_FORMAT_REG_EXP.test(_this3.getFormatFormat(format3, state.international))) {
          return "continue";
        }
        if (!_this3.createTemplateForFormat(format3, state)) {
          _this3.matchingFormats = _this3.matchingFormats.filter(function(_) {
            return _ !== format3;
          });
          return "continue";
        }
        _this3.chosenFormat = format3;
        return "break";
      };
      for (var _iterator2 = _createForOfIteratorHelperLoose13(this.matchingFormats.slice()), _step2; !(_step2 = _iterator2()).done; ) {
        var _ret = _loop();
        if (_ret === "break") break;
        if (_ret === "continue") continue;
      }
      if (!this.chosenFormat) {
        this.resetFormat();
      }
      return this.chosenFormat;
    }
  }, {
    key: "createTemplateForFormat",
    value: function createTemplateForFormat(format3, state) {
      if (SUPPORT_LEGACY_FORMATTING_PATTERNS && format3.pattern().indexOf("|") >= 0) {
        return;
      }
      var template = this.getTemplateForFormat(format3, state);
      if (template) {
        this.setNationalNumberTemplate(template, state);
        return true;
      }
    }
  }, {
    key: "getSeparatorAfterNationalPrefix",
    value: function getSeparatorAfterNationalPrefix(format3) {
      if (this.isNANP) {
        return " ";
      }
      if (format3 && format3.nationalPrefixFormattingRule() && NATIONAL_PREFIX_SEPARATORS_PATTERN.test(format3.nationalPrefixFormattingRule())) {
        return " ";
      }
      return "";
    }
  }, {
    key: "getInternationalPrefixBeforeCountryCallingCode",
    value: function getInternationalPrefixBeforeCountryCallingCode(_ref3, options) {
      var IDDPrefix = _ref3.IDDPrefix, missingPlus = _ref3.missingPlus;
      if (IDDPrefix) {
        return options && options.spacing === false ? IDDPrefix : IDDPrefix + " ";
      }
      if (missingPlus) {
        return "";
      }
      return "+";
    }
  }, {
    key: "getTemplate",
    value: function getTemplate(state) {
      if (!this.template) {
        return;
      }
      var index = -1;
      var i = 0;
      var internationalPrefix = state.international ? this.getInternationalPrefixBeforeCountryCallingCode(state, {
        spacing: false
      }) : "";
      while (i < internationalPrefix.length + state.getDigitsWithoutInternationalPrefix().length) {
        index = this.template.indexOf(DIGIT_PLACEHOLDER, index + 1);
        i++;
      }
      return cutAndStripNonPairedParens(this.template, index + 1);
    }
  }, {
    key: "setNationalNumberTemplate",
    value: function setNationalNumberTemplate(template, state) {
      this.nationalNumberTemplate = template;
      this.populatedNationalNumberTemplate = template;
      this.populatedNationalNumberTemplatePosition = -1;
      if (state.international) {
        this.template = this.getInternationalPrefixBeforeCountryCallingCode(state).replace(/[\d\+]/g, DIGIT_PLACEHOLDER) + repeat(DIGIT_PLACEHOLDER, state.callingCode.length) + " " + template;
      } else {
        this.template = template;
      }
    }
    /**
     * Generates formatting template for a national phone number,
     * optionally containing a national prefix, for a format.
     * @param  {Format} format
     * @param  {string} nationalPrefix
     * @return {string}
     */
  }, {
    key: "getTemplateForFormat",
    value: function getTemplateForFormat(format3, _ref4) {
      var nationalSignificantNumber = _ref4.nationalSignificantNumber, international = _ref4.international, nationalPrefix = _ref4.nationalPrefix, complexPrefixBeforeNationalSignificantNumber = _ref4.complexPrefixBeforeNationalSignificantNumber;
      var pattern = format3.pattern();
      if (SUPPORT_LEGACY_FORMATTING_PATTERNS) {
        pattern = pattern.replace(CREATE_CHARACTER_CLASS_PATTERN(), "\\d").replace(CREATE_STANDALONE_DIGIT_PATTERN(), "\\d");
      }
      var digits = LONGEST_DUMMY_PHONE_NUMBER.match(pattern)[0];
      if (nationalSignificantNumber.length > digits.length) {
        return;
      }
      var strictPattern = new RegExp("^" + pattern + "$");
      var nationalNumberDummyDigits = nationalSignificantNumber.replace(/\d/g, DUMMY_DIGIT);
      if (strictPattern.test(nationalNumberDummyDigits)) {
        digits = nationalNumberDummyDigits;
      }
      var numberFormat = this.getFormatFormat(format3, international);
      var nationalPrefixIncludedInTemplate;
      if (this.shouldTryNationalPrefixFormattingRule(format3, {
        international,
        nationalPrefix
      })) {
        var numberFormatWithNationalPrefix = numberFormat.replace(FIRST_GROUP_PATTERN, format3.nationalPrefixFormattingRule());
        if (parseDigits(format3.nationalPrefixFormattingRule()) === (nationalPrefix || "") + parseDigits("$1")) {
          numberFormat = numberFormatWithNationalPrefix;
          nationalPrefixIncludedInTemplate = true;
          if (nationalPrefix) {
            var i = nationalPrefix.length;
            while (i > 0) {
              numberFormat = numberFormat.replace(/\d/, DIGIT_PLACEHOLDER);
              i--;
            }
          }
        }
      }
      var template = digits.replace(new RegExp(pattern), numberFormat).replace(new RegExp(DUMMY_DIGIT, "g"), DIGIT_PLACEHOLDER);
      if (!nationalPrefixIncludedInTemplate) {
        if (complexPrefixBeforeNationalSignificantNumber) {
          template = repeat(DIGIT_PLACEHOLDER, complexPrefixBeforeNationalSignificantNumber.length) + " " + template;
        } else if (nationalPrefix) {
          template = repeat(DIGIT_PLACEHOLDER, nationalPrefix.length) + this.getSeparatorAfterNationalPrefix(format3) + template;
        }
      }
      if (international) {
        template = applyInternationalSeparatorStyle(template);
      }
      return template;
    }
  }, {
    key: "formatNextNationalNumberDigits",
    value: function formatNextNationalNumberDigits(digits) {
      var result2 = populateTemplateWithDigits(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition, digits);
      if (!result2) {
        this.resetFormat();
        return;
      }
      this.populatedNationalNumberTemplate = result2[0];
      this.populatedNationalNumberTemplatePosition = result2[1];
      return cutAndStripNonPairedParens(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition + 1);
    }
  }, {
    key: "shouldTryNationalPrefixFormattingRule",
    value: function shouldTryNationalPrefixFormattingRule(format3, _ref5) {
      var international = _ref5.international, nationalPrefix = _ref5.nationalPrefix;
      if (format3.nationalPrefixFormattingRule()) {
        var usesNationalPrefix = format3.usesNationalPrefix();
        if (usesNationalPrefix && nationalPrefix || !usesNationalPrefix && !international) {
          return true;
        }
      }
    }
  }]);
  return AsYouTypeFormatter2;
}();

// node_modules/libphonenumber-js/es6/AsYouTypeParser.js
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray15(arr, i) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray15(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray15(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray15(o, minLen);
}
function _arrayLikeToArray15(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit2(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr)) return arr;
}
function _classCallCheck11(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties11(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass11(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties11(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties11(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var VALID_FORMATTED_PHONE_NUMBER_DIGITS_PART = "[" + VALID_PUNCTUATION + VALID_DIGITS + "]+";
var VALID_FORMATTED_PHONE_NUMBER_DIGITS_PART_PATTERN = new RegExp("^" + VALID_FORMATTED_PHONE_NUMBER_DIGITS_PART + "$", "i");
var VALID_FORMATTED_PHONE_NUMBER_PART = "(?:[" + PLUS_CHARS + "][" + VALID_PUNCTUATION + VALID_DIGITS + "]*|[" + VALID_PUNCTUATION + VALID_DIGITS + "]+)";
var AFTER_PHONE_NUMBER_DIGITS_END_PATTERN = new RegExp("[^" + VALID_PUNCTUATION + VALID_DIGITS + "]+.*$");
var COMPLEX_NATIONAL_PREFIX = /[^\d\[\]]/;
var AsYouTypeParser = function() {
  function AsYouTypeParser2(_ref) {
    var defaultCountry = _ref.defaultCountry, defaultCallingCode = _ref.defaultCallingCode, metadata2 = _ref.metadata, onNationalSignificantNumberChange = _ref.onNationalSignificantNumberChange;
    _classCallCheck11(this, AsYouTypeParser2);
    this.defaultCountry = defaultCountry;
    this.defaultCallingCode = defaultCallingCode;
    this.metadata = metadata2;
    this.onNationalSignificantNumberChange = onNationalSignificantNumberChange;
  }
  _createClass11(AsYouTypeParser2, [{
    key: "input",
    value: function input(text, state) {
      var _extractFormattedDigi = extractFormattedDigitsAndPlus(text), _extractFormattedDigi2 = _slicedToArray2(_extractFormattedDigi, 2), formattedDigits = _extractFormattedDigi2[0], hasPlus = _extractFormattedDigi2[1];
      var digits = parseDigits(formattedDigits);
      var justLeadingPlus;
      if (hasPlus) {
        if (!state.digits) {
          state.startInternationalNumber();
          if (!digits) {
            justLeadingPlus = true;
          }
        }
      }
      if (digits) {
        this.inputDigits(digits, state);
      }
      return {
        digits,
        justLeadingPlus
      };
    }
    /**
     * Inputs "next" phone number digits.
     * @param  {string} digits
     * @return {string} [formattedNumber] Formatted national phone number (if it can be formatted at this stage). Returning `undefined` means "don't format the national phone number at this stage".
     */
  }, {
    key: "inputDigits",
    value: function inputDigits(nextDigits, state) {
      var digits = state.digits;
      var hasReceivedThreeLeadingDigits = digits.length < 3 && digits.length + nextDigits.length >= 3;
      state.appendDigits(nextDigits);
      if (hasReceivedThreeLeadingDigits) {
        this.extractIddPrefix(state);
      }
      if (this.isWaitingForCountryCallingCode(state)) {
        if (!this.extractCountryCallingCode(state)) {
          return;
        }
      } else {
        state.appendNationalSignificantNumberDigits(nextDigits);
      }
      if (!state.international) {
        if (!this.hasExtractedNationalSignificantNumber) {
          this.extractNationalSignificantNumber(state.getNationalDigits(), function(stateUpdate) {
            return state.update(stateUpdate);
          });
        }
      }
    }
  }, {
    key: "isWaitingForCountryCallingCode",
    value: function isWaitingForCountryCallingCode(_ref2) {
      var international = _ref2.international, callingCode = _ref2.callingCode;
      return international && !callingCode;
    }
    // Extracts a country calling code from a number
    // being entered in internatonal format.
  }, {
    key: "extractCountryCallingCode",
    value: function extractCountryCallingCode2(state) {
      var _extractCountryCallin = extractCountryCallingCode("+" + state.getDigitsWithoutInternationalPrefix(), this.defaultCountry, this.defaultCallingCode, this.metadata.metadata), countryCallingCode = _extractCountryCallin.countryCallingCode, number = _extractCountryCallin.number;
      if (countryCallingCode) {
        state.setCallingCode(countryCallingCode);
        state.update({
          nationalSignificantNumber: number
        });
        return true;
      }
    }
  }, {
    key: "reset",
    value: function reset(numberingPlan) {
      if (numberingPlan) {
        this.hasSelectedNumberingPlan = true;
        var nationalPrefixForParsing = numberingPlan._nationalPrefixForParsing();
        this.couldPossiblyExtractAnotherNationalSignificantNumber = nationalPrefixForParsing && COMPLEX_NATIONAL_PREFIX.test(nationalPrefixForParsing);
      } else {
        this.hasSelectedNumberingPlan = void 0;
        this.couldPossiblyExtractAnotherNationalSignificantNumber = void 0;
      }
    }
    /**
     * Extracts a national (significant) number from user input.
     * Google's library is different in that it only applies `national_prefix_for_parsing`
     * and doesn't apply `national_prefix_transform_rule` after that.
     * https://github.com/google/libphonenumber/blob/a3d70b0487875475e6ad659af404943211d26456/java/libphonenumber/src/com/google/i18n/phonenumbers/AsYouTypeFormatter.java#L539
     * @return {boolean} [extracted]
     */
  }, {
    key: "extractNationalSignificantNumber",
    value: function extractNationalSignificantNumber(nationalDigits, setState) {
      if (!this.hasSelectedNumberingPlan) {
        return;
      }
      var _extractNationalNumbe = extractNationalNumberFromPossiblyIncompleteNumber(nationalDigits, this.metadata), nationalPrefix = _extractNationalNumbe.nationalPrefix, nationalNumber = _extractNationalNumbe.nationalNumber, carrierCode = _extractNationalNumbe.carrierCode;
      if (nationalNumber === nationalDigits) {
        return;
      }
      this.onExtractedNationalNumber(nationalPrefix, carrierCode, nationalNumber, nationalDigits, setState);
      return true;
    }
    /**
     * In Google's code this function is called "attempt to extract longer NDD".
     * "Some national prefixes are a substring of others", they say.
     * @return {boolean} [result] — Returns `true` if extracting a national prefix produced different results from what they were.
     */
  }, {
    key: "extractAnotherNationalSignificantNumber",
    value: function extractAnotherNationalSignificantNumber(nationalDigits, prevNationalSignificantNumber, setState) {
      if (!this.hasExtractedNationalSignificantNumber) {
        return this.extractNationalSignificantNumber(nationalDigits, setState);
      }
      if (!this.couldPossiblyExtractAnotherNationalSignificantNumber) {
        return;
      }
      var _extractNationalNumbe2 = extractNationalNumberFromPossiblyIncompleteNumber(nationalDigits, this.metadata), nationalPrefix = _extractNationalNumbe2.nationalPrefix, nationalNumber = _extractNationalNumbe2.nationalNumber, carrierCode = _extractNationalNumbe2.carrierCode;
      if (nationalNumber === prevNationalSignificantNumber) {
        return;
      }
      this.onExtractedNationalNumber(nationalPrefix, carrierCode, nationalNumber, nationalDigits, setState);
      return true;
    }
  }, {
    key: "onExtractedNationalNumber",
    value: function onExtractedNationalNumber(nationalPrefix, carrierCode, nationalSignificantNumber, nationalDigits, setState) {
      var complexPrefixBeforeNationalSignificantNumber;
      var nationalSignificantNumberMatchesInput;
      var nationalSignificantNumberIndex = nationalDigits.lastIndexOf(nationalSignificantNumber);
      if (nationalSignificantNumberIndex >= 0 && nationalSignificantNumberIndex === nationalDigits.length - nationalSignificantNumber.length) {
        nationalSignificantNumberMatchesInput = true;
        var prefixBeforeNationalNumber = nationalDigits.slice(0, nationalSignificantNumberIndex);
        if (prefixBeforeNationalNumber !== nationalPrefix) {
          complexPrefixBeforeNationalSignificantNumber = prefixBeforeNationalNumber;
        }
      }
      setState({
        nationalPrefix,
        carrierCode,
        nationalSignificantNumber,
        nationalSignificantNumberMatchesInput,
        complexPrefixBeforeNationalSignificantNumber
      });
      this.hasExtractedNationalSignificantNumber = true;
      this.onNationalSignificantNumberChange();
    }
  }, {
    key: "reExtractNationalSignificantNumber",
    value: function reExtractNationalSignificantNumber(state) {
      if (this.extractAnotherNationalSignificantNumber(state.getNationalDigits(), state.nationalSignificantNumber, function(stateUpdate) {
        return state.update(stateUpdate);
      })) {
        return true;
      }
      if (this.extractIddPrefix(state)) {
        this.extractCallingCodeAndNationalSignificantNumber(state);
        return true;
      }
      if (this.fixMissingPlus(state)) {
        this.extractCallingCodeAndNationalSignificantNumber(state);
        return true;
      }
    }
  }, {
    key: "extractIddPrefix",
    value: function extractIddPrefix(state) {
      var international = state.international, IDDPrefix = state.IDDPrefix, digits = state.digits, nationalSignificantNumber = state.nationalSignificantNumber;
      if (international || IDDPrefix) {
        return;
      }
      var numberWithoutIDD = stripIddPrefix(digits, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata);
      if (numberWithoutIDD !== void 0 && numberWithoutIDD !== digits) {
        state.update({
          IDDPrefix: digits.slice(0, digits.length - numberWithoutIDD.length)
        });
        this.startInternationalNumber(state, {
          country: void 0,
          callingCode: void 0
        });
        return true;
      }
    }
  }, {
    key: "fixMissingPlus",
    value: function fixMissingPlus(state) {
      if (!state.international) {
        var _extractCountryCallin2 = extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(state.digits, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata), newCallingCode = _extractCountryCallin2.countryCallingCode, number = _extractCountryCallin2.number;
        if (newCallingCode) {
          state.update({
            missingPlus: true
          });
          this.startInternationalNumber(state, {
            country: state.country,
            callingCode: newCallingCode
          });
          return true;
        }
      }
    }
  }, {
    key: "startInternationalNumber",
    value: function startInternationalNumber(state, _ref3) {
      var country2 = _ref3.country, callingCode = _ref3.callingCode;
      state.startInternationalNumber(country2, callingCode);
      if (state.nationalSignificantNumber) {
        state.resetNationalSignificantNumber();
        this.onNationalSignificantNumberChange();
        this.hasExtractedNationalSignificantNumber = void 0;
      }
    }
  }, {
    key: "extractCallingCodeAndNationalSignificantNumber",
    value: function extractCallingCodeAndNationalSignificantNumber(state) {
      if (this.extractCountryCallingCode(state)) {
        this.extractNationalSignificantNumber(state.getNationalDigits(), function(stateUpdate) {
          return state.update(stateUpdate);
        });
      }
    }
  }]);
  return AsYouTypeParser2;
}();
function extractFormattedPhoneNumber(text) {
  var startsAt = text.search(VALID_FORMATTED_PHONE_NUMBER_PART);
  if (startsAt < 0) {
    return;
  }
  text = text.slice(startsAt);
  var hasPlus;
  if (text[0] === "+") {
    hasPlus = true;
    text = text.slice("+".length);
  }
  text = text.replace(AFTER_PHONE_NUMBER_DIGITS_END_PATTERN, "");
  if (hasPlus) {
    text = "+" + text;
  }
  return text;
}
function _extractFormattedDigitsAndPlus(text) {
  var extractedNumber = extractFormattedPhoneNumber(text) || "";
  if (extractedNumber[0] === "+") {
    return [extractedNumber.slice("+".length), true];
  }
  return [extractedNumber];
}
function extractFormattedDigitsAndPlus(text) {
  var _extractFormattedDigi3 = _extractFormattedDigitsAndPlus(text), _extractFormattedDigi4 = _slicedToArray2(_extractFormattedDigi3, 2), formattedDigits = _extractFormattedDigi4[0], hasPlus = _extractFormattedDigi4[1];
  if (!VALID_FORMATTED_PHONE_NUMBER_DIGITS_PART_PATTERN.test(formattedDigits)) {
    formattedDigits = "";
  }
  return [formattedDigits, hasPlus];
}

// node_modules/libphonenumber-js/es6/AsYouType.js
function _slicedToArray3(arr, i) {
  return _arrayWithHoles3(arr) || _iterableToArrayLimit3(arr, i) || _unsupportedIterableToArray16(arr, i) || _nonIterableRest3();
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray16(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray16(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray16(o, minLen);
}
function _arrayLikeToArray16(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit3(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles3(arr) {
  if (Array.isArray(arr)) return arr;
}
function _classCallCheck12(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties12(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass12(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties12(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties12(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var USE_NON_GEOGRAPHIC_COUNTRY_CODE5 = false;
var AsYouType = function() {
  function AsYouType2(optionsOrDefaultCountry, metadata2) {
    _classCallCheck12(this, AsYouType2);
    this.metadata = new Metadata(metadata2);
    var _this$getCountryAndCa = this.getCountryAndCallingCode(optionsOrDefaultCountry), _this$getCountryAndCa2 = _slicedToArray3(_this$getCountryAndCa, 2), defaultCountry = _this$getCountryAndCa2[0], defaultCallingCode = _this$getCountryAndCa2[1];
    this.defaultCountry = defaultCountry;
    this.defaultCallingCode = defaultCallingCode;
    this.reset();
  }
  _createClass12(AsYouType2, [{
    key: "getCountryAndCallingCode",
    value: function getCountryAndCallingCode(optionsOrDefaultCountry) {
      var defaultCountry;
      var defaultCallingCode;
      if (optionsOrDefaultCountry) {
        if (isObject(optionsOrDefaultCountry)) {
          defaultCountry = optionsOrDefaultCountry.defaultCountry;
          defaultCallingCode = optionsOrDefaultCountry.defaultCallingCode;
        } else {
          defaultCountry = optionsOrDefaultCountry;
        }
      }
      if (defaultCountry && !this.metadata.hasCountry(defaultCountry)) {
        defaultCountry = void 0;
      }
      if (defaultCallingCode) {
        if (USE_NON_GEOGRAPHIC_COUNTRY_CODE5) {
          if (this.metadata.isNonGeographicCallingCode(defaultCallingCode)) {
            defaultCountry = "001";
          }
        }
      }
      return [defaultCountry, defaultCallingCode];
    }
    /**
     * Inputs "next" phone number characters.
     * @param  {string} text
     * @return {string} Formatted phone number characters that have been input so far.
     */
  }, {
    key: "input",
    value: function input(text) {
      var _this$parser$input = this.parser.input(text, this.state), digits = _this$parser$input.digits, justLeadingPlus = _this$parser$input.justLeadingPlus;
      if (justLeadingPlus) {
        this.formattedOutput = "+";
      } else if (digits) {
        this.determineTheCountryIfNeeded();
        if (this.state.nationalSignificantNumber) {
          this.formatter.narrowDownMatchingFormats(this.state);
        }
        var formattedNationalNumber;
        if (this.metadata.hasSelectedNumberingPlan()) {
          formattedNationalNumber = this.formatter.format(digits, this.state);
        }
        if (formattedNationalNumber === void 0) {
          if (this.parser.reExtractNationalSignificantNumber(this.state)) {
            this.determineTheCountryIfNeeded();
            var nationalDigits = this.state.getNationalDigits();
            if (nationalDigits) {
              formattedNationalNumber = this.formatter.format(nationalDigits, this.state);
            }
          }
        }
        this.formattedOutput = formattedNationalNumber ? this.getFullNumber(formattedNationalNumber) : this.getNonFormattedNumber();
      }
      return this.formattedOutput;
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this = this;
      this.state = new AsYouTypeState({
        onCountryChange: function onCountryChange(country2) {
          _this.country = country2;
        },
        onCallingCodeChange: function onCallingCodeChange(callingCode, country2) {
          _this.metadata.selectNumberingPlan(country2, callingCode);
          _this.formatter.reset(_this.metadata.numberingPlan, _this.state);
          _this.parser.reset(_this.metadata.numberingPlan);
        }
      });
      this.formatter = new AsYouTypeFormatter({
        state: this.state,
        metadata: this.metadata
      });
      this.parser = new AsYouTypeParser({
        defaultCountry: this.defaultCountry,
        defaultCallingCode: this.defaultCallingCode,
        metadata: this.metadata,
        state: this.state,
        onNationalSignificantNumberChange: function onNationalSignificantNumberChange() {
          _this.determineTheCountryIfNeeded();
          _this.formatter.reset(_this.metadata.numberingPlan, _this.state);
        }
      });
      this.state.reset({
        country: this.defaultCountry,
        callingCode: this.defaultCallingCode
      });
      this.formattedOutput = "";
      return this;
    }
    /**
     * Returns `true` if the phone number is being input in international format.
     * In other words, returns `true` if and only if the parsed phone number starts with a `"+"`.
     * @return {boolean}
     */
  }, {
    key: "isInternational",
    value: function isInternational() {
      return this.state.international;
    }
    /**
     * Returns the "calling code" part of the phone number when it's being input
     * in an international format.
     * If no valid calling code has been entered so far, returns `undefined`.
     * @return {string} [callingCode]
     */
  }, {
    key: "getCallingCode",
    value: function getCallingCode() {
      if (this.isInternational()) {
        return this.state.callingCode;
      }
    }
    // A legacy alias.
  }, {
    key: "getCountryCallingCode",
    value: function getCountryCallingCode3() {
      return this.getCallingCode();
    }
    /**
     * Returns a two-letter country code of the phone number.
     * Returns `undefined` for "non-geographic" phone numbering plans.
     * Returns `undefined` if no phone number has been input yet.
     * @return {string} [country]
     */
  }, {
    key: "getCountry",
    value: function getCountry() {
      var digits = this.state.digits;
      if (digits) {
        return this._getCountry();
      }
    }
    /**
     * Returns a two-letter country code of the phone number.
     * Returns `undefined` for "non-geographic" phone numbering plans.
     * @return {string} [country]
     */
  }, {
    key: "_getCountry",
    value: function _getCountry() {
      var country2 = this.state.country;
      if (USE_NON_GEOGRAPHIC_COUNTRY_CODE5) {
        if (country2 === "001") {
          return;
        }
      }
      return country2;
    }
  }, {
    key: "determineTheCountryIfNeeded",
    value: function determineTheCountryIfNeeded() {
      if (!this.state.country || this.isCountryCallingCodeAmbiguous()) {
        this.determineTheCountry();
      }
    }
    // Prepends `+CountryCode ` in case of an international phone number
  }, {
    key: "getFullNumber",
    value: function getFullNumber(formattedNationalNumber) {
      var _this2 = this;
      if (this.isInternational()) {
        var prefix = function prefix2(text) {
          return _this2.formatter.getInternationalPrefixBeforeCountryCallingCode(_this2.state, {
            spacing: text ? true : false
          }) + text;
        };
        var callingCode = this.state.callingCode;
        if (!callingCode) {
          return prefix("".concat(this.state.getDigitsWithoutInternationalPrefix()));
        }
        if (!formattedNationalNumber) {
          return prefix(callingCode);
        }
        return prefix("".concat(callingCode, " ").concat(formattedNationalNumber));
      }
      return formattedNationalNumber;
    }
  }, {
    key: "getNonFormattedNationalNumberWithPrefix",
    value: function getNonFormattedNationalNumberWithPrefix() {
      var _this$state = this.state, nationalSignificantNumber = _this$state.nationalSignificantNumber, complexPrefixBeforeNationalSignificantNumber = _this$state.complexPrefixBeforeNationalSignificantNumber, nationalPrefix = _this$state.nationalPrefix;
      var number = nationalSignificantNumber;
      var prefix = complexPrefixBeforeNationalSignificantNumber || nationalPrefix;
      if (prefix) {
        number = prefix + number;
      }
      return number;
    }
  }, {
    key: "getNonFormattedNumber",
    value: function getNonFormattedNumber() {
      var nationalSignificantNumberMatchesInput = this.state.nationalSignificantNumberMatchesInput;
      return this.getFullNumber(nationalSignificantNumberMatchesInput ? this.getNonFormattedNationalNumberWithPrefix() : this.state.getNationalDigits());
    }
  }, {
    key: "getNonFormattedTemplate",
    value: function getNonFormattedTemplate() {
      var number = this.getNonFormattedNumber();
      if (number) {
        return number.replace(/[\+\d]/g, DIGIT_PLACEHOLDER);
      }
    }
  }, {
    key: "isCountryCallingCodeAmbiguous",
    value: function isCountryCallingCodeAmbiguous() {
      var callingCode = this.state.callingCode;
      var countryCodes = this.metadata.getCountryCodesForCallingCode(callingCode);
      return countryCodes && countryCodes.length > 1;
    }
    // Determines the country of the phone number
    // entered so far based on the country phone code
    // and the national phone number.
  }, {
    key: "determineTheCountry",
    value: function determineTheCountry() {
      this.state.setCountry(getCountryByCallingCode(this.isInternational() ? this.state.callingCode : this.defaultCallingCode, {
        nationalNumber: this.state.nationalSignificantNumber,
        defaultCountry: this.defaultCountry,
        metadata: this.metadata
      }));
    }
    /**
     * Returns a E.164 phone number value for the user's input.
     *
     * For example, for country `"US"` and input `"(222) 333-4444"`
     * it will return `"+12223334444"`.
     *
     * For international phone number input, it will also auto-correct
     * some minor errors such as using a national prefix when writing
     * an international phone number. For example, if the user inputs
     * `"+44 0 7400 000000"` then it will return an auto-corrected
     * `"+447400000000"` phone number value.
     *
     * Will return `undefined` if no digits have been input,
     * or when inputting a phone number in national format and no
     * default country or default "country calling code" have been set.
     *
     * @return {string} [value]
     */
  }, {
    key: "getNumberValue",
    value: function getNumberValue() {
      var _this$state2 = this.state, digits = _this$state2.digits, callingCode = _this$state2.callingCode, country2 = _this$state2.country, nationalSignificantNumber = _this$state2.nationalSignificantNumber;
      if (!digits) {
        return;
      }
      if (this.isInternational()) {
        if (callingCode) {
          return "+" + callingCode + nationalSignificantNumber;
        } else {
          return "+" + digits;
        }
      } else {
        if (country2 || callingCode) {
          var callingCode_ = country2 ? this.metadata.countryCallingCode() : callingCode;
          return "+" + callingCode_ + nationalSignificantNumber;
        }
      }
    }
    /**
     * Returns an instance of `PhoneNumber` class.
     * Will return `undefined` if no national (significant) number
     * digits have been entered so far, or if no `defaultCountry` has been
     * set and the user enters a phone number not in international format.
     */
  }, {
    key: "getNumber",
    value: function getNumber() {
      var _this$state3 = this.state, nationalSignificantNumber = _this$state3.nationalSignificantNumber, carrierCode = _this$state3.carrierCode, callingCode = _this$state3.callingCode;
      var country2 = this._getCountry();
      if (!nationalSignificantNumber) {
        return;
      }
      if (!country2 && !callingCode) {
        return;
      }
      if (country2) {
        if (country2 === this.defaultCountry) {
          var metadata2 = new Metadata(this.metadata.metadata);
          metadata2.selectNumberingPlan(country2);
          var _callingCode = metadata2.numberingPlan.callingCode();
          var ambiguousCountries = this.metadata.getCountryCodesForCallingCode(_callingCode);
          if (ambiguousCountries.length > 1) {
            var exactCountry = getCountryByNationalNumber(nationalSignificantNumber, {
              countries: ambiguousCountries,
              defaultCountry: this.defaultCountry,
              metadata: this.metadata.metadata
            });
            if (exactCountry) {
              country2 = exactCountry;
            }
          }
        }
      }
      var phoneNumber = new PhoneNumber(country2 || callingCode, nationalSignificantNumber, this.metadata.metadata);
      if (carrierCode) {
        phoneNumber.carrierCode = carrierCode;
      }
      return phoneNumber;
    }
    /**
     * Returns `true` if the phone number is "possible".
     * Is just a shortcut for `PhoneNumber.isPossible()`.
     * @return {boolean}
     */
  }, {
    key: "isPossible",
    value: function isPossible() {
      var phoneNumber = this.getNumber();
      if (!phoneNumber) {
        return false;
      }
      return phoneNumber.isPossible();
    }
    /**
     * Returns `true` if the phone number is "valid".
     * Is just a shortcut for `PhoneNumber.isValid()`.
     * @return {boolean}
     */
  }, {
    key: "isValid",
    value: function isValid() {
      var phoneNumber = this.getNumber();
      if (!phoneNumber) {
        return false;
      }
      return phoneNumber.isValid();
    }
    /**
     * @deprecated
     * This method is used in `react-phone-number-input/source/input-control.js`
     * in versions before `3.0.16`.
     */
  }, {
    key: "getNationalNumber",
    value: function getNationalNumber() {
      return this.state.nationalSignificantNumber;
    }
    /**
     * Returns the phone number characters entered by the user.
     * @return {string}
     */
  }, {
    key: "getChars",
    value: function getChars() {
      return (this.state.international ? "+" : "") + this.state.digits;
    }
    /**
     * Returns the template for the formatted phone number.
     * @return {string}
     */
  }, {
    key: "getTemplate",
    value: function getTemplate() {
      return this.formatter.getTemplate(this.state) || this.getNonFormattedTemplate() || "";
    }
  }]);
  return AsYouType2;
}();

// node_modules/libphonenumber-js/es6/getCountries.js
function getCountries(metadata2) {
  return new Metadata(metadata2).getCountries();
}

// node_modules/libphonenumber-js/es6/formatIncompletePhoneNumber.js
function formatIncompletePhoneNumber(value, optionsOrDefaultCountry, metadata2) {
  if (!metadata2) {
    metadata2 = optionsOrDefaultCountry;
    optionsOrDefaultCountry = void 0;
  }
  return new AsYouType(optionsOrDefaultCountry, metadata2).input(value);
}

// node_modules/react-phone-number-input/modules/helpers/inputValuePrefix.js
function getPrefixForFormattingValueAsPhoneNumber(_ref) {
  var inputFormat = _ref.inputFormat, country2 = _ref.country, metadata2 = _ref.metadata;
  return inputFormat === "NATIONAL_PART_OF_INTERNATIONAL" ? "+".concat(getCountryCallingCode(country2, metadata2)) : "";
}
function removePrefixFromFormattedPhoneNumber(value, prefix) {
  if (prefix) {
    value = value.slice(prefix.length);
    if (value[0] === " ") {
      value = value.slice(1);
    }
  }
  return value;
}

// node_modules/react-phone-number-input/modules/helpers/parsePhoneNumberCharacter.js
function parsePhoneNumberCharacter_(character, prevParsedCharacters, context) {
  if (context && context.ignoreRest) {
    return;
  }
  var emitEvent = function emitEvent2(eventName) {
    if (context) {
      switch (eventName) {
        case "end":
          context.ignoreRest = true;
          break;
      }
    }
  };
  return parsePhoneNumberCharacter(character, prevParsedCharacters, emitEvent);
}

// node_modules/react-phone-number-input/modules/useInputKeyDownHandler.js
var import_react2 = __toESM(require_react(), 1);
function useInputKeyDownHandler(_ref) {
  var onKeyDown2 = _ref.onKeyDown, inputFormat = _ref.inputFormat;
  return (0, import_react2.useCallback)(function(event) {
    if (event.keyCode === BACKSPACE_KEY_CODE && inputFormat === "INTERNATIONAL") {
      if (event.target instanceof HTMLInputElement) {
        if (getCaretPosition2(event.target) === LEADING_PLUS.length) {
          event.preventDefault();
          return;
        }
      }
    }
    if (onKeyDown2) {
      onKeyDown2(event);
    }
  }, [onKeyDown2, inputFormat]);
}
function getCaretPosition2(element) {
  return element.selectionStart;
}
var BACKSPACE_KEY_CODE = 8;
var LEADING_PLUS = "+";

// node_modules/react-phone-number-input/modules/InputSmart.js
var _excluded2 = ["onKeyDown", "country", "inputFormat", "metadata", "international", "withCountryCallingCode"];
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
function _objectWithoutProperties2(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose2(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function createInput(defaultMetadata) {
  function InputSmart(_ref, ref) {
    var onKeyDown2 = _ref.onKeyDown, country2 = _ref.country, inputFormat = _ref.inputFormat, _ref$metadata = _ref.metadata, metadata2 = _ref$metadata === void 0 ? defaultMetadata : _ref$metadata, international = _ref.international, withCountryCallingCode = _ref.withCountryCallingCode, rest = _objectWithoutProperties2(_ref, _excluded2);
    var format3 = (0, import_react3.useCallback)(function(value) {
      var formatter = new AsYouType(country2, metadata2);
      var prefix = getPrefixForFormattingValueAsPhoneNumber({
        inputFormat,
        country: country2,
        metadata: metadata2
      });
      var text = formatter.input(prefix + value);
      var template = formatter.getTemplate();
      if (prefix) {
        text = removePrefixFromFormattedPhoneNumber(text, prefix);
        if (template) {
          template = removePrefixFromFormattedPhoneNumber(template, prefix);
        }
      }
      return {
        text,
        template
      };
    }, [country2, metadata2]);
    var _onKeyDown = useInputKeyDownHandler({
      onKeyDown: onKeyDown2,
      inputFormat
    });
    return import_react3.default.createElement(Input_default, _extends2({}, rest, {
      ref,
      parse: parsePhoneNumberCharacter_,
      format: format3,
      onKeyDown: _onKeyDown
    }));
  }
  InputSmart = import_react3.default.forwardRef(InputSmart);
  InputSmart.propTypes = {
    /**
     * The parsed phone number.
     * "Parsed" not in a sense of "E.164"
     * but rather in a sense of "having only
     * digits and possibly a leading plus character".
     * Examples: `""`, `"+"`, `"+123"`, `"123"`.
     */
    value: import_prop_types2.default.string.isRequired,
    /**
     * A function of `value: string`.
     * Updates the `value` property.
     */
    onChange: import_prop_types2.default.func.isRequired,
    /**
     * A function of `event: Event`.
     * Handles `keydown` events.
     */
    onKeyDown: import_prop_types2.default.func,
    /**
     * A two-letter country code for formatting `value`
     * as a national phone number (e.g. `(800) 555 35 35`).
     * E.g. "US", "RU", etc.
     * If no `country` is passed then `value`
     * is formatted as an international phone number.
     * (e.g. `+7 800 555 35 35`)
     * This property should've been called `defaultCountry`
     * because it only applies when the user inputs a phone number in a national format
     * and is completely ignored when the user inputs a phone number in an international format.
     */
    country: import_prop_types2.default.string,
    /**
     * The format that the input field value is being input/output in.
     */
    inputFormat: import_prop_types2.default.oneOf(["INTERNATIONAL", "NATIONAL_PART_OF_INTERNATIONAL", "NATIONAL", "INTERNATIONAL_OR_NATIONAL"]).isRequired,
    /**
     * `libphonenumber-js` metadata.
     */
    metadata: import_prop_types2.default.object
  };
  return InputSmart;
}
var InputSmart_default = createInput();

// node_modules/react-phone-number-input/modules/InputBasic.js
var import_react5 = __toESM(require_react(), 1);
var import_prop_types3 = __toESM(require_prop_types(), 1);
var _excluded3 = ["value", "onChange", "onKeyDown", "country", "inputFormat", "metadata", "inputComponent", "international", "withCountryCallingCode"];
function _extends3() {
  _extends3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends3.apply(this, arguments);
}
function _objectWithoutProperties3(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose3(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose3(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function createInput2(defaultMetadata) {
  function InputBasic(_ref, ref) {
    var value = _ref.value, onChange2 = _ref.onChange, onKeyDown2 = _ref.onKeyDown, country2 = _ref.country, inputFormat = _ref.inputFormat, _ref$metadata = _ref.metadata, metadata2 = _ref$metadata === void 0 ? defaultMetadata : _ref$metadata, _ref$inputComponent = _ref.inputComponent, Input2 = _ref$inputComponent === void 0 ? "input" : _ref$inputComponent, international = _ref.international, withCountryCallingCode = _ref.withCountryCallingCode, rest = _objectWithoutProperties3(_ref, _excluded3);
    var prefix = getPrefixForFormattingValueAsPhoneNumber({
      inputFormat,
      country: country2,
      metadata: metadata2
    });
    var _onChange = (0, import_react5.useCallback)(function(event) {
      var newValue = parseIncompletePhoneNumber(event.target.value);
      if (newValue === value) {
        var newValueFormatted = format2(prefix, newValue, country2, metadata2);
        if (newValueFormatted.indexOf(event.target.value) === 0) {
          newValue = newValue.slice(0, -1);
        }
      }
      onChange2(newValue);
    }, [prefix, value, onChange2, country2, metadata2]);
    var _onKeyDown = useInputKeyDownHandler({
      onKeyDown: onKeyDown2,
      inputFormat
    });
    return import_react5.default.createElement(Input2, _extends3({}, rest, {
      ref,
      value: format2(prefix, value, country2, metadata2),
      onChange: _onChange,
      onKeyDown: _onKeyDown
    }));
  }
  InputBasic = import_react5.default.forwardRef(InputBasic);
  InputBasic.propTypes = {
    /**
     * The parsed phone number.
     * "Parsed" not in a sense of "E.164"
     * but rather in a sense of "having only
     * digits and possibly a leading plus character".
     * Examples: `""`, `"+"`, `"+123"`, `"123"`.
     */
    value: import_prop_types3.default.string.isRequired,
    /**
     * A function of `value: string`.
     * Updates the `value` property.
     */
    onChange: import_prop_types3.default.func.isRequired,
    /**
     * A function of `event: Event`.
     * Handles `keydown` events.
     */
    onKeyDown: import_prop_types3.default.func,
    /**
     * A two-letter country code for formatting `value`
     * as a national phone number (e.g. `(800) 555 35 35`).
     * E.g. "US", "RU", etc.
     * If no `country` is passed then `value`
     * is formatted as an international phone number.
     * (e.g. `+7 800 555 35 35`)
     * This property should've been called `defaultCountry`
     * because it only applies when the user inputs a phone number in a national format
     * and is completely ignored when the user inputs a phone number in an international format.
     */
    country: import_prop_types3.default.string,
    /**
     * The format that the input field value is being input/output in.
     */
    inputFormat: import_prop_types3.default.oneOf(["INTERNATIONAL", "NATIONAL_PART_OF_INTERNATIONAL", "NATIONAL", "INTERNATIONAL_OR_NATIONAL"]).isRequired,
    /**
     * `libphonenumber-js` metadata.
     */
    metadata: import_prop_types3.default.object,
    /**
     * The `<input/>` component.
     */
    inputComponent: import_prop_types3.default.elementType
  };
  return InputBasic;
}
var InputBasic_default = createInput2();
function format2(prefix, value, country2, metadata2) {
  return removePrefixFromFormattedPhoneNumber(formatIncompletePhoneNumber(prefix + value, country2, metadata2), prefix);
}

// node_modules/react-phone-number-input/modules/CountrySelect.js
var import_react6 = __toESM(require_react(), 1);
var import_prop_types4 = __toESM(require_prop_types(), 1);
var import_classnames = __toESM(require_classnames(), 1);

// node_modules/country-flag-icons/modules/unicode.js
function getCountryFlag(country2) {
  return getRegionalIndicatorSymbol(country2[0]) + getRegionalIndicatorSymbol(country2[1]);
}
function getRegionalIndicatorSymbol(letter) {
  return String.fromCodePoint(127462 - 65 + letter.toUpperCase().charCodeAt(0));
}

// node_modules/react-phone-number-input/modules/CountrySelect.js
var _excluded4 = ["value", "onChange", "options", "disabled", "readOnly"];
var _excluded22 = ["value", "options", "className", "iconComponent", "getIconAspectRatio", "arrowComponent", "unicodeFlags"];
function _createForOfIteratorHelperLoose14(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray17(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray17(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray17(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray17(o, minLen);
}
function _arrayLikeToArray17(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _extends4() {
  _extends4 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends4.apply(this, arguments);
}
function _objectWithoutProperties4(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose4(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose4(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function CountrySelect(_ref) {
  var value = _ref.value, onChange2 = _ref.onChange, options = _ref.options, disabled = _ref.disabled, readOnly = _ref.readOnly, rest = _objectWithoutProperties4(_ref, _excluded4);
  var onChange_ = (0, import_react6.useCallback)(function(event) {
    var value2 = event.target.value;
    onChange2(value2 === "ZZ" ? void 0 : value2);
  }, [onChange2]);
  var selectedOption = (0, import_react6.useMemo)(function() {
    return getSelectedOption(options, value);
  }, [options, value]);
  return import_react6.default.createElement("select", _extends4({}, rest, {
    disabled: disabled || readOnly,
    readOnly,
    value: value || "ZZ",
    onChange: onChange_
  }), options.map(function(_ref2) {
    var value2 = _ref2.value, label = _ref2.label, divider = _ref2.divider;
    return import_react6.default.createElement("option", {
      key: divider ? "|" : value2 || "ZZ",
      value: divider ? "|" : value2 || "ZZ",
      disabled: divider ? true : false,
      style: divider ? DIVIDER_STYLE : void 0
    }, label);
  }));
}
CountrySelect.propTypes = {
  /**
   * A two-letter country code.
   * Example: "US", "RU", etc.
   */
  value: import_prop_types4.default.string,
  /**
   * A function of `value: string`.
   * Updates the `value` property.
   */
  onChange: import_prop_types4.default.func.isRequired,
  // `<select/>` options.
  options: import_prop_types4.default.arrayOf(import_prop_types4.default.shape({
    value: import_prop_types4.default.string,
    label: import_prop_types4.default.string,
    divider: import_prop_types4.default.bool
  })).isRequired,
  // `readonly` attribute doesn't work on a `<select/>`.
  // https://github.com/catamphetamine/react-phone-number-input/issues/419#issuecomment-1764384480
  // https://www.delftstack.com/howto/html/html-select-readonly/
  // To work around that, if `readOnly: true` property is passed
  // to this component, it behaves analogous to `disabled: true`.
  disabled: import_prop_types4.default.bool,
  readOnly: import_prop_types4.default.bool
};
var DIVIDER_STYLE = {
  fontSize: "1px",
  backgroundColor: "currentColor",
  color: "inherit"
};
function CountrySelectWithIcon(_ref3) {
  var value = _ref3.value, options = _ref3.options, className = _ref3.className, Icon = _ref3.iconComponent, getIconAspectRatio = _ref3.getIconAspectRatio, _ref3$arrowComponent = _ref3.arrowComponent, Arrow = _ref3$arrowComponent === void 0 ? DefaultArrowComponent : _ref3$arrowComponent, unicodeFlags = _ref3.unicodeFlags, rest = _objectWithoutProperties4(_ref3, _excluded22);
  var selectedOption = (0, import_react6.useMemo)(function() {
    return getSelectedOption(options, value);
  }, [options, value]);
  return import_react6.default.createElement("div", {
    className: "PhoneInputCountry"
  }, import_react6.default.createElement(CountrySelect, _extends4({}, rest, {
    value,
    options,
    className: (0, import_classnames.default)("PhoneInputCountrySelect", className)
  })), selectedOption && (unicodeFlags && value ? import_react6.default.createElement("div", {
    className: "PhoneInputCountryIconUnicode"
  }, getCountryFlag(value)) : import_react6.default.createElement(Icon, {
    "aria-hidden": true,
    country: value,
    label: selectedOption.label,
    aspectRatio: unicodeFlags ? 1 : void 0
  })), import_react6.default.createElement(Arrow, null));
}
CountrySelectWithIcon.propTypes = {
  // Country flag component.
  iconComponent: import_prop_types4.default.elementType,
  // Select arrow component.
  arrowComponent: import_prop_types4.default.elementType,
  // Set to `true` to render Unicode flag icons instead of SVG images.
  unicodeFlags: import_prop_types4.default.bool
};
function DefaultArrowComponent() {
  return import_react6.default.createElement("div", {
    className: "PhoneInputCountrySelectArrow"
  });
}
function getSelectedOption(options, value) {
  for (var _iterator = _createForOfIteratorHelperLoose14(options), _step; !(_step = _iterator()).done; ) {
    var option = _step.value;
    if (!option.divider) {
      if (isSameOptionValue(option.value, value)) {
        return option;
      }
    }
  }
}
function isSameOptionValue(value1, value2) {
  if (value1 === void 0 || value1 === null) {
    return value2 === void 0 || value2 === null;
  }
  return value1 === value2;
}

// node_modules/react-phone-number-input/modules/Flag.js
var import_react7 = __toESM(require_react(), 1);
var import_prop_types5 = __toESM(require_prop_types(), 1);
var import_classnames2 = __toESM(require_classnames(), 1);
var _excluded5 = ["country", "countryName", "flags", "flagUrl"];
function _extends5() {
  _extends5 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends5.apply(this, arguments);
}
function _objectWithoutProperties5(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose5(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose5(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function FlagComponent(_ref) {
  var country2 = _ref.country, countryName = _ref.countryName, flags = _ref.flags, flagUrl = _ref.flagUrl, rest = _objectWithoutProperties5(_ref, _excluded5);
  if (flags && flags[country2]) {
    return flags[country2]({
      title: countryName
    });
  }
  return import_react7.default.createElement("img", _extends5({}, rest, {
    alt: countryName,
    role: countryName ? void 0 : "presentation",
    src: flagUrl.replace("{XX}", country2).replace("{xx}", country2.toLowerCase())
  }));
}
FlagComponent.propTypes = {
  // The country to be selected by default.
  // Two-letter country code ("ISO 3166-1 alpha-2").
  country: import_prop_types5.default.string.isRequired,
  // Will be HTML `title` attribute of the `<img/>`.
  countryName: import_prop_types5.default.string.isRequired,
  // Country flag icon components.
  // By default flag icons are inserted as `<img/>`s
  // with their `src` pointed to `country-flag-icons` gitlab pages website.
  // There might be cases (e.g. an offline application)
  // where having a large (3 megabyte) `<svg/>` flags
  // bundle is more appropriate.
  // `import flags from 'react-phone-number-input/flags'`.
  flags: import_prop_types5.default.objectOf(import_prop_types5.default.elementType),
  // A URL for a country flag icon.
  // By default it points to `country-flag-icons` gitlab pages website.
  flagUrl: import_prop_types5.default.string.isRequired
};

// node_modules/react-phone-number-input/modules/InternationalIcon.js
var import_react8 = __toESM(require_react(), 1);
var import_prop_types6 = __toESM(require_prop_types(), 1);
var _excluded6 = ["aspectRatio"];
var _excluded23 = ["title"];
var _excluded32 = ["title"];
function _extends6() {
  _extends6 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends6.apply(this, arguments);
}
function _objectWithoutProperties6(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose6(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose6(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function InternationalIcon(_ref) {
  var aspectRatio = _ref.aspectRatio, rest = _objectWithoutProperties6(_ref, _excluded6);
  if (aspectRatio === 1) {
    return import_react8.default.createElement(InternationalIcon1x1, rest);
  } else {
    return import_react8.default.createElement(InternationalIcon3x2, rest);
  }
}
InternationalIcon.propTypes = {
  title: import_prop_types6.default.string.isRequired,
  aspectRatio: import_prop_types6.default.number
};
function InternationalIcon3x2(_ref2) {
  var title = _ref2.title, rest = _objectWithoutProperties6(_ref2, _excluded23);
  return import_react8.default.createElement("svg", _extends6({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 75 50"
  }), import_react8.default.createElement("title", null, title), import_react8.default.createElement("g", {
    className: "PhoneInputInternationalIconGlobe",
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "2",
    strokeMiterlimit: "10"
  }, import_react8.default.createElement("path", {
    strokeLinecap: "round",
    d: "M47.2,36.1C48.1,36,49,36,50,36c7.4,0,14,1.7,18.5,4.3"
  }), import_react8.default.createElement("path", {
    d: "M68.6,9.6C64.2,12.3,57.5,14,50,14c-7.4,0-14-1.7-18.5-4.3"
  }), import_react8.default.createElement("line", {
    x1: "26",
    y1: "25",
    x2: "74",
    y2: "25"
  }), import_react8.default.createElement("line", {
    x1: "50",
    y1: "1",
    x2: "50",
    y2: "49"
  }), import_react8.default.createElement("path", {
    strokeLinecap: "round",
    d: "M46.3,48.7c1.2,0.2,2.5,0.3,3.7,0.3c13.3,0,24-10.7,24-24S63.3,1,50,1S26,11.7,26,25c0,2,0.3,3.9,0.7,5.8"
  }), import_react8.default.createElement("path", {
    strokeLinecap: "round",
    d: "M46.8,48.2c1,0.6,2.1,0.8,3.2,0.8c6.6,0,12-10.7,12-24S56.6,1,50,1S38,11.7,38,25c0,1.4,0.1,2.7,0.2,4c0,0.1,0,0.2,0,0.2"
  })), import_react8.default.createElement("path", {
    className: "PhoneInputInternationalIconPhone",
    stroke: "none",
    fill: "currentColor",
    d: "M12.4,17.9c2.9-2.9,5.4-4.8,0.3-11.2S4.1,5.2,1.3,8.1C-2,11.4,1.1,23.5,13.1,35.6s24.3,15.2,27.5,11.9c2.8-2.8,7.8-6.3,1.4-11.5s-8.3-2.6-11.2,0.3c-2,2-7.2-2.2-11.7-6.7S10.4,19.9,12.4,17.9z"
  }));
}
InternationalIcon3x2.propTypes = {
  title: import_prop_types6.default.string.isRequired
};
function InternationalIcon1x1(_ref3) {
  var title = _ref3.title, rest = _objectWithoutProperties6(_ref3, _excluded32);
  return import_react8.default.createElement("svg", _extends6({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 50 50"
  }), import_react8.default.createElement("title", null, title), import_react8.default.createElement("g", {
    className: "PhoneInputInternationalIconGlobe",
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, import_react8.default.createElement("path", {
    d: "M8.45,13A21.44,21.44,0,1,1,37.08,41.56"
  }), import_react8.default.createElement("path", {
    d: "M19.36,35.47a36.9,36.9,0,0,1-2.28-13.24C17.08,10.39,21.88.85,27.8.85s10.72,9.54,10.72,21.38c0,6.48-1.44,12.28-3.71,16.21"
  }), import_react8.default.createElement("path", {
    d: "M17.41,33.4A39,39,0,0,1,27.8,32.06c6.62,0,12.55,1.5,16.48,3.86"
  }), import_react8.default.createElement("path", {
    d: "M44.29,8.53c-3.93,2.37-9.86,3.88-16.49,3.88S15.25,10.9,11.31,8.54"
  }), import_react8.default.createElement("line", {
    x1: "27.8",
    y1: "0.85",
    x2: "27.8",
    y2: "34.61"
  }), import_react8.default.createElement("line", {
    x1: "15.2",
    y1: "22.23",
    x2: "49.15",
    y2: "22.23"
  })), import_react8.default.createElement("path", {
    className: "PhoneInputInternationalIconPhone",
    stroke: "transparent",
    fill: "currentColor",
    d: "M9.42,26.64c2.22-2.22,4.15-3.59.22-8.49S3.08,17,.93,19.17c-2.49,2.48-.13,11.74,9,20.89s18.41,11.5,20.89,9c2.15-2.15,5.91-4.77,1-8.71s-6.27-2-8.49.22c-1.55,1.55-5.48-1.69-8.86-5.08S7.87,28.19,9.42,26.64Z"
  }));
}
InternationalIcon1x1.propTypes = {
  title: import_prop_types6.default.string.isRequired
};

// node_modules/react-phone-number-input/modules/helpers/isE164Number.js
function isE164Number(value) {
  if (value.length < 2) {
    return false;
  }
  if (value[0] !== "+") {
    return false;
  }
  var i = 1;
  while (i < value.length) {
    var character = value.charCodeAt(i);
    if (character >= 48 && character <= 57) {
    } else {
      return false;
    }
    i++;
  }
  return true;
}
function validateE164Number(value) {
  if (!isE164Number(value)) {
    console.error("[react-phone-number-input] Expected the initial `value` to be a E.164 phone number. Got", value);
  }
}

// node_modules/react-phone-number-input/modules/helpers/countries.js
function _createForOfIteratorHelperLoose15(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray18(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray18(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray18(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray18(o, minLen);
}
function _arrayLikeToArray18(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function sortCountryOptions(options, order) {
  if (!order) {
    return options;
  }
  var optionsOnTop = [];
  var optionsOnBottom = [];
  var appendTo = optionsOnTop;
  var _loop = function _loop2() {
    var element = _step.value;
    if (element === "|") {
      appendTo.push({
        divider: true
      });
    } else if (element === "..." || element === "…") {
      appendTo = optionsOnBottom;
    } else {
      var countryCode;
      if (element === "🌐") {
        countryCode = void 0;
      } else {
        countryCode = element;
      }
      var index = options.indexOf(options.filter(function(option2) {
        return option2.value === countryCode;
      })[0]);
      var option = options[index];
      options.splice(index, 1);
      appendTo.push(option);
    }
  };
  for (var _iterator = _createForOfIteratorHelperLoose15(order), _step; !(_step = _iterator()).done; ) {
    _loop();
  }
  return optionsOnTop.concat(options).concat(optionsOnBottom);
}
function getSupportedCountryOptions(countryOptions, metadata2) {
  if (countryOptions) {
    countryOptions = countryOptions.filter(function(option) {
      switch (option) {
        case "🌐":
        case "|":
        case "...":
        case "…":
          return true;
        default:
          return isCountrySupportedWithError(option, metadata2);
      }
    });
    if (countryOptions.length > 0) {
      return countryOptions;
    }
  }
}
function isCountrySupportedWithError(country2, metadata2) {
  if (isSupportedCountry(country2, metadata2)) {
    return true;
  } else {
    console.error("Country not found: ".concat(country2));
    return false;
  }
}
function getSupportedCountries(countries, metadata2) {
  if (countries) {
    countries = countries.filter(function(country2) {
      return isCountrySupportedWithError(country2, metadata2);
    });
    if (countries.length === 0) {
      countries = void 0;
    }
  }
  return countries;
}

// node_modules/react-phone-number-input/modules/CountryIcon.js
var import_react9 = __toESM(require_react(), 1);
var import_prop_types7 = __toESM(require_prop_types(), 1);
var import_classnames3 = __toESM(require_classnames(), 1);
var _excluded7 = ["country", "label", "aspectRatio"];
function _extends7() {
  _extends7 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends7.apply(this, arguments);
}
function _objectWithoutProperties7(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose7(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose7(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function createCountryIconComponent(_ref) {
  var flags = _ref.flags, flagUrl = _ref.flagUrl, FlagComponent2 = _ref.flagComponent, InternationalIcon2 = _ref.internationalIcon;
  function CountryIcon(_ref2) {
    var country2 = _ref2.country, label = _ref2.label, aspectRatio = _ref2.aspectRatio, rest = _objectWithoutProperties7(_ref2, _excluded7);
    var _aspectRatio = InternationalIcon2 === InternationalIcon ? aspectRatio : void 0;
    return import_react9.default.createElement("div", _extends7({}, rest, {
      className: (0, import_classnames3.default)("PhoneInputCountryIcon", {
        "PhoneInputCountryIcon--square": _aspectRatio === 1,
        "PhoneInputCountryIcon--border": country2
      })
    }), country2 ? import_react9.default.createElement(FlagComponent2, {
      country: country2,
      countryName: label,
      flags,
      flagUrl,
      className: "PhoneInputCountryIconImg"
    }) : import_react9.default.createElement(InternationalIcon2, {
      title: label,
      aspectRatio: _aspectRatio,
      className: "PhoneInputCountryIconImg"
    }));
  }
  CountryIcon.propTypes = {
    country: import_prop_types7.default.string,
    label: import_prop_types7.default.string.isRequired,
    aspectRatio: import_prop_types7.default.number
  };
  return CountryIcon;
}
var CountryIcon_default = createCountryIconComponent({
  // Must be equal to `defaultProps.flagUrl` in `./PhoneInputWithCountry.js`.
  flagUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg",
  flagComponent: FlagComponent,
  internationalIcon: InternationalIcon
});

// node_modules/react-phone-number-input/modules/useExternalRef.js
var import_react10 = __toESM(require_react(), 1);
function _createForOfIteratorHelperLoose16(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray19(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray19(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray19(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray19(o, minLen);
}
function _arrayLikeToArray19(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function setRefsValue(refs, value) {
  for (var _iterator = _createForOfIteratorHelperLoose16(refs), _step; !(_step = _iterator()).done; ) {
    var ref = _step.value;
    if (ref) {
      setRefValue(ref, value);
    }
  }
}
function setRefValue(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else {
    ref.current = value;
  }
}

// node_modules/react-phone-number-input/modules/PropTypes.js
var import_prop_types8 = __toESM(require_prop_types(), 1);
var metadata = import_prop_types8.default.shape({
  country_calling_codes: import_prop_types8.default.object.isRequired,
  countries: import_prop_types8.default.object.isRequired
});
var labels = import_prop_types8.default.objectOf(import_prop_types8.default.string);

// node_modules/react-phone-number-input/modules/helpers/getInternationalPhoneNumberPrefix.js
function getInternationalPhoneNumberPrefix(country2, metadata2) {
  var prefix = "+" + getCountryCallingCode(country2, metadata2);
  return prefix;
}

// node_modules/react-phone-number-input/modules/helpers/phoneInputHelpers.js
function getPreSelectedCountry(_ref) {
  var value = _ref.value, phoneNumber = _ref.phoneNumber, defaultCountry = _ref.defaultCountry, getAnyCountry = _ref.getAnyCountry, countries = _ref.countries, required = _ref.required, metadata2 = _ref.metadata;
  var country2;
  if (phoneNumber && phoneNumber.country) {
    country2 = phoneNumber.country;
  } else if (defaultCountry) {
    if (!value || couldNumberBelongToCountry(value, defaultCountry, metadata2)) {
      country2 = defaultCountry;
    }
  }
  if (countries && countries.indexOf(country2) < 0) {
    country2 = void 0;
  }
  if (!country2 && required && countries && countries.length > 0) {
    country2 = getAnyCountry();
  }
  return country2;
}
function getCountrySelectOptions(_ref2) {
  var countries = _ref2.countries, countryNames = _ref2.countryNames, addInternationalOption = _ref2.addInternationalOption, compareStringsLocales = _ref2.compareStringsLocales, _compareStrings = _ref2.compareStrings;
  if (!_compareStrings) {
    _compareStrings = compareStrings;
  }
  var countrySelectOptions = countries.map(function(country2) {
    return {
      value: country2,
      // All `locale` country names included in this library
      // include all countries (this is checked at build time).
      // The only case when a country name might be missing
      // is when a developer supplies their own `labels` property.
      // To guard against such cases, a missing country name
      // is substituted by country code.
      label: countryNames[country2] || country2
    };
  });
  countrySelectOptions.sort(function(a, b) {
    return _compareStrings(a.label, b.label, compareStringsLocales);
  });
  if (addInternationalOption) {
    countrySelectOptions.unshift({
      label: countryNames.ZZ
    });
  }
  return countrySelectOptions;
}
function parsePhoneNumber4(value, metadata2) {
  return parsePhoneNumber3(value || "", metadata2);
}
function generateNationalNumberDigits(phoneNumber) {
  return phoneNumber.formatNational().replace(/\D/g, "");
}
function getPhoneDigitsForNewCountry(phoneDigits, _ref3) {
  var prevCountry = _ref3.prevCountry, newCountry = _ref3.newCountry, metadata2 = _ref3.metadata, useNationalFormat = _ref3.useNationalFormat;
  if (prevCountry === newCountry) {
    return phoneDigits;
  }
  if (!phoneDigits) {
    if (useNationalFormat) {
      return "";
    } else {
      if (newCountry) {
        return getInternationalPhoneNumberPrefix(newCountry, metadata2);
      }
      return "";
    }
  }
  if (newCountry) {
    if (phoneDigits[0] === "+") {
      if (useNationalFormat) {
        if (phoneDigits.indexOf("+" + getCountryCallingCode(newCountry, metadata2)) === 0) {
          return stripCountryCallingCode(phoneDigits, newCountry, metadata2);
        }
        return "";
      }
      if (prevCountry) {
        var newCountryPrefix = getInternationalPhoneNumberPrefix(newCountry, metadata2);
        if (phoneDigits.indexOf(newCountryPrefix) === 0) {
          return phoneDigits;
        } else {
          return newCountryPrefix;
        }
      } else {
        var defaultValue = getInternationalPhoneNumberPrefix(newCountry, metadata2);
        if (phoneDigits.indexOf(defaultValue) === 0) {
          return phoneDigits;
        }
        return defaultValue;
      }
    }
  } else {
    if (phoneDigits[0] !== "+") {
      return e164(phoneDigits, prevCountry, metadata2) || "";
    }
  }
  return phoneDigits;
}
function e164(number, country2, metadata2) {
  if (!number) {
    return;
  }
  if (number[0] === "+") {
    if (number === "+") {
      return;
    }
    var asYouType = new AsYouType(country2, metadata2);
    asYouType.input(number);
    return asYouType.getNumberValue();
  }
  if (!country2) {
    return;
  }
  var partial_national_significant_number = getNationalSignificantNumberDigits(number, country2, metadata2);
  return "+".concat(getCountryCallingCode(country2, metadata2)).concat(partial_national_significant_number || "");
}
function trimNumber(number, country2, metadata2) {
  var nationalSignificantNumberPart = getNationalSignificantNumberDigits(number, country2, metadata2);
  if (nationalSignificantNumberPart) {
    var overflowDigitsCount = nationalSignificantNumberPart.length - getMaxNumberLength(country2, metadata2);
    if (overflowDigitsCount > 0) {
      return number.slice(0, number.length - overflowDigitsCount);
    }
  }
  return number;
}
function getMaxNumberLength(country2, metadata2) {
  metadata2 = new Metadata(metadata2);
  metadata2.selectNumberingPlan(country2);
  return metadata2.numberingPlan.possibleLengths()[metadata2.numberingPlan.possibleLengths().length - 1];
}
function getCountryForPartialE164Number(partialE164Number, _ref4) {
  var country2 = _ref4.country, countries = _ref4.countries, defaultCountry = _ref4.defaultCountry, latestCountrySelectedByUser = _ref4.latestCountrySelectedByUser, required = _ref4.required, metadata2 = _ref4.metadata;
  if (partialE164Number === "+") {
    return country2;
  }
  var derived_country = getCountryFromPossiblyIncompleteInternationalPhoneNumber(partialE164Number, metadata2);
  if (derived_country) {
    if (!countries || countries.indexOf(derived_country) >= 0) {
      return derived_country;
    } else {
      return void 0;
    }
  } else if (country2) {
    if (couldNumberBelongToCountry(partialE164Number, country2, metadata2)) {
      if (latestCountrySelectedByUser && couldNumberBelongToCountry(partialE164Number, latestCountrySelectedByUser, metadata2)) {
        return latestCountrySelectedByUser;
      } else if (defaultCountry && couldNumberBelongToCountry(partialE164Number, defaultCountry, metadata2)) {
        return defaultCountry;
      } else {
        if (!required) {
          return void 0;
        }
      }
    } else {
      if (!required) {
        return void 0;
      }
    }
  }
  return country2;
}
function onPhoneDigitsChange(phoneDigits, _ref5) {
  var prevPhoneDigits = _ref5.prevPhoneDigits, country2 = _ref5.country, defaultCountry = _ref5.defaultCountry, latestCountrySelectedByUser = _ref5.latestCountrySelectedByUser, countryRequired = _ref5.countryRequired, getAnyCountry = _ref5.getAnyCountry, countries = _ref5.countries, international = _ref5.international, limitMaxLength = _ref5.limitMaxLength, countryCallingCodeEditable = _ref5.countryCallingCodeEditable, metadata2 = _ref5.metadata;
  if (international && countryCallingCodeEditable === false) {
    if (country2) {
      var prefix = getInternationalPhoneNumberPrefix(country2, metadata2);
      if (phoneDigits.indexOf(prefix) !== 0) {
        var _value;
        var hasStartedTypingInNationalNumberDigitsHavingInputValueSelected = phoneDigits && phoneDigits[0] !== "+";
        if (hasStartedTypingInNationalNumberDigitsHavingInputValueSelected) {
          phoneDigits = prefix + phoneDigits;
          _value = e164(phoneDigits, country2, metadata2);
        } else {
          phoneDigits = prefix;
        }
        return {
          phoneDigits,
          value: _value,
          country: country2
        };
      }
    }
  }
  if (international === false && country2 && phoneDigits && phoneDigits[0] === "+") {
    phoneDigits = convertInternationalPhoneDigitsToNational(phoneDigits, country2, metadata2);
  }
  if (phoneDigits && country2 && limitMaxLength) {
    phoneDigits = trimNumber(phoneDigits, country2, metadata2);
  }
  if (phoneDigits && phoneDigits[0] !== "+" && (!country2 || international)) {
    phoneDigits = "+" + phoneDigits;
  }
  if (!phoneDigits && prevPhoneDigits && prevPhoneDigits[0] === "+") {
    if (international) {
      country2 = void 0;
    } else {
      country2 = defaultCountry;
    }
  }
  if (phoneDigits === "+" && prevPhoneDigits && prevPhoneDigits[0] === "+" && prevPhoneDigits.length > "+".length) {
    country2 = void 0;
  }
  var value;
  if (phoneDigits) {
    if (phoneDigits[0] === "+") {
      if (phoneDigits === "+") {
        value = void 0;
      } else if (country2 && getInternationalPhoneNumberPrefix(country2, metadata2).indexOf(phoneDigits) === 0) {
        value = void 0;
      } else {
        value = e164(phoneDigits, country2, metadata2);
      }
    } else {
      value = e164(phoneDigits, country2, metadata2);
    }
  }
  if (value) {
    country2 = getCountryForPartialE164Number(value, {
      country: country2,
      countries,
      defaultCountry,
      latestCountrySelectedByUser,
      // `countryRequired` flag is not passed here.
      // Instead, it's explicitly checked a bit later in the code.
      required: false,
      metadata: metadata2
    });
    if (international === false && country2 && phoneDigits && phoneDigits[0] === "+") {
      phoneDigits = convertInternationalPhoneDigitsToNational(phoneDigits, country2, metadata2);
      value = e164(phoneDigits, country2, metadata2);
    }
  }
  if (!country2 && countryRequired) {
    country2 = defaultCountry || getAnyCountry();
  }
  return {
    // `phoneDigits` returned here are a "normalized" version of the original `phoneDigits`.
    // The returned `phoneDigits` shouldn't be used anywhere except for passing it as
    // `prevPhoneDigits` parameter to this same function on next input change event.
    phoneDigits,
    country: country2,
    value
  };
}
function convertInternationalPhoneDigitsToNational(input, country2, metadata2) {
  if (input.indexOf(getInternationalPhoneNumberPrefix(country2, metadata2)) === 0) {
    var formatter = new AsYouType(country2, metadata2);
    formatter.input(input);
    var phoneNumber = formatter.getNumber();
    if (phoneNumber) {
      return phoneNumber.formatNational().replace(/\D/g, "");
    } else {
      return "";
    }
  } else {
    return input.replace(/\D/g, "");
  }
}
function getCountryFromPossiblyIncompleteInternationalPhoneNumber(number, metadata2) {
  var formatter = new AsYouType(null, metadata2);
  formatter.input(number);
  return formatter.getCountry();
}
function compareStrings(a, b, locales) {
  if (String.prototype.localeCompare) {
    return a.localeCompare(b, locales);
  }
  return a < b ? -1 : a > b ? 1 : 0;
}
function stripCountryCallingCode(number, country2, metadata2) {
  if (country2) {
    var countryCallingCodePrefix = "+" + getCountryCallingCode(country2, metadata2);
    if (number.length < countryCallingCodePrefix.length) {
      if (countryCallingCodePrefix.indexOf(number) === 0) {
        return "";
      }
    } else {
      if (number.indexOf(countryCallingCodePrefix) === 0) {
        return number.slice(countryCallingCodePrefix.length);
      }
    }
  }
  for (var _i = 0, _Object$keys = Object.keys(metadata2.country_calling_codes); _i < _Object$keys.length; _i++) {
    var country_calling_code = _Object$keys[_i];
    if (number.indexOf(country_calling_code) === "+".length) {
      return number.slice("+".length + country_calling_code.length);
    }
  }
  return "";
}
function getNationalSignificantNumberDigits(number, country2, metadata2) {
  var formatter = new AsYouType(country2, metadata2);
  formatter.input(number);
  var phoneNumber = formatter.getNumber();
  return phoneNumber && phoneNumber.nationalNumber;
}
function couldNumberBelongToCountry(number, country2, metadata2) {
  var intlPhoneNumberPrefix = getInternationalPhoneNumberPrefix(country2, metadata2);
  var i = 0;
  while (i < number.length && i < intlPhoneNumberPrefix.length) {
    if (number[i] !== intlPhoneNumberPrefix[i]) {
      return false;
    }
    i++;
  }
  return true;
}
function getInitialPhoneDigits(_ref6) {
  var value = _ref6.value, phoneNumber = _ref6.phoneNumber, defaultCountry = _ref6.defaultCountry, international = _ref6.international, useNationalFormat = _ref6.useNationalFormat, metadata2 = _ref6.metadata;
  if ((international === false || useNationalFormat) && phoneNumber && phoneNumber.country) {
    return generateNationalNumberDigits(phoneNumber);
  }
  if (!value && international && defaultCountry) {
    return getInternationalPhoneNumberPrefix(defaultCountry, metadata2);
  }
  return value;
}

// node_modules/react-phone-number-input/modules/helpers/getPhoneInputWithCountryStateUpdateFromNewProps.js
function _typeof3(o) {
  "@babel/helpers - typeof";
  return _typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof3(o);
}
function ownKeys8(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread8(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys8(Object(t), true).forEach(function(r2) {
      _defineProperty8(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys8(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty8(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof3(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof3(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof3(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function getPhoneInputWithCountryStateUpdateFromNewProps(props, prevProps, state) {
  var metadata2 = props.metadata, countries = props.countries, newDefaultCountry = props.defaultCountry, newValue = props.value, newReset = props.reset, international = props.international, displayInitialValueAsLocalNumber = props.displayInitialValueAsLocalNumber, initialValueFormat = props.initialValueFormat;
  var prevDefaultCountry = prevProps.defaultCountry, prevValue = prevProps.value, prevReset = prevProps.reset;
  var country2 = state.country, value = state.value, hasUserSelectedACountry = state.hasUserSelectedACountry, latestCountrySelectedByUser = state.latestCountrySelectedByUser;
  var _getInitialPhoneDigits = function _getInitialPhoneDigits2(parameters) {
    return getInitialPhoneDigits(_objectSpread8(_objectSpread8({}, parameters), {}, {
      international,
      useNationalFormat: displayInitialValueAsLocalNumber || initialValueFormat === "national",
      metadata: metadata2
    }));
  };
  if (newReset !== prevReset) {
    return {
      phoneDigits: _getInitialPhoneDigits({
        value: void 0,
        defaultCountry: newDefaultCountry
      }),
      value: void 0,
      country: newDefaultCountry,
      latestCountrySelectedByUser: void 0,
      hasUserSelectedACountry: void 0
    };
  }
  if (newDefaultCountry !== prevDefaultCountry) {
    var isNewDefaultCountrySupported = !newDefaultCountry || isCountrySupportedWithError(newDefaultCountry, metadata2);
    var noValueHasBeenEnteredByTheUser = (
      // By default, "no value has been entered" means `value` is `undefined`.
      !value || // When `international` is `true`, and some country has been pre-selected,
      // then the `<input/>` contains a pre-filled value of `+${countryCallingCode}${leadingDigits}`,
      // so in case of `international` being `true`, "the user hasn't entered anything" situation
      // doesn't just mean `value` is `undefined`, but could also mean `value` is `+${countryCallingCode}`.
      international && value === _getInitialPhoneDigits({
        value: void 0,
        defaultCountry: prevDefaultCountry
      })
    );
    var noValueHasBeenEntered = !newValue && noValueHasBeenEnteredByTheUser;
    if (!hasUserSelectedACountry && isNewDefaultCountrySupported && noValueHasBeenEntered) {
      return {
        country: newDefaultCountry,
        // If `phoneDigits` is empty, then automatically select the new `country`
        // and set `phoneDigits` to `+{getCountryCallingCode(newCountry)}`.
        // The code assumes that "no phone number has been entered by the user",
        // and no `value` property has been passed, so the `phoneNumber` parameter
        // of `_getInitialPhoneDigits({ value, phoneNumber, ... })` is `undefined`.
        phoneDigits: _getInitialPhoneDigits({
          value: void 0,
          defaultCountry: newDefaultCountry
        }),
        // `value` is `undefined` and it stays so.
        value: void 0
      };
    }
  }
  if (!valuesAreEqual(newValue, prevValue) && !valuesAreEqual(newValue, value)) {
    var phoneNumber;
    var parsedCountry;
    if (newValue) {
      if (newValue) {
        validateE164Number(newValue);
      }
      phoneNumber = parsePhoneNumber4(newValue, metadata2);
      var supportedCountries = getSupportedCountries(countries, metadata2);
      if (phoneNumber && phoneNumber.country) {
        if (!supportedCountries || supportedCountries.indexOf(phoneNumber.country) >= 0) {
          parsedCountry = phoneNumber.country;
        }
      } else {
        parsedCountry = getCountryForPartialE164Number(newValue, {
          country: void 0,
          countries: supportedCountries,
          metadata: metadata2
        });
        if (!parsedCountry) {
          if (newDefaultCountry) {
            if (newValue.indexOf(getInternationalPhoneNumberPrefix(newDefaultCountry, metadata2)) === 0) {
              parsedCountry = newDefaultCountry;
            }
          }
        }
      }
    }
    var userCountrySelectionHistoryStateUpdate;
    if (newValue) {
      if (latestCountrySelectedByUser) {
        var couldNewValueCorrespondToLatestCountrySelectedByUser = parsedCountry ? latestCountrySelectedByUser === parsedCountry : couldNumberBelongToCountry(newValue, latestCountrySelectedByUser, metadata2);
        if (couldNewValueCorrespondToLatestCountrySelectedByUser) {
          if (!parsedCountry) {
            parsedCountry = latestCountrySelectedByUser;
          }
        } else {
          userCountrySelectionHistoryStateUpdate = {
            latestCountrySelectedByUser: void 0
          };
        }
      }
    } else {
      userCountrySelectionHistoryStateUpdate = {
        latestCountrySelectedByUser: void 0,
        hasUserSelectedACountry: void 0
      };
    }
    return _objectSpread8(_objectSpread8({}, userCountrySelectionHistoryStateUpdate), {}, {
      phoneDigits: _getInitialPhoneDigits({
        phoneNumber,
        value: newValue,
        defaultCountry: newDefaultCountry
      }),
      value: newValue,
      country: newValue ? parsedCountry : newDefaultCountry
    });
  }
}
function valuesAreEqual(value1, value2) {
  if (value1 === null) {
    value1 = void 0;
  }
  if (value2 === null) {
    value2 = void 0;
  }
  return value1 === value2;
}

// node_modules/react-phone-number-input/modules/PhoneInputWithCountry.js
var _excluded8 = ["name", "disabled", "readOnly", "autoComplete", "style", "className", "inputRef", "inputComponent", "numberInputProps", "smartCaret", "countrySelectComponent", "countrySelectProps", "containerComponent", "containerComponentProps", "defaultCountry", "countries", "countryOptionsOrder", "labels", "flags", "flagComponent", "flagUrl", "addInternationalOption", "internationalIcon", "displayInitialValueAsLocalNumber", "initialValueFormat", "onCountryChange", "limitMaxLength", "countryCallingCodeEditable", "focusInputOnCountrySelection", "reset", "metadata", "international", "locales"];
function _typeof4(o) {
  "@babel/helpers - typeof";
  return _typeof4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof4(o);
}
function ownKeys9(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread9(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys9(Object(t), true).forEach(function(r2) {
      _defineProperty9(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys9(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _extends8() {
  _extends8 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends8.apply(this, arguments);
}
function _objectWithoutProperties8(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose8(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose8(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _classCallCheck13(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties13(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey2(descriptor.key), descriptor);
  }
}
function _createClass13(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties13(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties13(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf2(o), _possibleConstructorReturn2(t, _isNativeReflectConstruct2() ? Reflect.construct(o, e || [], _getPrototypeOf2(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn2(self, call2) {
  if (call2 && (_typeof4(call2) === "object" || typeof call2 === "function")) {
    return call2;
  } else if (call2 !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized2(self);
}
function _assertThisInitialized2(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct2() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct2 = function _isNativeReflectConstruct3() {
    return !!t;
  })();
}
function _getPrototypeOf2(o) {
  _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf3(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf2(o);
}
function _inherits2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf2(subClass, superClass);
}
function _setPrototypeOf2(o, p) {
  _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf3(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf2(o, p);
}
function _defineProperty9(obj, key, value) {
  key = _toPropertyKey2(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey2(t) {
  var i = _toPrimitive2(t, "string");
  return "symbol" == _typeof4(i) ? i : i + "";
}
function _toPrimitive2(t, r) {
  if ("object" != _typeof4(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof4(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var PhoneNumberInput_ = function(_React$PureComponent) {
  function PhoneNumberInput_2(props) {
    var _this;
    _classCallCheck13(this, PhoneNumberInput_2);
    _this = _callSuper(this, PhoneNumberInput_2, [props]);
    _defineProperty9(_this, "setInputRef", function(instance) {
      setRefsValue([_this.props.inputRef, _this.inputRef], instance);
    });
    _defineProperty9(_this, "isCountrySupportedWithError", function(country2) {
      var metadata2 = _this.props.metadata;
      return isCountrySupportedWithError(country2, metadata2);
    });
    _defineProperty9(_this, "onCountryChange", function(newCountry) {
      var _this$props = _this.props, international = _this$props.international, metadata2 = _this$props.metadata, onChange2 = _this$props.onChange, focusInputOnCountrySelection = _this$props.focusInputOnCountrySelection;
      var _this$state = _this.state, prevPhoneDigits = _this$state.phoneDigits, prevCountry = _this$state.country;
      var newPhoneDigits = getPhoneDigitsForNewCountry(prevPhoneDigits, {
        prevCountry,
        newCountry,
        metadata: metadata2,
        // Convert the phone number to "national" format
        // when the user changes the selected country by hand.
        useNationalFormat: !international
      });
      var newValue = e164(newPhoneDigits, newCountry, metadata2);
      if (focusInputOnCountrySelection) {
        _this.inputRef.current.focus();
      }
      _this.setState({
        country: newCountry,
        latestCountrySelectedByUser: newCountry,
        hasUserSelectedACountry: true,
        phoneDigits: newPhoneDigits,
        value: newValue
      }, function() {
        onChange2(newValue);
      });
    });
    _defineProperty9(_this, "onChange", function(_phoneDigits) {
      var _this$props2 = _this.props, defaultCountry = _this$props2.defaultCountry, onChange2 = _this$props2.onChange, addInternationalOption = _this$props2.addInternationalOption, international = _this$props2.international, limitMaxLength = _this$props2.limitMaxLength, countryCallingCodeEditable = _this$props2.countryCallingCodeEditable, metadata2 = _this$props2.metadata;
      var _this$state2 = _this.state, countries = _this$state2.countries, prevPhoneDigits = _this$state2.phoneDigits, currentlySelectedCountry = _this$state2.country, latestCountrySelectedByUser = _this$state2.latestCountrySelectedByUser;
      var _onPhoneDigitsChange = onPhoneDigitsChange(_phoneDigits, {
        prevPhoneDigits,
        country: currentlySelectedCountry,
        countryRequired: !addInternationalOption,
        defaultCountry,
        latestCountrySelectedByUser,
        getAnyCountry: function getAnyCountry() {
          return _this.getFirstSupportedCountry({
            countries
          });
        },
        countries,
        international,
        limitMaxLength,
        countryCallingCodeEditable,
        metadata: metadata2
      }), phoneDigits = _onPhoneDigitsChange.phoneDigits, country2 = _onPhoneDigitsChange.country, value = _onPhoneDigitsChange.value;
      var stateUpdate = {
        phoneDigits,
        value,
        country: country2
      };
      if (latestCountrySelectedByUser && value && !couldNumberBelongToCountry(value, latestCountrySelectedByUser, metadata2)) {
        stateUpdate.latestCountrySelectedByUser = void 0;
      }
      if (countryCallingCodeEditable === false) {
        if (!value && phoneDigits === _this.state.phoneDigits) {
          stateUpdate.forceRerender = {};
        }
      }
      _this.setState(
        stateUpdate,
        // Update the new `value` property.
        // Doing it after the `state` has been updated
        // because `onChange()` will trigger `getDerivedStateFromProps()`
        // with the new `value` which will be compared to `state.value` there.
        function() {
          return onChange2(value);
        }
      );
    });
    _defineProperty9(_this, "_onFocus", function() {
      return _this.setState({
        isFocused: true
      });
    });
    _defineProperty9(_this, "_onBlur", function() {
      return _this.setState({
        isFocused: false
      });
    });
    _defineProperty9(_this, "onFocus", function(event) {
      _this._onFocus();
      var onFocus = _this.props.onFocus;
      if (onFocus) {
        onFocus(event);
      }
    });
    _defineProperty9(_this, "onBlur", function(event) {
      var onBlur = _this.props.onBlur;
      _this._onBlur();
      if (onBlur) {
        onBlur(event);
      }
    });
    _defineProperty9(_this, "onCountryFocus", function(event) {
      _this._onFocus();
      var countrySelectProps = _this.props.countrySelectProps;
      if (countrySelectProps) {
        var onFocus = countrySelectProps.onFocus;
        if (onFocus) {
          onFocus(event);
        }
      }
    });
    _defineProperty9(_this, "onCountryBlur", function(event) {
      _this._onBlur();
      var countrySelectProps = _this.props.countrySelectProps;
      if (countrySelectProps) {
        var onBlur = countrySelectProps.onBlur;
        if (onBlur) {
          onBlur(event);
        }
      }
    });
    _this.inputRef = import_react11.default.createRef();
    var _this$props3 = _this.props, _value = _this$props3.value, labels2 = _this$props3.labels, _international = _this$props3.international, _addInternationalOption = _this$props3.addInternationalOption, displayInitialValueAsLocalNumber = _this$props3.displayInitialValueAsLocalNumber, initialValueFormat = _this$props3.initialValueFormat, _metadata = _this$props3.metadata;
    var _this$props4 = _this.props, _defaultCountry = _this$props4.defaultCountry, _countries = _this$props4.countries;
    if (_defaultCountry) {
      if (!_this.isCountrySupportedWithError(_defaultCountry)) {
        _defaultCountry = void 0;
      }
    }
    if (_value) {
      validateE164Number(_value);
    }
    _countries = getSupportedCountries(_countries, _metadata);
    var phoneNumber = parsePhoneNumber4(_value, _metadata);
    _this.CountryIcon = createCountryIconComponent(_this.props);
    var preSelectedCountry = getPreSelectedCountry({
      value: _value,
      phoneNumber,
      defaultCountry: _defaultCountry,
      required: !_addInternationalOption,
      countries: _countries || getCountries(_metadata),
      getAnyCountry: function getAnyCountry() {
        return _this.getFirstSupportedCountry({
          countries: _countries
        });
      },
      metadata: _metadata
    });
    _this.state = {
      // Workaround for `this.props` inside `getDerivedStateFromProps()`.
      props: _this.props,
      // The country selected.
      country: preSelectedCountry,
      // `countries` are stored in `this.state` because they're filtered.
      // For example, a developer might theoretically pass some unsupported
      // countries as part of the `countries` property, and because of that
      // the component uses `this.state.countries` (which are filtered)
      // instead of `this.props.countries`
      // (which could potentially contain unsupported countries).
      countries: _countries,
      // `phoneDigits` state property holds non-formatted user's input.
      // The reason is that there's no way of finding out
      // in which form should `value` be displayed: international or national.
      // E.g. if `value` is `+78005553535` then it could be input
      // by a user both as `8 (800) 555-35-35` and `+7 800 555 35 35`.
      // Hence storing just `value` is not sufficient for correct formatting.
      // E.g. if a user entered `8 (800) 555-35-35`
      // then value is `+78005553535` and `phoneDigits` are `88005553535`
      // and if a user entered `+7 800 555 35 35`
      // then value is `+78005553535` and `phoneDigits` are `+78005553535`.
      phoneDigits: getInitialPhoneDigits({
        value: _value,
        phoneNumber,
        defaultCountry: _defaultCountry,
        international: _international,
        useNationalFormat: displayInitialValueAsLocalNumber || initialValueFormat === "national",
        metadata: _metadata
      }),
      // `value` property is duplicated in state.
      // The reason is that `getDerivedStateFromProps()`
      // needs this `value` to compare to the new `value` property
      // to find out if `phoneDigits` needs updating:
      // If the `value` property was changed externally
      // then it won't be equal to `state.value`
      // in which case `phoneDigits` and `country` should be updated.
      value: _value
    };
    return _this;
  }
  _inherits2(PhoneNumberInput_2, _React$PureComponent);
  return _createClass13(PhoneNumberInput_2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onCountryChange = this.props.onCountryChange;
      var defaultCountry = this.props.defaultCountry;
      var selectedCountry = this.state.country;
      if (onCountryChange) {
        if (defaultCountry) {
          if (!this.isCountrySupportedWithError(defaultCountry)) {
            defaultCountry = void 0;
          }
        }
        if (selectedCountry !== defaultCountry) {
          onCountryChange(selectedCountry);
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var onCountryChange = this.props.onCountryChange;
      var country2 = this.state.country;
      if (onCountryChange && country2 !== prevState.country) {
        onCountryChange(country2);
      }
    }
  }, {
    key: "getCountrySelectOptions",
    value: function getCountrySelectOptions2(_ref) {
      var countries = _ref.countries;
      var _this$props5 = this.props, international = _this$props5.international, countryCallingCodeEditable = _this$props5.countryCallingCodeEditable, countryOptionsOrder = _this$props5.countryOptionsOrder, addInternationalOption = _this$props5.addInternationalOption, labels2 = _this$props5.labels, locales = _this$props5.locales, metadata2 = _this$props5.metadata;
      return this.useMemoCountrySelectOptions(function() {
        return sortCountryOptions(getCountrySelectOptions({
          countries: countries || getCountries(metadata2),
          countryNames: labels2,
          addInternationalOption: international && countryCallingCodeEditable === false ? false : addInternationalOption,
          compareStringsLocales: locales
          // compareStrings
        }), getSupportedCountryOptions(countryOptionsOrder, metadata2));
      }, [countries, countryOptionsOrder, addInternationalOption, labels2, metadata2]);
    }
  }, {
    key: "useMemoCountrySelectOptions",
    value: function useMemoCountrySelectOptions(generator, dependencies) {
      if (!this.countrySelectOptionsMemoDependencies || !areEqualArrays(dependencies, this.countrySelectOptionsMemoDependencies)) {
        this.countrySelectOptionsMemo = generator();
        this.countrySelectOptionsMemoDependencies = dependencies;
      }
      return this.countrySelectOptionsMemo;
    }
  }, {
    key: "getFirstSupportedCountry",
    value: function getFirstSupportedCountry(_ref2) {
      var countries = _ref2.countries;
      var countryOptions = this.getCountrySelectOptions({
        countries
      });
      return countryOptions[0].value;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props, name = _this$props6.name, disabled = _this$props6.disabled, readOnly = _this$props6.readOnly, autoComplete = _this$props6.autoComplete, style = _this$props6.style, className = _this$props6.className, inputRef = _this$props6.inputRef, inputComponent = _this$props6.inputComponent, numberInputProps = _this$props6.numberInputProps, smartCaret = _this$props6.smartCaret, CountrySelectComponent = _this$props6.countrySelectComponent, countrySelectProps = _this$props6.countrySelectProps, ContainerComponent = _this$props6.containerComponent, containerComponentProps = _this$props6.containerComponentProps, defaultCountry = _this$props6.defaultCountry, countriesProperty = _this$props6.countries, countryOptionsOrder = _this$props6.countryOptionsOrder, labels2 = _this$props6.labels, flags = _this$props6.flags, flagComponent = _this$props6.flagComponent, flagUrl = _this$props6.flagUrl, addInternationalOption = _this$props6.addInternationalOption, internationalIcon = _this$props6.internationalIcon, displayInitialValueAsLocalNumber = _this$props6.displayInitialValueAsLocalNumber, initialValueFormat = _this$props6.initialValueFormat, onCountryChange = _this$props6.onCountryChange, limitMaxLength = _this$props6.limitMaxLength, countryCallingCodeEditable = _this$props6.countryCallingCodeEditable, focusInputOnCountrySelection = _this$props6.focusInputOnCountrySelection, reset = _this$props6.reset, metadata2 = _this$props6.metadata, international = _this$props6.international, locales = _this$props6.locales, rest = _objectWithoutProperties8(_this$props6, _excluded8);
      var _this$state3 = this.state, country2 = _this$state3.country, countries = _this$state3.countries, phoneDigits = _this$state3.phoneDigits, isFocused = _this$state3.isFocused;
      var InputComponent = smartCaret ? InputSmart_default : InputBasic_default;
      var countrySelectOptions = this.getCountrySelectOptions({
        countries
      });
      return import_react11.default.createElement(ContainerComponent, _extends8({
        style,
        className: (0, import_classnames4.default)(className, "PhoneInput", {
          "PhoneInput--focus": isFocused,
          "PhoneInput--disabled": disabled,
          "PhoneInput--readOnly": readOnly
        })
      }, containerComponentProps), import_react11.default.createElement(CountrySelectComponent, _extends8({
        name: name ? "".concat(name, "Country") : void 0,
        "aria-label": labels2.country
      }, countrySelectProps, {
        value: country2,
        options: countrySelectOptions,
        onChange: this.onCountryChange,
        onFocus: this.onCountryFocus,
        onBlur: this.onCountryBlur,
        disabled: disabled || countrySelectProps && countrySelectProps.disabled,
        readOnly: readOnly || countrySelectProps && countrySelectProps.readOnly,
        iconComponent: this.CountryIcon
      })), import_react11.default.createElement(InputComponent, _extends8({
        ref: this.setInputRef,
        type: "tel",
        autoComplete
      }, numberInputProps, rest, {
        inputFormat: international === true ? "INTERNATIONAL" : international === false ? "NATIONAL" : "INTERNATIONAL_OR_NATIONAL",
        international: international ? true : void 0,
        withCountryCallingCode: international ? true : void 0,
        name,
        metadata: metadata2,
        country: country2,
        value: phoneDigits || "",
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        disabled,
        readOnly,
        inputComponent,
        className: (0, import_classnames4.default)("PhoneInputInput", numberInputProps && numberInputProps.className, rest.className)
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: (
      // `state` holds previous props as `props`, and also:
      // * `country` — The currently selected country, e.g. `"RU"`.
      // * `value` — The currently entered phone number (E.164), e.g. `+78005553535`.
      // * `phoneDigits` — The parsed `<input/>` value, e.g. `8005553535`.
      // (and a couple of other less significant properties)
      function getDerivedStateFromProps(props, state) {
        return _objectSpread9({
          // Emulate `prevProps` via `state.props`.
          props
        }, getPhoneInputWithCountryStateUpdateFromNewProps(props, state.props, state));
      }
    )
  }]);
}(import_react11.default.PureComponent);
var PhoneNumberInput = import_react11.default.forwardRef(function(props, ref) {
  return import_react11.default.createElement(PhoneNumberInput_, _extends8({}, withDefaultProps(props), {
    inputRef: ref
  }));
});
PhoneNumberInput.propTypes = {
  /**
   * Phone number in `E.164` format.
   *
   * Example:
   *
   * `"+12223333333"`
   *
   * Any "falsy" value like `undefined`, `null` or an empty string `""` is treated like "empty".
   */
  value: import_prop_types9.default.string,
  /**
   * A function of `value: string?`.
   *
   * Updates the `value` property as the user inputs a phone number.
   *
   * If the user erases the input value, the argument is `undefined`.
   */
  onChange: import_prop_types9.default.func.isRequired,
  /**
   * Toggles the `--focus` CSS class.
   * @ignore
   */
  onFocus: import_prop_types9.default.func,
  /**
   * `onBlur` is usually passed by `redux-form`.
   * @ignore
   */
  onBlur: import_prop_types9.default.func,
  /**
   * Set to `true` to mark both the phone number `<input/>`
   * and the country `<select/>` as `disabled`.
   */
  disabled: import_prop_types9.default.bool,
  /**
   * Set to `true` to mark both the phone number `<input/>`
   * and the country `<select/>` as `readonly`.
   */
  readOnly: import_prop_types9.default.bool,
  /**
   * Sets `autoComplete` property for phone number `<input/>`.
   *
   * Web browser's "autocomplete" feature
   * remembers the phone number being input
   * and can also autofill the `<input/>`
   * with previously remembered phone numbers.
   *
   * https://developers.google.com
   * /web/updates/2015/06/checkout-faster-with-autofill
   *
   * For example, can be used to turn it off:
   *
   * "So when should you use `autocomplete="off"`?
   *  One example is when you've implemented your own version
   *  of autocomplete for search. Another example is any form field
   *  where users will input and submit different kinds of information
   *  where it would not be useful to have the browser remember
   *  what was submitted previously".
   */
  // (is `"tel"` by default)
  autoComplete: import_prop_types9.default.string,
  /**
   * Set to `"national"` to show the initial `value` in
   * "national" format rather than "international".
   *
   * For example, if `initialValueFormat` is `"national"`
   * and the initial `value="+12133734253"` is passed
   * then the `<input/>` value will be `"(213) 373-4253"`.
   *
   * By default, `initialValueFormat` is `undefined`,
   * meaning that if the initial `value="+12133734253"` is passed
   * then the `<input/>` value will be `"+1 213 373 4253"`.
   *
   * The reason for such default behaviour is that
   * the newer generation grows up when there are no stationary phones
   * and therefore everyone inputs phone numbers in international format
   * in their smartphones so people gradually get more accustomed to
   * writing phone numbers in international format rather than in local format.
   * Future people won't be using "national" format, only "international".
   */
  // (is `undefined` by default)
  initialValueFormat: import_prop_types9.default.oneOf(["national"]),
  // `displayInitialValueAsLocalNumber` property has been
  // superceded by `initialValueFormat` property.
  displayInitialValueAsLocalNumber: import_prop_types9.default.bool,
  /**
   * The country to be selected by default.
   * For example, can be set after a GeoIP lookup.
   *
   * Example: `"US"`.
   */
  // A two-letter country code ("ISO 3166-1 alpha-2").
  defaultCountry: import_prop_types9.default.string,
  /**
   * If specified, only these countries will be available for selection.
   *
   * Example:
   *
   * `["RU", "UA", "KZ"]`
   */
  countries: import_prop_types9.default.arrayOf(import_prop_types9.default.string),
  /**
   * Custom country `<select/>` option names.
   * Also some labels like "ext" and country `<select/>` `aria-label`.
   *
   * Example:
   *
   * `{ "ZZ": "Международный", RU: "Россия", US: "США", ... }`
   *
   * See the `locales` directory for examples.
   */
  labels,
  /**
   * Country `<select/>` options are sorted by their labels.
   * The default sorting function uses `a.localeCompare(b, locales)`,
   * and, if that's not available, falls back to simple `a > b` / `a < b`.
   * Some languages, like Chinese, support multiple sorting variants
   * (called "collations"), and the user might prefer one or another.
   * Also, sometimes the Operating System language is not always
   * the preferred language for a person using a website or an application,
   * so there should be a way to specify custom locale.
   * This `locales` property mimicks the `locales` argument of `Intl` constructors,
   * and can be either a Unicode BCP 47 locale identifier or an array of such locale identifiers.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
   */
  locales: import_prop_types9.default.oneOfType([import_prop_types9.default.string, import_prop_types9.default.arrayOf(import_prop_types9.default.string)]),
  /*
   * Custom country `<select/>` options sorting function.
   * The default one uses `a.localeCompare(b)`, and,
   * if that's not available, falls back to simple `a > b`/`a < b`.
   * There have been requests to add custom sorter for cases
   * like Chinese language and "pinyin" (non-default) sorting order.
   * https://stackoverflow.com/questions/22907288/chinese-sorting-by-pinyin-in-javascript-with-localecompare
  compareStrings: PropTypes.func,
   */
  /**
   * A URL template of a country flag, where
   * "{XX}" is a two-letter country code in upper case,
   * or where "{xx}" is a two-letter country code in lower case.
   * By default it points to `country-flag-icons` gitlab pages website.
   * I imagine someone might want to download those country flag icons
   * and host them on their own servers instead
   * (all flags are available in the `country-flag-icons` library).
   * There's a catch though: new countries may be added in future,
   * so when hosting country flag icons on your own server
   * one should check the `CHANGELOG.md` every time before updating this library,
   * otherwise there's a possibility that some new country flag would be missing.
   */
  flagUrl: import_prop_types9.default.string,
  /**
   * Custom country flag icon components.
   * These flags will be used instead of the default ones.
   * The the "Flags" section of the readme for more info.
   *
   * The shape is an object where keys are country codes
   * and values are flag icon components.
   * Flag icon components receive the same properties
   * as `flagComponent` (see below).
   *
   * Example:
   *
   * `{ "RU": (props) => <img src="..."/> }`
   *
   * Example:
   *
   * `import flags from 'country-flag-icons/react/3x2'`
   *
   * `import PhoneInput from 'react-phone-number-input'`
   *
   * `<PhoneInput flags={flags} .../>`
   */
  flags: import_prop_types9.default.objectOf(import_prop_types9.default.elementType),
  /**
   * Country flag icon component.
   *
   * Takes properties:
   *
   * * `country: string` — The country code.
   * * `countryName: string` — The country name.
   * * `flagUrl: string` — The `flagUrl` property (see above).
   * * `flags: object` — The `flags` property (see above).
   */
  flagComponent: import_prop_types9.default.elementType,
  /**
   * Set to `false` to remove the "International" option from country `<select/>`.
   */
  addInternationalOption: import_prop_types9.default.bool,
  /**
   * "International" icon component.
   * Should have the same aspect ratio.
   *
   * Receives properties:
   *
   * * `title: string` — "International" country option label.
   */
  internationalIcon: import_prop_types9.default.elementType,
  /**
   * Can be used to place some countries on top of the list of country `<select/>` options.
   *
   * * `"XX"` — inserts an option for "XX" country.
   * * `"🌐"` — inserts "International" option.
   * * `"|"` — inserts a separator.
   * * `"..."` — inserts options for the rest of the countries (can be omitted, in which case it will be automatically added at the end).
   *
   * Example:
   *
   * `["US", "CA", "AU", "|", "..."]`
   */
  countryOptionsOrder: import_prop_types9.default.arrayOf(import_prop_types9.default.string),
  /**
   * `<Phone/>` component CSS style object.
   */
  style: import_prop_types9.default.object,
  /**
   * `<Phone/>` component CSS class.
   */
  className: import_prop_types9.default.string,
  /**
   * Country `<select/>` component.
   *
   * Receives properties:
   *
   * * `name: string?` — HTML `name` attribute.
   * * `value: string?` — The currently selected country code.
   * * `onChange(value: string?)` — Updates the `value`.
   * * `onFocus()` — Is used to toggle the `--focus` CSS class.
   * * `onBlur()` — Is used to toggle the `--focus` CSS class.
   * * `options: object[]` — The list of all selectable countries (including "International") each being an object of shape `{ value: string?, label: string }`.
   * * `iconComponent: PropTypes.elementType` — React component that renders a country icon: `<Icon country={value}/>`. If `country` is `undefined` then it renders an "International" icon.
   * * `disabled: boolean?` — HTML `disabled` attribute.
   * * `readOnly: boolean?` — HTML `readOnly` attribute.
   * * `tabIndex: (number|string)?` — HTML `tabIndex` attribute.
   * * `className: string` — CSS class name.
   */
  countrySelectComponent: import_prop_types9.default.elementType,
  /**
   * Country `<select/>` component props.
   * Along with the usual DOM properties such as `aria-label` and `tabIndex`,
   * some custom properties are supported, such as `arrowComponent` and `unicodeFlags`.
   */
  countrySelectProps: import_prop_types9.default.object,
  /**
   * Phone number `<input/>` component.
   *
   * Receives properties:
   *
   * * `value: string` — The formatted `value`.
   * * `onChange(event: Event)` — Updates the formatted `value` from `event.target.value`.
   * * `onFocus()` — Is used to toggle the `--focus` CSS class.
   * * `onBlur()` — Is used to toggle the `--focus` CSS class.
   * * Other properties like `type="tel"` or `autoComplete="tel"` that should be passed through to the DOM `<input/>`.
   *
   * Must also either use `React.forwardRef()` to "forward" `ref` to the `<input/>` or implement `.focus()` method.
   */
  inputComponent: import_prop_types9.default.elementType,
  /**
   * Phone number `<input/>` component props.
   */
  numberInputProps: import_prop_types9.default.object,
  /**
   * Wrapping `<div/>` component.
   *
   * Receives properties:
   *
   * * `style: object` — A component CSS style object.
   * * `className: string` — Classes to attach to the component, typically changes when component focuses or blurs.
   */
  containerComponent: import_prop_types9.default.elementType,
  /**
   * Wrapping `<div/>` component props.
   */
  containerComponentProps: import_prop_types9.default.object,
  /**
   * When the user attempts to insert a digit somewhere in the middle of a phone number,
   * the caret position is moved right before the next available digit skipping
   * any punctuation in between. This is called "smart" caret positioning.
   * Another case would be the phone number format changing as a result of
   * the user inserting the digit somewhere in the middle, which would require
   * re-positioning the caret because all digit positions have changed.
   * This "smart" caret positioning feature can be turned off by passing
   * `smartCaret={false}` property: use it in case of any possible issues
   * with caret position during phone number input.
   */
  // Is `true` by default.
  smartCaret: import_prop_types9.default.bool,
  /**
   * Set to `true` to force "international" phone number format.
   * Set to `false` to force "national" phone number format.
   * By default it's `undefined` meaning that it doesn't enforce any phone number format:
   * the user can input their phone number in either "national" or "international" format.
   */
  international: import_prop_types9.default.bool,
  /**
   * If set to `true`, the phone number input will get trimmed
   * if it exceeds the maximum length for the country.
   */
  limitMaxLength: import_prop_types9.default.bool,
  /**
   * If set to `false`, and `international` is `true`, then
   * users won't be able to erase the "country calling part"
   * of a phone number in the `<input/>`.
   */
  countryCallingCodeEditable: import_prop_types9.default.bool,
  /**
   * `libphonenumber-js` metadata.
   *
   * Can be used to pass custom `libphonenumber-js` metadata
   * to reduce the overall bundle size for those who compile "custom" metadata.
   */
  metadata,
  /**
   * Is called every time the selected country changes:
   * either programmatically or when user selects it manually from the list.
   */
  // People have been asking for a way to get the selected country.
  // @see  https://github.com/catamphetamine/react-phone-number-input/issues/128
  // For some it's just a "business requirement".
  // I guess it's about gathering as much info on the user as a website can
  // without introducing any addional fields that would complicate the form
  // therefore reducing "conversion" (that's a marketing term).
  // Assuming that the phone number's country is the user's country
  // is not 100% correct but in most cases I guess it's valid.
  onCountryChange: import_prop_types9.default.func,
  /**
   * If set to `false`, will not focus the `<input/>` component
   * when the user selects a country from the list of countries.
   * This can be used to conform to the Web Content Accessibility Guidelines (WCAG).
   * Quote:
   * "On input: Changing the setting of any user interface component
   *  does not automatically cause a change of context unless the user
   *  has been advised of the behaviour before using the component."
   */
  focusInputOnCountrySelection: import_prop_types9.default.bool
};
var defaultProps = {
  /**
   * Remember (and autofill) the value as a phone number.
   */
  autoComplete: "tel",
  /**
   * Country `<select/>` component.
   */
  countrySelectComponent: CountrySelectWithIcon,
  /**
   * Flag icon component.
   */
  flagComponent: FlagComponent,
  /**
   * By default, uses icons from `country-flag-icons` gitlab pages website.
   */
  // Must be equal to `flagUrl` in `./CountryIcon.js`.
  flagUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg",
  /**
   * Default "International" country `<select/>` option icon.
   */
  internationalIcon: InternationalIcon,
  /**
   * Phone number `<input/>` component.
   */
  inputComponent: "input",
  /**
   * Wrapping `<div/>` component.
   */
  containerComponent: "div",
  /**
   * Some users requested a way to reset the component:
   * both number `<input/>` and country `<select/>`.
   * Whenever `reset` property changes both number `<input/>`
   * and country `<select/>` are reset.
   * It's not implemented as some instance `.reset()` method
   * because `ref` is forwarded to `<input/>`.
   * It's also not replaced with just resetting `country` on
   * external `value` reset, because a user could select a country
   * and then not input any `value`, and so the selected country
   * would be "stuck", if not using this `reset` property.
   */
  // https://github.com/catamphetamine/react-phone-number-input/issues/300
  reset: import_prop_types9.default.any,
  /**
   *
   */
  /**
   * Set to `false` to use "basic" caret instead of the "smart" one.
   */
  smartCaret: true,
  /**
   * Whether to add the "International" option
   * to the list of countries.
   */
  addInternationalOption: true,
  /**
   * If set to `false`, and `international` is `true`, then
   * users won't be able to erase the "country calling part"
   * of a phone number in the `<input/>`.
   */
  countryCallingCodeEditable: true,
  /**
   * If set to `false`, will not focus the `<input/>` component
   * when the user selects a country from the list of countries.
   * This can be used to conform to the Web Content Accessibility Guidelines (WCAG).
   * Quote:
   * "On input: Changing the setting of any user interface component
   *  does not automatically cause a change of context unless the user
   *  has been advised of the behaviour before using the component."
   */
  focusInputOnCountrySelection: true
};
function withDefaultProps(props) {
  props = _objectSpread9({}, props);
  for (var key in defaultProps) {
    if (props[key] === void 0) {
      props[key] = defaultProps[key];
    }
  }
  return props;
}
var PhoneInputWithCountry_default = PhoneNumberInput;
function areEqualArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  var i = 0;
  while (i < a.length) {
    if (a[i] !== b[i]) {
      return false;
    }
    i++;
  }
  return true;
}

// node_modules/react-phone-number-input/modules/libphonenumber/formatPhoneNumber.js
function _typeof5(o) {
  "@babel/helpers - typeof";
  return _typeof5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof5(o);
}
function formatPhoneNumber(value, format3, metadata2) {
  if (!metadata2) {
    if (_typeof5(format3) === "object") {
      metadata2 = format3;
      format3 = "NATIONAL";
    }
  }
  if (!value) {
    return "";
  }
  var phoneNumber = parsePhoneNumber3(value, metadata2);
  if (!phoneNumber) {
    return "";
  }
  switch (format3) {
    case "National":
      format3 = "NATIONAL";
      break;
    case "International":
      format3 = "INTERNATIONAL";
      break;
  }
  return phoneNumber.format(format3);
}
function formatPhoneNumberIntl(value, metadata2) {
  return formatPhoneNumber(value, "INTERNATIONAL", metadata2);
}

// node_modules/react-phone-number-input/modules/PhoneInputWithCountryDefault.js
var import_react12 = __toESM(require_react(), 1);
var import_prop_types10 = __toESM(require_prop_types(), 1);

// node_modules/react-phone-number-input/locale/en.json.js
var en_json_default = {
  "ext": "ext.",
  "country": "Phone number country",
  "phone": "Phone",
  "AB": "Abkhazia",
  "AC": "Ascension Island",
  "AD": "Andorra",
  "AE": "United Arab Emirates",
  "AF": "Afghanistan",
  "AG": "Antigua and Barbuda",
  "AI": "Anguilla",
  "AL": "Albania",
  "AM": "Armenia",
  "AO": "Angola",
  "AQ": "Antarctica",
  "AR": "Argentina",
  "AS": "American Samoa",
  "AT": "Austria",
  "AU": "Australia",
  "AW": "Aruba",
  "AX": "Åland Islands",
  "AZ": "Azerbaijan",
  "BA": "Bosnia and Herzegovina",
  "BB": "Barbados",
  "BD": "Bangladesh",
  "BE": "Belgium",
  "BF": "Burkina Faso",
  "BG": "Bulgaria",
  "BH": "Bahrain",
  "BI": "Burundi",
  "BJ": "Benin",
  "BL": "Saint Barthélemy",
  "BM": "Bermuda",
  "BN": "Brunei Darussalam",
  "BO": "Bolivia",
  "BQ": "Bonaire, Sint Eustatius and Saba",
  "BR": "Brazil",
  "BS": "Bahamas",
  "BT": "Bhutan",
  "BV": "Bouvet Island",
  "BW": "Botswana",
  "BY": "Belarus",
  "BZ": "Belize",
  "CA": "Canada",
  "CC": "Cocos (Keeling) Islands",
  "CD": "Congo, Democratic Republic of the",
  "CF": "Central African Republic",
  "CG": "Congo",
  "CH": "Switzerland",
  "CI": "Cote d'Ivoire",
  "CK": "Cook Islands",
  "CL": "Chile",
  "CM": "Cameroon",
  "CN": "China",
  "CO": "Colombia",
  "CR": "Costa Rica",
  "CU": "Cuba",
  "CV": "Cape Verde",
  "CW": "Curaçao",
  "CX": "Christmas Island",
  "CY": "Cyprus",
  "CZ": "Czech Republic",
  "DE": "Germany",
  "DJ": "Djibouti",
  "DK": "Denmark",
  "DM": "Dominica",
  "DO": "Dominican Republic",
  "DZ": "Algeria",
  "EC": "Ecuador",
  "EE": "Estonia",
  "EG": "Egypt",
  "EH": "Western Sahara",
  "ER": "Eritrea",
  "ES": "Spain",
  "ET": "Ethiopia",
  "FI": "Finland",
  "FJ": "Fiji",
  "FK": "Falkland Islands",
  "FM": "Federated States of Micronesia",
  "FO": "Faroe Islands",
  "FR": "France",
  "GA": "Gabon",
  "GB": "United Kingdom",
  "GD": "Grenada",
  "GE": "Georgia",
  "GF": "French Guiana",
  "GG": "Guernsey",
  "GH": "Ghana",
  "GI": "Gibraltar",
  "GL": "Greenland",
  "GM": "Gambia",
  "GN": "Guinea",
  "GP": "Guadeloupe",
  "GQ": "Equatorial Guinea",
  "GR": "Greece",
  "GS": "South Georgia and the South Sandwich Islands",
  "GT": "Guatemala",
  "GU": "Guam",
  "GW": "Guinea-Bissau",
  "GY": "Guyana",
  "HK": "Hong Kong",
  "HM": "Heard Island and McDonald Islands",
  "HN": "Honduras",
  "HR": "Croatia",
  "HT": "Haiti",
  "HU": "Hungary",
  "ID": "Indonesia",
  "IE": "Ireland",
  "IL": "Israel",
  "IM": "Isle of Man",
  "IN": "India",
  "IO": "British Indian Ocean Territory",
  "IQ": "Iraq",
  "IR": "Iran",
  "IS": "Iceland",
  "IT": "Italy",
  "JE": "Jersey",
  "JM": "Jamaica",
  "JO": "Jordan",
  "JP": "Japan",
  "KE": "Kenya",
  "KG": "Kyrgyzstan",
  "KH": "Cambodia",
  "KI": "Kiribati",
  "KM": "Comoros",
  "KN": "Saint Kitts and Nevis",
  "KP": "North Korea",
  "KR": "South Korea",
  "KW": "Kuwait",
  "KY": "Cayman Islands",
  "KZ": "Kazakhstan",
  "LA": "Laos",
  "LB": "Lebanon",
  "LC": "Saint Lucia",
  "LI": "Liechtenstein",
  "LK": "Sri Lanka",
  "LR": "Liberia",
  "LS": "Lesotho",
  "LT": "Lithuania",
  "LU": "Luxembourg",
  "LV": "Latvia",
  "LY": "Libya",
  "MA": "Morocco",
  "MC": "Monaco",
  "MD": "Moldova",
  "ME": "Montenegro",
  "MF": "Saint Martin (French Part)",
  "MG": "Madagascar",
  "MH": "Marshall Islands",
  "MK": "North Macedonia",
  "ML": "Mali",
  "MM": "Myanmar",
  "MN": "Mongolia",
  "MO": "Macao",
  "MP": "Northern Mariana Islands",
  "MQ": "Martinique",
  "MR": "Mauritania",
  "MS": "Montserrat",
  "MT": "Malta",
  "MU": "Mauritius",
  "MV": "Maldives",
  "MW": "Malawi",
  "MX": "Mexico",
  "MY": "Malaysia",
  "MZ": "Mozambique",
  "NA": "Namibia",
  "NC": "New Caledonia",
  "NE": "Niger",
  "NF": "Norfolk Island",
  "NG": "Nigeria",
  "NI": "Nicaragua",
  "NL": "Netherlands",
  "NO": "Norway",
  "NP": "Nepal",
  "NR": "Nauru",
  "NU": "Niue",
  "NZ": "New Zealand",
  "OM": "Oman",
  "OS": "South Ossetia",
  "PA": "Panama",
  "PE": "Peru",
  "PF": "French Polynesia",
  "PG": "Papua New Guinea",
  "PH": "Philippines",
  "PK": "Pakistan",
  "PL": "Poland",
  "PM": "Saint Pierre and Miquelon",
  "PN": "Pitcairn",
  "PR": "Puerto Rico",
  "PS": "Palestine",
  "PT": "Portugal",
  "PW": "Palau",
  "PY": "Paraguay",
  "QA": "Qatar",
  "RE": "Reunion",
  "RO": "Romania",
  "RS": "Serbia",
  "RU": "Russia",
  "RW": "Rwanda",
  "SA": "Saudi Arabia",
  "SB": "Solomon Islands",
  "SC": "Seychelles",
  "SD": "Sudan",
  "SE": "Sweden",
  "SG": "Singapore",
  "SH": "Saint Helena",
  "SI": "Slovenia",
  "SJ": "Svalbard and Jan Mayen",
  "SK": "Slovakia",
  "SL": "Sierra Leone",
  "SM": "San Marino",
  "SN": "Senegal",
  "SO": "Somalia",
  "SR": "Suriname",
  "SS": "South Sudan",
  "ST": "Sao Tome and Principe",
  "SV": "El Salvador",
  "SX": "Sint Maarten",
  "SY": "Syria",
  "SZ": "Swaziland",
  "TA": "Tristan da Cunha",
  "TC": "Turks and Caicos Islands",
  "TD": "Chad",
  "TF": "French Southern Territories",
  "TG": "Togo",
  "TH": "Thailand",
  "TJ": "Tajikistan",
  "TK": "Tokelau",
  "TL": "Timor-Leste",
  "TM": "Turkmenistan",
  "TN": "Tunisia",
  "TO": "Tonga",
  "TR": "Turkey",
  "TT": "Trinidad and Tobago",
  "TV": "Tuvalu",
  "TW": "Taiwan",
  "TZ": "Tanzania",
  "UA": "Ukraine",
  "UG": "Uganda",
  "UM": "United States Minor Outlying Islands",
  "US": "United States",
  "UY": "Uruguay",
  "UZ": "Uzbekistan",
  "VA": "Holy See (Vatican City State)",
  "VC": "Saint Vincent and the Grenadines",
  "VE": "Venezuela",
  "VG": "Virgin Islands, British",
  "VI": "Virgin Islands, U.S.",
  "VN": "Vietnam",
  "VU": "Vanuatu",
  "WF": "Wallis and Futuna",
  "WS": "Samoa",
  "XK": "Kosovo",
  "YE": "Yemen",
  "YT": "Mayotte",
  "ZA": "South Africa",
  "ZM": "Zambia",
  "ZW": "Zimbabwe",
  "ZZ": "International"
};

// node_modules/react-phone-number-input/modules/PhoneInputWithCountryDefault.js
var _excluded9 = ["metadata", "labels"];
function _extends9() {
  _extends9 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends9.apply(this, arguments);
}
function _objectWithoutProperties9(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose9(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose9(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function createPhoneInput(defaultMetadata) {
  var PhoneInputDefault = import_react12.default.forwardRef(function(_ref, ref) {
    var _ref$metadata = _ref.metadata, metadata2 = _ref$metadata === void 0 ? defaultMetadata : _ref$metadata, _ref$labels = _ref.labels, labels2 = _ref$labels === void 0 ? en_json_default : _ref$labels, rest = _objectWithoutProperties9(_ref, _excluded9);
    return import_react12.default.createElement(PhoneInputWithCountry_default, _extends9({}, rest, {
      ref,
      metadata: metadata2,
      labels: labels2
    }));
  });
  PhoneInputDefault.propTypes = {
    metadata,
    labels
  };
  return PhoneInputDefault;
}
var PhoneInputWithCountryDefault_default = createPhoneInput();

// node_modules/react-phone-number-input/min/index.js
function call(func, _arguments) {
  var args = Array.prototype.slice.call(_arguments);
  args.push(metadata_min_json_default);
  return func.apply(this, args);
}
var min_default = createPhoneInput(metadata_min_json_default);
function parsePhoneNumber5() {
  return call(parsePhoneNumber3, arguments);
}
function formatPhoneNumber2() {
  return call(formatPhoneNumber, arguments);
}
function formatPhoneNumberIntl2() {
  return call(formatPhoneNumberIntl, arguments);
}
function isValidPhoneNumber2() {
  return call(isValidPhoneNumber, arguments);
}
function isPossiblePhoneNumber3() {
  return call(isPossiblePhoneNumber2, arguments);
}
function getCountries2() {
  return call(getCountries, arguments);
}
function getCountryCallingCode2() {
  return call(getCountryCallingCode, arguments);
}
function isSupportedCountry2() {
  return call(isSupportedCountry, arguments);
}
export {
  min_default as default,
  formatPhoneNumber2 as formatPhoneNumber,
  formatPhoneNumberIntl2 as formatPhoneNumberIntl,
  getCountries2 as getCountries,
  getCountryCallingCode2 as getCountryCallingCode,
  isPossiblePhoneNumber3 as isPossiblePhoneNumber,
  isSupportedCountry2 as isSupportedCountry,
  isValidPhoneNumber2 as isValidPhoneNumber,
  parsePhoneNumber5 as parsePhoneNumber
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
//# sourceMappingURL=react-phone-number-input.js.map
