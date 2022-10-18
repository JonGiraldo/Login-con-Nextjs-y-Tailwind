"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navigation */ \"./components/navigation.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Profile = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        userName: \"\"\n    }), user = ref[0], setUser = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    // trae los datos del Backend\n    var getProfile = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n            var response;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/api/profile\")\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        setUser(response.data);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getProfile() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // cierre de sesión\n    var logOut = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n            var error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/api/auth/logout\")\n                        ];\n                    case 1:\n                        _state.sent();\n                        router.push(\"/login\");\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.error(error);\n                        router.push(\"/login\");\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function logOut() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen bg-gradient-to-r from-cyan-100 to-cyan-800\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jonn\\\\Desktop\\\\obras-de-arte\\\\pages\\\\profile.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"USER\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jonn\\\\Desktop\\\\obras-de-arte\\\\pages\\\\profile.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(user.user)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jonn\\\\Desktop\\\\obras-de-arte\\\\pages\\\\profile.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"EMAIL\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jonn\\\\Desktop\\\\obras-de-arte\\\\pages\\\\profile.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(user.email)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jonn\\\\Desktop\\\\obras-de-arte\\\\pages\\\\profile.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-green-600 hover:bg-green-500 rounded-lg text-white px-5 py-5 mx-2 my-2\",\n                onClick: function() {\n                    return getProfile();\n                },\n                children: \"Get Profile\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jonn\\\\Desktop\\\\obras-de-arte\\\\pages\\\\profile.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-red-600 hover:bg-red-500 rounded-lg text-white px-5 py-5 mx-2 my-2\",\n                onClick: function() {\n                    return logOut();\n                },\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jonn\\\\Desktop\\\\obras-de-arte\\\\pages\\\\profile.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Jonn\\\\Desktop\\\\obras-de-arte\\\\pages\\\\profile.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, _this);\n};\n_s(Profile, \"cjfsSBx5qfGddKqb+NCDyhwbYtE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQWtEO0FBQ3hCO0FBQ087QUFDTztBQUV4QyxJQUFNSSxPQUFPLEdBQUcsV0FBTTs7SUFFbEIsSUFBd0JGLEdBRXRCLEdBRnNCQSwrQ0FBUSxDQUFDO1FBQzdCRyxRQUFRLEVBQUUsRUFBRTtLQUNmLENBQUMsRUFGS0MsSUFBSSxHQUFhSixHQUV0QixHQUZTLEVBQUVLLE9BQU8sR0FBSUwsR0FFdEIsR0FGa0I7SUFHcEIsSUFBTU0sTUFBTSxHQUFHTCxzREFBUyxFQUFFO0lBRTFCLDZCQUE2QjtJQUM3QixJQUFNTSxVQUFVO21CQUFHLCtGQUFZO2dCQUVyQkMsUUFBUTs7Ozt3QkFBRzs7NEJBQU1ULGlEQUFTLENBQUMsY0FBYyxDQUFDOzBCQUFBOzt3QkFBMUNTLFFBQVEsR0FBRyxhQUErQjt3QkFDaERILE9BQU8sQ0FBQ0csUUFBUSxDQUFDRSxJQUFJLENBQUMsQ0FBQzs7Ozs7O1FBQzNCLENBQUM7d0JBSktILFVBQVU7OztPQUlmO0lBRUQsbUJBQW1CO0lBQ25CLElBQU1JLE1BQU07bUJBQUcsK0ZBQVk7Z0JBSWRDLEtBQUs7Ozs7Ozs7Ozs7d0JBRlY7OzRCQUFNYixrREFBVSxDQUFDLGtCQUFrQixDQUFDOzBCQUFBOzt3QkFBcEMsYUFBb0M7d0JBQ3BDTyxNQUFNLENBQUNRLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs7O3dCQUNqQkYsS0FBSzt3QkFDVkcsT0FBTyxDQUFDSCxLQUFLLENBQUNBLEtBQUssQ0FBQyxDQUFDO3dCQUNyQk4sTUFBTSxDQUFDUSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7Ozs7Ozs7O1FBRzlCLENBQUM7d0JBVEtILE1BQU07OztPQVNYO0lBRUQscUJBQ0ksOERBQUNLLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHFEQUFxRDs7MEJBQ3BFLDhEQUFDbkIsOERBQVU7Ozs7cUJBQUc7MEJBQ1YsOERBQUNvQixJQUFFOzBCQUFDLE1BQUk7Ozs7O3FCQUFLOzBCQUNiLDhEQUFDQyxLQUFHOzBCQUNDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ2pCLElBQUksQ0FBQ0EsSUFBSSxDQUFDOzs7OztxQkFDeEI7MEJBQ04sOERBQUNjLElBQUU7MEJBQUMsT0FBSzs7Ozs7cUJBQUs7MEJBQ2QsOERBQUNDLEtBQUc7MEJBQ0NDLElBQUksQ0FBQ0MsU0FBUyxDQUFDakIsSUFBSSxDQUFDa0IsS0FBSyxDQUFDOzs7OztxQkFDekI7MEJBQ04sOERBQUNDLFFBQU07Z0JBQUNOLFNBQVMsRUFBQywyRUFBMkU7Z0JBQUNPLE9BQU8sRUFBRTsyQkFBTWpCLFVBQVUsRUFBRTtpQkFBQTswQkFBRSxhQUFXOzs7OztxQkFBUzswQkFDL0ksOERBQUNnQixRQUFNO2dCQUFDTixTQUFTLEVBQUMsdUVBQXVFO2dCQUFDTyxPQUFPLEVBQUU7MkJBQU1iLE1BQU0sRUFBRTtpQkFBQTswQkFBRSxRQUFNOzs7OztxQkFBUzs7Ozs7O2FBQ2hJLENBQ1Q7QUFDTCxDQUFDO0dBekNLVCxPQUFPOztRQUtNRCxrREFBUzs7O0FBTHRCQyxLQUFBQSxPQUFPO0FBMENiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcz8wOGQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmlnYXRpb25cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHVzZXJOYW1lOiBcIlwiXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIC8vIHRyYWUgbG9zIGRhdG9zIGRlbCBCYWNrZW5kXHJcbiAgICBjb25zdCBnZXRQcm9maWxlID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9maWxlJylcclxuICAgICAgICBzZXRVc2VyKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNpZXJyZSBkZSBzZXNpw7NuXHJcbiAgICBjb25zdCBsb2dPdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9hdXRoL2xvZ291dCcpXHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1jeWFuLTEwMCB0by1jeWFuLTgwMFwiPlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgICAgICAgIDxoMT5VU0VSPC9oMT5cclxuICAgICAgICAgICAgPHByZT5cclxuICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeSh1c2VyLnVzZXIpfVxyXG4gICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgICAgPGgxPkVNQUlMPC9oMT5cclxuICAgICAgICAgICAgPHByZT5cclxuICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeSh1c2VyLmVtYWlsKX1cclxuICAgICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JlZW4tNjAwIGhvdmVyOmJnLWdyZWVuLTUwMCByb3VuZGVkLWxnIHRleHQtd2hpdGUgcHgtNSBweS01IG14LTIgbXktMlwiIG9uQ2xpY2s9eygpID0+IGdldFByb2ZpbGUoKX0+R2V0IFByb2ZpbGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1yZWQtNjAwIGhvdmVyOmJnLXJlZC01MDAgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIHB4LTUgcHktNSBteC0yIG15LTJcIiBvbkNsaWNrPXsoKSA9PiBsb2dPdXQoKX0+TG9nb3V0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTsiXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJQcm9maWxlIiwidXNlck5hbWUiLCJ1c2VyIiwic2V0VXNlciIsInJvdXRlciIsImdldFByb2ZpbGUiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJsb2dPdXQiLCJlcnJvciIsInBvc3QiLCJwdXNoIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicHJlIiwiSlNPTiIsInN0cmluZ2lmeSIsImVtYWlsIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/profile.js\n"));

/***/ })

});