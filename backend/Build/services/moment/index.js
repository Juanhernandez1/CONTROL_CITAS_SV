'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _moment = _interopRequireDefault(require('moment'));

require('moment-timezone');

var _DateConfig = _interopRequireDefault(require('../config/DateConfig'));

function MomentSv() {
  var Moment = (0, _moment['default'])();
  var locale = _DateConfig['default'].locale,
    timeZone = _DateConfig['default'].timeZone;
  Moment.tz(timeZone);
  Moment.locale(locale);
  return Moment;
}

var _default = MomentSv;
exports['default'] = _default;
