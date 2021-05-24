'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _dotenv = require('dotenv');

// * objeto de configuracion para jwt
(0, _dotenv.config)();
var JwtConfig = {
  secret: process.env.SECRET,
  header: {
    algorithm: 'HS256',
    expiresIn: 86400
  }
};
var _default = JwtConfig;
exports['default'] = _default;
