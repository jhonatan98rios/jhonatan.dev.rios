webpackHotUpdate_N_E("pages/projetos",{

/***/ "./components/Projects/ProjectCard/index.js":
/*!**************************************************!*\
  !*** ./components/Projects/ProjectCard/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProjectList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/Projects/ProjectCard/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/highsierra/Projects/Pessoal/jhonatan.dev.rios/components/Projects/ProjectCard/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction ProjectList(_ref) {\n  var card = _ref.card;\n  return __jsx(\"section\", {\n    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    style: {\n      backgroundImage: \"url(\".concat(card.background || './projects/default.jpg', \")\"),\n      filter: \"drop-shadow(0px 0px 5px \".concat(card.color, \")\")\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.description,\n    style: {\n      backgroundColor: card.color\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, \" \", card.title, \" \"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, \" \", card.description, \" \"), card.github && __jsx(\"button\", {\n    onClick: function onClick() {\n      console.log(card.link);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, \"Visualizar\"), card.github && __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: card.github,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, \"C\\xF3digo Fonte\")));\n}\n_c = ProjectList;\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0Q2FyZC9pbmRleC5qcz9iY2M3Il0sIm5hbWVzIjpbIlByb2plY3RMaXN0IiwiY2FyZCIsInN0eWxlcyIsImNvbnRhaW5lciIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmQiLCJmaWx0ZXIiLCJjb2xvciIsImRlc2NyaXB0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwidGl0bGUiLCJnaXRodWIiLCJjb25zb2xlIiwibG9nIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxPQUE2QjtBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUUxQyxTQUNFO0FBQ0UsYUFBUyxFQUFFQywwREFBTSxDQUFDQyxTQURwQjtBQUVFLFNBQUssRUFBRTtBQUNMQyxxQkFBZSxnQkFBU0gsSUFBSSxDQUFDSSxVQUFMLElBQW1CLHdCQUE1QixNQURWO0FBRUxDLFlBQU0sb0NBQTZCTCxJQUFJLENBQUNNLEtBQWxDO0FBRkQsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0U7QUFDRSxhQUFTLEVBQUVMLDBEQUFNLENBQUNNLFdBRHBCO0FBRUUsU0FBSyxFQUFFO0FBQ0xDLHFCQUFlLEVBQUVSLElBQUksQ0FBQ007QUFEakIsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFNTixJQUFJLENBQUNTLEtBQVgsTUFORixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBS1QsSUFBSSxDQUFDTyxXQUFWLE1BUEYsRUFVSVAsSUFBSSxDQUFDVSxNQUFMLElBQ0U7QUFBUSxXQUFPLEVBQUcsbUJBQU07QUFBRUMsYUFBTyxDQUFDQyxHQUFSLENBQVlaLElBQUksQ0FBQ2EsSUFBakI7QUFBd0IsS0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFYTixFQWtCSWIsSUFBSSxDQUFDVSxNQUFMLElBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRVYsSUFBSSxDQUFDVSxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQW5CTixDQVBGLENBREY7QUFvQ0Q7S0F0Q3VCWCxXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0Q2FyZC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RMaXN0KHtjYXJkfSkge1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtjYXJkLmJhY2tncm91bmQgfHwgJy4vcHJvamVjdHMvZGVmYXVsdC5qcGcnfSlgLFxuICAgICAgICBmaWx0ZXI6IGBkcm9wLXNoYWRvdygwcHggMHB4IDVweCAke2NhcmQuY29sb3J9KWBcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiBcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjYXJkLmNvbG9yXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxoMz4ge2NhcmQudGl0bGV9IDwvaDM+XG4gICAgICAgIDxwPiB7Y2FyZC5kZXNjcmlwdGlvbn0gPC9wPlxuICAgICAgICBcbiAgICAgICAge1xuICAgICAgICAgIGNhcmQuZ2l0aHViICYmIChcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ICgpID0+IHsgY29uc29sZS5sb2coY2FyZC5saW5rKSB9IH0+XG4gICAgICAgICAgICAgIFZpc3VhbGl6YXJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHtcbiAgICAgICAgICBjYXJkLmdpdGh1YiAmJiAoXG4gICAgICAgICAgICA8TGluayBocmVmPXtjYXJkLmdpdGh1Yn0+XG4gICAgICAgICAgICAgIEPDs2RpZ28gRm9udGVcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Projects/ProjectCard/index.js\n");

/***/ })

})