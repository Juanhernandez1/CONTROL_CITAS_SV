"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

var _FirebaseConfig = _interopRequireDefault(require("../config/FirebaseConfig"));

var Firebase = _firebase["default"].initializeApp(_FirebaseConfig["default"]);

var AuthGoogle = new _firebase["default"].auth.GoogleAuthProvider();
var _default = Firebase;
exports["default"] = _default;