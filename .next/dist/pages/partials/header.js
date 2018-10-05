"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _head = require("next\\dist\\lib\\head.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\Psharp\\Desktop\\React\\my-awesome-blog\\pages\\partials\\header.js";


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: "render",
    value: function render() {
      return [_react2.default.createElement(_head2.default, { key: 1, __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      }, _react2.default.createElement("link", { rel: "stylesheet", type: "text/css", href: "/static/style.css", __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }), _react2.default.createElement("link", { href: "https://fonts.googleapis.com/css?family=Lato", rel: "stylesheet", __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }), _react2.default.createElement("link", { href: "https://fonts.googleapis.com/css?family=Droid+Serif", rel: "stylesheet", __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }), _react2.default.createElement("meta", { charset: "UTF-8", __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }), _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no", __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }), _react2.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, this.props.cosmic.post ? this.props.cosmic.post.title + ' |' : '', " Simple React Blog")), _react2.default.createElement("header", { id: "top", className: "header", key: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement("h1", { className: "site-title", __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement("a", { href: "/", __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, this.props.cosmic.global.header.metadata.site_title), _react2.default.createElement("small", { className: "site-title__tag", __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, this.props.cosmic.global.header.metadata.site_tag)), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, !this.props.cosmic.posts && 'You must add at least one Post to your Bucket'))];
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwYXJ0aWFsc1xcaGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJwcm9wcyIsImNvc21pYyIsInBvc3QiLCJ0aXRsZSIsImdsb2JhbCIsImhlYWRlciIsIm1ldGFkYXRhIiwic2l0ZV90aXRsZSIsInNpdGVfdGFnIiwicG9zdHMiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBRUksQUFDUDthQUFPLGlCQUNMLEFBQUMsZ0NBQUssS0FBTixBQUFXO29CQUFYO3NCQUFBLEFBQ0U7QUFERjtPQUFBLDBDQUNRLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCLFlBQVcsTUFBdkMsQUFBNEM7b0JBQTVDO3NCQURGLEFBQ0UsQUFDQTtBQURBO2tEQUNNLE1BQU4sQUFBVyxnREFBK0MsS0FBMUQsQUFBOEQ7b0JBQTlEO3NCQUZGLEFBRUUsQUFDQTtBQURBO2tEQUNNLE1BQU4sQUFBVyx1REFBc0QsS0FBakUsQUFBcUU7b0JBQXJFO3NCQUhGLEFBR0UsQUFDQTtBQURBO2tEQUNNLFNBQU4sQUFBYztvQkFBZDtzQkFKRixBQUlFLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QjtvQkFBOUI7c0JBTEYsQUFLRSxBQUNBO0FBREE7MEJBQ0EsY0FBQTs7b0JBQUE7c0JBQUEsQUFBUztBQUFUO0FBQUEsY0FBUyxBQUFLLE1BQUwsQUFBVyxPQUFYLEFBQWtCLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxPQUFYLEFBQWtCLEtBQWxCLEFBQXVCLFFBQWhELEFBQXdELE9BQWpFLEFBQXdFLElBUHJFLEFBQ0wsQUFNRSx3Q0FFRixjQUFBLFlBQVEsSUFBUixBQUFXLE9BQU0sV0FBakIsQUFBMkIsVUFBUyxLQUFwQyxBQUF5QztvQkFBekM7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQSxRQUFJLFdBQUosQUFBYztvQkFBZDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxPQUFHLE1BQUgsQUFBUTtvQkFBUjtzQkFBQSxBQUFjO0FBQWQ7Y0FBYyxBQUFLLE1BQUwsQUFBVyxPQUFYLEFBQWtCLE9BQWxCLEFBQXlCLE9BQXpCLEFBQWdDLFNBRGhELEFBQ0UsQUFBdUQsQUFDdkQsNkJBQUEsY0FBQSxXQUFPLFdBQVAsQUFBaUI7b0JBQWpCO3NCQUFBLEFBQXFDO0FBQXJDO2NBQXFDLEFBQUssTUFBTCxBQUFXLE9BQVgsQUFBa0IsT0FBbEIsQUFBeUIsT0FBekIsQUFBZ0MsU0FIekUsQUFDRSxBQUVFLEFBQThFLEFBRWhGLDRCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBRUk7QUFGSjtBQUFBLFVBRUssS0FBQSxBQUFLLE1BQUwsQUFBVyxPQUFaLEFBQW1CLFNBaEIzQixBQUFPLEFBU0wsQUFLRSxBQUdJLEFBS1Q7Ozs7O0VBeEIwQixnQkFBTSxBIiwiZmlsZSI6ImhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9Qc2hhcnAvRGVza3RvcC9SZWFjdC9teS1hd2Vzb21lLWJsb2cifQ==