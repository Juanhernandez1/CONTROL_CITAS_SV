'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var EncryptInterface = function EncryptInterface() {
  (0, _classCallCheck2['default'])(this, EncryptInterface);
  (0, _defineProperty2['default'])(this, 'EncryptPassword', function (password) {});
  (0, _defineProperty2['default'])(this, 'ComparePassword', function (hashPassword) {});
};

exports['default'] = EncryptInterface;
