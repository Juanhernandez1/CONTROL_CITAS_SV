'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _sequelize = require('sequelize');

var _bcrypt = _interopRequireDefault(require('./bcrypt'));

var _ConfiguracionDb = _interopRequireDefault(require('./config/ConfiguracionDb'));

var _moment = _interopRequireDefault(require('./moment'));

var _sequalize = _interopRequireDefault(require('./sequalize'));

var _model = _interopRequireDefault(require('./sequalize/model'));

var _JWT = _interopRequireDefault(require('./JWT'));

// * Archivo raiz de servicios
var Connection = new _sequalize['default'](_sequelize.Sequelize, _ConfiguracionDb['default']);
var conexion = Connection.conexion;

var _initModels = (0, _model['default'])(conexion),
  Access = _initModels.Access,
  Address = _initModels.Address,
  Appointment = _initModels.Appointment,
  Business = _initModels.Business,
  Contactbusiness = _initModels.Contactbusiness,
  Detail = _initModels.Detail,
  Freeday = _initModels.Freeday,
  Service = _initModels.Service,
  Setting = _initModels.Setting,
  User = _initModels.User,
  Operations = _initModels.Operations;

var Model = {
  Access: Access,
  Address: Address,
  Appointment: Appointment,
  Business: Business,
  Contactbusiness: Contactbusiness,
  Detail: Detail,
  Freeday: Freeday,
  Service: Service,
  Setting: Setting,
  User: User,
  Operations: Operations
};
var services = {
  Model: Model,
  Encrypt: _bcrypt['default'],
  MomentSv: _moment['default'],
  JWT: _JWT['default']
};
var _default = services;
exports['default'] = _default;
