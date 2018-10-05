'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _footer = require('./partials/footer');

var _footer2 = _interopRequireDefault(_footer);

var _header = require('./partials/header');

var _header2 = _interopRequireDefault(_header);

var _helpers = require('../helpers');

var _helpers2 = _interopRequireDefault(_helpers);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Psharp\\Desktop\\React\\my-awesome-blog\\pages\\post.js?entry';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      if (!this.props.cosmic) return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, 'Loading...');
      var friendly_date = void 0;
      if (this.props.cosmic.post) {
        friendly_date = _helpers2.default.friendlyDate(new Date(this.props.cosmic.post.created_at));
        this.props.cosmic.post.friendly_date = friendly_date.month + ' ' + friendly_date.date;
      }
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_header2.default, { cosmic: this.props.cosmic, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), this.props.cosmic.post && this.props.cosmic.post.metadata.hero.imgix_url && _react2.default.createElement('div', { className: 'blog-post-hero', style: { backgroundImage: 'url(' + this.props.cosmic.post.metadata.hero.imgix_url + ')' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), _react2.default.createElement('main', { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('div', { className: 'card-padding', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('h2', { className: 'blog__title', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, !this.props.cosmic.post && _react2.default.createElement('div', { style: { textAlign: 'center' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Post Not found'), this.props.cosmic.post && _react2.default.createElement('a', { href: '/' + this.props.cosmic.post.slug, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, this.props.cosmic.post.title)), this.props.cosmic.post && _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('div', { className: 'blog__author', __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement('a', { href: '/author/' + this.props.cosmic.post.metadata.author.slug, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement('div', { className: 'blog__author-image', style: { backgroundImage: 'url(' + this.props.cosmic.post.metadata.author.metafields[0].imgix_url + '?w=100)' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })), _react2.default.createElement('div', { className: 'blog__author-title', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'by ', _react2.default.createElement('a', { href: '/author/' + this.props.cosmic.post.metadata.author.slug, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, this.props.cosmic.post.metadata.author.title), ' on ', this.props.cosmic.post.friendly_date), _react2.default.createElement('div', { className: 'clearfix', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      })), _react2.default.createElement('div', { className: 'blog__teaser droid', dangerouslySetInnerHTML: { __html: this.props.cosmic.post.content }, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      })))), _react2.default.createElement(_footer2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var query = _ref.query;
        var gql_query;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                gql_query = '{\n      objects(bucket_slug: "' + _config2.default.bucket.slug + '") {\n        type_slug\n        slug\n        title\n        content\n        metadata\n        created_at\n      }\n    }';
                _context.next = 3;
                return _axios2.default.post('https://graphql.cosmicjs.com/v1', { query: gql_query }).then(function (response) {
                  return {
                    cosmic: {
                      posts: _lodash2.default.filter(response.data.data.objects, { type_slug: 'posts' }),
                      global: _lodash2.default.keyBy(_lodash2.default.filter(response.data.data.objects, { type_slug: 'globals' }), 'slug'),
                      post: _lodash2.default.find(response.data.data.objects, { slug: query.slug })
                    }
                  };
                }).catch(function (error) {
                  console.log(error);
                });

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwb3N0LmpzIl0sIm5hbWVzIjpbImF4aW9zIiwiXyIsIkZvb3RlciIsIkhlYWRlciIsImhlbHBlcnMiLCJjb25maWciLCJwcm9wcyIsImNvc21pYyIsImZyaWVuZGx5X2RhdGUiLCJwb3N0IiwiZnJpZW5kbHlEYXRlIiwiRGF0ZSIsImNyZWF0ZWRfYXQiLCJtb250aCIsImRhdGUiLCJtZXRhZGF0YSIsImhlcm8iLCJpbWdpeF91cmwiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0ZXh0QWxpZ24iLCJzbHVnIiwidGl0bGUiLCJhdXRob3IiLCJtZXRhZmllbGRzIiwiX19odG1sIiwiY29udGVudCIsInF1ZXJ5IiwiZ3FsX3F1ZXJ5IiwiYnVja2V0IiwidGhlbiIsInJlc3BvbnNlIiwicG9zdHMiLCJmaWx0ZXIiLCJkYXRhIiwib2JqZWN0cyIsInR5cGVfc2x1ZyIsImdsb2JhbCIsImtleUJ5IiwiZmluZCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQTRCUixBQUNQO1VBQUksQ0FBQyxLQUFBLEFBQUssTUFBVixBQUFnQiwrQkFDUCxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsT0FBQSxFQUFQLEFBQU8sQUFDVCxhQURFO1VBQ0UscUJBQUosQUFDQTtVQUFJLEtBQUEsQUFBSyxNQUFMLEFBQVcsT0FBZixBQUFzQixNQUFNLEFBQzFCO3dCQUFnQixrQkFBQSxBQUFRLGFBQWEsSUFBQSxBQUFJLEtBQUssS0FBQSxBQUFLLE1BQUwsQUFBVyxPQUFYLEFBQWtCLEtBQWhFLEFBQWdCLEFBQXFCLEFBQWdD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YUksQUFRRSxBQUtSO0FBTFE7NkJBS1IsQUFBQzs7b0JBQUQ7c0JBbENKLEFBQ0UsQUFpQ0UsQUFHTDtBQUhLO0FBQUE7Ozs7OztZLEFBbkV5QixhQUFBLEE7Ozs7O21CQUN2QjtBLGdFQUNvQixpQkFBQSxBQUFPLE8sQUFBTzs7dUNBUzNCLEFBQU0sd0NBQXdDLEVBQUUsT0FBaEQsQUFBOEMsQUFBUyxhQUF2RCxBQUNaLEtBQUssVUFBQSxBQUFVLFVBQVUsQUFDeEI7Ozs2QkFFVyxpQkFBQSxBQUFFLE9BQU8sU0FBQSxBQUFTLEtBQVQsQUFBYyxLQUF2QixBQUE0QixTQUFTLEVBQUUsV0FEeEMsQUFDQyxBQUFxQyxBQUFhLEFBQ3pEOzhCQUFRLGlCQUFBLEFBQUUsTUFBTSxpQkFBQSxBQUFFLE9BQU8sU0FBQSxBQUFTLEtBQVQsQUFBYyxLQUF2QixBQUE0QixTQUFTLEVBQUUsV0FBL0MsQUFBUSxBQUFxQyxBQUFhLGNBRjVELEFBRUUsQUFBd0UsQUFDaEY7NEJBQU0saUJBQUEsQUFBRSxLQUFLLFNBQUEsQUFBUyxLQUFULEFBQWMsS0FBckIsQUFBMEIsU0FBUyxFQUFFLE1BQU0sTUFKckQsQUFBTyxBQUNHLEFBR0EsQUFBbUMsQUFBYyxBQUc1RDtBQU5XLEFBQ047QUFGRyxBQUNMO0FBSFMsaUJBQUEsRUFBQSxBQVVaLE1BQU0sVUFBQSxBQUFVLE9BQU8sQUFDdEI7MEJBQUEsQUFBUSxJQUFSLEFBQVksQUFDYjtBQVpZLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFaWSxnQkFBTSxBIiwiZmlsZSI6InBvc3QuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvUHNoYXJwL0Rlc2t0b3AvUmVhY3QvbXktYXdlc29tZS1ibG9nIn0=