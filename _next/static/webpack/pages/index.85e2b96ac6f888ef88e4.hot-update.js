webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var _footer_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.data */ "./src/components/footer/footer.data.js");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\omara\\Downloads\\agency-modern-next\\005-agency-modern-next\\src\\components\\footer\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




function Footer() {
  var _this = this;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("footer", {
    sx: styles.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.widgets,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, _footer_data__WEBPACK_IMPORTED_MODULE_3__["default"].widgets.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      key: "footer-widget--key".concat(item.id),
      sx: styles.widgets.widgetItem,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: item.iconSrc,
      alt: item.altText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 15
      }
    }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.widgets.infoWrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 15
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      as: "h3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      as: "p",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, item.description)));
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footer.footerBottomArea,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_logo_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footer.menus,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("nav", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, _footer_data__WEBPACK_IMPORTED_MODULE_3__["default"].menuItem.map(function (_ref, i) {
    var path = _ref.path,
        label = _ref.label;
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      path: path,
      key: i,
      label: label,
      sx: styles.footer.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    });
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.footer.copyright,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "Copyright by ", new Date().getFullYear(), " RedQ, Inc ", Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 63
    }
  }), "By ", Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    href: "https://devomar.info",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 16
    }
  }, "devOMAR")))));
}
_c = Footer;
var styles = {
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column'
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }
    },
    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary'
      }
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%'
    }
  },
  widgets: {
    py: [8, null, 9],
    px: [4, 0, 3, null, 7, 10],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['40px 0', null, '45px 30px', null, '60px 30px', '50px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', 'repeat(3,1fr)'],
    widgetItem: {
      textAlign: 'center'
    },
    infoWrapper: {
      mt: [2, 3, null, 2, 4],
      mb: -1,
      h3: {
        fontSize: [3, null, null, 2, 3, 4],
        color: 'heading_secondary',
        lineHeight: 1.4,
        fontWeight: 700,
        mb: [2, null, null, null, '15px']
      },
      p: {
        fontSize: [1, '15px'],
        fontWeight: 400,
        lineHeight: 2
      }
    }
  }
};

var _c;

