"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _CrudInterface2 = _interopRequireDefault(require("../../../interface/CrudInterface"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var FreedayCrud = /*#__PURE__*/function (_CrudInterface) {
  (0, _inherits2["default"])(FreedayCrud, _CrudInterface);

  var _super = _createSuper(FreedayCrud);

  function FreedayCrud(Model) {
    var _this;

    (0, _classCallCheck2["default"])(this, FreedayCrud);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "GetPk", /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(pk) {
        var data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this.Model.findByPk(pk, _this.Config);

              case 3:
                data = _context.sent;
                return _context.abrupt("return", {
                  data: data,
                  success: true
                });

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);
                return _context.abrupt("return", {
                  success: false
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "GetAll", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var data;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _this.Model.findAll(_this.Config);

            case 3:
              data = _context2.sent;
              return _context2.abrupt("return", {
                data: data,
                success: true
              });

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);
              return _context2.abrupt("return", {
                success: false
              });

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    })));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Create", /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(obj) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _this.Model.create(obj);

              case 3:
                return _context3.abrupt("return", {
                  success: true
                });

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);
                return _context3.abrupt("return", {
                  success: false
                });

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 6]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Update", /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(obj) {
        var FieldPk, pk;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                FieldPk = _this.Model.primaryKeyAttribute;
                pk = obj[FieldPk];
                delete obj[FieldPk];
                _context4.next = 6;
                return _this.Model.update(obj, {
                  where: (0, _defineProperty2["default"])({}, FieldPk, pk)
                });

              case 6:
                return _context4.abrupt("return", {
                  success: true
                });

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);
                console.log(_context4.t0);
                return _context4.abrupt("return", {
                  success: false
                });

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 9]]);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Delete", /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(pk) {
        var FieldPk;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                FieldPk = _this.Model.primaryKeyAttribute;
                _context5.next = 4;
                return _this.Model.update({
                  state: 'inactive'
                }, {
                  where: (0, _defineProperty2["default"])({}, FieldPk, pk)
                });

              case 4:
                return _context5.abrupt("return", {
                  success: true
                });

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
                console.log(_context5.t0);
                return _context5.abrupt("return", {
                  success: false
                });

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 7]]);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());

    if (_classStaticPrivateFieldSpecGet(FreedayCrud, FreedayCrud, _instance)) {
      return (0, _possibleConstructorReturn2["default"])(_this, _classStaticPrivateFieldSpecGet(FreedayCrud, FreedayCrud, _instance));
    }

    _classStaticPrivateFieldSpecSet(FreedayCrud, FreedayCrud, _instance, (0, _assertThisInitialized2["default"])(_this));

    _this.Model = Model;
    _this.Config = {
      raw: true,
      nest: true
    };
    return _this;
  }

  return FreedayCrud;
}(_CrudInterface2["default"]);

exports["default"] = FreedayCrud;
var _instance = {
  writable: true,
  value: void 0
};