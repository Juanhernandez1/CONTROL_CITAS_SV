'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _Db_Adapter = _interopRequireDefault(require('./Db_Adapter'));

var adapters = {
  RootCrudAdapter: _Db_Adapter['default']
};
var _default = adapters;
exports['default'] = _default;
