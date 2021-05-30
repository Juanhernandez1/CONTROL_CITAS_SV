'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _services = _interopRequireDefault(require('../../services'));

var MomentSv = _services['default'].MomentSv;

function LastFiveDays() {
  var ListFiveDays = [];

  for (var index = 0; index <= 7; index++) {
    var DateName = MomentSv().add(index, 'days').format('dddd');
    if (DateName === 'sábado' || DateName === 'domingo') index = index + 1;
    if (ListFiveDays.length < 5)
      ListFiveDays.push({
        dayName: MomentSv().add(index, 'days').format('dddd'),
        day: MomentSv().add(index, 'days').format('D'),
        monthName: MomentSv().add(index, 'days').format('MMMM'),
        month: MomentSv().add(index, 'days').format('M'),
        year: MomentSv().add(index, 'days').format('YYYY'),
        hour: MomentSv().add(index, 'days').format('h'),
        minute: MomentSv().add(index, 'days').format('m'),
        time: MomentSv().add(index, 'days').format('A'),
        fulldate: MomentSv().add(index, 'days').format('l')
      });
  }

  return ListFiveDays;
}

var _default = LastFiveDays;
exports['default'] = _default;
