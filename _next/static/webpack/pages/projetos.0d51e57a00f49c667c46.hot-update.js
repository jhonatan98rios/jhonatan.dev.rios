webpackHotUpdate_N_E("pages/projetos",{

/***/ "./partials/Projects/ProjectList/index.js":
/*!************************************************!*\
  !*** ./partials/Projects/ProjectList/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProjectList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ \"./partials/Projects/ProjectList/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Projects_ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Projects/ProjectCard */ \"./components/Projects/ProjectCard/index.js\");\n/* harmony import */ var react_flickity_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-flickity-component */ \"./node_modules/react-flickity-component/lib/index.js\");\n/* harmony import */ var react_flickity_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_flickity_component__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/highsierra/Projects/Pessoal/jhonatan.dev.rios/partials/Projects/ProjectList/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction ProjectList() {\n  var _this = this;\n\n  var flickityOptions = {\n    initialIndex: 2,\n    draggable: true,\n    contain: true,\n    prevNextButtons: false,\n    pageDots: false\n  };\n  var content = [{\n    title: 'Whatsapp Clone Vanilla',\n    description: 'Um clone do Whatsapp Web. Tecnologias utilizadas: HTML, CSS, Javascript MVC, Webpack, Firebase-storage, Firebase-firestore e Firebase-functions',\n    background: './projects/whatsapp-clone-vanilla.png',\n    github: 'https://github.com/jhonatan98rios/clothing_store',\n    color: 'rgba(14,179,156, .9)'\n  }, {\n    title: 'Fire Day',\n    description: 'Um jogo web criado para conscientizar a população sobre os efeitos das queimadas. As tecnologias utilizadas foram: Vue, Vuex, Vue-router, Vue2-touch-events, Sass e Particles.js',\n    background: './projects/fireday.png',\n    github: 'https://github.com/jhonatan98rios/fireDay',\n    color: 'rgba(91,26,184, .9)'\n  }, {\n    title: 'Clothing Store',\n    description: 'Um marketplace para lojas de roupa catalogarem seus produtos. As tecnologias utilizadas foram: React, React-router, Sass e Axios',\n    background: './projects/clothing_store.png',\n    github: 'https://github.com/jhonatan98rios/clothing_store',\n    color: 'rgba(14,179,156, .9)'\n  }, {\n    title: 'Fareja Fatos App',\n    description: 'Este aplicativo foi desenvolvido durante o Hackcovid-19 (evento patrocinado pela Fiocruz), com o objetivo de auxiliar a população na identificação de noticias falsas através de aprendizado de máquina.',\n    background: './projects/fareja-fatos-app.jpg',\n    github: 'https://github.com/jhonatan98rios/FarejaFatosApp',\n    color: 'rgba(91,26,184, .9)'\n  }, {\n    title: 'Fareja Fatos Institucional',\n    description: '',\n    background: './projects/fareja-fatos-blog.png',\n    github: 'https://github.com/jhonatan98rios/fareja-fatos-site',\n    color: 'rgba(14,179,156, .9)'\n  }, {\n    title: 'Smart Gadget Web',\n    description: '',\n    background: './projects/smart-gadget.png',\n    github: 'https://github.com/jhonatan98rios/smart.gadget.frontend',\n    color: 'rgba(91,26,184, .9)'\n  }, {\n    title: 'Sistema de Gestão',\n    description: 'Um sistema de linha de comando para gerenciamento de clientes, funcionários, vendas e estoque. A tecnologia utilizada nesse projeto foi a linguagem C',\n    github: 'https://github.com/jhonatan98rios/clothing_store',\n    color: 'rgba(91,26,184, .9)'\n  }];\n  return __jsx(\"section\", {\n    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }, \" Confira meus projetos principais \"), __jsx(react_flickity_component__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cardList,\n    elementType: 'div',\n    options: flickityOptions,\n    reloadOnUpdate: true,\n    \"static\": true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }, content.map(function (card, key) {\n    return __jsx(_components_Projects_ProjectCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: key,\n      card: card,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 11\n      }\n    });\n  })));\n}\n_c = ProjectList;\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFydGlhbHMvUHJvamVjdHMvUHJvamVjdExpc3QvaW5kZXguanM/Y2Y5NyJdLCJuYW1lcyI6WyJQcm9qZWN0TGlzdCIsImZsaWNraXR5T3B0aW9ucyIsImluaXRpYWxJbmRleCIsImRyYWdnYWJsZSIsImNvbnRhaW4iLCJwcmV2TmV4dEJ1dHRvbnMiLCJwYWdlRG90cyIsImNvbnRlbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYmFja2dyb3VuZCIsImdpdGh1YiIsImNvbG9yIiwic3R5bGVzIiwiY29udGFpbmVyIiwiY2FyZExpc3QiLCJtYXAiLCJjYXJkIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxXQUFULEdBQXVCO0FBQUE7O0FBRXBDLE1BQU1DLGVBQWUsR0FBRztBQUN0QkMsZ0JBQVksRUFBRSxDQURRO0FBRXRCQyxhQUFTLEVBQUUsSUFGVztBQUd0QkMsV0FBTyxFQUFFLElBSGE7QUFJdEJDLG1CQUFlLEVBQUUsS0FKSztBQUt0QkMsWUFBUSxFQUFFO0FBTFksR0FBeEI7QUFRQSxNQUFNQyxPQUFPLEdBQUcsQ0FDZDtBQUNFQyxTQUFLLEVBQUUsd0JBRFQ7QUFFRUMsZUFBVyxFQUFFLGlKQUZmO0FBR0VDLGNBQVUsRUFBRSx1Q0FIZDtBQUlFQyxVQUFNLEVBQUUsa0RBSlY7QUFLRUMsU0FBSyxFQUFFO0FBTFQsR0FEYyxFQVFkO0FBQ0VKLFNBQUssRUFBRSxVQURUO0FBRUVDLGVBQVcsRUFBRSxrTEFGZjtBQUdFQyxjQUFVLEVBQUUsd0JBSGQ7QUFJRUMsVUFBTSxFQUFFLDJDQUpWO0FBS0VDLFNBQUssRUFBRTtBQUxULEdBUmMsRUFlZDtBQUNFSixTQUFLLEVBQUUsZ0JBRFQ7QUFFRUMsZUFBVyxFQUFFLGtJQUZmO0FBR0VDLGNBQVUsRUFBRSwrQkFIZDtBQUlFQyxVQUFNLEVBQUUsa0RBSlY7QUFLRUMsU0FBSyxFQUFFO0FBTFQsR0FmYyxFQXNCZDtBQUNFSixTQUFLLEVBQUUsa0JBRFQ7QUFFRUMsZUFBVyxFQUFFLDBNQUZmO0FBR0VDLGNBQVUsRUFBRSxpQ0FIZDtBQUlFQyxVQUFNLEVBQUUsa0RBSlY7QUFLRUMsU0FBSyxFQUFFO0FBTFQsR0F0QmMsRUE2QmQ7QUFDRUosU0FBSyxFQUFFLDRCQURUO0FBRUVDLGVBQVcsRUFBRSxFQUZmO0FBR0VDLGNBQVUsRUFBRSxrQ0FIZDtBQUlFQyxVQUFNLEVBQUUscURBSlY7QUFLRUMsU0FBSyxFQUFFO0FBTFQsR0E3QmMsRUFvQ2Q7QUFDRUosU0FBSyxFQUFFLGtCQURUO0FBRUVDLGVBQVcsRUFBRSxFQUZmO0FBR0VDLGNBQVUsRUFBRSw2QkFIZDtBQUlFQyxVQUFNLEVBQUUseURBSlY7QUFLRUMsU0FBSyxFQUFFO0FBTFQsR0FwQ2MsRUEyQ2Q7QUFDRUosU0FBSyxFQUFFLG1CQURUO0FBRUVDLGVBQVcsRUFBRSx1SkFGZjtBQUdFRSxVQUFNLEVBQUUsa0RBSFY7QUFJRUMsU0FBSyxFQUFFO0FBSlQsR0EzQ2MsQ0FBaEI7QUFtREEsU0FDRTtBQUFTLGFBQVMsRUFBRUMsMERBQU0sQ0FBQ0MsU0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMENBREYsRUFFRSxNQUFDLCtEQUFEO0FBQ0UsYUFBUyxFQUFFRCwwREFBTSxDQUFDRSxRQURwQjtBQUVFLGVBQVcsRUFBRSxLQUZmO0FBR0UsV0FBTyxFQUFFZCxlQUhYO0FBSUUsa0JBQWMsTUFKaEI7QUFLRSxrQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0dNLE9BQU8sQ0FBQ1MsR0FBUixDQUFZLFVBQUNDLElBQUQsRUFBT0MsR0FBUDtBQUFBLFdBQ1gsTUFBQyx3RUFBRDtBQUFhLFNBQUcsRUFBRUEsR0FBbEI7QUFBdUIsVUFBSSxFQUFFRCxJQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFc7QUFBQSxHQUFaLENBUEgsQ0FGRixDQURGO0FBZ0JEO0tBN0V1QmpCLFciLCJmaWxlIjoiLi9wYXJ0aWFscy9Qcm9qZWN0cy9Qcm9qZWN0TGlzdC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXG5pbXBvcnQgUHJvamVjdENhcmQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0Q2FyZCdcbmltcG9ydCBGbGlja2l0eSBmcm9tICdyZWFjdC1mbGlja2l0eS1jb21wb25lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RMaXN0KCkge1xuXG4gIGNvbnN0IGZsaWNraXR5T3B0aW9ucyA9IHtcbiAgICBpbml0aWFsSW5kZXg6IDIsXG4gICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgIGNvbnRhaW46IHRydWUsXG4gICAgcHJldk5leHRCdXR0b25zOiBmYWxzZSxcbiAgICBwYWdlRG90czogZmFsc2UsXG4gIH1cblxuICBjb25zdCBjb250ZW50ID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnV2hhdHNhcHAgQ2xvbmUgVmFuaWxsYScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1VtIGNsb25lIGRvIFdoYXRzYXBwIFdlYi4gVGVjbm9sb2dpYXMgdXRpbGl6YWRhczogSFRNTCwgQ1NTLCBKYXZhc2NyaXB0IE1WQywgV2VicGFjaywgRmlyZWJhc2Utc3RvcmFnZSwgRmlyZWJhc2UtZmlyZXN0b3JlIGUgRmlyZWJhc2UtZnVuY3Rpb25zJyxcbiAgICAgIGJhY2tncm91bmQ6ICcuL3Byb2plY3RzL3doYXRzYXBwLWNsb25lLXZhbmlsbGEucG5nJyxcbiAgICAgIGdpdGh1YjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qaG9uYXRhbjk4cmlvcy9jbG90aGluZ19zdG9yZScsXG4gICAgICBjb2xvcjogJ3JnYmEoMTQsMTc5LDE1NiwgLjkpJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdGaXJlIERheScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1VtIGpvZ28gd2ViIGNyaWFkbyBwYXJhIGNvbnNjaWVudGl6YXIgYSBwb3B1bGHDp8OjbyBzb2JyZSBvcyBlZmVpdG9zIGRhcyBxdWVpbWFkYXMuIEFzIHRlY25vbG9naWFzIHV0aWxpemFkYXMgZm9yYW06IFZ1ZSwgVnVleCwgVnVlLXJvdXRlciwgVnVlMi10b3VjaC1ldmVudHMsIFNhc3MgZSBQYXJ0aWNsZXMuanMnLFxuICAgICAgYmFja2dyb3VuZDogJy4vcHJvamVjdHMvZmlyZWRheS5wbmcnLFxuICAgICAgZ2l0aHViOiAnaHR0cHM6Ly9naXRodWIuY29tL2pob25hdGFuOThyaW9zL2ZpcmVEYXknLFxuICAgICAgY29sb3I6ICdyZ2JhKDkxLDI2LDE4NCwgLjkpJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdDbG90aGluZyBTdG9yZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1VtIG1hcmtldHBsYWNlIHBhcmEgbG9qYXMgZGUgcm91cGEgY2F0YWxvZ2FyZW0gc2V1cyBwcm9kdXRvcy4gQXMgdGVjbm9sb2dpYXMgdXRpbGl6YWRhcyBmb3JhbTogUmVhY3QsIFJlYWN0LXJvdXRlciwgU2FzcyBlIEF4aW9zJyxcbiAgICAgIGJhY2tncm91bmQ6ICcuL3Byb2plY3RzL2Nsb3RoaW5nX3N0b3JlLnBuZycsXG4gICAgICBnaXRodWI6ICdodHRwczovL2dpdGh1Yi5jb20vamhvbmF0YW45OHJpb3MvY2xvdGhpbmdfc3RvcmUnLFxuICAgICAgY29sb3I6ICdyZ2JhKDE0LDE3OSwxNTYsIC45KSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnRmFyZWphIEZhdG9zIEFwcCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0VzdGUgYXBsaWNhdGl2byBmb2kgZGVzZW52b2x2aWRvIGR1cmFudGUgbyBIYWNrY292aWQtMTkgKGV2ZW50byBwYXRyb2NpbmFkbyBwZWxhIEZpb2NydXopLCBjb20gbyBvYmpldGl2byBkZSBhdXhpbGlhciBhIHBvcHVsYcOnw6NvIG5hIGlkZW50aWZpY2HDp8OjbyBkZSBub3RpY2lhcyBmYWxzYXMgYXRyYXbDqXMgZGUgYXByZW5kaXphZG8gZGUgbcOhcXVpbmEuJyxcbiAgICAgIGJhY2tncm91bmQ6ICcuL3Byb2plY3RzL2ZhcmVqYS1mYXRvcy1hcHAuanBnJyxcbiAgICAgIGdpdGh1YjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qaG9uYXRhbjk4cmlvcy9GYXJlamFGYXRvc0FwcCcsXG4gICAgICBjb2xvcjogJ3JnYmEoOTEsMjYsMTg0LCAuOSknXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0ZhcmVqYSBGYXRvcyBJbnN0aXR1Y2lvbmFsJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIGJhY2tncm91bmQ6ICcuL3Byb2plY3RzL2ZhcmVqYS1mYXRvcy1ibG9nLnBuZycsXG4gICAgICBnaXRodWI6ICdodHRwczovL2dpdGh1Yi5jb20vamhvbmF0YW45OHJpb3MvZmFyZWphLWZhdG9zLXNpdGUnLFxuICAgICAgY29sb3I6ICdyZ2JhKDE0LDE3OSwxNTYsIC45KSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnU21hcnQgR2FkZ2V0IFdlYicsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICBiYWNrZ3JvdW5kOiAnLi9wcm9qZWN0cy9zbWFydC1nYWRnZXQucG5nJyxcbiAgICAgIGdpdGh1YjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qaG9uYXRhbjk4cmlvcy9zbWFydC5nYWRnZXQuZnJvbnRlbmQnLFxuICAgICAgY29sb3I6ICdyZ2JhKDkxLDI2LDE4NCwgLjkpJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdTaXN0ZW1hIGRlIEdlc3TDo28nLFxuICAgICAgZGVzY3JpcHRpb246ICdVbSBzaXN0ZW1hIGRlIGxpbmhhIGRlIGNvbWFuZG8gcGFyYSBnZXJlbmNpYW1lbnRvIGRlIGNsaWVudGVzLCBmdW5jaW9uw6FyaW9zLCB2ZW5kYXMgZSBlc3RvcXVlLiBBIHRlY25vbG9naWEgdXRpbGl6YWRhIG5lc3NlIHByb2pldG8gZm9pIGEgbGluZ3VhZ2VtIEMnLFxuICAgICAgZ2l0aHViOiAnaHR0cHM6Ly9naXRodWIuY29tL2pob25hdGFuOThyaW9zL2Nsb3RoaW5nX3N0b3JlJyxcbiAgICAgIGNvbG9yOiAncmdiYSg5MSwyNiwxODQsIC45KSdcbiAgICB9LFxuICBdXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGgxPiBDb25maXJhIG1ldXMgcHJvamV0b3MgcHJpbmNpcGFpcyA8L2gxPlxuICAgICAgPEZsaWNraXR5XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRMaXN0fSBcbiAgICAgICAgZWxlbWVudFR5cGU9eydkaXYnfSBcbiAgICAgICAgb3B0aW9ucz17ZmxpY2tpdHlPcHRpb25zfSBcbiAgICAgICAgcmVsb2FkT25VcGRhdGUgXG4gICAgICAgIHN0YXRpY1xuICAgICAgPlxuICAgICAgICB7Y29udGVudC5tYXAoKGNhcmQsIGtleSkgPT4gKFxuICAgICAgICAgIDxQcm9qZWN0Q2FyZCBrZXk9e2tleX0gY2FyZD17Y2FyZH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L0ZsaWNraXR5PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./partials/Projects/ProjectList/index.js\n");

/***/ })

})