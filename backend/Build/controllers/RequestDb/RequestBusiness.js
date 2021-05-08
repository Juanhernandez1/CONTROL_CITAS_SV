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

var RequestBusiness = function RequestBusiness(
  businessCrud,
  contactbusinessCrud,
  addressCrud,
  freedayCrud,
  settingCrud,
  servicesCrud,
  appointmentCrud
) {
  var _this = this;

  (0, _classCallCheck2['default'])(this, RequestBusiness);
  (0, _defineProperty2['default'])(
    this,
    'RequestBusinessGetAll',
    /*#__PURE__*/ (function () {
      var _ref = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee(req, res) {
          var page, BusinessList, ERDB404;
          return _regenerator['default'].wrap(
            function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    _context.prev = 0;
                    page = req.params.page;
                    _context.next = 4;
                    return _this.BusinessCrud.GetAll(parseInt(page));

                  case 4:
                    BusinessList = _context.sent;
                    if (BusinessList.success)
                      res.status(BusinessList.data ? 200 : 204).send(BusinessList);
                    _context.next = 13;
                    break;

                  case 8:
                    _context.prev = 8;
                    _context.t0 = _context['catch'](0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404, _context.t0);
                    res.status(404).send(ERDB404);

                  case 13:
                  case 'end':
                    return _context.stop();
                }
              }
            },
            _callee,
            null,
            [[0, 8]]
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
    'RequestBusinessGetLikeName',
    /*#__PURE__*/ (function () {
      var _ref2 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee2(req, res) {
          var _req$params, search, page, BusinessList, ERDB404;

          return _regenerator['default'].wrap(
            function _callee2$(_context2) {
              while (1) {
                switch ((_context2.prev = _context2.next)) {
                  case 0:
                    _context2.prev = 0;
                    (_req$params = req.params),
                      (search = _req$params.search),
                      (page = _req$params.page);
                    _context2.next = 4;
                    return _this.BusinessCrud.GetLikeName(search, parseInt(page));

                  case 4:
                    BusinessList = _context2.sent;
                    if (BusinessList.success)
                      res.status(BusinessList.data ? 200 : 204).send(BusinessList);
                    _context2.next = 14;
                    break;

                  case 8:
                    _context2.prev = 8;
                    _context2.t0 = _context2['catch'](0);
                    console.log(_context2.t0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 14:
                  case 'end':
                    return _context2.stop();
                }
              }
            },
            _callee2,
            null,
            [[0, 8]]
          );
        })
      );

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    })()
  );
  (0, _defineProperty2['default'])(
    this,
    'RequestBusinessGetPk',
    /*#__PURE__*/ (function () {
      var _ref3 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee3(req, res) {
          var id, Business, ERDB404;
          return _regenerator['default'].wrap(
            function _callee3$(_context3) {
              while (1) {
                switch ((_context3.prev = _context3.next)) {
                  case 0:
                    _context3.prev = 0;
                    id = req.params.id;
                    _context3.next = 4;
                    return _this.BusinessCrud.GetPk(id);

                  case 4:
                    Business = _context3.sent;
                    if (Business.success) res.status(Business.data ? 200 : 204).send(Business);
                    _context3.next = 13;
                    break;

                  case 8:
                    _context3.prev = 8;
                    _context3.t0 = _context3['catch'](0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 13:
                  case 'end':
                    return _context3.stop();
                }
              }
            },
            _callee3,
            null,
            [[0, 8]]
          );
        })
      );

      return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    })()
  );
  (0, _defineProperty2['default'])(
    this,
    'RequestBusinessCreate',
    /*#__PURE__*/ (function () {
      var _ref4 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee4(req, res) {
          var _req$body,
            objBusiness,
            obtSetting,
            objAddres,
            objContact,
            ContactFindEmail,
            Business,
            data,
            BusinessAddess,
            BusinessContact,
            BusinessSetting,
            ERDB404;

          return _regenerator['default'].wrap(
            function _callee4$(_context4) {
              while (1) {
                switch ((_context4.prev = _context4.next)) {
                  case 0:
                    _context4.prev = 0;
                    (_req$body = req.body),
                      (objBusiness = _req$body.objBusiness),
                      (obtSetting = _req$body.obtSetting),
                      (objAddres = _req$body.objAddres),
                      (objContact = _req$body.objContact);
                    _context4.next = 4;
                    return _this.ContactbusinessCrud.Find(objContact.email);

                  case 4:
                    ContactFindEmail = _context4.sent;

                    if (!(ContactFindEmail.data === null)) {
                      _context4.next = 30;
                      break;
                    }

                    _context4.next = 8;
                    return _this.BusinessCrud.Create(objBusiness);

                  case 8:
                    Business = _context4.sent;
                    data = Business.data;

                    if (!Business.success) {
                      _context4.next = 27;
                      break;
                    }

                    objAddres.idbusiness = data.idbusiness;
                    objContact.idbusiness = data.idbusiness;
                    obtSetting.idbusiness = data.idbusiness;
                    console.log({
                      objBusiness: objBusiness,
                      obtSetting: obtSetting,
                      objAddres: objAddres,
                      objContact: objContact
                    });
                    _context4.next = 17;
                    return _this.AddressCrud.Create(objAddres);

                  case 17:
                    BusinessAddess = _context4.sent;
                    _context4.next = 20;
                    return _this.ContactbusinessCrud.Create(objContact);

                  case 20:
                    BusinessContact = _context4.sent;
                    _context4.next = 23;
                    return _this.SettingCrud.Create(obtSetting);

                  case 23:
                    BusinessSetting = _context4.sent;

                    if (
                      BusinessContact.success &&
                      BusinessSetting.success &&
                      BusinessAddess.success
                    ) {
                      res.status(201).send({
                        Business: Business,
                        BusinessContact: BusinessContact,
                        BusinessSetting: BusinessSetting,
                        BusinessAddess: BusinessAddess
                      });
                    } else {
                      res.status(409).send({
                        Business: Business,
                        BusinessContact: BusinessContact,
                        BusinessSetting: BusinessSetting,
                        BusinessAddess: BusinessAddess
                      });
                    }

                    _context4.next = 28;
                    break;

                  case 27:
                    res.status(409).send(Business);

                  case 28:
                    _context4.next = 31;
                    break;

                  case 30:
                    res.status(409).send(
                      ContactFindEmail.success
                        ? _objectSpread(
                            _objectSpread({}, ContactFindEmail),
                            {},
                            {
                              data: 'mail exists'
                            }
                          )
                        : ContactFindEmail
                    );

                  case 31:
                    _context4.next = 39;
                    break;

                  case 33:
                    _context4.prev = 33;
                    _context4.t0 = _context4['catch'](0);
                    console.log(_context4.t0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 39:
                  case 'end':
                    return _context4.stop();
                }
              }
            },
            _callee4,
            null,
            [[0, 33]]
          );
        })
      );

      return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
      };
    })()
  );
  (0, _defineProperty2['default'])(
    this,
    'RequestBusinessUpdate',
    /*#__PURE__*/ (function () {
      var _ref5 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee5(req, res) {
          var objBusiness, Business, ERDB404;
          return _regenerator['default'].wrap(
            function _callee5$(_context5) {
              while (1) {
                switch ((_context5.prev = _context5.next)) {
                  case 0:
                    _context5.prev = 0;
                    objBusiness = req.body;
                    _context5.next = 4;
                    return _this.BusinessCrud.Update(objBusiness);

                  case 4:
                    Business = _context5.sent;
                    if (Business.data[0] === 1) res.status(202).send(Business);
                    else res.status(406).send(Business);
                    _context5.next = 13;
                    break;

                  case 8:
                    _context5.prev = 8;
                    _context5.t0 = _context5['catch'](0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 13:
                  case 'end':
                    return _context5.stop();
                }
              }
            },
            _callee5,
            null,
            [[0, 8]]
          );
        })
      );

      return function (_x9, _x10) {
        return _ref5.apply(this, arguments);
      };
    })()
  );
  (0, _defineProperty2['default'])(
    this,
    'RequestBusinessDelete',
    /*#__PURE__*/ (function () {
      var _ref6 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee6(req, res) {
          var id, Business, ERDB404;
          return _regenerator['default'].wrap(
            function _callee6$(_context6) {
              while (1) {
                switch ((_context6.prev = _context6.next)) {
                  case 0:
                    _context6.prev = 0;
                    id = req.params.id;
                    console.log(id);
                    _context6.next = 5;
                    return _this.BusinessCrud.Delete(id);

                  case 5:
                    Business = _context6.sent;
                    if (Business.data[0] === 1) res.status(202).send(Business);
                    else res.status(406).send(Business);
                    _context6.next = 15;
                    break;

                  case 9:
                    _context6.prev = 9;
                    _context6.t0 = _context6['catch'](0);
                    console.log(_context6.t0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 15:
                  case 'end':
                    return _context6.stop();
                }
              }
            },
            _callee6,
            null,
            [[0, 9]]
          );
        })
      );

      return function (_x11, _x12) {
        return _ref6.apply(this, arguments);
      };
    })()
  );
  (0, _defineProperty2['default'])(
    this,
    'RequestBusinessSettingGetPk',
    /*#__PURE__*/ (function () {
      var _ref7 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee7(req, res) {
          var id, BusinessSetting, ERDB404;
          return _regenerator['default'].wrap(
            function _callee7$(_context7) {
              while (1) {
                switch ((_context7.prev = _context7.next)) {
                  case 0:
                    _context7.prev = 0;
                    id = req.params.id;
                    _context7.next = 4;
                    return _this.SettingCrud.GetPk(id);

                  case 4:
                    BusinessSetting = _context7.sent;
                    if (BusinessSetting.success)
                      res.status(BusinessSetting.data ? 200 : 204).send(BusinessSetting);
                    _context7.next = 13;
                    break;

                  case 8:
                    _context7.prev = 8;
                    _context7.t0 = _context7['catch'](0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 13:
                  case 'end':
                    return _context7.stop();
                }
              }
            },
            _callee7,
            null,
            [[0, 8]]
          );
        })
      );

      return function (_x13, _x14) {
        return _ref7.apply(this, arguments);
      };
    })()
  );
  (0, _defineProperty2['default'])(
    this,
    'RequestBusinessSettingUpdate',
    /*#__PURE__*/ (function () {
      var _ref8 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee8(req, res) {
          var obtSetting, BusinessSetting, ERDB404;
          return _regenerator['default'].wrap(
            function _callee8$(_context8) {
              while (1) {
                switch ((_context8.prev = _context8.next)) {
                  case 0:
                    _context8.prev = 0;
                    obtSetting = req.body;
                    _context8.next = 4;
                    return _this.SettingCrud.Update(obtSetting);

                  case 4:
                    BusinessSetting = _context8.sent;
                    if (BusinessSetting.data[0] === 1) res.status(202).send(BusinessSetting);
                    else res.status(406).send(BusinessSetting);
                    _context8.next = 13;
                    break;

                  case 8:
                    _context8.prev = 8;
                    _context8.t0 = _context8['catch'](0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 13:
                  case 'end':
                    return _context8.stop();
                }
              }
            },
            _callee8,
            null,
            [[0, 8]]
          );
        })
      );

      return function (_x15, _x16) {
        return _ref8.apply(this, arguments);
      };
    })()
  );
  (0, _defineProperty2['default'])(
    this,
    'RequestBusinessAddressGetPk',
    /*#__PURE__*/ (function () {
      var _ref9 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee9(req, res) {
          var id, BusinessAddess, ERDB404;
          return _regenerator['default'].wrap(
            function _callee9$(_context9) {
              while (1) {
                switch ((_context9.prev = _context9.next)) {
                  case 0:
                    _context9.prev = 0;
                    id = req.params.id;
                    _context9.next = 4;
                    return _this.AddressCrud.GetPk(id);

                  case 4:
                    BusinessAddess = _context9.sent;
                    if (BusinessAddess.success)
                      res.status(BusinessAddess.data ? 200 : 204).send(BusinessAddess);
                    _context9.next = 13;
                    break;

                  case 8:
                    _context9.prev = 8;
                    _context9.t0 = _context9['catch'](0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 13:
                  case 'end':
                    return _context9.stop();
                }
              }
            },
            _callee9,
            null,
            [[0, 8]]
          );
        })
      );

      return function (_x17, _x18) {
        return _ref9.apply(this, arguments);
      };
    })()
  );
  (0, _defineProperty2['default'])(
    this,
    'RequestBusinessAddressUpdate',
    /*#__PURE__*/ (function () {
      var _ref10 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee10(req, res) {
          var objAddres, BusinessAddess, ERDB404;
          return _regenerator['default'].wrap(
            function _callee10$(_context10) {
              while (1) {
                switch ((_context10.prev = _context10.next)) {
                  case 0:
                    _context10.prev = 0;
                    objAddres = req.body;
                    _context10.next = 4;
                    return _this.AddressCrud.Update(objAddres);

                  case 4:
                    BusinessAddess = _context10.sent;
                    if (BusinessAddess.data[0] === 1) res.status(202).send(BusinessAddess);
                    else res.status(406).send(BusinessAddess);
                    _context10.next = 14;
                    break;

                  case 8:
                    _context10.prev = 8;
                    _context10.t0 = _context10['catch'](0);
                    console.log(_context10.t0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 14:
                  case 'end':
                    return _context10.stop();
                }
              }
            },
            _callee10,
            null,
            [[0, 8]]
          );
        })
      );

      return function (_x19, _x20) {
        return _ref10.apply(this, arguments);
      };
    })()
  );
  (0, _defineProperty2['default'])(
    this,
    'RequestBusinessContacGetPk',
    /*#__PURE__*/ (function () {
      var _ref11 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee11(req, res) {
          var id, BusinessContact, ERDB404;
          return _regenerator['default'].wrap(
            function _callee11$(_context11) {
              while (1) {
                switch ((_context11.prev = _context11.next)) {
                  case 0:
                    _context11.prev = 0;
                    id = req.params.id;
                    _context11.next = 4;
                    return _this.ContactbusinessCrud.GetPk(id);

                  case 4:
                    BusinessContact = _context11.sent;
                    if (BusinessContact.success)
                      res.status(BusinessContact.data ? 200 : 204).send(BusinessContact);
                    _context11.next = 13;
                    break;

                  case 8:
                    _context11.prev = 8;
                    _context11.t0 = _context11['catch'](0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 13:
                  case 'end':
                    return _context11.stop();
                }
              }
            },
            _callee11,
            null,
            [[0, 8]]
          );
        })
      );

      return function (_x21, _x22) {
        return _ref11.apply(this, arguments);
      };
    })()
  );
  (0, _defineProperty2['default'])(
    this,
    'RequestBusinessContactUpdate',
    /*#__PURE__*/ (function () {
      var _ref12 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee12(req, res) {
          var objContact, BusinessContact, ERDB404;
          return _regenerator['default'].wrap(
            function _callee12$(_context12) {
              while (1) {
                switch ((_context12.prev = _context12.next)) {
                  case 0:
                    _context12.prev = 0;
                    objContact = req.body;
                    _context12.next = 4;
                    return _this.ContactbusinessCrud.Update(objContact);

                  case 4:
                    BusinessContact = _context12.sent;
                    if (BusinessContact.data[0] === 1) res.status(202).send(BusinessContact);
                    else res.status(406).send(BusinessContact);
                    _context12.next = 13;
                    break;

                  case 8:
                    _context12.prev = 8;
                    _context12.t0 = _context12['catch'](0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 13:
                  case 'end':
                    return _context12.stop();
                }
              }
            },
            _callee12,
            null,
            [[0, 8]]
          );
        })
      );

      return function (_x23, _x24) {
        return _ref12.apply(this, arguments);
      };
    })()
  );
  (0, _defineProperty2['default'])(
    this,
    'RequestBusinessServicesGetAll',
    /*#__PURE__*/ (function () {
      var _ref13 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee13(req, res) {
          var idbusiness, ServicesList, ERDB404;
          return _regenerator['default'].wrap(
            function _callee13$(_context13) {
              while (1) {
                switch ((_context13.prev = _context13.next)) {
                  case 0:
                    _context13.prev = 0;
                    idbusiness = req.params.idbusiness;
                    _context13.next = 4;
                    return _this.ServicesCrud.GetAll(idbusiness);

                  case 4:
                    ServicesList = _context13.sent;
                    if (ServicesList.success)
                      res.status(ServicesList.data ? 200 : 204).send(ServicesList);
                    _context13.next = 13;
                    break;

                  case 8:
                    _context13.prev = 8;
                    _context13.t0 = _context13['catch'](0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404, _context13.t0);
                    res.status(404).send(ERDB404);

                  case 13:
                  case 'end':
                    return _context13.stop();
                }
              }
            },
            _callee13,
            null,
            [[0, 8]]
          );
        })
      );

      return function (_x25, _x26) {
        return _ref13.apply(this, arguments);
      };
    })()
  );
  (0, _defineProperty2['default'])(
    this,
    'RequestBusinessServicesGetAllClient',
    /*#__PURE__*/ (function () {
      var _ref14 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee14(req, res) {
          var idbusiness, ServicesList, ERDB404;
          return _regenerator['default'].wrap(
            function _callee14$(_context14) {
              while (1) {
                switch ((_context14.prev = _context14.next)) {
                  case 0:
                    _context14.prev = 0;
                    idbusiness = req.params.idbusiness;
                    _context14.next = 4;
                    return _this.ServicesCrud.GetAll(idbusiness, 'Activo');

                  case 4:
                    ServicesList = _context14.sent;
                    if (ServicesList.success)
                      res.status(ServicesList.data ? 200 : 204).send(ServicesList);
                    _context14.next = 13;
                    break;

                  case 8:
                    _context14.prev = 8;
                    _context14.t0 = _context14['catch'](0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404, _context14.t0);
                    res.status(404).send(ERDB404);

                  case 13:
                  case 'end':
                    return _context14.stop();
                }
              }
            },
            _callee14,
            null,
            [[0, 8]]
          );
        })
      );

      return function (_x27, _x28) {
        return _ref14.apply(this, arguments);
      };
    })()
  );
  (0, _defineProperty2['default'])(
    this,
    'RequestBusinessServicesGetPk',
    /*#__PURE__*/ (function () {
      var _ref15 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee15(req, res) {
          var _req$params2, idbusiness, id, BusinessService, ERDB404;

          return _regenerator['default'].wrap(
            function _callee15$(_context15) {
              while (1) {
                switch ((_context15.prev = _context15.next)) {
                  case 0:
                    _context15.prev = 0;
                    (_req$params2 = req.params),
                      (idbusiness = _req$params2.idbusiness),
                      (id = _req$params2.id);
                    _context15.next = 4;
                    return _this.ServicesCrud.GetPk(idbusiness, id);

                  case 4:
                    BusinessService = _context15.sent;
                    if (BusinessService.success)
                      res.status(BusinessService.data ? 200 : 204).send(BusinessService);
                    _context15.next = 13;
                    break;

                  case 8:
                    _context15.prev = 8;
                    _context15.t0 = _context15['catch'](0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 13:
                  case 'end':
                    return _context15.stop();
                }
              }
            },
            _callee15,
            null,
            [[0, 8]]
          );
        })
      );

      return function (_x29, _x30) {
        return _ref15.apply(this, arguments);
      };
    })()
  );
  (0, _defineProperty2['default'])(
    this,
    'RequestBusinessServicesCreate',
    /*#__PURE__*/ (function () {
      var _ref16 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee16(req, res) {
          var objServices, BusinessService, ERDB404;
          return _regenerator['default'].wrap(
            function _callee16$(_context16) {
              while (1) {
                switch ((_context16.prev = _context16.next)) {
                  case 0:
                    _context16.prev = 0;
                    objServices = req.body;
                    _context16.next = 4;
                    return _this.ServicesCrud.Create(objServices);

                  case 4:
                    BusinessService = _context16.sent;

                    if (BusinessService.success) {
                      res.status(201).send(BusinessService);
                    } else {
                      res.status(409).send(BusinessService);
                    }

                    _context16.next = 14;
                    break;

                  case 8:
                    _context16.prev = 8;
                    _context16.t0 = _context16['catch'](0);
                    console.log(_context16.t0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 14:
                  case 'end':
                    return _context16.stop();
                }
              }
            },
            _callee16,
            null,
            [[0, 8]]
          );
        })
      );

      return function (_x31, _x32) {
        return _ref16.apply(this, arguments);
      };
    })()
  );
  (0, _defineProperty2['default'])(
    this,
    'RequestBusinessServicesUpdate',
    /*#__PURE__*/ (function () {
      var _ref17 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee17(req, res) {
          var objServices, BusinessService, ERDB404;
          return _regenerator['default'].wrap(
            function _callee17$(_context17) {
              while (1) {
                switch ((_context17.prev = _context17.next)) {
                  case 0:
                    _context17.prev = 0;
                    objServices = req.body;
                    _context17.next = 4;
                    return _this.ServicesCrud.Update(objServices);

                  case 4:
                    BusinessService = _context17.sent;
                    if (BusinessService.data[0] === 1) res.status(202).send(BusinessService);
                    else res.status(406).send(BusinessService);
                    _context17.next = 13;
                    break;

                  case 8:
                    _context17.prev = 8;
                    _context17.t0 = _context17['catch'](0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 13:
                  case 'end':
                    return _context17.stop();
                }
              }
            },
            _callee17,
            null,
            [[0, 8]]
          );
        })
      );

      return function (_x33, _x34) {
        return _ref17.apply(this, arguments);
      };
    })()
  );
  (0, _defineProperty2['default'])(
    this,
    'RequestBusinessServicesDelete',
    /*#__PURE__*/ (function () {
      var _ref18 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee18(req, res) {
          var id, BusinessService, ERDB404;
          return _regenerator['default'].wrap(
            function _callee18$(_context18) {
              while (1) {
                switch ((_context18.prev = _context18.next)) {
                  case 0:
                    _context18.prev = 0;
                    id = req.params.id;
                    _context18.next = 4;
                    return _this.ServicesCrud.Delete(id);

                  case 4:
                    BusinessService = _context18.sent;
                    if (BusinessService.data[0] === 1) res.status(202).send(BusinessService);
                    else res.status(406).send(BusinessService);
                    _context18.next = 14;
                    break;

                  case 8:
                    _context18.prev = 8;
                    _context18.t0 = _context18['catch'](0);
                    console.log(_context18.t0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 14:
                  case 'end':
                    return _context18.stop();
                }
              }
            },
            _callee18,
            null,
            [[0, 8]]
          );
        })
      );

      return function (_x35, _x36) {
        return _ref18.apply(this, arguments);
      };
    })()
  );
  (0, _defineProperty2['default'])(
    this,
    'RequestBusinessAppointmentGetAll',
    /*#__PURE__*/ (function () {
      var _ref19 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee19(req, res) {
          var idbusiness, DataList, ERDB404;
          return _regenerator['default'].wrap(
            function _callee19$(_context19) {
              while (1) {
                switch ((_context19.prev = _context19.next)) {
                  case 0:
                    _context19.prev = 0;
                    idbusiness = req.params.idbusiness;
                    _context19.next = 4;
                    return _this.AppointmentCrud.GetAllForBusiness(idbusiness);

                  case 4:
                    DataList = _context19.sent;
                    if (DataList.success) res.status(200).send(DataList);
                    _context19.next = 13;
                    break;

                  case 8:
                    _context19.prev = 8;
                    _context19.t0 = _context19['catch'](0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 13:
                  case 'end':
                    return _context19.stop();
                }
              }
            },
            _callee19,
            null,
            [[0, 8]]
          );
        })
      );

      return function (_x37, _x38) {
        return _ref19.apply(this, arguments);
      };
    })()
  );
  (0, _defineProperty2['default'])(
    this,
    'RequestBusinessAppointmentGetPk',
    /*#__PURE__*/ (function () {
      var _ref20 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee20(req, res) {
          var _req$body2, idappointmen, idbusiness, DataList, ERDB404;

          return _regenerator['default'].wrap(
            function _callee20$(_context20) {
              while (1) {
                switch ((_context20.prev = _context20.next)) {
                  case 0:
                    _context20.prev = 0;
                    (_req$body2 = req.body),
                      (idappointmen = _req$body2.idappointmen),
                      (idbusiness = _req$body2.idbusiness);
                    _context20.next = 4;
                    return _this.AppointmentCrud.GetPkForBusiness(idappointmen, idbusiness);

                  case 4:
                    DataList = _context20.sent;
                    if (DataList.success) res.status(200).send(DataList);
                    _context20.next = 13;
                    break;

                  case 8:
                    _context20.prev = 8;
                    _context20.t0 = _context20['catch'](0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 13:
                  case 'end':
                    return _context20.stop();
                }
              }
            },
            _callee20,
            null,
            [[0, 8]]
          );
        })
      );

      return function (_x39, _x40) {
        return _ref20.apply(this, arguments);
      };
    })()
  );
  (0, _defineProperty2['default'])(
    this,
    'RequestBusinessAppointmentDelete',
    /*#__PURE__*/ (function () {
      var _ref21 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee21(req, res) {
          var pk, Data, ERDB404;
          return _regenerator['default'].wrap(
            function _callee21$(_context21) {
              while (1) {
                switch ((_context21.prev = _context21.next)) {
                  case 0:
                    _context21.prev = 0;
                    pk = req.params.Pk;
                    _context21.next = 4;
                    return _this.AppointmentCrud.Delete(pk);

                  case 4:
                    Data = _context21.sent;
                    if (Data.success) res.status(202).send(Data);
                    _context21.next = 13;
                    break;

                  case 8:
                    _context21.prev = 8;
                    _context21.t0 = _context21['catch'](0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 13:
                  case 'end':
                    return _context21.stop();
                }
              }
            },
            _callee21,
            null,
            [[0, 8]]
          );
        })
      );

      return function (_x41, _x42) {
        return _ref21.apply(this, arguments);
      };
    })()
  );
  (0, _defineProperty2['default'])(
    this,
    'RequestBusinessResoveSetting',
    /*#__PURE__*/ (function () {
      var _ref22 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee22(req, res) {
          return _regenerator['default'].wrap(function _callee22$(_context22) {
            while (1) {
              switch ((_context22.prev = _context22.next)) {
                case 0:
                case 'end':
                  return _context22.stop();
              }
            }
          }, _callee22);
        })
      );

      return function (_x43, _x44) {
        return _ref22.apply(this, arguments);
      };
    })()
  );

  if (_classStaticPrivateFieldSpecGet(RequestBusiness, RequestBusiness, _instance)) {
    return _classStaticPrivateFieldSpecGet(RequestBusiness, RequestBusiness, _instance);
  }

  this.BusinessCrud = businessCrud;
  this.ContactbusinessCrud = contactbusinessCrud;
  this.AddressCrud = addressCrud;
  this.FreedayCrud = freedayCrud;
  this.SettingCrud = settingCrud;
  this.ServicesCrud = servicesCrud;
  this.AppointmentCrud = appointmentCrud;

  _classStaticPrivateFieldSpecSet(RequestBusiness, RequestBusiness, _instance, this);
};

exports['default'] = RequestBusiness;
var _instance = {
  writable: true,
  value: void 0
};
