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

var _popupTools = _interopRequireDefault(require('popup-tools'));

var _moment = _interopRequireDefault(require('../../services/moment'));

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
          var _req$body, objUser, objAccess, User, Acces, token, ERDB404;

          return _regenerator['default'].wrap(
            function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    _context.prev = 0;
                    (_req$body = req.body),
                      (objUser = _req$body.objUser),
                      (objAccess = _req$body.objAccess);
                    _context.next = 4;
                    return _this.UserCrud.Create(objUser);

                  case 4:
                    User = _context.sent;

                    if (!User.success) {
                      _context.next = 13;
                      break;
                    }

                    objAccess.iduser = User.data.iduser;
                    _context.next = 9;
                    return _this.AccessCrud.Create(objAccess);

                  case 9:
                    Acces = _context.sent;

                    if (Acces.success) {
                      token = _this.TokenAuth.CreateToken(User.data);
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
                      res.status(202).send({
                        data: {
                          iduser: User.data.iduser,
                          lastname: User.data.lastname,
                          name: User.data.name,
                          state: User.data.state,
                          type: Acces.data.type
                        },
                        token: token,
                        success: true
                      });
                    } else {
                      res.status(409).send({
                        User: User,
                        Acces: Acces
                      });
                    }

                    _context.next = 14;
                    break;

                  case 13:
                    res.status(409).send(User);

                  case 14:
                    _context.next = 22;
                    break;

                  case 16:
                    _context.prev = 16;
                    _context.t0 = _context['catch'](0);
                    console.log(_context.t0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 22:
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
                      ); //  res.status(201).send({ Users });

                      res.send(
                        _popupTools['default'].popupResponse({
                          mesage: 'Se a iniciado Secion',
                          success: true,
                          data: {
                            iduser: User.data.iduser,
                            lastname: User.data.lastname,
                            name: User.data.name,
                            state: User.data.state
                          },
                          auth: true,
                          dateExpired: (0, _moment['default'])().format('l'),
                          token: token
                        })
                      );
                    }

                    _context2.next = 16;
                    break;

                  case 13:
                    _token = _this.TokenAuth.CreateToken(User.data);
                    res.cookie(
                      'cookiauthControlCitas',
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
                    ); //    res.status(202).send({ mesage: 'Se a iniciado Secion', success: true, data: User });

                    res.send(
                      _popupTools['default'].popupResponse({
                        mesage: 'Se a iniciado Secion',
                        success: true,
                        data: {
                          iduser: User.data.iduser,
                          lastname: User.data.lastname,
                          name: User.data.name,
                          state: User.data.state
                        },
                        auth: true,
                        dateExpired: (0, _moment['default'])().format('l'),
                        token: _token
                      })
                    );

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
                    _context3.next = 4;
                    return _this.UserCrud.GetOpenIdAuth(facebookProfiel.id, 'uuidfacebook');

                  case 4:
                    User = _context3.sent;

                    if (!(User.data.uuidfacebook === undefined)) {
                      _context3.next = 13;
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
                    _context3.next = 9;
                    return _this.UserCrud.Create(objUsers);

                  case 9:
                    Users = _context3.sent;

                    if (Users.success) {
                      token = _this.TokenAuth.CreateToken(User.data);
                      console.log(token);
                      res.cookie(
                        'cookiauthControlCitas',
                        JSON.stringify({
                          auth: true,
                          token: token,
                          id: User.data
                        }),
                        {
                          maxAge: 86400 * 1000,
                          // 24 hours
                          httpOnly: true // http only, prevents JavaScript cookie access
                        }
                      ); // res.status(201).send({ Users });

                      res.send(
                        _popupTools['default'].popupResponse({
                          mesage: 'Se a iniciado Secion',
                          success: true,
                          data: {
                            iduser: User.data.iduser,
                            lastname: User.data.lastname,
                            name: User.data.name,
                            state: User.data.state
                          },
                          auth: true,
                          dateExpired: (0, _moment['default'])().format('l'),
                          token: token
                        })
                      );
                    }

                    _context3.next = 16;
                    break;

                  case 13:
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
                    ); //  res.status(202).send({ mesage: 'Se a iniciado Secion', success: true, data: User });

                    res.status(202).send(
                      _popupTools['default'].popupResponse({
                        mesage: 'Se a iniciado Secion',
                        success: true,
                        data: {
                          iduser: User.data.iduser,
                          lastname: User.data.lastname,
                          name: User.data.name,
                          state: User.data.state
                        },
                        auth: true,
                        dateExpired: (0, _moment['default'])().format('l'),
                        token: _token2
                      })
                    );

                  case 16:
                    _context3.next = 23;
                    break;

                  case 18:
                    _context3.prev = 18;
                    _context3.t0 = _context3['catch'](0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 23:
                  case 'end':
                    return _context3.stop();
                }
              }
            },
            _callee3,
            null,
            [[0, 18]]
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
    'LoginTraditional',
    /*#__PURE__*/ (function () {
      var _ref4 = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee4(req, res) {
          var _req$body2, username, password, Acces, User, token, ERDB404;

          return _regenerator['default'].wrap(
            function _callee4$(_context4) {
              while (1) {
                switch ((_context4.prev = _context4.next)) {
                  case 0:
                    _context4.prev = 0;
                    (_req$body2 = req.body),
                      (username = _req$body2.username),
                      (password = _req$body2.password);
                    _context4.next = 4;
                    return _this.AccessCrud.FindCompare(username, password);

                  case 4:
                    Acces = _context4.sent;

                    if (!Acces.success) {
                      _context4.next = 12;
                      break;
                    }

                    _context4.next = 8;
                    return _this.UserCrud.GetPk(Acces.data.iduser);

                  case 8:
                    User = _context4.sent;

                    if (User.success) {
                      token = _this.TokenAuth.CreateToken(User.data);
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
                      res.status(202).send({
                        data: {
                          iduser: User.data.iduser,
                          lastname: User.data.lastname,
                          name: User.data.name,
                          state: User.data.state,
                          type: Acces.data.type
                        },
                        token: token,
                        success: Acces.success
                      });
                    } else {
                      res.status(409).send({
                        User: User,
                        Acces: Acces
                      });
                    }

                    _context4.next = 13;
                    break;

                  case 12:
                    res.status(409).send(Acces);

                  case 13:
                    _context4.next = 20;
                    break;

                  case 15:
                    _context4.prev = 15;
                    _context4.t0 = _context4['catch'](0);
                    ERDB404 = _ErrorMessages['default'].ERDB404;
                    console.log(ERDB404);
                    res.status(404).send(ERDB404);

                  case 20:
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

      return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
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
