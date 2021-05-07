"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _grant = _interopRequireDefault(require("grant"));

var _GrantConfig = _interopRequireDefault(require("../config/GrantConfig"));

var Grant = _grant["default"].express(_GrantConfig["default"]);

var _default = Grant;
exports["default"] = _default;