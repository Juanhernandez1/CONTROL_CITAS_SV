'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _express = require('express');

var _Versiones = _interopRequireDefault(require('./Versiones'));

var _controllers = _interopRequireDefault(require('../controllers'));

var _Login = _interopRequireDefault(require('./Login'));

var Routes = (0, _express.Router)();
var objVersion = (0, _Versiones['default'])(_express.Router, _controllers['default']);
var SignUp = _controllers['default'].SignUp;
var authRouter = (0, _Login['default'])(_express.Router, SignUp);
var RutasV1 = objVersion.RutasV1; // * ruta de version

Routes.use('/v1', RutasV1); // Routes.use('/Auth', authRouter);

var API_RUTES = {
  Routes: Routes,
  authRouter: authRouter
};
var _default = API_RUTES;
exports['default'] = _default;
