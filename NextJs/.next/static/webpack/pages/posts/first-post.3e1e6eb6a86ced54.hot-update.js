"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/first-post",{

/***/ "./pages/posts/first-post.js":
/*!***********************************!*\
  !*** ./pages/posts/first-post.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FirstPost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction FirstPost() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                style: {\n                    height: \"400px\",\n                    width: \"200px\"\n                },\n                src: \"/images/profile.jpg\",\n                alt: \"My Name\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Niki\\\\Programming\\\\SoftUni-Software-Engineering\\\\NextJs\\\\pages\\\\posts\\\\first-post.js\",\n                lineNumber: 6,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"First Post\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Niki\\\\Programming\\\\SoftUni-Software-Engineering\\\\NextJs\\\\pages\\\\posts\\\\first-post.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: \"Back to home page\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Niki\\\\Programming\\\\SoftUni-Software-Engineering\\\\NextJs\\\\pages\\\\posts\\\\first-post.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Niki\\\\Programming\\\\SoftUni-Software-Engineering\\\\NextJs\\\\pages\\\\posts\\\\first-post.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = FirstPost;\nvar _c;\n$RefreshReg$(_c, \"FirstPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9maXJzdC1wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2QjtBQUVkLFNBQVNDLFlBQVk7SUFDaEMscUJBQ0k7OzBCQUNBLDhEQUFDQztnQkFBSUMsT0FBTztvQkFBQ0MsUUFBTztvQkFBU0MsT0FBTztnQkFBTztnQkFBR0MsS0FBSTtnQkFBc0JDLEtBQUk7Ozs7OzswQkFDNUUsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUNELDRFQUFDVCxrREFBSUE7b0JBQUNVLE1BQUs7OEJBQUk7Ozs7Ozs7Ozs7Ozs7QUFLdkIsQ0FBQztLQVh1QlQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvZmlyc3QtcG9zdC5qcz8zNDExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpcnN0UG9zdCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8aW1nIHN0eWxlPXt7aGVpZ2h0Oic0MDBweCcsIHdpZHRoOiAnMjAwcHgnfX0gc3JjPVwiL2ltYWdlcy9wcm9maWxlLmpwZ1wiIGFsdD1cIk15IE5hbWVcIiAvPlxyXG4gICAgICAgIDxoMT5GaXJzdCBQb3N0PC9oMT5cclxuICAgICAgICA8aDI+XHJcbiAgICAgICAgPExpbmsgaHJlZj0nLyc+QmFjayB0byBob21lIHBhZ2U8L0xpbms+XHJcblxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG59OyJdLCJuYW1lcyI6WyJMaW5rIiwiRmlyc3RQb3N0IiwiaW1nIiwic3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsInNyYyIsImFsdCIsImgxIiwiaDIiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/first-post.js\n"));

/***/ })

});