"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction Header(param) {\n    let { title  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: title ? title : \"Default title\"\n    }, void 0, false, {\n        fileName: \"D:\\\\Niki\\\\Programming\\\\SoftUni-Software-Engineering\\\\NextJs\\\\pages\\\\index.jsx\",\n        lineNumber: 10,\n        columnNumber: 12\n    }, this);\n}\n_c = Header;\nvar __N_SSG = true;\nfunction Home(param) {\n    let { allPostsData  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        home: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"\".concat((_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().headingMd), \" \").concat((_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().padding1px)),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().headingLg),\n                    children: \"Blog\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Niki\\\\Programming\\\\SoftUni-Software-Engineering\\\\NextJs\\\\pages\\\\index.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().list),\n                    children: allPostsData.map((param)=>/*#__PURE__*/ {\n                        let { id , date , title  } = param;\n                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().listItem),\n                            children: [\n                                title,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"D:\\\\Niki\\\\Programming\\\\SoftUni-Software-Engineering\\\\NextJs\\\\pages\\\\index.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, this),\n                                id,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"D:\\\\Niki\\\\Programming\\\\SoftUni-Software-Engineering\\\\NextJs\\\\pages\\\\index.jsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this),\n                                date\n                            ]\n                        }, id, true, {\n                            fileName: \"D:\\\\Niki\\\\Programming\\\\SoftUni-Software-Engineering\\\\NextJs\\\\pages\\\\index.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\Niki\\\\Programming\\\\SoftUni-Software-Engineering\\\\NextJs\\\\pages\\\\index.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Niki\\\\Programming\\\\SoftUni-Software-Engineering\\\\NextJs\\\\pages\\\\index.jsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Niki\\\\Programming\\\\SoftUni-Software-Engineering\\\\NextJs\\\\pages\\\\index.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDRjtBQUNBO0FBQzRCO0FBQ0w7QUFJcEQsU0FBU00sT0FBTyxLQUFPLEVBQUU7UUFBVCxFQUFDQyxNQUFLLEVBQUMsR0FBUDtJQUNaLHFCQUFPLDhEQUFDQztrQkFBSUQsUUFBUUEsUUFBUSxlQUFlOzs7Ozs7QUFDL0M7S0FGU0Q7O0FBZU0sU0FBU0csS0FBSyxLQUFnQixFQUFFO1FBQWxCLEVBQUVDLGFBQVksRUFBRSxHQUFoQjtJQUMzQixxQkFDRSw4REFBQ1AsMERBQU1BO1FBQUNRLElBQUk7a0JBSVYsNEVBQUNDO1lBQVFDLFdBQVcsR0FBMkJSLE9BQXhCQSwyRUFBb0IsRUFBQyxLQUF5QixPQUF0QkEsNEVBQXFCOzs4QkFDbEUsOERBQUNXO29CQUFHSCxXQUFXUiwyRUFBb0I7OEJBQUU7Ozs7Ozs4QkFDckMsOERBQUNhO29CQUFHTCxXQUFXUixzRUFBZTs4QkFDM0JLLGFBQWFVLEdBQUcsQ0FBQyx1QkFDaEI7NEJBRGlCLEVBQUVDLEdBQUUsRUFBRUMsS0FBSSxFQUFFZixNQUFLLEVBQUU7K0JBQ3BDLDhEQUFDZ0I7NEJBQUdWLFdBQVdSLDBFQUFtQjs7Z0NBQy9CRTs4Q0FDRCw4REFBQ2tCOzs7OztnQ0FDQUo7OENBQ0QsOERBQUNJOzs7OztnQ0FDQUg7OzJCQUxzQ0Q7Ozs7O29CQU1yQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEIsQ0FBQztNQXRCdUJaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IExheW91dCwgeyBzaXRlVGl0bGUgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgZ2V0U29ydGVkUG9zdHNEYXRhIH0gZnJvbSAnLi4vbGliL3Bvc3RzJztcclxuaW1wb3J0IHsgZ2V0RmV0Y2hEYXRhIH0gZnJvbSAnLi4vbGliL2ZldGNoJztcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcih7dGl0bGV9KSB7XHJcbiAgICByZXR1cm4gPGgxPnt0aXRsZSA/IHRpdGxlIDogXCJEZWZhdWx0IHRpdGxlXCJ9PC9oMT5cclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBhbGxQb3N0c0RhdGEgPSBnZXRTb3J0ZWRQb3N0c0RhdGEoKTtcclxuICBnZXRGZXRjaERhdGEoKVxyXG4gIC50aGVuKChyZXN1bHQpID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGFsbFBvc3RzRGF0YSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGFsbFBvc3RzRGF0YSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgaG9tZT5cclxuICAgICAgey8qIEtlZXAgdGhlIGV4aXN0aW5nIGNvZGUgaGVyZSAqL31cclxuXHJcbiAgICAgIHsvKiBBZGQgdGhpcyA8c2VjdGlvbj4gdGFnIGJlbG93IHRoZSBleGlzdGluZyA8c2VjdGlvbj4gdGFnICovfVxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3V0aWxTdHlsZXMuaGVhZGluZ01kfSAke3V0aWxTdHlsZXMucGFkZGluZzFweH1gfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdMZ30+QmxvZzwvaDI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saXN0fT5cclxuICAgICAgICAgIHthbGxQb3N0c0RhdGEubWFwKCh7IGlkLCBkYXRlLCB0aXRsZSB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlzdEl0ZW19IGtleT17aWR9PlxyXG4gICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICB7aWR9XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAge2RhdGV9XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMaW5rIiwiSGVhZCIsIkxheW91dCIsInNpdGVUaXRsZSIsInV0aWxTdHlsZXMiLCJIZWFkZXIiLCJ0aXRsZSIsImgxIiwiSG9tZSIsImFsbFBvc3RzRGF0YSIsImhvbWUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaGVhZGluZ01kIiwicGFkZGluZzFweCIsImgyIiwiaGVhZGluZ0xnIiwidWwiLCJsaXN0IiwibWFwIiwiaWQiLCJkYXRlIiwibGkiLCJsaXN0SXRlbSIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});