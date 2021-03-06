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

var _pagination = _interopRequireDefault(require('../../../assets/pagination'));

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

var BusinessCrud = /*#__PURE__*/ (function (_CrudInterface) {
  (0, _inherits2['default'])(BusinessCrud, _CrudInterface);

  var _super = _createSuper(BusinessCrud);

  function BusinessCrud(Model, Operations) {
    var _this;

    (0, _classCallCheck2['default'])(this, BusinessCrud);
    _this = _super.call(this);
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'GetPk',
      /*#__PURE__*/ (function () {
        var _ref = (0, _asyncToGenerator2['default'])(
          /*#__PURE__*/ _regenerator['default'].mark(function _callee(pk) {
            var data;
            return _regenerator['default'].wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.prev = 0;
                      _context.next = 3;
                      return _this.Model.findByPk(
                        pk,
                        _objectSpread(
                          _objectSpread({}, _this.Config),
                          {},
                          {
                            include: [
                              {
                                association: 'address'
                              },
                              {
                                association: 'contactbusiness'
                              }
                            ]
                          }
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
                      return _context.abrupt('return', {
                        success: false
                      });

                    case 10:
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

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      })()
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'GetAll',
      /*#__PURE__*/ (function () {
        var _ref2 = (0, _asyncToGenerator2['default'])(
          /*#__PURE__*/ _regenerator['default'].mark(function _callee2(page) {
            var getPreviousPage, getOffset, getNextPage, _yield$_this$Model$fi, count, rows;

            return _regenerator['default'].wrap(
              function _callee2$(_context2) {
                while (1) {
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      (getPreviousPage = _pagination['default'].getPreviousPage),
                        (getOffset = _pagination['default'].getOffset),
                        (getNextPage = _pagination['default'].getNextPage);
                      _context2.prev = 1;
                      _context2.next = 4;
                      return _this.Model.findAndCountAll(
                        _objectSpread(
                          _objectSpread({}, _this.Config),
                          {},
                          {
                            offset: getOffset(page, 6),
                            limit: 6,
                            include: [
                              {
                                association: 'address'
                              },
                              {
                                association: 'contactbusiness'
                              }
                            ],
                            where: {
                              state: 'Activo'
                            }
                          }
                        )
                      );

                    case 4:
                      _yield$_this$Model$fi = _context2.sent;
                      count = _yield$_this$Model$fi.count;
                      rows = _yield$_this$Model$fi.rows;
                      return _context2.abrupt('return', {
                        previousPage: getPreviousPage(page),
                        currentPage: page,
                        nextPage: getNextPage(page, 6, count),
                        totalPage: Math.ceil(count / 6),
                        limit: 6,
                        data: rows,
                        success: true
                      });

                    case 10:
                      _context2.prev = 10;
                      _context2.t0 = _context2['catch'](1);
                      console.log(_context2.t0);
                      return _context2.abrupt('return', {
                        success: false
                      });

                    case 14:
                    case 'end':
                      return _context2.stop();
                  }
                }
              },
              _callee2,
              null,
              [[1, 10]]
            );
          })
        );

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      })()
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'GetAllNoPaginate',
      /*#__PURE__*/ (function () {
        var _ref3 = (0, _asyncToGenerator2['default'])(
          /*#__PURE__*/ _regenerator['default'].mark(function _callee3(state) {
            var data;
            return _regenerator['default'].wrap(
              function _callee3$(_context3) {
                while (1) {
                  switch ((_context3.prev = _context3.next)) {
                    case 0:
                      _context3.prev = 0;
                      console.log(state);

                      if (!(state === 'ShowHide')) {
                        _context3.next = 8;
                        break;
                      }

                      _context3.next = 5;
                      return _this.Model.findAll(
                        _objectSpread(
                          _objectSpread({}, _this.Config),
                          {},
                          {
                            include: [
                              {
                                association: 'address'
                              },
                              {
                                association: 'contactbusiness'
                              }
                            ],
                            where: {
                              state: state
                            }
                          }
                        )
                      );

                    case 5:
                      data = _context3.sent;
                      _context3.next = 11;
                      break;

                    case 8:
                      _context3.next = 10;
                      return _this.Model.findAll(
                        _objectSpread(
                          _objectSpread({}, _this.Config),
                          {},
                          {
                            include: [
                              {
                                association: 'address'
                              },
                              {
                                association: 'contactbusiness'
                              }
                            ],
                            where: {
                              state: 'Activo'
                            }
                          }
                        )
                      );

                    case 10:
                      data = _context3.sent;

                    case 11:
                      return _context3.abrupt('return', {
                        data: data,
                        success: true
                      });

                    case 14:
                      _context3.prev = 14;
                      _context3.t0 = _context3['catch'](0);
                      console.log(_context3.t0);
                      return _context3.abrupt('return', {
                        success: false
                      });

                    case 18:
                    case 'end':
                      return _context3.stop();
                  }
                }
              },
              _callee3,
              null,
              [[0, 14]]
            );
          })
        );

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      })()
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'GetLikeName',
      /*#__PURE__*/ (function () {
        var _ref4 = (0, _asyncToGenerator2['default'])(
          /*#__PURE__*/ _regenerator['default'].mark(function _callee4(searchData, page) {
            var getPreviousPage, getOffset, getNextPage, _yield$_this$Model$fi2, count, rows;

            return _regenerator['default'].wrap(
              function _callee4$(_context4) {
                while (1) {
                  switch ((_context4.prev = _context4.next)) {
                    case 0:
                      (getPreviousPage = _pagination['default'].getPreviousPage),
                        (getOffset = _pagination['default'].getOffset),
                        (getNextPage = _pagination['default'].getNextPage);
                      _context4.prev = 1;
                      _context4.next = 4;
                      return _this.Model.findAndCountAll(
                        _objectSpread(
                          _objectSpread({}, _this.Config),
                          {},
                          {
                            where: {
                              businessname: (0, _defineProperty2['default'])(
                                {},
                                _this.Operatios.like,
                                '%'.concat(searchData, '%')
                              ),
                              state: 'Activo'
                            },
                            offset: getOffset(page, 6),
                            limit: 6,
                            include: [
                              {
                                association: 'address'
                              },
                              {
                                association: 'contactbusiness'
                              }
                            ]
                          }
                        )
                      );

                    case 4:
                      _yield$_this$Model$fi2 = _context4.sent;
                      count = _yield$_this$Model$fi2.count;
                      rows = _yield$_this$Model$fi2.rows;
                      return _context4.abrupt('return', {
                        previousPage: getPreviousPage(page),
                        currentPage: page,
                        nextPage: getNextPage(page, 6, count),
                        totalPage: Math.ceil(count / 6),
                        limit: 6,
                        data: rows,
                        success: true
                      });

                    case 10:
                      _context4.prev = 10;
                      _context4.t0 = _context4['catch'](1);
                      console.log(_context4.t0);
                      return _context4.abrupt('return', {
                        success: false
                      });

                    case 14:
                    case 'end':
                      return _context4.stop();
                  }
                }
              },
              _callee4,
              null,
              [[1, 10]]
            );
          })
        );

        return function (_x4, _x5) {
          return _ref4.apply(this, arguments);
        };
      })()
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'GetLikeNameNoPage',
      /*#__PURE__*/ (function () {
        var _ref5 = (0, _asyncToGenerator2['default'])(
          /*#__PURE__*/ _regenerator['default'].mark(function _callee5(searchData) {
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
                          _objectSpread({}, _this.Config),
                          {},
                          {
                            where: {
                              businessname: (0, _defineProperty2['default'])(
                                {},
                                _this.Operatios.like,
                                '%'.concat(searchData, '%')
                              ),
                              state: 'Activo'
                            },
                            include: [
                              {
                                association: 'address'
                              },
                              {
                                association: 'contactbusiness'
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

        return function (_x6) {
          return _ref5.apply(this, arguments);
        };
      })()
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'Create',
      /*#__PURE__*/ (function () {
        var _ref6 = (0, _asyncToGenerator2['default'])(
          /*#__PURE__*/ _regenerator['default'].mark(function _callee6(obj) {
            var data, _error$errors$, message, type, path, origin;

            return _regenerator['default'].wrap(
              function _callee6$(_context6) {
                while (1) {
                  switch ((_context6.prev = _context6.next)) {
                    case 0:
                      _context6.prev = 0;
                      console.log(obj);
                      obj.uuidbusiness = (0, _uuid.v4)();
                      _context6.next = 5;
                      return _this.Model.create(obj);

                    case 5:
                      data = _context6.sent;
                      return _context6.abrupt('return', {
                        data: data,
                        success: true
                      });

                    case 9:
                      _context6.prev = 9;
                      _context6.t0 = _context6['catch'](0);
                      (_error$errors$ = _context6.t0.errors[0]),
                        (message = _error$errors$.message),
                        (type = _error$errors$.type),
                        (path = _error$errors$.path),
                        (origin = _error$errors$.origin);
                      return _context6.abrupt('return', {
                        success: false,
                        message: message,
                        type: type,
                        path: path,
                        origin: origin
                      });

                    case 13:
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

        return function (_x7) {
          return _ref6.apply(this, arguments);
        };
      })()
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'Update',
      /*#__PURE__*/ (function () {
        var _ref7 = (0, _asyncToGenerator2['default'])(
          /*#__PURE__*/ _regenerator['default'].mark(function _callee7(obj) {
            var FieldPk, pk, data, _error$errors$2, message, type, path, origin;

            return _regenerator['default'].wrap(
              function _callee7$(_context7) {
                while (1) {
                  switch ((_context7.prev = _context7.next)) {
                    case 0:
                      _context7.prev = 0;
                      FieldPk = _this.Model.primaryKeyAttribute;
                      pk = obj[FieldPk];
                      delete obj[FieldPk];
                      _context7.next = 6;
                      return _this.Model.update(obj, {
                        where: (0, _defineProperty2['default'])({}, FieldPk, pk)
                      });

                    case 6:
                      data = _context7.sent;
                      return _context7.abrupt('return', {
                        data: data,
                        success: true
                      });

                    case 10:
                      _context7.prev = 10;
                      _context7.t0 = _context7['catch'](0);
                      (_error$errors$2 = _context7.t0.errors[0]),
                        (message = _error$errors$2.message),
                        (type = _error$errors$2.type),
                        (path = _error$errors$2.path),
                        (origin = _error$errors$2.origin);
                      return _context7.abrupt('return', {
                        success: false,
                        message: message,
                        type: type,
                        path: path,
                        origin: origin
                      });

                    case 14:
                    case 'end':
                      return _context7.stop();
                  }
                }
              },
              _callee7,
              null,
              [[0, 10]]
            );
          })
        );

        return function (_x8) {
          return _ref7.apply(this, arguments);
        };
      })()
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'Delete',
      /*#__PURE__*/ (function () {
        var _ref8 = (0, _asyncToGenerator2['default'])(
          /*#__PURE__*/ _regenerator['default'].mark(function _callee8(pk) {
            var FieldPk, data, _error$errors$3, message, type, path, origin;

            return _regenerator['default'].wrap(
              function _callee8$(_context8) {
                while (1) {
                  switch ((_context8.prev = _context8.next)) {
                    case 0:
                      console.log(pk);
                      _context8.prev = 1;
                      FieldPk = _this.Model.primaryKeyAttribute;
                      _context8.next = 5;
                      return _this.Model.update(
                        {
                          state: 'inactivo'
                        },
                        {
                          where: (0, _defineProperty2['default'])({}, FieldPk, pk)
                        }
                      );

                    case 5:
                      data = _context8.sent;
                      return _context8.abrupt('return', {
                        data: data,
                        success: true
                      });

                    case 9:
                      _context8.prev = 9;
                      _context8.t0 = _context8['catch'](1);
                      (_error$errors$3 = _context8.t0.errors[0]),
                        (message = _error$errors$3.message),
                        (type = _error$errors$3.type),
                        (path = _error$errors$3.path),
                        (origin = _error$errors$3.origin);
                      return _context8.abrupt('return', {
                        success: false,
                        message: message,
                        type: type,
                        path: path,
                        origin: origin
                      });

                    case 13:
                    case 'end':
                      return _context8.stop();
                  }
                }
              },
              _callee8,
              null,
              [[1, 9]]
            );
          })
        );

        return function (_x9) {
          return _ref8.apply(this, arguments);
        };
      })()
    );

    if (_classStaticPrivateFieldSpecGet(BusinessCrud, BusinessCrud, _instance)) {
      return (0, _possibleConstructorReturn2['default'])(
        _this,
        _classStaticPrivateFieldSpecGet(BusinessCrud, BusinessCrud, _instance)
      );
    }

    _this.Model = Model;
    _this.Operatios = Operations;
    _this.Config = {
      raw: true,
      nest: true
    };

    _classStaticPrivateFieldSpecSet(
      BusinessCrud,
      BusinessCrud,
      _instance,
      (0, _assertThisInitialized2['default'])(_this)
    );

    return _this;
  }

  return BusinessCrud;
})(_CrudInterface2['default']);

exports['default'] = BusinessCrud;
var _instance = {
  writable: true,
  value: void 0
};
