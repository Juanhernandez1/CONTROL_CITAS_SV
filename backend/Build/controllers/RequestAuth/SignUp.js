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

var SignUp = function SignUp(
  businessCrud,
  contactbusinessCrud,
  addressCrud,
  freedayCrud,
  settingCrud,
  userCrud,
  accessCrud
) {
  var _this = this;

  (0, _classCallCheck2['default'])(this, SignUp);
  (0, _defineProperty2['default'])(
    this,
    'SignUpBusinessCreateTraditional',
    /*#__PURE__*/ (function () {
      var _ref = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee(req, res) {
          var _req$body,
            objUsers,
            obtAccess,
            objBusiness,
            obtSetting,
            objAddres,
            objContact,
            UsersBusiness,
            UsersBusinessAccess,
            Business,
            Addess,
            Setting,
            Contact,
            ERDB404;

          return _regenerator['default'].wrap(function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  try {
                    (_req$body = req.body),
                      (objUsers = _req$body.objUsers),
                      (obtAccess = _req$body.obtAccess),
                      (objBusiness = _req$body.objBusiness),
                      (obtSetting = _req$body.obtSetting),
                      (objAddres = _req$body.objAddres),
                      (objContact = _req$body.objContact);
                    UsersBusiness = _this.UserCrud.Create(objUsers);
                    objBusiness.iduser = UsersBusiness.iduser;
                    obtAccess.iduser = UsersBusiness.iduser;
                    UsersBusinessAccess = _this.AccessCrud.Create(objUsers);
                    Business = _this.Crud.Create(objBusiness);
                    obtSetting.idbusiness = Business.idbusiness;
                    objAddres.idbusiness = Business.idbusiness;
                    objContact.idbusiness = Business.idbusiness;
                    Addess = _this.AddressCrud.Create(objAddres);
                    Setting = _this.SettingCrud.Create(obtSetting);
                    Contact = _this.ContactbusinessCrud.Create(objContact);
                    if (Contact.success)
                      res.status(201).send({
                        UsersBusiness: UsersBusiness,
                        Business: Business
                      });
                  } catch (error) {
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);
                  }

                case 1:
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
  (0, _defineProperty2['default'])(
    this,
    'SignUpBusinessCreateGoogle',
    /*#__PURE__*/ (function () {
      var _ref2 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee2(req, res) {
          var _req$body2,
            objBusiness,
            obtSetting,
            objAddres,
            objContact,
            GoogleProfiel,
            objUsers,
            UsersBusiness,
            Business,
            Addess,
            Setting,
            Contact,
            ERDB404;

          return _regenerator['default'].wrap(function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  try {
                    (_req$body2 = req.body),
                      (objBusiness = _req$body2.objBusiness),
                      (obtSetting = _req$body2.obtSetting),
                      (objAddres = _req$body2.objAddres),
                      (objContact = _req$body2.objContact);
                    GoogleProfiel = req.session.grant.response.profile;
                    objUsers = {
                      iduser: null,
                      uuiduser: GoogleProfiel.sub,
                      name: GoogleProfiel.given_name,
                      lastname: GoogleProfiel.family_name,
                      phone: null,
                      email: GoogleProfiel.email,
                      uuidfacebook: null,
                      uuidgoogle: GoogleProfiel.sub,
                      state: 'Activo'
                    };
                    UsersBusiness = _this.UserCrud.Create(objUsers);
                    objBusiness.iduser = UsersBusiness.iduser;
                    Business = _this.Crud.Create(objBusiness);
                    obtSetting.idbusiness = Business.idbusiness;
                    objAddres.idbusiness = Business.idbusiness;
                    objContact.idbusiness = Business.idbusiness;
                    Addess = _this.AddressCrud.Create(objAddres);
                    Setting = _this.SettingCrud.Create(obtSetting);
                    Contact = _this.ContactbusinessCrud.Create(objContact);
                    if (Contact.success)
                      res.status(201).send({
                        UsersBusiness: UsersBusiness,
                        Business: Business
                      });
                  } catch (error) {
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);
                  }

                case 1:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2);
        })
      );

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    })()
  );
  (0, _defineProperty2['default'])(
    this,
    'SignUpUsersCreateTraditional',
    /*#__PURE__*/ (function () {
      var _ref3 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee3(req, res) {
          var _req$body3, objUsers, obtAccess, Users, UsersAccess, ERDB404;

          return _regenerator['default'].wrap(function _callee3$(_context3) {
            while (1) {
              switch ((_context3.prev = _context3.next)) {
                case 0:
                  try {
                    (_req$body3 = req.body),
                      (objUsers = _req$body3.objUsers),
                      (obtAccess = _req$body3.obtAccess);
                    Users = _this.UserCrud.Create(objUsers);
                    obtAccess.iduser = Users.iduser;
                    UsersAccess = _this.AccessCrud.Create(objUsers);
                    if (UsersAccess.success)
                      res.status(201).send({
                        Users: Users
                      });
                  } catch (error) {
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);
                  }

                case 1:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3);
        })
      );

      return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    })()
  );
  (0, _defineProperty2['default'])(
    this,
    'SignUpUserCreateGoogle',
    /*#__PURE__*/ (function () {
      var _ref4 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee4(req, res) {
          var _req$body4, objUsers, obtAccess, Users, UsersAccess, ERDB404;

          return _regenerator['default'].wrap(function _callee4$(_context4) {
            while (1) {
              switch ((_context4.prev = _context4.next)) {
                case 0:
                  try {
                    (_req$body4 = req.body),
                      (objUsers = _req$body4.objUsers),
                      (obtAccess = _req$body4.obtAccess);
                    Users = _this.UserCrud.Create(objUsers);
                    obtAccess.iduser = Users.iduser;
                    UsersAccess = _this.AccessCrud.Create(objUsers);
                    if (UsersAccess.success)
                      res.status(201).send({
                        Users: Users
                      });
                  } catch (error) {
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);
                  }

                case 1:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4);
        })
      );

      return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
      };
    })()
  );
  (0, _defineProperty2['default'])(
    this,
    'SignUpUsersCreateFacebook',
    /*#__PURE__*/ (function () {
      var _ref5 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee5(req, res) {
          var _req$body5, objUsers, obtAccess, Users, UsersAccess, ERDB404;

          return _regenerator['default'].wrap(function _callee5$(_context5) {
            while (1) {
              switch ((_context5.prev = _context5.next)) {
                case 0:
                  try {
                    (_req$body5 = req.body),
                      (objUsers = _req$body5.objUsers),
                      (obtAccess = _req$body5.obtAccess);
                    Users = _this.UserCrud.Create(objUsers);
                    obtAccess.iduser = Users.iduser;
                    UsersAccess = _this.AccessCrud.Create(objUsers);
                    if (UsersAccess.success)
                      res.status(201).send({
                        Users: Users
                      });
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

  if (_classStaticPrivateFieldSpecGet(SignUp, SignUp, _instance)) {
    return _classStaticPrivateFieldSpecGet(SignUp, SignUp, _instance);
  }

  _classStaticPrivateFieldSpecSet(SignUp, SignUp, _instance, this);

  this.BusinessCrud = businessCrud;
  this.ContactbusinessCrud = contactbusinessCrud;
  this.AddressCrud = addressCrud;
  this.FreedayCrud = freedayCrud;
  this.SettingCrud = settingCrud;
  this.UserCrud = userCrud;
  this.AccessCrud = accessCrud;
};

exports['default'] = SignUp;
var _instance = {
  writable: true,
  value: void 0
};
