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

var _jsxFileName = 'C:\\Users\\Psharp\\Desktop\\React\\simple-react-blog\\pages\\index.js?entry';


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
          lineNumber: 35
        }
      }, 'Loading...');
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement(_header2.default, { cosmic: this.props.cosmic, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), _react2.default.createElement('main', { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, this.props.cosmic.posts && this.props.cosmic.posts.map(function (post) {
        var friendly_date = _helpers2.default.friendlyDate(new Date(post.created_at));
        post.friendly_date = friendly_date.month + ' ' + friendly_date.date;
        return _react2.default.createElement('div', { className: 'card', 'data-href': '/' + post.slug, key: post._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }, post.metadata.hero.imgix_url && _react2.default.createElement('a', { href: '/' + post.slug, className: 'blog-post-hero blog-post-hero--short', style: { backgroundImage: 'url(' + post.metadata.hero.imgix_url + ')' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }), _react2.default.createElement('div', { className: 'card-padding', __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, _react2.default.createElement('h2', { className: 'blog__title blog__title--small', __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, _react2.default.createElement('a', { href: '/' + post.slug, __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, post.title)), _react2.default.createElement('div', { className: 'blog__author', __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, _react2.default.createElement('a', { href: '/author/' + post.metadata.author.slug, __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, _react2.default.createElement('div', { className: 'blog__author-image', style: { backgroundImage: 'url(' + post.metadata.author.metafields[0].imgix_url + '?w=100)' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        })), _react2.default.createElement('div', { className: 'blog__author-title', __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, 'by ', _react2.default.createElement('a', { href: '/author/' + post.metadata.author.slug, __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, post.metadata.author.title), ' on ', post.friendly_date), _react2.default.createElement('div', { className: 'clearfix', __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        })), _react2.default.createElement('div', { className: 'blog__teaser droid', dangerouslySetInnerHTML: { __html: post.metadata.teaser }, __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }), _react2.default.createElement('div', { className: 'blog__read-more', __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, _react2.default.createElement('a', { href: '/' + post.slug, __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, 'Read more...'))));
      })), _react2.default.createElement(_footer2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req;
        var query;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = '{\n      objects(bucket_slug: "' + _config2.default.bucket.slug + '") {\n        _id\n        type_slug\n        slug\n        title\n        metadata\n        created_at\n      }\n    }';
                _context.next = 3;
                return _axios2.default.post('https://graphql.cosmicjs.com/v1', { query: query }).then(function (response) {
                  return {
                    cosmic: {
                      posts: _lodash2.default.filter(response.data.data.objects, { type_slug: 'posts' }),
                      global: _lodash2.default.keyBy(_lodash2.default.filter(response.data.data.objects, { type_slug: 'globals' }), 'slug')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJheGlvcyIsIl8iLCJGb290ZXIiLCJIZWFkZXIiLCJoZWxwZXJzIiwiY29uZmlnIiwicHJvcHMiLCJjb3NtaWMiLCJwb3N0cyIsIm1hcCIsImZyaWVuZGx5X2RhdGUiLCJmcmllbmRseURhdGUiLCJEYXRlIiwicG9zdCIsImNyZWF0ZWRfYXQiLCJtb250aCIsImRhdGUiLCJzbHVnIiwiX2lkIiwibWV0YWRhdGEiLCJoZXJvIiwiaW1naXhfdXJsIiwiYmFja2dyb3VuZEltYWdlIiwidGl0bGUiLCJhdXRob3IiLCJtZXRhZmllbGRzIiwiX19odG1sIiwidGVhc2VyIiwicmVxIiwicXVlcnkiLCJidWNrZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJmaWx0ZXIiLCJkYXRhIiwib2JqZWN0cyIsInR5cGVfc2x1ZyIsImdsb2JhbCIsImtleUJ5IiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBMkJSLEFBQ1A7VUFBSSxDQUFDLEtBQUEsQUFBSyxNQUFWLEFBQWdCLCtCQUNQLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxPQUFBLEVBQVAsQUFBTyxBQUNULGFBREU7NkJBRUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDLGtDQUFPLFFBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCO29CQUE1QjtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxjQUFBLFVBQU0sV0FBTixBQUFnQjtvQkFBaEI7c0JBQUEsQUFFSTtBQUZKO2NBRUksQUFBSyxNQUFMLEFBQVcsT0FBWCxBQUFrQixjQUNsQixBQUFLLE1BQUwsQUFBVyxPQUFYLEFBQWtCLE1BQWxCLEFBQXdCLElBQUksZ0JBQVEsQUFDbEM7WUFBTSxnQkFBZ0Isa0JBQUEsQUFBUSxhQUFhLElBQUEsQUFBSSxLQUFLLEtBQXBELEFBQXNCLEFBQXFCLEFBQWMsQUFDekQ7YUFBQSxBQUFLLGdCQUFnQixjQUFBLEFBQWMsUUFBZCxBQUFzQixNQUFNLGNBQWpELEFBQStELEFBQy9EOytCQUNHLGNBQUEsU0FBSyxXQUFMLEFBQWUsUUFBTyxtQkFBZSxLQUFyQyxBQUEwQyxNQUFRLEtBQUssS0FBdkQsQUFBNEQ7c0JBQTVEO3dCQUFBLEFBRUc7QUFGSDtTQUFBLE9BRUcsQUFBSyxTQUFMLEFBQWMsS0FBZCxBQUFtQixrREFDaEIsWUFBVSxLQUFiLEFBQWtCLE1BQVEsV0FBMUIsQUFBb0Msd0NBQXVDLE9BQU8sRUFBRSwwQkFBd0IsS0FBQSxBQUFLLFNBQUwsQUFBYyxLQUF0QyxBQUEyQyxZQUEvSCxBQUFrRjtzQkFBbEY7d0JBSEgsQUFHRyxBQUVGO0FBRkU7U0FBQSxtQkFFRixjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0U7QUFERjsyQkFDRSxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBLEFBQ0U7QUFERjsyQkFDRSxjQUFBLE9BQUcsWUFBVSxLQUFiLEFBQWtCO3NCQUFsQjt3QkFBQSxBQUEyQjtBQUEzQjtnQkFGSixBQUNFLEFBQ0UsQUFBZ0MsQUFFbEMseUJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQSxBQUNFO0FBREY7MkJBQ0UsY0FBQSxPQUFHLG1CQUFpQixLQUFBLEFBQUssU0FBTCxBQUFjLE9BQWxDLEFBQXlDO3NCQUF6Qzt3QkFBQSxBQUNFO0FBREY7a0RBQ08sV0FBTCxBQUFlLHNCQUFxQixPQUFPLEVBQUUsMEJBQXdCLEtBQUEsQUFBSyxTQUFMLEFBQWMsT0FBZCxBQUFxQixXQUFyQixBQUFnQyxHQUF4RCxBQUEyRCxZQUF4RyxBQUEyQztzQkFBM0M7d0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTs2QkFFRixjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBO0FBQUE7V0FBdUMsdUJBQUEsY0FBQSxPQUFHLG1CQUFpQixLQUFBLEFBQUssU0FBTCxBQUFjLE9BQWxDLEFBQXlDO3NCQUF6Qzt3QkFBQSxBQUFrRDtBQUFsRDtnQkFBa0QsQUFBSyxTQUFMLEFBQWMsT0FBdkcsQUFBdUMsQUFBdUUsUUFBZSxhQUovSCxBQUlFLEFBQWtJLEFBQ2xJLHVEQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFUSixBQUlFLEFBS0UsQUFFRjtBQUZFO29EQUVHLFdBQUwsQUFBZSxzQkFBcUIseUJBQXlCLEVBQUMsUUFBUSxLQUFBLEFBQUssU0FBM0UsQUFBNkQsQUFBdUI7c0JBQXBGO3dCQVhGLEFBV0UsQUFDQTtBQURBOzRCQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDRTtBQURGOzJCQUNFLGNBQUEsT0FBRyxZQUFVLEtBQWIsQUFBa0I7c0JBQWxCO3dCQUFBO0FBQUE7V0FuQlIsQUFDRyxBQUtDLEFBWUUsQUFDRSxBQUtUO0FBaENQLEFBRUUsQUFHSSxBQThCSixPQTlCSSxvQkE4QkosQUFBQzs7b0JBQUQ7c0JBcENKLEFBQ0UsQUFtQ0UsQUFHTDtBQUhLO0FBQUE7Ozs7OztZLEFBL0R5QixXLEFBQUE7Ozs7O21CQUN2QjtBLDREQUNvQixpQkFBQSxBQUFPLE8sQUFBTzs7dUNBUzNCLEFBQU0sd0NBQXdDLEVBQUUsT0FBaEQsQUFBOEMsU0FBOUMsQUFDWixLQUFLLFVBQUEsQUFBVSxVQUFVLEFBQ3hCOzs7NkJBRVcsaUJBQUEsQUFBRSxPQUFPLFNBQUEsQUFBUyxLQUFULEFBQWMsS0FBdkIsQUFBNEIsU0FBUyxFQUFFLFdBRHhDLEFBQ0MsQUFBcUMsQUFBYSxBQUN6RDs4QkFBUSxpQkFBQSxBQUFFLE1BQU0saUJBQUEsQUFBRSxPQUFPLFNBQUEsQUFBUyxLQUFULEFBQWMsS0FBdkIsQUFBNEIsU0FBUyxFQUFFLFdBQS9DLEFBQVEsQUFBcUMsQUFBYSxjQUh0RSxBQUFPLEFBQ0csQUFFRSxBQUF3RSxBQUdyRjtBQUxXLEFBQ047QUFGRyxBQUNMO0FBSFMsaUJBQUEsRUFBQSxBQVNaLE1BQU0sVUFBQSxBQUFVLE9BQU8sQUFDdEI7MEJBQUEsQUFBUSxJQUFSLEFBQVksQUFDYjtBQVhZLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFaWSxnQkFBTSxBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL1BzaGFycC9EZXNrdG9wL1JlYWN0L3NpbXBsZS1yZWFjdC1ibG9nIn0=