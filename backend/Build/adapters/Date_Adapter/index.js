'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized')
);

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn')
);

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _SettingResolve2 = _interopRequireDefault(require('../../interface/SettingResolve'));

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf2['default'])(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2['default'])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0, _possibleConstructorReturn2['default'])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
  _classCheckPrivateStaticAccess(receiver, classConstructor);
  _classCheckPrivateStaticFieldDescriptor(descriptor, 'set');
  _classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}

function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError('attempted to set read only private field');
    }
    descriptor.value = value;
  }
}

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
  _classCheckPrivateStaticAccess(receiver, classConstructor);
  _classCheckPrivateStaticFieldDescriptor(descriptor, 'get');
  return _classApplyDescriptorGet(receiver, descriptor);
}

function _classCheckPrivateStaticFieldDescriptor(descriptor, action) {
  if (descriptor === undefined) {
    throw new TypeError('attempted to ' + action + ' private static field before its declaration');
  }
}

function _classCheckPrivateStaticAccess(receiver, classConstructor) {
  if (receiver !== classConstructor) {
    throw new TypeError('Private static access of wrong provenance');
  }
}

function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }
  return descriptor.value;
}

var AppointmentGen = /*#__PURE__*/ (function (_SettingResolve) {
  (0, _inherits2['default'])(AppointmentGen, _SettingResolve);

  var _super = _createSuper(AppointmentGen);

  function AppointmentGen(LastFiveDays) {
    var _this;

    (0, _classCallCheck2['default'])(this, AppointmentGen);
    _this = _super.call(this);
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'GetLastFiveDays',
      function () {
        return _this.LastFiveDays();
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'GetHoursAppointment',
      /*#__PURE__*/ (function () {
        var _ref = (0, _asyncToGenerator2['default'])(
          /*#__PURE__*/ _regenerator['default'].mark(function _callee(Setting, dateList) {
            var ListHours,
              timeends,
              starttime,
              nsa,
              ta,
              tba,
              ad,
              StartTime,
              EndTime,
              taIsMinute,
              hour,
              minute,
              _loop,
              index;

            return _regenerator['default'].wrap(function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    ListHours = [];
                    (timeends = Setting.timeends),
                      (starttime = Setting.starttime),
                      (nsa = Setting.nsa),
                      (ta = Setting.ta),
                      (tba = Setting.tba),
                      (ad = Setting.ad);
                    StartTime = _this.ParseStringHours(starttime);
                    EndTime = _this.ParseStringHours(timeends);
                    taIsMinute = ta.indexOf('.') !== -1;
                    hour = StartTime.hour;
                    minute = StartTime.minute;

                    _loop = function _loop(index) {
                      hour = index === 1 && !taIsMinute ? hour : hour + parseInt(ta);
                      minute = taIsMinute
                        ? minute + parseInt(ta.split('.')[1]) + parseInt(tba)
                        : minute + parseInt(tba);

                      if (minute >= 60) {
                        minute = minute - 60;
                        hour = hour + 1;
                      }

                      var time = hour >= 12 ? 'PM' : 'AM';
                      dateList.forEach(function (element) {
                        if (hour <= EndTime.hour + 12) {
                          ListHours.push({
                            hour: hour > 12 ? hour - 12 : hour,
                            minute: minute,
                            time: time,
                            limitService: nsa,
                            state:
                              parseInt(element.uuidappointment.split('-')[0]) === index
                                ? element.state
                                : 'O'
                          });
                        }
                      });
                    };

                    for (index = 1; index <= ad; index++) {
                      _loop(index);
                    }

                    console.log(ListHours);
                    return _context.abrupt('return', ListHours);

                  case 11:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee);
          })
        );

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      })()
    );

    if (_classStaticPrivateFieldSpecGet(AppointmentGen, AppointmentGen, _instance)) {
      return (0, _possibleConstructorReturn2['default'])(
        _this,
        _classStaticPrivateFieldSpecGet(AppointmentGen, AppointmentGen, _instance)
      );
    }

    _classStaticPrivateFieldSpecSet(
      AppointmentGen,
      AppointmentGen,
      _instance,
      (0, _assertThisInitialized2['default'])(_this)
    );

    _this.LastFiveDays = LastFiveDays;
    return _this;
  }

  (0, _createClass2['default'])(AppointmentGen, [
    {
      key: 'ParseStringHours',
      value: function ParseStringHours(params) {
        var hour = parseInt(params.split(':')[0]);
        var minute = parseInt(params.split(':')[1].split(' ')[0]);
        var time = params.split(':')[1].split(' ')[1];
        console.log({
          hour: hour,
          minute: minute,
          time: time
        });
        return {
          hour: hour,
          minute: minute,
          time: time
        };
      }
    }
  ]);
  return AppointmentGen;
})(_SettingResolve2['default']);

exports['default'] = AppointmentGen;
var _instance = {
  writable: true,
  value: void 0
};
