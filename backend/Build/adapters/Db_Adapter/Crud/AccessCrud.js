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

var AccessCrud = /*#__PURE__*/ (function (_CrudInterface) {
  (0, _inherits2['default'])(AccessCrud, _CrudInterface);

  var _super = _createSuper(AccessCrud);

  function AccessCrud(Encrypter, Model) {
    var _this;

    (0, _classCallCheck2['default'])(this, AccessCrud);
    _this = _super.call(this);
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'FindCompare',
      /*#__PURE__*/ (function () {
        var _ref = (0, _asyncToGenerator2['default'])(
          /*#__PURE__*/ _regenerator['default'].mark(function _callee(username, password) {
            var PasswordHash, data, valid;
            return _regenerator['default'].wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.prev = 0;
                      PasswordHash = _this.encrypter.EncryptUserPassword(password);
                      _context.next = 4;
                      return _this.Model.findOne(
                        _objectSpread(
                          _objectSpread({}, _this.Config),
                          {},
                          {
                            where: {
                              username: username,
                              password: PasswordHash
                            }
                          }
                        )
                      );

                    case 4:
                      data = _context.sent;
                      valid = _this.encrypter.ComparePassword(data.password, PasswordHash);
                      return _context.abrupt('return', {
                        data: data,
                        success: valid
                      });

                    case 9:
                      _context.prev = 9;
                      _context.t0 = _context['catch'](0);
                      return _context.abrupt('return', {
                        success: false
                      });

                    case 12:
                    case 'end':
                      return _context.stop();
                  }
                }
              },
              _callee,
              null,
              [[0, 9]]
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
      'FindCompareB',
      /*#__PURE__*/ (function () {
        var _ref2 = (0, _asyncToGenerator2['default'])(
          /*#__PURE__*/ _regenerator['default'].mark(function _callee2(username, password, type) {
            var PasswordHash, data, valid;
            return _regenerator['default'].wrap(
              function _callee2$(_context2) {
                while (1) {
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      _context2.prev = 0;
                      PasswordHash = _this.encrypter.EncryptUserPassword(password);
                      _context2.next = 4;
                      return _this.Model.findOne(
                        _objectSpread(
                          _objectSpread({}, _this.Config),
                          {},
                          {
                            where: {
                              username: username,
                              password: PasswordHash,
                              type: type
                            }
                          }
                        )
                      );

                    case 4:
                      data = _context2.sent;
                      valid = _this.encrypter.ComparePassword(data.password, PasswordHash);
                      return _context2.abrupt('return', {
                        data: data,
                        success: valid
                      });

                    case 9:
                      _context2.prev = 9;
                      _context2.t0 = _context2['catch'](0);
                      return _context2.abrupt('return', {
                        success: false
                      });

                    case 12:
                    case 'end':
                      return _context2.stop();
                  }
                }
              },
              _callee2,
              null,
              [[0, 9]]
            );
          })
        );

        return function (_x3, _x4, _x5) {
          return _ref2.apply(this, arguments);
        };
      })()
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'Create',
      /*#__PURE__*/ (function () {
        var _ref3 = (0, _asyncToGenerator2['default'])(
          /*#__PURE__*/ _regenerator['default'].mark(function _callee3(obj) {
            var data, _error$errors$, message, type, path, origin;

            return _regenerator['default'].wrap(
              function _callee3$(_context3) {
                while (1) {
                  switch ((_context3.prev = _context3.next)) {
                    case 0:
                      _context3.prev = 0;
                      obj.password = _this.encrypter.EncryptUserPassword(obj.password);
                      _context3.next = 4;
                      return _this.Model.create(obj);

                    case 4:
                      data = _context3.sent;
                      return _context3.abrupt('return', {
                        data: data,
                        success: true
                      });

                    case 8:
                      _context3.prev = 8;
                      _context3.t0 = _context3['catch'](0);
                      (_error$errors$ = _context3.t0.errors[0]),
                        (message = _error$errors$.message),
                        (type = _error$errors$.type),
                        (path = _error$errors$.path),
                        (origin = _error$errors$.origin);
                      return _context3.abrupt('return', {
                        success: false,
                        message: message,
                        type: type,
                        path: path,
                        origin: origin
                      });

                    case 12:
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

        return function (_x6) {
          return _ref3.apply(this, arguments);
        };
      })()
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'Update',
      /*#__PURE__*/ (function () {
        var _ref4 = (0, _asyncToGenerator2['default'])(
          /*#__PURE__*/ _regenerator['default'].mark(function _callee4(obj) {
            var FieldPk, pk, useracces, valid, data, _error$errors$2, message, type, path, origin;

            return _regenerator['default'].wrap(
              function _callee4$(_context4) {
                while (1) {
                  switch ((_context4.prev = _context4.next)) {
                    case 0:
                      _context4.prev = 0;
                      // obtener el campo el cual es la primary key y eliminar lo del objeto que ingresa por parametro
                      FieldPk = _this.Model.primaryKeyAttribute;
                      pk = obj[FieldPk];
                      delete obj[FieldPk]; // buscar el regitro de acceso correco

                      _context4.next = 6;
                      return _this.Model.findByPk(pk, _this.Config);

                    case 6:
                      useracces = _context4.sent;
                      // comparar las contrasemas ingresada para determinar si se actualiza la contrase??a o no
                      valid = _this.encrypter.ComparePassword(useracces.password, obj.password);

                      if (valid) {
                        obj.password = useracces.password;
                      } else {
                        // encriptar contrase??a a actualizar
                        obj.password = _this.encrypter.EncryptUserPassword(obj.password);
                      }

                      _context4.next = 11;
                      return _this.Model.update(obj, {
                        where: (0, _defineProperty2['default'])({}, FieldPk, pk)
                      });

                    case 11:
                      data = _context4.sent;
                      return _context4.abrupt('return', {
                        success: true
                      });

                    case 15:
                      _context4.prev = 15;
                      _context4.t0 = _context4['catch'](0);
                      (_error$errors$2 = _context4.t0.errors[0]),
                        (message = _error$errors$2.message),
                        (type = _error$errors$2.type),
                        (path = _error$errors$2.path),
                        (origin = _error$errors$2.origin);
                      return _context4.abrupt('return', {
                        success: false,
                        message: message,
                        type: type,
                        path: path,
                        origin: origin
                      });

                    case 19:
                    case 'end':
                      return _context4.stop();
                  }
                }
              },
              _callee4,
              null,
              [[0, 15]]
            );
          })
        );

        return function (_x7) {
          return _ref4.apply(this, arguments);
        };
      })()
    );

    if (_classStaticPrivateFieldSpecGet(AccessCrud, AccessCrud, _instance)) {
      return (0, _possibleConstructorReturn2['default'])(
        _this,
        _classStaticPrivateFieldSpecGet(AccessCrud, AccessCrud, _instance)
      );
    }

    _classStaticPrivateFieldSpecSet(
      AccessCrud,
      AccessCrud,
      _instance,
      (0, _assertThisInitialized2['default'])(_this)
    );

    _this.Model = Model;
    _this.encrypter = Encrypter;
    _this.Config = {
      raw: true,
      nest: true
    };
    return _this;
  }

  return AccessCrud;
})(_CrudInterface2['default']);

exports['default'] = AccessCrud;
var _instance = {
  writable: true,
  value: void 0
};
