"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navigation */ \"./components/navigation.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! autoprefixer */ \"./node_modules/autoprefixer/lib/autoprefixer.js\");\n/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(autoprefixer__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Home = function(param) {\n    var artist = param.artist;\n    _s();\n    console.log(artist);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    // cierre de sesión\n    var logOut = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n            var error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        return [\n                            4,\n                            axios.post(\"/api/auth/logout\")\n                        ];\n                    case 1:\n                        _state.sent();\n                        router.push(\"/login\");\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.error(error);\n                        router.push(\"/login\");\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function logOut() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen bg-gradient-to-r from-cyan-100 to-cyan-800\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jonn\\\\Desktop\\\\obras-de-arte\\\\pages\\\\home.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-5 mx-5 px-5 py-5 bg-gray-300\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-bold text-xl my-5 mx-5\",\n                        children: \"Art search\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jonn\\\\Desktop\\\\obras-de-arte\\\\pages\\\\home.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"my-5 mx-5\",\n                        type: \"text\",\n                        placeholder: \"Name\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jonn\\\\Desktop\\\\obras-de-arte\\\\pages\\\\home.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: \"font-bold my-5 mx-5\",\n                        children: \"Artist\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jonn\\\\Desktop\\\\obras-de-arte\\\\pages\\\\home.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"font-bold bg-green-600 hover:bg-green-500 text-white rounded-lg px-5 py-5 mx-2 my-2\",\n                        children: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jonn\\\\Desktop\\\\obras-de-arte\\\\pages\\\\home.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"font-bold bg-red-600 hover:bg-red-500 text-white rounded-lg px-5 py-5 mx-2 my-2\",\n                        onClick: function() {\n                            return logOut();\n                        },\n                        children: \"Logout\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jonn\\\\Desktop\\\\obras-de-arte\\\\pages\\\\home.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-bold\",\n                        children: \"Here are the list:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jonn\\\\Desktop\\\\obras-de-arte\\\\pages\\\\home.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: artist\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jonn\\\\Desktop\\\\obras-de-arte\\\\pages\\\\home.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jonn\\\\Desktop\\\\obras-de-arte\\\\pages\\\\home.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Jonn\\\\Desktop\\\\obras-de-arte\\\\pages\\\\home.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Jonn\\\\Desktop\\\\obras-de-arte\\\\pages\\\\home.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Home;\nHome.getInitialProps = /*#__PURE__*/ (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n    var res, json, artist;\n    return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n        switch(_state.label){\n            case 0:\n                return [\n                    4,\n                    isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()(\"https://www.rijksmuseum.nl/en/search/advanced/terms?field=involvedMaker&q=\")\n                ];\n            case 1:\n                res = _state.sent();\n                return [\n                    4,\n                    res.json()\n                ];\n            case 2:\n                json = _state.sent();\n                artist = json;\n                console.log(artist);\n                return [\n                    2,\n                    {\n                        artist: artist\n                    }\n                ];\n        }\n    });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUFrRDtBQUNiO0FBQ0c7QUFDSjtBQUVwQyxJQUFNSSxJQUFJLEdBQUcsZ0JBQWdCO1FBQWJDLE1BQU0sU0FBTkEsTUFBTTs7SUFDcEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNLENBQUMsQ0FBQztJQUVwQixJQUFNRyxNQUFNLEdBQUdOLHNEQUFTLEVBQUU7SUFDMUIsbUJBQW1CO0lBQ25CLElBQU1PLE1BQU07bUJBQUcsK0ZBQVk7Z0JBSWhCQyxLQUFLOzs7Ozs7Ozs7O3dCQUZaOzs0QkFBTUMsS0FBSyxDQUFDQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7MEJBQUE7O3dCQUFwQyxhQUFvQyxDQUFDO3dCQUNyQ0osTUFBTSxDQUFDSyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7Ozt3QkFDZkgsS0FBSzt3QkFDWkosT0FBTyxDQUFDSSxLQUFLLENBQUNBLEtBQUssQ0FBQyxDQUFDO3dCQUNyQkYsTUFBTSxDQUFDSyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7Ozs7Ozs7O1FBRTFCLENBQUM7d0JBUktKLE1BQU07OztPQVFYO0lBQ0QscUJBQ0UsOERBQUNLLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHFEQUFzRDs7MEJBQ25FLDhEQUFDZiw4REFBVTs7OztxQkFBRzswQkFDZCw4REFBQ2MsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGlDQUFpQzs7a0NBQzlDLDhEQUFDQyxJQUFFO3dCQUFDRCxTQUFTLEVBQUMsNkJBQTZCO2tDQUFDLFlBQVU7Ozs7OzZCQUFLO2tDQUMzRCw4REFBQ0UsT0FBSzt3QkFBQ0YsU0FBUyxFQUFDLFdBQVc7d0JBQUNHLElBQUksRUFBRSxNQUFNO3dCQUFFQyxXQUFXLEVBQUMsTUFBTTs7Ozs7NkJBQUc7a0NBQ2hFLDhEQUFDQyxRQUFNO3dCQUFDTCxTQUFTLEVBQUMscUJBQXFCO2tDQUFDLFFBQU07Ozs7OzZCQUFTO2tDQUN2RCw4REFBQ00sUUFBTTt3QkFBQ04sU0FBUyxFQUFDLHFGQUFxRjtrQ0FBQyxRQUV4Rzs7Ozs7NkJBQVM7a0NBQ1QsOERBQUNNLFFBQU07d0JBQ0xOLFNBQVMsRUFBQyxpRkFBaUY7d0JBQzNGTyxPQUFPLEVBQUU7bUNBQU1iLE1BQU0sRUFBRTt5QkFBQTtrQ0FDeEIsUUFFRDs7Ozs7NkJBQVM7a0NBQ1QsOERBQUNPLElBQUU7d0JBQUNELFNBQVMsRUFBQyxXQUFXO2tDQUFDLG9CQUFrQjs7Ozs7NkJBQUs7a0NBQ2pELDhEQUFDUSxJQUFFO2tDQUNELDRFQUFDQyxJQUFFO3NDQUFFbkIsTUFBTTs7Ozs7aUNBQU07Ozs7OzZCQUNkOzs7Ozs7cUJBQ0Q7Ozs7OzthQUNGLENBQ047QUFDSixDQUFDO0dBckNLRCxJQUFJOztRQUdPRixrREFBUzs7O0FBSHBCRSxLQUFBQSxJQUFJO0FBdUNWQSxJQUFJLENBQUNxQixlQUFlLGlCQUFHLCtGQUFZO1FBQzNCQyxHQUFHLEVBR0hDLElBQUksRUFDSnRCLE1BQU07Ozs7Z0JBSkE7O29CQUFNSix1REFBSyxDQUNyQiw0RUFBNEUsQ0FDN0U7a0JBQUE7O2dCQUZLeUIsR0FBRyxHQUFHLGFBRVg7Z0JBQ1k7O29CQUFNQSxHQUFHLENBQUNDLElBQUksRUFBRTtrQkFBQTs7Z0JBQXZCQSxJQUFJLEdBQUcsYUFBZ0I7Z0JBQ3ZCdEIsTUFBTSxHQUFHc0IsSUFBSSxDQUFDO2dCQUNwQnJCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNLENBQUMsQ0FBQztnQkFDcEI7O29CQUFPO3dCQUFFQSxNQUFNLEVBQUVBLE1BQU07cUJBQUU7a0JBQUM7OztBQUM1QixDQUFDLEVBQUM7QUFFRiwrREFBZUQsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvbWUuanM/MTY3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCJhdXRvcHJlZml4ZXJcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoeyBhcnRpc3QgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGFydGlzdCk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIC8vIGNpZXJyZSBkZSBzZXNpw7NuXHJcbiAgY29uc3QgbG9nT3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvYXV0aC9sb2dvdXRcIik7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1jeWFuLTEwMCB0by1jeWFuLTgwMFwiPlxyXG4gICAgICA8TmF2aWdhdGlvbiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTUgbXgtNSBweC01IHB5LTUgYmctZ3JheS0zMDBcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGwgbXktNSBteC01XCI+QXJ0IHNlYXJjaDwvaDE+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm15LTUgbXgtNVwiIHR5cGU9e1widGV4dFwifSBwbGFjZWhvbGRlcj1cIk5hbWVcIiAvPlxyXG4gICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9udC1ib2xkIG15LTUgbXgtNVwiPkFydGlzdDwvc2VsZWN0PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZm9udC1ib2xkIGJnLWdyZWVuLTYwMCBob3ZlcjpiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnIHB4LTUgcHktNSBteC0yIG15LTJcIj5cclxuICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBiZy1yZWQtNjAwIGhvdmVyOmJnLXJlZC01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnIHB4LTUgcHktNSBteC0yIG15LTJcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gbG9nT3V0KCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkhlcmUgYXJlIHRoZSBsaXN0OjwvaDE+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPnthcnRpc3R9PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgIFwiaHR0cHM6Ly93d3cucmlqa3NtdXNldW0ubmwvZW4vc2VhcmNoL2FkdmFuY2VkL3Rlcm1zP2ZpZWxkPWludm9sdmVkTWFrZXImcT1cIlxyXG4gICk7XHJcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgY29uc3QgYXJ0aXN0ID0ganNvbjtcclxuICBjb25zb2xlLmxvZyhhcnRpc3QpO1xyXG4gIHJldHVybiB7IGFydGlzdDogYXJ0aXN0IH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsImZldGNoIiwidXNlUm91dGVyIiwiZGF0YSIsIkhvbWUiLCJhcnRpc3QiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwibG9nT3V0IiwiZXJyb3IiLCJheGlvcyIsInBvc3QiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInNlbGVjdCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bCIsImxpIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/home.js\n"));

/***/ })

});