'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var TokenInterface = function TokenInterface() {
  (0, _classCallCheck2['default'])(this, TokenInterface);
  (0, _defineProperty2['default'])(this, 'CreateToken', function (payload) {});
  (0, _defineProperty2['default'])(this, 'VerifyToken', function (Token, callback) {});
};

exports['default'] = TokenInterface;
