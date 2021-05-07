'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _bcrypt = _interopRequireDefault(require('bcrypt'));

var _BcryptConfig = _interopRequireDefault(require('../config/BcryptConfig'));

var salt = _bcrypt['default'].genSaltSync(_BcryptConfig['default']);

var Encrypt = {
  salt: salt,
  bcrypt: _bcrypt['default']
};
var _default = Encrypt;
exports['default'] = _default;
