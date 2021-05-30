'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _ErrorMessages = _interopRequireDefault(require('../../assets/ErrorMessages'));

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0, _defineProperty2['default'])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
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

var RequestAppoiment = function RequestAppoiment(appointmentCrud, appointmentGen, detailCrud) {
  var _this = this;

  (0, _classCallCheck2['default'])(this, RequestAppoiment);
  (0, _defineProperty2['default'])(this, 'replaceAt', function (index, replacement, string) {
    if (index >= _this.length) {
      return string.valueOf();
    }

    var chars = string.split('');
    chars[index] = replacement;
    return chars.join('');
  });
  (0, _defineProperty2['default'])(this, 'RequestAppoimentLastFiveDay', function (req, res) {
    try {
      var LastFiveDay = _this.AppointmentGen.GetLastFiveDays();

      if (LastFiveDay) res.status(200).send(LastFiveDay);
    } catch (error) {
      console.log(error);
      var ERDB404 = _ErrorMessages['default'].ERDB404;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  });
  (0, _defineProperty2['default'])(
    this,
    'RequestBusinessAppointmentGetPk',
    /*#__PURE__*/ (function () {
      var _ref = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee(req, res) {
          var _req$params,
            idappointmen,
            idbusiness,
            idAppointmen,
            DataList,
            ArrDetails,
            responseData,
            ERDB404;

          return _regenerator['default'].wrap(
            function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    _context.prev = 0;
                    (_req$params = req.params),
                      (idappointmen = _req$params.idappointmen),
                      (idbusiness = _req$params.idbusiness);
                    console.log(idappointmen, idbusiness);
                    idAppointmen = idappointmen.replace(/-/g, '/');
                    console.log(_this.replaceAt(1, '-', idAppointmen));
                    _context.next = 7;
                    return _this.AppointmentCrud.GetPkForBusiness(
                      _this.replaceAt(1, '-', idAppointmen),
                      idbusiness
                    );

                  case 7:
                    DataList = _context.sent;
                    ArrDetails = [];
                    responseData = _objectSpread({}, DataList.data[0]);
                    DataList.data.forEach(function (element) {
                      console.log(element.details);
                      ArrDetails.push(element.details.DetailidservicesService);
                    });
                    responseData.details = ArrDetails;
                    console.log(responseData);
                    if (DataList.success) res.status(200).send(responseData);
                    _context.next = 21;
                    break;

                  case 16:
                    _context.prev = 16;
                    _context.t0 = _context['catch'](0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 21:
                  case 'end':
                    return _context.stop();
                }
              }
            },
            _callee,
            null,
            [[0, 16]]
          );
        })
      );

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    })()
  );
  (0, _defineProperty2['default'])(
    this,
    'RequestAppoimentCreate',
    /*#__PURE__*/ (function () {
      var _ref2 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee2(req, res) {
          var _req$body, Objappointment, ArrayDetail, ContactFindEmail, Appoiment, Detail, ERDB404;

          return _regenerator['default'].wrap(
            function _callee2$(_context2) {
              while (1) {
                switch ((_context2.prev = _context2.next)) {
                  case 0:
                    _context2.prev = 0;
                    (_req$body = req.body),
                      (Objappointment = _req$body.Objappointment),
                      (ArrayDetail = _req$body.ArrayDetail);
                    _context2.next = 4;
                    return _this.AppointmentCrud.GetAppointmen(Objappointment.uuidappointment);

                  case 4:
                    ContactFindEmail = _context2.sent;

                    if (!(ContactFindEmail.data === null)) {
                      _context2.next = 12;
                      break;
                    }

                    _context2.next = 8;
                    return _this.AppointmentCrud.Create(Objappointment);

                  case 8:
                    Appoiment = _context2.sent;

                    if (Appoiment.success) {
                      Detail = [];
                      ArrayDetail.forEach(function (element) {
                        element.idappointment = Appoiment.data.idappointment;

                        _this.DetailCrud.Create(element);
                      });

                      if (Appoiment.success) {
                        res.status(201).send({
                          data: {
                            Appoiment: Appoiment,
                            Detail: Detail
                          },
                          status: true
                        });
                      } else {
                        res.status(409).send({
                          data: {
                            Appoiment: Appoiment,
                            Detail: Detail
                          },
                          status: false
                        });
                      }
                    } else {
                      res.status(409).send({
                        data: {
                          Appoiment: Appoiment
                        },
                        status: false
                      });
                    }

                    _context2.next = 13;
                    break;

                  case 12:
                    res.status(409).send({
                      data: 'Cita Existe'
                    });

                  case 13:
                    _context2.next = 21;
                    break;

                  case 15:
                    _context2.prev = 15;
                    _context2.t0 = _context2['catch'](0);
                    console.log(_context2.t0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 21:
                  case 'end':
                    return _context2.stop();
                }
              }
            },
            _callee2,
            null,
            [[0, 15]]
          );
        })
      );

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    })()
  );

  if (_classStaticPrivateFieldSpecGet(RequestAppoiment, RequestAppoiment, _instance)) {
    return _classStaticPrivateFieldSpecGet(RequestAppoiment, RequestAppoiment, _instance);
  }

  this.AppointmentCrud = appointmentCrud;
  this.AppointmentGen = appointmentGen;
  this.DetailCrud = detailCrud;

  _classStaticPrivateFieldSpecSet(RequestAppoiment, RequestAppoiment, _instance, this);
};

exports['default'] = RequestAppoiment;
var _instance = {
  writable: true,
  value: void 0
};
