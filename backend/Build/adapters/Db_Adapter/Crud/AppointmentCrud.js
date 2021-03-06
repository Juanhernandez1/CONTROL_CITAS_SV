'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized')
);

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn')
);

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _CrudInterface2 = _interopRequireDefault(require('../../../interface/CrudInterface'));

var _uuid = require('uuid');

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

var AppointmentCrud = /*#__PURE__*/ (function (_CrudInterface) {
  (0, _inherits2['default'])(AppointmentCrud, _CrudInterface);

  var _super = _createSuper(AppointmentCrud);

  function AppointmentCrud(Model, Operations) {
    var _this;

    (0, _classCallCheck2['default'])(this, AppointmentCrud);
    _this = _super.call(this);
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'GetFullDate',
      /*#__PURE__*/ (function () {
        var _ref = (0, _asyncToGenerator2['default'])(
          /*#__PURE__*/ _regenerator['default'].mark(function _callee(id, date) {
            var data;
            return _regenerator['default'].wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.prev = 0;
                      _context.next = 3;
                      return _this.Model.findAll(
                        _objectSpread(
                          {
                            where: {
                              idbusiness: id,
                              dateappointment: {
                                fulldate: date
                              }
                            }
                          },
                          _this.Config
                        )
                      );

                    case 3:
                      data = _context.sent;
                      return _context.abrupt('return', {
                        data: data,
                        success: true
                      });

                    case 7:
                      _context.prev = 7;
                      _context.t0 = _context['catch'](0);
                      console.log(_context.t0);
                      return _context.abrupt('return', {
                        success: false
                      });

                    case 11:
                    case 'end':
                      return _context.stop();
                  }
                }
              },
              _callee,
              null,
              [[0, 7]]
            );
          })
        );

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      })()
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'GetAppointmen',
      /*#__PURE__*/ (function () {
        var _ref2 = (0, _asyncToGenerator2['default'])(
          /*#__PURE__*/ _regenerator['default'].mark(function _callee2(uuidappointment) {
            var data;
            return _regenerator['default'].wrap(
              function _callee2$(_context2) {
                while (1) {
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      _context2.prev = 0;
                      _context2.next = 3;
                      return _this.Model.findOne(
                        _objectSpread(
                          {
                            where: {
                              uuidappointment: uuidappointment
                            }
                          },
                          _this.Config
                        )
                      );

                    case 3:
                      data = _context2.sent;
                      return _context2.abrupt('return', {
                        data: data,
                        success: true
                      });

                    case 7:
                      _context2.prev = 7;
                      _context2.t0 = _context2['catch'](0);
                      console.log(_context2.t0);
                      return _context2.abrupt('return', {
                        success: false
                      });

                    case 11:
                    case 'end':
                      return _context2.stop();
                  }
                }
              },
              _callee2,
              null,
              [[0, 7]]
            );
          })
        );

        return function (_x3) {
          return _ref2.apply(this, arguments);
        };
      })()
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'GetPkForUsers',
      /*#__PURE__*/ (function () {
        var _ref3 = (0, _asyncToGenerator2['default'])(
          /*#__PURE__*/ _regenerator['default'].mark(function _callee3(pk, iduser) {
            var data;
            return _regenerator['default'].wrap(
              function _callee3$(_context3) {
                while (1) {
                  switch ((_context3.prev = _context3.next)) {
                    case 0:
                      _context3.prev = 0;
                      _context3.next = 3;
                      return _this.Model.findByPk(
                        pk,
                        _objectSpread(
                          _objectSpread(
                            {
                              where: {
                                iduser: iduser
                              }
                            },
                            _this.Config
                          ),
                          {},
                          {
                            include: [
                              {
                                association: 'AppointmentidbusinessBusiness',
                                attributes: ['businessname']
                              },
                              {
                                association: 'DetailidappointmentAppointment',
                                include: {
                                  association: 'DetailidservicesService',
                                  attributes: ['servicename']
                                },
                                raw: true,
                                nest: true
                              }
                            ]
                          }
                        )
                      );

                    case 3:
                      data = _context3.sent;
                      return _context3.abrupt('return', {
                        data: data,
                        success: true
                      });

                    case 7:
                      _context3.prev = 7;
                      _context3.t0 = _context3['catch'](0);
                      console.log(_context3.t0);
                      return _context3.abrupt('return', {
                        success: false
                      });

                    case 11:
                    case 'end':
                      return _context3.stop();
                  }
                }
              },
              _callee3,
              null,
              [[0, 7]]
            );
          })
        );

        return function (_x4, _x5) {
          return _ref3.apply(this, arguments);
        };
      })()
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'GetPkForBusiness',
      /*#__PURE__*/ (function () {
        var _ref4 = (0, _asyncToGenerator2['default'])(
          /*#__PURE__*/ _regenerator['default'].mark(function _callee4(
            uuidappointment,
            idbusiness
          ) {
            var data;
            return _regenerator['default'].wrap(
              function _callee4$(_context4) {
                while (1) {
                  switch ((_context4.prev = _context4.next)) {
                    case 0:
                      _context4.prev = 0;
                      _context4.next = 3;
                      return _this.Model.findAll(
                        _objectSpread(
                          _objectSpread(
                            {
                              where: {
                                idbusiness: idbusiness,
                                uuidappointment: uuidappointment
                              }
                            },
                            _this.Config
                          ),
                          {},
                          {
                            include: [
                              {
                                association: 'AppointmentiduserUser',
                                attributes: ['name', 'lastname', 'phone', 'state']
                              },
                              {
                                association: 'details',
                                include: [
                                  {
                                    association: 'DetailidservicesService'
                                  }
                                ]
                              }
                            ]
                          }
                        )
                      );

                    case 3:
                      data = _context4.sent;
                      return _context4.abrupt('return', {
                        data: data,
                        success: true
                      });

                    case 7:
                      _context4.prev = 7;
                      _context4.t0 = _context4['catch'](0);
                      console.log(_context4.t0);
                      return _context4.abrupt('return', {
                        success: false
                      });

                    case 11:
                    case 'end':
                      return _context4.stop();
                  }
                }
              },
              _callee4,
              null,
              [[0, 7]]
            );
          })
        );

        return function (_x6, _x7) {
          return _ref4.apply(this, arguments);
        };
      })()
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'GetAllForUsers',
      /*#__PURE__*/ (function () {
        var _ref5 = (0, _asyncToGenerator2['default'])(
          /*#__PURE__*/ _regenerator['default'].mark(function _callee5(iduser) {
            var data;
            return _regenerator['default'].wrap(
              function _callee5$(_context5) {
                while (1) {
                  switch ((_context5.prev = _context5.next)) {
                    case 0:
                      _context5.prev = 0;
                      _context5.next = 3;
                      return _this.Model.findAll(
                        _objectSpread(
                          _objectSpread(
                            {
                              where: {
                                iduser: iduser
                              }
                            },
                            _this.Config
                          ),
                          {},
                          {
                            include: [
                              {
                                association: 'AppointmentidbusinessBusiness',
                                attributes: ['businessname']
                              },
                              {
                                association: 'DetailidappointmentAppointment',
                                include: {
                                  association: 'DetailidservicesService',
                                  attributes: ['servicename']
                                },
                                raw: true,
                                nest: true
                              }
                            ]
                          }
                        )
                      );

                    case 3:
                      data = _context5.sent;
                      return _context5.abrupt('return', {
                        data: data,
                        success: true
                      });

                    case 7:
                      _context5.prev = 7;
                      _context5.t0 = _context5['catch'](0);
                      console.log(_context5.t0);
                      return _context5.abrupt('return', {
                        success: false
                      });

                    case 11:
                    case 'end':
                      return _context5.stop();
                  }
                }
              },
              _callee5,
              null,
              [[0, 7]]
            );
          })
        );

        return function (_x8) {
          return _ref5.apply(this, arguments);
        };
      })()
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'GetAllForBusiness',
      /*#__PURE__*/ (function () {
        var _ref6 = (0, _asyncToGenerator2['default'])(
          /*#__PURE__*/ _regenerator['default'].mark(function _callee6(idbusiness) {
            var data;
            return _regenerator['default'].wrap(
              function _callee6$(_context6) {
                while (1) {
                  switch ((_context6.prev = _context6.next)) {
                    case 0:
                      _context6.prev = 0;
                      _context6.next = 3;
                      return _this.Model.findAll(
                        _objectSpread(
                          _objectSpread(
                            {
                              where: {
                                idbusiness: idbusiness
                              }
                            },
                            _this.Config
                          ),
                          {},
                          {
                            include: [
                              {
                                association: 'AppointmentiduserUser',
                                attributes: ['name', 'lastname', 'phone']
                              },
                              {
                                association: 'DetailidappointmentAppointment',
                                include: {
                                  association: 'DetailidservicesService',
                                  attributes: ['servicename']
                                },
                                raw: true,
                                nest: true
                              }
                            ]
                          }
                        )
                      );

                    case 3:
                      data = _context6.sent;
                      return _context6.abrupt('return', {
                        data: data,
                        success: true
                      });

                    case 7:
                      _context6.prev = 7;
                      _context6.t0 = _context6['catch'](0);
                      console.log(_context6.t0);
                      return _context6.abrupt('return', {
                        success: false
                      });

                    case 11:
                    case 'end':
                      return _context6.stop();
                  }
                }
              },
              _callee6,
              null,
              [[0, 7]]
            );
          })
        );

        return function (_x9) {
          return _ref6.apply(this, arguments);
        };
      })()
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'Create',
      /*#__PURE__*/ (function () {
        var _ref7 = (0, _asyncToGenerator2['default'])(
          /*#__PURE__*/ _regenerator['default'].mark(function _callee7(obj) {
            var data, _error$errors$, message, type, path, origin;

            return _regenerator['default'].wrap(
              function _callee7$(_context7) {
                while (1) {
                  switch ((_context7.prev = _context7.next)) {
                    case 0:
                      _context7.prev = 0;
                      _context7.next = 3;
                      return _this.Model.create(obj);

                    case 3:
                      data = _context7.sent;
                      return _context7.abrupt('return', {
                        data: data,
                        success: true
                      });

                    case 7:
                      _context7.prev = 7;
                      _context7.t0 = _context7['catch'](0);
                      (_error$errors$ = _context7.t0.errors[0]),
                        (message = _error$errors$.message),
                        (type = _error$errors$.type),
                        (path = _error$errors$.path),
                        (origin = _error$errors$.origin);
                      return _context7.abrupt('return', {
                        success: false,
                        message: message,
                        type: type,
                        path: path,
                        origin: origin
                      });

                    case 11:
                    case 'end':
                      return _context7.stop();
                  }
                }
              },
              _callee7,
              null,
              [[0, 7]]
            );
          })
        );

        return function (_x10) {
          return _ref7.apply(this, arguments);
        };
      })()
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'Update',
      /*#__PURE__*/ (function () {
        var _ref8 = (0, _asyncToGenerator2['default'])(
          /*#__PURE__*/ _regenerator['default'].mark(function _callee8(obj) {
            var FieldPk, pk;
            return _regenerator['default'].wrap(
              function _callee8$(_context8) {
                while (1) {
                  switch ((_context8.prev = _context8.next)) {
                    case 0:
                      _context8.prev = 0;
                      FieldPk = _this.Model.primaryKeyAttribute;
                      pk = obj[FieldPk];
                      delete obj[FieldPk];
                      _context8.next = 6;
                      return _this.Model.update(obj, {
                        where: (0, _defineProperty2['default'])({}, FieldPk, pk)
                      });

                    case 6:
                      return _context8.abrupt('return', {
                        success: true
                      });

                    case 9:
                      _context8.prev = 9;
                      _context8.t0 = _context8['catch'](0);
                      console.log(_context8.t0);
                      return _context8.abrupt('return', {
                        success: false
                      });

                    case 13:
                    case 'end':
                      return _context8.stop();
                  }
                }
              },
              _callee8,
              null,
              [[0, 9]]
            );
          })
        );

        return function (_x11) {
          return _ref8.apply(this, arguments);
        };
      })()
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'Delete',
      /*#__PURE__*/ (function () {
        var _ref9 = (0, _asyncToGenerator2['default'])(
          /*#__PURE__*/ _regenerator['default'].mark(function _callee9(pk) {
            var FieldPk;
            return _regenerator['default'].wrap(
              function _callee9$(_context9) {
                while (1) {
                  switch ((_context9.prev = _context9.next)) {
                    case 0:
                      _context9.prev = 0;
                      FieldPk = _this.Model.primaryKeyAttribute;
                      _context9.next = 4;
                      return _this.Model.update(
                        {
                          state: 'inactivo'
                        },
                        {
                          where: (0, _defineProperty2['default'])({}, FieldPk, pk)
                        }
                      );

                    case 4:
                      return _context9.abrupt('return', {
                        success: true
                      });

                    case 7:
                      _context9.prev = 7;
                      _context9.t0 = _context9['catch'](0);
                      console.log(_context9.t0);
                      return _context9.abrupt('return', {
                        success: false
                      });

                    case 11:
                    case 'end':
                      return _context9.stop();
                  }
                }
              },
              _callee9,
              null,
              [[0, 7]]
            );
          })
        );

        return function (_x12) {
          return _ref9.apply(this, arguments);
        };
      })()
    );

    if (_classStaticPrivateFieldSpecGet(AppointmentCrud, AppointmentCrud, _instance)) {
      return (0, _possibleConstructorReturn2['default'])(
        _this,
        _classStaticPrivateFieldSpecGet(AppointmentCrud, AppointmentCrud, _instance)
      );
    }

    _classStaticPrivateFieldSpecSet(
      AppointmentCrud,
      AppointmentCrud,
      _instance,
      (0, _assertThisInitialized2['default'])(_this)
    );

    _this.Model = Model;
    _this.Operations = Operations;
    _this.Config = {
      raw: true,
      nest: true
    };
    return _this;
  }

  return AppointmentCrud;
})(_CrudInterface2['default']);

exports['default'] = AppointmentCrud;
var _instance = {
  writable: true,
  value: void 0
};
