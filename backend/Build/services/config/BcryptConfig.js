"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

// * variabel de configuracion para Encriptar contraseñas
(0, _dotenv.config)();
var saltRounds = parseInt(process.env.SALT, 10);
var _default = saltRounds;
exports["default"] = _default;