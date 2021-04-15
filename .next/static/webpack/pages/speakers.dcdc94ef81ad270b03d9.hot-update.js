webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/components/Speakers/index.js":
/*!******************************************!*\
  !*** ./src/components/Speakers/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SearchBar */ "./src/components/SearchBar/index.js");
/* harmony import */ var _singleSpeaker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./singleSpeaker */ "./src/components/Speakers/singleSpeaker.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);








var _jsxFileName = "J:\\react-search-designed-component\\src\\components\\Speakers\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // import speakersData from "./data.js";




var Speakers = function Speakers() {
  _s();

  var REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    ERROR: "error"
  };

  var _useReducer = useReducer(""),
      _useReducer2 = Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useReducer, 2),
      searchQuery = _useReducer2[0],
      setSearchQuery = _useReducer2[1];

  var reducer = function reducer(state, action) {
    return action.speakers;
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(reducer, []),
      speakers = _useState[0],
      setSpeakers = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(REQUEST_STATUS.LOADING),
      status = _useState2[0],
      setStatus = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({}),
      error = _useState3[0],
      setError = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
        var response;
        return J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("http://localhost:4000/speakers");

              case 3:
                response = _context.sent;
                setSpeakers({
                  speakers: response.data,
                  type: "GET_ALL_SUCCESS"
                });
                setStatus(REQUEST_STATUS.SUCCESS);
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                setStatus(REQUEST_STATUS.ERROR);
                setError(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  var success = status === REQUEST_STATUS.SUCCESS;
  var isLoading = status === REQUEST_STATUS.LOADING;
  var isError = status === REQUEST_STATUS.ERROR;
  var mapSpeakers = speakers.filter(function (record) {
    var targetString = "".concat(record.lastName, " ").concat(record.firstName).toLowerCase();
    return searchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());
  }).map(function (single) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_singleSpeaker__WEBPACK_IMPORTED_MODULE_8__["default"], _objectSpread(_objectSpread({}, single), {}, {
      toggleButton: function toggleButton() {
        return toggleButtonHandler(single);
      }
    }), single.id, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }, _this);
  });

  var toggleFavoriteStatus = function toggleFavoriteStatus(speakerRecord) {
    return _objectSpread(_objectSpread({}, speakerRecord), {}, {
      isFavorite: !speakerRecord.isFavorite
    });
  };

  var toggleButtonHandler = /*#__PURE__*/function () {
    var _ref2 = Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(speakerRecord) {
      var toggledSpeakerRecord, speakerIndex;
      return J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              toggledSpeakerRecord = toggleFavoriteStatus(speakerRecord);
              speakerIndex = speakers.map(function (single) {
                return single.id;
              }).indexOf(speakerRecord.id);
              _context2.prev = 2;
              _context2.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.put("http://localhost:4000/speakers/".concat(speakerRecord.id), toggledSpeakerRecord);

            case 5:
              setSpeakers([].concat(Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(speakers.slice(0, speakerIndex)), [toggledSpeakerRecord], Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(speakers.slice(speakerIndex + 1))));
              _context2.next = 12;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](2);
              setStatus(REQUEST_STATUS.ERROR);
              setError(_context2.t0);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 8]]);
    }));

    return function toggleButtonHandler(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SearchBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      searchQuery: searchQuery,
      setSearchQuery: setSearchQuery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, _this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }, _this), isError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["Loading error... Is the json-server up and running? (try \"npm run json-server\" at your terminal) ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 42
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: ["ERROR: ", error.message]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12",
      children: mapSpeakers
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(Speakers, "RtBeeUQgYmCrO9TI4IKW1qmZA7s=");

_c = Speakers;
/* harmony default export */ __webpack_exports__["default"] = (Speakers);

var _c;

$RefreshReg$(_c, "Speakers");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiU3BlYWtlcnMiLCJSRVFVRVNUX1NUQVRVUyIsIkxPQURJTkciLCJTVUNDRVNTIiwiRVJST1IiLCJ1c2VSZWR1Y2VyIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInNwZWFrZXJzIiwidXNlU3RhdGUiLCJzZXRTcGVha2VycyIsInN0YXR1cyIsInNldFN0YXR1cyIsImVycm9yIiwic2V0RXJyb3IiLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJheGlvcyIsImdldCIsInJlc3BvbnNlIiwiZGF0YSIsInR5cGUiLCJzdWNjZXNzIiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsIm1hcFNwZWFrZXJzIiwiZmlsdGVyIiwicmVjb3JkIiwidGFyZ2V0U3RyaW5nIiwibGFzdE5hbWUiLCJmaXJzdE5hbWUiLCJ0b0xvd2VyQ2FzZSIsImxlbmd0aCIsImluY2x1ZGVzIiwibWFwIiwic2luZ2xlIiwidG9nZ2xlQnV0dG9uSGFuZGxlciIsImlkIiwidG9nZ2xlRmF2b3JpdGVTdGF0dXMiLCJzcGVha2VyUmVjb3JkIiwiaXNGYXZvcml0ZSIsInRvZ2dsZWRTcGVha2VyUmVjb3JkIiwic3BlYWtlckluZGV4IiwiaW5kZXhPZiIsInB1dCIsInNsaWNlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxjQUFjLEdBQUc7QUFDckJDLFdBQU8sRUFBRSxTQURZO0FBRXJCQyxXQUFPLEVBQUUsU0FGWTtBQUdyQkMsU0FBSyxFQUFFO0FBSGMsR0FBdkI7O0FBRHFCLG9CQU1pQkMsVUFBVSxDQUFDLEVBQUQsQ0FO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cGFnZXMvc3BlYWtlcnMuZGNkYzk0ZWY4MWFkMjcwYjAzZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4uL1NlYXJjaEJhclwiO1xyXG4vLyBpbXBvcnQgc3BlYWtlcnNEYXRhIGZyb20gXCIuL2RhdGEuanNcIjtcclxuaW1wb3J0IFNpbmdsZVNwZWFrZXIgZnJvbSBcIi4vc2luZ2xlU3BlYWtlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBTcGVha2VycyA9ICgpID0+IHtcclxuICBjb25zdCBSRVFVRVNUX1NUQVRVUyA9IHtcclxuICAgIExPQURJTkc6IFwibG9hZGluZ1wiLFxyXG4gICAgU1VDQ0VTUzogXCJzdWNjZXNzXCIsXHJcbiAgICBFUlJPUjogXCJlcnJvclwiLFxyXG4gIH07XHJcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VSZWR1Y2VyKFwiXCIpO1xyXG5cclxuICBjb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHJldHVybiBhY3Rpb24uc3BlYWtlcnM7XHJcbiAgfTtcclxuICBjb25zdCBbc3BlYWtlcnMsIHNldFNwZWFrZXJzXSA9IHVzZVN0YXRlKHJlZHVjZXIsIFtdKTtcclxuXHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFJFUVVFU1RfU1RBVFVTLkxPQURJTkcpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NwZWFrZXJzXCIpO1xyXG4gICAgICAgIHNldFNwZWFrZXJzKHsgc3BlYWtlcnM6IHJlc3BvbnNlLmRhdGEsIHR5cGU6IFwiR0VUX0FMTF9TVUNDRVNTXCIgfSk7XHJcbiAgICAgICAgc2V0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1MpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgc2V0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLkVSUk9SKTtcclxuICAgICAgICBzZXRFcnJvcihlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc3VjY2VzcyA9IHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUztcclxuICBjb25zdCBpc0xvYWRpbmcgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkxPQURJTkc7XHJcbiAgY29uc3QgaXNFcnJvciA9IHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRVJST1I7XHJcblxyXG4gIGNvbnN0IG1hcFNwZWFrZXJzID0gc3BlYWtlcnNcclxuICAgIC5maWx0ZXIoKHJlY29yZCkgPT4ge1xyXG4gICAgICBjb25zdCB0YXJnZXRTdHJpbmcgPSBgJHtyZWNvcmQubGFzdE5hbWV9ICR7cmVjb3JkLmZpcnN0TmFtZX1gLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHJldHVybiBzZWFyY2hRdWVyeS5sZW5ndGggPT09IDBcclxuICAgICAgICA/IHRydWVcclxuICAgICAgICA6IHRhcmdldFN0cmluZy5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH0pXHJcbiAgICAubWFwKChzaW5nbGUpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8U2luZ2xlU3BlYWtlclxyXG4gICAgICAgICAga2V5PXtzaW5nbGUuaWR9XHJcbiAgICAgICAgICB7Li4uc2luZ2xlfVxyXG4gICAgICAgICAgdG9nZ2xlQnV0dG9uPXsoKSA9PiB0b2dnbGVCdXR0b25IYW5kbGVyKHNpbmdsZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICBjb25zdCB0b2dnbGVGYXZvcml0ZVN0YXR1cyA9IChzcGVha2VyUmVjb3JkKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zcGVha2VyUmVjb3JkLFxyXG4gICAgICBpc0Zhdm9yaXRlOiAhc3BlYWtlclJlY29yZC5pc0Zhdm9yaXRlLFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVCdXR0b25IYW5kbGVyID0gYXN5bmMgKHNwZWFrZXJSZWNvcmQpID0+IHtcclxuICAgIGNvbnN0IHRvZ2dsZWRTcGVha2VyUmVjb3JkID0gdG9nZ2xlRmF2b3JpdGVTdGF0dXMoc3BlYWtlclJlY29yZCk7XHJcbiAgICBjb25zdCBzcGVha2VySW5kZXggPSBzcGVha2Vyc1xyXG4gICAgICAubWFwKChzaW5nbGUpID0+IHNpbmdsZS5pZClcclxuICAgICAgLmluZGV4T2Yoc3BlYWtlclJlY29yZC5pZCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucHV0KFxyXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjQwMDAvc3BlYWtlcnMvJHtzcGVha2VyUmVjb3JkLmlkfWAsXHJcbiAgICAgICAgdG9nZ2xlZFNwZWFrZXJSZWNvcmRcclxuICAgICAgKTtcclxuICAgICAgc2V0U3BlYWtlcnMoW1xyXG4gICAgICAgIC4uLnNwZWFrZXJzLnNsaWNlKDAsIHNwZWFrZXJJbmRleCksXHJcbiAgICAgICAgdG9nZ2xlZFNwZWFrZXJSZWNvcmQsXHJcbiAgICAgICAgLi4uc3BlYWtlcnMuc2xpY2Uoc3BlYWtlckluZGV4ICsgMSksXHJcbiAgICAgIF0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBzZXRTdGF0dXMoUkVRVUVTVF9TVEFUVVMuRVJST1IpO1xyXG4gICAgICBzZXRFcnJvcihlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFNlYXJjaEJhciBzZWFyY2hRdWVyeT17c2VhcmNoUXVlcnl9IHNldFNlYXJjaFF1ZXJ5PXtzZXRTZWFyY2hRdWVyeX0gLz5cclxuICAgICAge2lzTG9hZGluZyAmJiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj59XHJcbiAgICAgIHsvKiBlcnJvciBoYW5kbGluZyAqL31cclxuICAgICAge2lzRXJyb3IgJiYgKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICBMb2FkaW5nIGVycm9yLi4uIElzIHRoZSBqc29uLXNlcnZlciB1cCBhbmQgcnVubmluZz8gKHRyeSBcIm5wbSBydW5cclxuICAgICAgICAgIGpzb24tc2VydmVyXCIgYXQgeW91ciB0ZXJtaW5hbCkgPGJyIC8+XHJcbiAgICAgICAgICA8Yj5FUlJPUjoge2Vycm9yLm1lc3NhZ2V9PC9iPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICB7c3VjY2VzcyAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdyaWQtY29scy0xIGdhcC0xMlwiPlxyXG4gICAgICAgICAge21hcFNwZWFrZXJzfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=