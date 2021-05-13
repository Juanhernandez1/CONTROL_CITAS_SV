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

var SignUp = function SignUp(TokenAuth, userCrud, accessCrud) {
  var _this = this;

  (0, _classCallCheck2['default'])(this, SignUp);
  (0, _defineProperty2['default'])(
    this,
    'SignUpUsersCreateTraditional',
    /*#__PURE__*/ (function () {
      var _ref = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee(req, res) {
          var _req$body, objUser, objAccess, User, data, Acces, ERDB404;

          return _regenerator['default'].wrap(
            function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    _context.prev = 0;
                    (_req$body = req.body),
                      (objUser = _req$body.objUser),
                      (objAccess = _req$body.objAccess);
                    console.log(objUser, objAccess);
                    _context.next = 5;
                    return _this.UserCrud.Create(objUser);

                  case 5:
                    User = _context.sent;
                    data = User.data;
                    console.log(User);

                    if (!User.success) {
                      _context.next = 16;
                      break;
                    }

                    objAccess.iduser = data.iduser;
                    _context.next = 12;
                    return _this.AccessCrud.Create(objAccess);

                  case 12:
                    Acces = _context.sent;

                    if (Acces.success) {
                      delete Acces.password;
                      res.status(201).send({
                        User: User,
                        Acces: Acces
                      });
                    } else {
                      res.status(409).send({
                        User: User,
                        Acces: Acces
                      });
                    }

                    _context.next = 17;
                    break;

                  case 16:
                    res.status(409).send(User);

                  case 17:
                    _context.next = 24;
                    break;

                  case 19:
                    _context.prev = 19;
                    _context.t0 = _context['catch'](0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 24:
                  case 'end':
                    return _context.stop();
                }
              }
            },
            _callee,
            null,
            [[0, 19]]
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
    'CallbackGoogle',
    /*#__PURE__*/ (function () {
      var _ref2 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee2(req, res) {
          var GoogleProfiel, User, objUsers, Users, token, _token, ERDB404;

          return _regenerator['default'].wrap(
            function _callee2$(_context2) {
              while (1) {
                switch ((_context2.prev = _context2.next)) {
                  case 0:
                    _context2.prev = 0;
                    GoogleProfiel = req.session.grant.response.profile;
                    _context2.next = 4;
                    return _this.UserCrud.GetOpenIdAuth(GoogleProfiel.sub, 'uuidgoogle');

                  case 4:
                    User = _context2.sent;

                    if (!(User.data.uuidgoogle === undefined)) {
                      _context2.next = 13;
                      break;
                    }

                    objUsers = {
                      iduser: null,
                      uuiduser: GoogleProfiel.sub,
                      name: GoogleProfiel.given_name,
                      lastname: GoogleProfiel.family_name,
                      phone: '0000-0000',
                      email: GoogleProfiel.email,
                      uuidfacebook: null,
                      uuidgoogle: GoogleProfiel.sub,
                      state: 'Activo'
                    };
                    _context2.next = 9;
                    return _this.UserCrud.Create(objUsers);

                  case 9:
                    Users = _context2.sent;

                    if (Users.success) {
                      token = _this.TokenAuth.CreateToken(User.data);
                      console.log(token);
                      res.cookie(
                        'cookiauth',
                        JSON.stringify({
                          auth: true,
                          token: token,
                          id: User.data.iduser
                        }),
                        {
                          maxAge: 86400 * 1000,
                          // 24 hours
                          httpOnly: true // http only, prevents JavaScript cookie access
                        }
                      );
                      res.status(201).send({
                        Users: Users
                      });
                    }

                    _context2.next = 16;
                    break;

                  case 13:
                    _token = _this.TokenAuth.CreateToken(User.data);
                    res.cookie(
                      'cookiauth',
                      JSON.stringify({
                        auth: true,
                        token: _token,
                        id: User.data.iduser
                      }),
                      {
                        maxAge: 86400 * 1000,
                        // 24 hours
                        httpOnly: true // http only, prevents JavaScript cookie access
                      }
                    );
                    res.status(202).send({
                      mesage: 'Se a iniciado Secion',
                      success: true
                    });

                  case 16:
                    _context2.next = 23;
                    break;

                  case 18:
                    _context2.prev = 18;
                    _context2.t0 = _context2['catch'](0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 23:
                  case 'end':
                    return _context2.stop();
                }
              }
            },
            _callee2,
            null,
            [[0, 18]]
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
    'CallbackFacebook',
    /*#__PURE__*/ (function () {
      var _ref3 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee3(req, res) {
          var facebookProfiel, User, objUsers, Users, token, _token2, ERDB404;

          return _regenerator['default'].wrap(
            function _callee3$(_context3) {
              while (1) {
                switch ((_context3.prev = _context3.next)) {
                  case 0:
                    _context3.prev = 0;
                    facebookProfiel = req.session.grant.response.profile;
                    console.log(facebookProfiel);
                    _context3.next = 5;
                    return _this.UserCrud.GetOpenIdAuth(facebookProfiel.id, 'uuidfacebook');

                  case 5:
                    User = _context3.sent;

                    if (!(User.data.uuidfacebook === undefined)) {
                      _context3.next = 14;
                      break;
                    }

                    objUsers = {
                      iduser: null,
                      uuiduser: facebookProfiel.id,
                      name: facebookProfiel.name,
                      lastname: '',
                      phone: '0000-0000',
                      email: '',
                      uuidfacebook: facebookProfiel.id,
                      uuidgoogle: null,
                      state: 'Activo'
                    };
                    _context3.next = 10;
                    return _this.UserCrud.Create(objUsers);

                  case 10:
                    Users = _context3.sent;

                    if (Users.success) {
                      token = _this.TokenAuth.CreateToken(User.data);
                      console.log(token);
                      res.cookie(
                        'cookiauthControlCitas',
                        JSON.stringify({
                          auth: true,
                          token: token,
                          id: User.data.iduser
                        }),
                        {
                          maxAge: 86400 * 1000,
                          // 24 hours
                          httpOnly: true // http only, prevents JavaScript cookie access
                        }
                      );
                      res.status(201).send({
                        Users: Users
                      });
                    }

                    _context3.next = 17;
                    break;

                  case 14:
                    _token2 = _this.TokenAuth.CreateToken(User.data);
                    res.cookie(
                      'cookiauthControlCitas',
                      JSON.stringify({
                        auth: true,
                        token: _token2,
                        id: User.data.iduser
                      }),
                      {
                        maxAge: 86400 * 1000,
                        // 24 hours
                        httpOnly: true // http only, prevents JavaScript cookie access
                      }
                    );
                    res.status(202).send({
                      mesage: 'Se a iniciado Secion',
                      success: true
                    });

                  case 17:
                    _context3.next = 24;
                    break;

                  case 19:
                    _context3.prev = 19;
                    _context3.t0 = _context3['catch'](0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 24:
                  case 'end':
                    return _context3.stop();
                }
              }
            },
            _callee3,
            null,
            [[0, 19]]
          );
        })
      );

      return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    })()
  );

  if (_classStaticPrivateFieldSpecGet(SignUp, SignUp, _instance)) {
    return _classStaticPrivateFieldSpecGet(SignUp, SignUp, _instance);
  }

  this.UserCrud = userCrud;
  this.AccessCrud = accessCrud;
  this.TokenAuth = TokenAuth;

  _classStaticPrivateFieldSpecSet(SignUp, SignUp, _instance, this);
};
/*  SignUpBusinessCreateTraditional = async (req, res) => {
  try {
    const { objUsers, obtAccess, objBusiness, obtSetting, objAddres, objContact } = req.body;
     const UsersBusiness = this.UserCrud.Create(objUsers);
     objBusiness.iduser = UsersBusiness.iduser;
    obtAccess.iduser = UsersBusiness.iduser;
     const UsersBusinessAccess = this.AccessCrud.Create(objUsers);
     const Business = this.Crud.Create(objBusiness);
     obtSetting.idbusiness = Business.idbusiness;
    objAddres.idbusiness = Business.idbusiness;
    objContact.idbusiness = Business.idbusiness;
     const Addess = this.AddressCrud.Create(objAddres);
    const Setting = this.SettingCrud.Create(obtSetting);
    const Contact = this.ContactbusinessCrud.Create(objContact);
     if (Contact.success) res.status(201).send({ UsersBusiness, Business });
  } catch (error) {
    const { ERDB404 } = ErrorMessages;
    console.log(ERDB404);
    res.status(404).send(ERDB404);
  }
};
 SignUpBusinessCreateGoogle = async (req, res) => {
  try {
    const { objBusiness, obtSetting, objAddres, objContact } = req.body;
    const GoogleProfiel = req.session.grant.response.profile;
     const objUsers = {
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
     const UsersBusiness = this.UserCrud.Create(objUsers);
     objBusiness.iduser = UsersBusiness.iduser;
     const Business = this.Crud.Create(objBusiness);
     obtSetting.idbusiness = Business.idbusiness;
    objAddres.idbusiness = Business.idbusiness;
    objContact.idbusiness = Business.idbusiness;
     const Addess = this.AddressCrud.Create(objAddres);
    const Setting = this.SettingCrud.Create(obtSetting);
    const Contact = this.ContactbusinessCrud.Create(objContact);
     if (Contact.success) res.status(201).send({ UsersBusiness, Business });
  } catch (error) {
    const { ERDB404 } = ErrorMessages;
    console.log(ERDB404);
    res.status(404).send(ERDB404);
  }
};
*/
exports['default'] = SignUp;
var _instance = {
  writable: true,
  value: void 0
};
