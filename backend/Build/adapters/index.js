'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _LastFiveDays = _interopRequireDefault(require('../domain/Date/LastFiveDays'));

var _Date_Adapter = _interopRequireDefault(require('./Date_Adapter'));

var _Db_Adapter = _interopRequireDefault(require('./Db_Adapter'));

var adapters = {
  RootCrudAdapter: _Db_Adapter['default'],
  AppointmentGen: new _Date_Adapter['default'](_LastFiveDays['default'])
};
var _default = adapters;
exports['default'] = _default;