$RefreshReg$(_c, "Footer");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJzdHlsZXMiLCJmb290ZXIiLCJ3aWRnZXRzIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpZCIsIndpZGdldEl0ZW0iLCJpY29uU3JjIiwiYWx0VGV4dCIsImluZm9XcmFwcGVyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImZvb3RlckJvdHRvbUFyZWEiLCJGb290ZXJMb2dvIiwibWVudXMiLCJtZW51SXRlbSIsImkiLCJwYXRoIiwibGFiZWwiLCJsaW5rIiwiY29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiYm9yZGVyVG9wIiwiYm9yZGVyVG9wQ29sb3IiLCJkaXNwbGF5IiwicHQiLCJwYiIsInRleHRBbGlnbiIsImZsZXhEaXJlY3Rpb24iLCJtdCIsIm1iIiwibmF2IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJmb250U2l6ZSIsImNvbG9yIiwiZm9udFdlaWdodCIsImN1cnNvciIsInRyYW5zaXRpb24iLCJ0ZXh0RGVjb3JhdGlvbiIsImxpbmVIZWlnaHQiLCJweCIsIndpZHRoIiwicHkiLCJteCIsImdyaWRHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiaDMiLCJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQy9CLFNBQ0U7QUFBUSxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyw2Q0FBRDtBQUFNLE1BQUUsRUFBRUQsTUFBTSxDQUFDRSxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBCb3gsIEdyaWQsIENvbnRhaW5lciwgSW1hZ2UsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcbmltcG9ydCBkYXRhIGZyb20gJy4vZm9vdGVyLmRhdGEnO1xuaW1wb3J0IEZvb3RlckxvZ28gZnJvbSAnYXNzZXRzL2xvZ28uc3ZnJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIHN4PXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMud2lkZ2V0c30+XG4gICAgICAgICAge2RhdGEud2lkZ2V0cy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAga2V5PXtgZm9vdGVyLXdpZGdldC0ta2V5JHtpdGVtLmlkfWB9XG4gICAgICAgICAgICAgIHN4PXtzdHlsZXMud2lkZ2V0cy53aWRnZXRJdGVtfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLmljb25TcmN9IGFsdD17aXRlbS5hbHRUZXh0fSAvPlxuICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMud2lkZ2V0cy5pbmZvV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiPntpdGVtLnRpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8VGV4dCBhcz1cInBcIj57aXRlbS5kZXNjcmlwdGlvbn08L1RleHQ+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgey8qIEVuZCBvZiBmb290ZXIgd2lkZ2V0cyBhcmVhICovfVxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZm9vdGVyLmZvb3RlckJvdHRvbUFyZWF9PlxuICAgICAgICAgIDxMaW5rIHBhdGg9XCIvXCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtGb290ZXJMb2dvfSBhbHQ9XCJMb2dvXCIgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmZvb3Rlci5tZW51c30+XG4gICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICB7ZGF0YS5tZW51SXRlbS5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBwYXRoPXtwYXRofVxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgICAgICAgc3g9e3N0eWxlcy5mb290ZXIubGlua31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMuZm9vdGVyLmNvcHlyaWdodH0+XG4gICAgICAgICAgICBDb3B5cmlnaHQgYnkge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gUmVkUSwgSW5jIDxiciAvPlxuICAgICAgICAgICAgQnkgPGEgaHJlZj1cImh0dHBzOi8vZGV2b21hci5pbmZvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+ZGV2T01BUjwvYT5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9mb290ZXI+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZm9vdGVyOiB7XG4gICAgZm9vdGVyQm90dG9tQXJlYToge1xuICAgICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkJyxcbiAgICAgIGJvcmRlclRvcENvbG9yOiAnYm9yZGVyX2NvbG9yJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIHB0OiBbNywgbnVsbCwgOF0sXG4gICAgICBwYjogWyc0MHB4JywgbnVsbCwgJzEwMHB4J10sXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgfSxcbiAgICBtZW51czoge1xuICAgICAgbXQ6IFszLCA0XSxcbiAgICAgIG1iOiAyLFxuICAgICAgbmF2OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIGxpbms6IHtcbiAgICAgIGZvbnRTaXplOiBbMSwgJzE1cHgnXSxcbiAgICAgIGNvbG9yOiAndGV4dCcsXG4gICAgICBmb250V2VpZ2h0OiAnNDAwJyxcbiAgICAgIG1iOiAyLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMzVzJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgbGluZUhlaWdodDogWzEuNSwgbnVsbCwgMS44XSxcbiAgICAgIHB4OiBbMiwgbnVsbCwgNF0sXG4gICAgICAnOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNvcHlyaWdodDoge1xuICAgICAgZm9udFNpemU6IFsxLCAnMTVweCddLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICB9LFxuICB3aWRnZXRzOiB7XG4gICAgcHk6IFs4LCBudWxsLCA5XSxcbiAgICBweDogWzQsIDAsIDMsIG51bGwsIDcsIDEwXSxcbiAgICB3aWR0aDogWycxMDAlJywgJzgwJScsICcxMDAlJ10sXG4gICAgbXg6ICdhdXRvJyxcbiAgICBncmlkR2FwOiBbJzQwcHggMCcsIG51bGwsICc0NXB4IDMwcHgnLCBudWxsLCAnNjBweCAzMHB4JywgJzUwcHggOTBweCddLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcbiAgICAgICdyZXBlYXQoMSwxZnIpJyxcbiAgICAgIG51bGwsXG4gICAgICAncmVwZWF0KDIsMWZyKScsXG4gICAgICAncmVwZWF0KDMsMWZyKScsXG4gICAgXSxcbiAgICB3aWRnZXRJdGVtOiB7XG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIH0sXG4gICAgaW5mb1dyYXBwZXI6IHtcbiAgICAgIG10OiBbMiwgMywgbnVsbCwgMiwgNF0sXG4gICAgICBtYjogLTEsXG4gICAgICBoMzoge1xuICAgICAgICBmb250U2l6ZTogWzMsIG51bGwsIG51bGwsIDIsIDMsIDRdLFxuICAgICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcbiAgICAgICAgbGluZUhlaWdodDogMS40LFxuICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgIG1iOiBbMiwgbnVsbCwgbnVsbCwgbnVsbCwgJzE1cHgnXSxcbiAgICAgIH0sXG5cbiAgICAgIHA6IHtcbiAgICAgICAgZm9udFNpemU6IFsxLCAnMTVweCddLFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGxpbmVIZWlnaHQ6IDIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==