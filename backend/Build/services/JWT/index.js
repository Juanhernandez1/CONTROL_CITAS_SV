'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _jsonwebtoken = _interopRequireDefault(require('jsonwebtoken'));

var _JwtConfig = _interopRequireDefault(require('../config/JwtConfig'));

var JWT = {
  jwt: _jsonwebtoken['default'],
  JwtConfig: _JwtConfig['default']
};
var _default = JWT;
exports['default'] = _default;
