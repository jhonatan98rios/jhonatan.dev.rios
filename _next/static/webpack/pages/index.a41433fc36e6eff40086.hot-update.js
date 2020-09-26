webpackHotUpdate_N_E("pages/index",{

/***/ "./partials/Home/Technologies/index.js":
/*!*********************************************!*\
  !*** ./partials/Home/Technologies/index.js ***!
  \*********************************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ \"./partials/Home/Technologies/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Home_TechnologyCircle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Home/TechnologyCircle */ \"./components/Home/TechnologyCircle/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/highsierra/Projects/Pessoal/jhonatan.dev.rios/partials/Home/Technologies/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nfunction Technologies(props) {\n  _s();\n\n  var _this = this;\n\n  var itens = [{\n    text: 'HTML',\n    percentage: '100',\n    initial: '0'\n  }, {\n    text: 'CSS',\n    percentage: '20',\n    initial: '0'\n  }];\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log(props);\n  });\n  return __jsx(\"div\", {\n    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, \" Linguagens e Tecnologias \"), __jsx(\"div\", {\n    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carousel,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, itens.map(function (item, index) {\n    return __jsx(_components_Home_TechnologyCircle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      item: item,\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }\n    });\n  }))));\n}\n\n_s(Technologies, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Technologies;\nfunction getStaticProps() {\n  return _getStaticProps.apply(this, arguments);\n}\n\nfunction _getStaticProps() {\n  _getStaticProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var res, data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch('/api/hello');\n\n          case 2:\n            res = _context.sent;\n            _context.next = 5;\n            return res.json();\n\n          case 5:\n            data = _context.sent;\n            return _context.abrupt(\"return\", {\n              props: {\n                data: data\n              } // will be passed to the page component as props\n\n            });\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getStaticProps.apply(this, arguments);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Technologies);\n\nvar _c;\n\n$RefreshReg$(_c, \"Technologies\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFydGlhbHMvSG9tZS9UZWNobm9sb2dpZXMvaW5kZXguanM/ODM1MSJdLCJuYW1lcyI6WyJUZWNobm9sb2dpZXMiLCJwcm9wcyIsIml0ZW5zIiwidGV4dCIsInBlcmNlbnRhZ2UiLCJpbml0aWFsIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImNvbnRhaW5lciIsInRpdGxlIiwiY2Fyb3VzZWwiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJnZXRTdGF0aWNQcm9wcyIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUFBOztBQUFBOztBQUUzQixNQUFNQyxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxRQUFJLEVBQUUsTUFEUjtBQUVFQyxjQUFVLEVBQUUsS0FGZDtBQUdFQyxXQUFPLEVBQUU7QUFIWCxHQURZLEVBTVo7QUFDRUYsUUFBSSxFQUFFLEtBRFI7QUFFRUMsY0FBVSxFQUFFLElBRmQ7QUFHRUMsV0FBTyxFQUFFO0FBSFgsR0FOWSxDQUFkO0FBYUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWVAsS0FBWjtBQUNELEdBRlEsQ0FBVDtBQUlBLFNBQ0U7QUFBSyxhQUFTLEVBQUVRLDBEQUFNLENBQUNDLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRUQsMERBQU0sQ0FBQ0UsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixFQUVFO0FBQUssYUFBUyxFQUFFRiwwREFBTSxDQUFDRyxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJVixLQUFLLENBQUNXLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDekIsV0FDRSxNQUFDLHlFQUFEO0FBQWtCLFVBQUksRUFBRUQsSUFBeEI7QUFBOEIsU0FBRyxFQUFFQyxLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFHRCxHQUpELENBRkosQ0FERixDQUZGLENBREY7QUFpQkQ7O0dBcENRZixZOztLQUFBQSxZO0FBc0NGLFNBQWVnQixjQUF0QjtBQUFBO0FBQUE7OztxTUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVhQyxLQUFLLENBQUMsWUFBRCxDQUZsQjs7QUFBQTtBQUVDQyxlQUZEO0FBQUE7QUFBQSxtQkFHY0EsR0FBRyxDQUFDQyxJQUFKLEVBSGQ7O0FBQUE7QUFHQ0MsZ0JBSEQ7QUFBQSw2Q0FLRTtBQUNMbkIsbUJBQUssRUFBRTtBQUNMbUIsb0JBQUksRUFBSkE7QUFESyxlQURGLENBR0Y7O0FBSEUsYUFMRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBWVFwQiwyRUFBZiIsImZpbGUiOiIuL3BhcnRpYWxzL0hvbWUvVGVjaG5vbG9naWVzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcbmltcG9ydCBUZWNobm9sb2d5Q2lyY2xlIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvSG9tZS9UZWNobm9sb2d5Q2lyY2xlJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFRlY2hub2xvZ2llcyhwcm9wcykge1xuXG4gIGNvbnN0IGl0ZW5zID0gW1xuICAgIHtcbiAgICAgIHRleHQ6ICdIVE1MJyxcbiAgICAgIHBlcmNlbnRhZ2U6ICcxMDAnLFxuICAgICAgaW5pdGlhbDogJzAnXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQ1NTJyxcbiAgICAgIHBlcmNlbnRhZ2U6ICcyMCcsXG4gICAgICBpbml0aWFsOiAnMCdcbiAgICB9XG4gIF1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHByb3BzKVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT4gTGluZ3VhZ2VucyBlIFRlY25vbG9naWFzIDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsfT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGl0ZW5zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgIDxUZWNobm9sb2d5Q2lyY2xlIGl0ZW09e2l0ZW19IGtleT17aW5kZXh9IC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2hlbGxvJylcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhXG4gICAgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVjaG5vbG9naWVzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./partials/Home/Technologies/index.js\n");

/***/ })

})