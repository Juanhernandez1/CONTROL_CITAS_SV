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

var RequestUsers = function RequestUsers(userCrud, accessCrud, appointmentCrud) {
  var _this = this;

  (0, _classCallCheck2['default'])(this, RequestUsers);
  (0, _defineProperty2['default'])(
    this,
    'RequestUsersGetPk',
    /*#__PURE__*/ (function () {
      var _ref = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee(req, res) {
          var id, User, ERDB404;
          return _regenerator['default'].wrap(
            function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    _context.prev = 0;
                    id = req.params.id;
                    _context.next = 4;
                    return _this.UserCrud.GetPk(id);

                  case 4:
                    User = _context.sent;

                    if (!(User.data.access.type === 'N')) {
                      _context.next = 9;
                      break;
                    }

                    _context.next = 8;
                    return _this.UserCrud.GetPk2(id);

                  case 8:
                    User = _context.sent;

                  case 9:
                    if (User.success) res.status(User.data ? 200 : 204).send(User);
                    _context.next = 17;
                    break;

                  case 12:
                    _context.prev = 12;
                    _context.t0 = _context['catch'](0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 17:
                  case 'end':
                    return _context.stop();
                }
              }
            },
            _callee,
            null,
            [[0, 12]]
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
    'RequestUsersUpdate',
    /*#__PURE__*/ (function () {
      var _ref2 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee2(req, res) {
          var objUser, User, ERDB404;
          return _regenerator['default'].wrap(
            function _callee2$(_context2) {
              while (1) {
                switch ((_context2.prev = _context2.next)) {
                  case 0:
                    _context2.prev = 0;
                    objUser = req.body;
                    _context2.next = 4;
                    return _this.UserCrud.Update(objUser);

                  case 4:
                    User = _context2.sent;

                    if (User.success) {
                      res.status(202).send(User);
                    } else {
                      res.status(409).send(User);
                    }

                    _context2.next = 13;
                    break;

                  case 8:
                    _context2.prev = 8;
                    _context2.t0 = _context2['catch'](0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 13:
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
    'RequestUsersDelete',
    /*#__PURE__*/ (function () {
      var _ref3 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee3(req, res) {
          var id, User, ERDB404;
          return _regenerator['default'].wrap(
            function _callee3$(_context3) {
              while (1) {
                switch ((_context3.prev = _context3.next)) {
                  case 0:
                    _context3.prev = 0;
                    id = req.params.id;
                    _context3.next = 4;
                    return _this.UserCrud.Delete(id);

                  case 4:
                    User = _context3.sent;

                    if (User.success) {
                      res.status(202).send(User);
                    } else {
                      res.status(409).send(User);
                    }

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
    'RequestUsersAccessUpdate',
    /*#__PURE__*/ (function () {
      var _ref4 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee4(req, res) {
          var objAcces, UsersAccess, ERDB404;
          return _regenerator['default'].wrap(
            function _callee4$(_context4) {
              while (1) {
                switch ((_context4.prev = _context4.next)) {
                  case 0:
                    _context4.prev = 0;
                    objAcces = req.body;
                    _context4.next = 4;
                    return _this.AccessCrud.Update(objAcces);

                  case 4:
                    UsersAccess = _context4.sent;

                    if (UsersAccess.success) {
                      res.status(202).send(UsersAccess);
                    } else {
                      res.status(409).send(UsersAccess);
                    }

                    _context4.next = 13;
                    break;

                  case 8:
                    _context4.prev = 8;
                    _context4.t0 = _context4['catch'](0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 13:
                  case 'end':
                    return _context4.stop();
                }
              }
            },
            _callee4,
            null,
            [[0, 8]]
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
    'RequestUsersAppointmentGetAll',
    /*#__PURE__*/ (function () {
      var _ref5 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee5(req, res) {
          var iduser, DataList, ERDB404;
          return _regenerator['default'].wrap(function _callee5$(_context5) {
            while (1) {
              switch ((_context5.prev = _context5.next)) {
                case 0:
                  try {
                    iduser = req.param.iduser;
                    DataList = _this.AppointmentCrud.GetAllForUsers(iduser);
                    if (DataList.success) res.status(200).send(DataList);
                  } catch (error) {
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);
                  }

                case 1:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5);
        })
      );

      return function (_x9, _x10) {
        return _ref5.apply(this, arguments);
      };
    })()
  );
  (0, _defineProperty2['default'])(
    this,
    'RequestUsersAppointmentGetPk',
    /*#__PURE__*/ (function () {
      var _ref6 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee6(req, res) {
          var _req$body, idappointmen, iduser, DataList, ERDB404;

          return _regenerator['default'].wrap(function _callee6$(_context6) {
            while (1) {
              switch ((_context6.prev = _context6.next)) {
                case 0:
                  try {
                    (_req$body = req.body),
                      (idappointmen = _req$body.idappointmen),
                      (iduser = _req$body.iduser);
                    DataList = _this.AppointmentCrud.GetPkForUsers(idappointmen, iduser);
                    if (DataList.success) res.status(200).send(DataList);
                  } catch (error) {
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);
                  }

                case 1:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6);
        })
      );

      return function (_x11, _x12) {
        return _ref6.apply(this, arguments);
      };
    })()
  );
  (0, _defineProperty2['default'])(
    this,
    'RequestUsersAppointmentDelete',
    /*#__PURE__*/ (function () {
      var _ref7 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee7(req, res) {
          var pk, Data, ERDB404;
          return _regenerator['default'].wrap(function _callee7$(_context7) {
            while (1) {
              switch ((_context7.prev = _context7.next)) {
                case 0:
                  try {
                    pk = req.param.Pk;
                    Data = _this.AppointmentCrud.Delete(pk);
                    if (Data.success) res.status(202).send(Data);
                  } catch (error) {
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);
                  }

                case 1:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7);
        })
      );

      return function (_x13, _x14) {
        return _ref7.apply(this, arguments);
      };
    })()
  );

  if (_classStaticPrivateFieldSpecGet(RequestUsers, RequestUsers, _instance)) {
    return _classStaticPrivateFieldSpecGet(RequestUsers, RequestUsers, _instance);
  }

  _classStaticPrivateFieldSpecSet(RequestUsers, RequestUsers, _instance, this);

  this.UserCrud = userCrud;
  this.AppointmentCrud = appointmentCrud;
};

exports['default'] = RequestUsers;
var _instance = {
  writable: true,
  value: void 0
};
