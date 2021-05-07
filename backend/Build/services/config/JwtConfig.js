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
  port: process.env.PORT || 3000,
  header: {
    alg: 'HS256',
    typ: 'JWT'
  }
};
var _default = JwtConfig;
exports['default'] = _default;
