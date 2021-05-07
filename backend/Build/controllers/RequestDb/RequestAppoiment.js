'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _ErrorMessages = _interopRequireDefault(require('../../assets/ErrorMessages'));

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

var RequestAppoiment = function RequestAppoiment(appointmentCrud) {
  var _this = this;

  (0, _classCallCheck2['default'])(this, RequestAppoiment);
  (0, _defineProperty2['default'])(this, 'RequestAppoimentTempList', function (req, res) {
    try {
      var AppointmentList = _this.AppointmentCrud.TempAppointmentList();

      if (AppointmentList) res.status(200).send(AppointmentList);
    } catch (error) {
      console.log(error);
      var ERDB404 = _ErrorMessages['default'].ERDB404;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  });

  if (_classStaticPrivateFieldSpecGet(RequestAppoiment, RequestAppoiment, _instance)) {
    return _classStaticPrivateFieldSpecGet(RequestAppoiment, RequestAppoiment, _instance);
  }

  _classStaticPrivateFieldSpecSet(RequestAppoiment, RequestAppoiment, _instance, this);

  this.AppointmentCrud = appointmentCrud;
};

exports['default'] = RequestAppoiment;
var _instance = {
  writable: true,
  value: void 0
};
