webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Home/TechnologyCircle/index.js":
/*!***************************************************!*\
  !*** ./components/Home/TechnologyCircle/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Technologies; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/Home/TechnologyCircle/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/highsierra/Projects/Pessoal/jhonatan.dev.rios/components/Home/TechnologyCircle/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Technologies(_ref) {\n  _s();\n\n  var item = _ref.item;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(100),\n      frame = _useState[0],\n      setFrame = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var animation = setInterval(function () {\n      if (frame > 0) {\n        if (frame <= 60 && frame >= 40) {\n          setFrame(function (old) {\n            return old - 3;\n          });\n        } else if (frame <= 80 && frame >= 20) {\n          setFrame(function (old) {\n            return old - 2;\n          });\n        } else {\n          setFrame(function (old) {\n            return old - 1;\n          });\n        }\n      }\n    }, 30);\n    return function () {\n      return clearInterval(animation);\n    };\n  }, [frame]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"li\", {\n    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.listItem,\n    style: {\n      backgroundImage: \"conic-gradient(\\n            from 0,\\n            #232628 0,\\n            #232628 \".concat(frame, \"%,\\n            #00FFC2 0,\\n            #A700F5 50%,\\n            #00FFC2 100%\\n          )\")\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, item.text)));\n}\n\n_s(Technologies, \"STBq7Tqc3G0dYeoWcZkNc45s6uI=\");\n\n_c = Technologies;\n\nvar _c;\n\n$RefreshReg$(_c, \"Technologies\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL1RlY2hub2xvZ3lDaXJjbGUvaW5kZXguanM/MDUwNyJdLCJuYW1lcyI6WyJUZWNobm9sb2dpZXMiLCJpdGVtIiwidXNlU3RhdGUiLCJmcmFtZSIsInNldEZyYW1lIiwidXNlRWZmZWN0IiwiYW5pbWF0aW9uIiwic2V0SW50ZXJ2YWwiLCJvbGQiLCJjbGVhckludGVydmFsIiwic3R5bGVzIiwibGlzdEl0ZW0iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxZQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPOztBQUFBLGtCQUVqQkMsc0RBQVEsQ0FBQyxHQUFELENBRlM7QUFBQSxNQUVwQ0MsS0FGb0M7QUFBQSxNQUU3QkMsUUFGNkI7O0FBSTNDQyx5REFBUyxDQUFDLFlBQUk7QUFFWixRQUFJQyxTQUFTLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBRWhDLFVBQUdKLEtBQUssR0FBRyxDQUFYLEVBQWE7QUFHWCxZQUFHQSxLQUFLLElBQUksRUFBVCxJQUFlQSxLQUFLLElBQUksRUFBM0IsRUFBOEI7QUFFNUJDLGtCQUFRLENBQUMsVUFBQUksR0FBRyxFQUFJO0FBQ2QsbUJBQU9BLEdBQUcsR0FBRyxDQUFiO0FBQ0QsV0FGTyxDQUFSO0FBSUQsU0FORCxNQU1NLElBQUdMLEtBQUssSUFBSSxFQUFULElBQWVBLEtBQUssSUFBSSxFQUEzQixFQUE4QjtBQUVsQ0Msa0JBQVEsQ0FBQyxVQUFBSSxHQUFHLEVBQUk7QUFDZCxtQkFBT0EsR0FBRyxHQUFHLENBQWI7QUFDRCxXQUZPLENBQVI7QUFJRCxTQU5LLE1BTUE7QUFFSkosa0JBQVEsQ0FBQyxVQUFBSSxHQUFHLEVBQUk7QUFDZCxtQkFBT0EsR0FBRyxHQUFHLENBQWI7QUFDRCxXQUZPLENBQVI7QUFJRDtBQUdGO0FBRUYsS0E1QjBCLEVBNEJ4QixFQTVCd0IsQ0FBM0I7QUE4QkEsV0FBTztBQUFBLGFBQU1DLGFBQWEsQ0FBQ0gsU0FBRCxDQUFuQjtBQUFBLEtBQVA7QUFFRCxHQWxDUSxFQWtDUCxDQUFDSCxLQUFELENBbENPLENBQVQ7QUFvQ0EsU0FDRSxtRUFDRTtBQUNFLGFBQVMsRUFBRU8sMERBQU0sQ0FBQ0MsUUFEcEI7QUFFRSxTQUFLLEVBQUU7QUFDTEMscUJBQWUsOEZBR0hULEtBSEc7QUFEVixLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLElBQUksQ0FBQ1ksSUFEUixDQWJGLENBREYsQ0FERjtBQXNCRDs7R0E5RHVCYixZOztLQUFBQSxZIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Ib21lL1RlY2hub2xvZ3lDaXJjbGUvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWNobm9sb2dpZXMoe2l0ZW19KSB7XG5cbiAgY29uc3QgW2ZyYW1lLCBzZXRGcmFtZV0gPSB1c2VTdGF0ZSgxMDApXG5cbiAgdXNlRWZmZWN0KCgpPT57XG5cbiAgICBsZXQgYW5pbWF0aW9uID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXG4gICAgICBpZihmcmFtZSA+IDApe1xuXG5cbiAgICAgICAgaWYoZnJhbWUgPD0gNjAgJiYgZnJhbWUgPj0gNDApe1xuICBcbiAgICAgICAgICBzZXRGcmFtZShvbGQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9sZCAtIDNcbiAgICAgICAgICB9KVxuICAgICAgICAgIFxuICAgICAgICB9ZWxzZSBpZihmcmFtZSA8PSA4MCAmJiBmcmFtZSA+PSAyMCl7XG4gIFxuICAgICAgICAgIHNldEZyYW1lKG9sZCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2xkIC0gMlxuICAgICAgICAgIH0pXG4gICAgICAgICAgXG4gICAgICAgIH1lbHNlIHtcblxuICAgICAgICAgIHNldEZyYW1lKG9sZCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2xkIC0gMVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgfVxuXG5cbiAgICAgIH1cblxuICAgIH0sIDMwKVxuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoYW5pbWF0aW9uKVxuXG4gIH0sW2ZyYW1lXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bGkgXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RJdGVtfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYGNvbmljLWdyYWRpZW50KFxuICAgICAgICAgICAgZnJvbSAwLFxuICAgICAgICAgICAgIzIzMjYyOCAwLFxuICAgICAgICAgICAgIzIzMjYyOCAke2ZyYW1lfSUsXG4gICAgICAgICAgICAjMDBGRkMyIDAsXG4gICAgICAgICAgICAjQTcwMEY1IDUwJSxcbiAgICAgICAgICAgICMwMEZGQzIgMTAwJVxuICAgICAgICAgIClgXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIHtpdGVtLnRleHR9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvbGk+XG4gICAgPC8+XG4gICAgXG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Home/TechnologyCircle/index.js\n");

/***/ })

})