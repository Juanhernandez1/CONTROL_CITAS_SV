// TODO crear adapter para grant y botner datos de google para repara completar registro con google
import ErrorMessages from '../../assets/ErrorMessages';
import popupTools from 'popup-tools';
import MomentSv from '../../services/moment';

export default class SignUp {
  static #instance;
  constructor(TokenAuth, userCrud, accessCrud) {
    if (SignUp.#instance) {
      return SignUp.#instance;
    }

    this.UserCrud = userCrud;
    this.AccessCrud = accessCrud;
    this.TokenAuth = TokenAuth;

    SignUp.#instance = this;
  }

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

  SignUpUsersCreateTraditional = async (req, res) => {
    try {
      const { objUser, objAccess } = req.body;

      const User = await this.UserCrud.Create(objUser);

      if (User.success) {
        objAccess.iduser = User.data.iduser;
        const Acces = await this.AccessCrud.Create(objAccess);

        if (Acces.success) {
          const token = this.TokenAuth.CreateToken(User.data);

          res.cookie(
            'cookiauthControlCitas',
            JSON.stringify({ auth: true, token, id: User.data.iduser }),
            {
              maxAge: 86400 * 1000, // 24 hours
              httpOnly: true // http only, prevents JavaScript cookie access
            }
          );
          res.status(201).send({
            mesage: 'Se a iniciado Secion',
            data: {
              iduser: User.data.iduser,
              lastname: User.data.lastname,
              name: User.data.name,
              state: User.data.state,
              type: Acces.data.type
            },
            auth: true,
            dateExpired: MomentSv().format('l'),
            token,
            success: Acces.success
          });
        } else {
          res.status(409).send({ User, Acces });
        }
      } else {
        res.status(409).send(User);
      }
    } catch (error) {
      console.log(error);
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  CallbackGoogle = async (req, res) => {
    try {
      const GoogleProfiel = req.session.grant.response.profile;

      const UserG = await this.UserCrud.GetOpenIdAuth(GoogleProfiel.sub, 'uuidgoogle');

      if (UserG.data.uuidgoogle === undefined) {
        const objUsers = {
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

        const UsersC = await this.UserCrud.Create(objUsers);

        if (UsersC.success) {
          const token = this.TokenAuth.CreateToken(UsersC.data);
          console.log(token);
          res.cookie(
            'cookiauthControlCitas',
            JSON.stringify({ auth: true, token, id: UsersC.data.iduser }),
            {
              maxAge: 86400 * 1000, // 24 hours
              httpOnly: true // http only, prevents JavaScript cookie access
            }
          );
          //  res.status(201).send({ Users });
          res.status(201).send(
            popupTools.popupResponse({
              mesage: 'Se a iniciado Secion',
              data: {
                iduser: UsersC.data.iduser,
                lastname: UsersC.data.lastname,
                name: UsersC.data.name,
                state: UsersC.data.state,
                type: 'C'
              },
              auth: true,
              dateExpired: MomentSv().format('l'),
              token,
              success: true
            })
          );
        }
      } else {
        const token = this.TokenAuth.CreateToken(UserG.data);

        res.cookie(
          'cookiauthControlCitas',
          JSON.stringify({ auth: true, token, id: UserG.data.iduser }),
          {
            maxAge: 86400 * 1000, // 24 hours
            httpOnly: true // http only, prevents JavaScript cookie access
          }
        );
        //    res.status(202).send({ mesage: 'Se a iniciado Secion', success: true, data: User });
        res.status(202).send(
          popupTools.popupResponse({
            mesage: 'Se a iniciado Secion',
            data: {
              iduser: UserG.data.iduser,
              lastname: UserG.data.lastname,
              name: UserG.data.name,
              state: UserG.data.state,
              type: 'C'
            },
            auth: true,
            dateExpired: MomentSv().format('l'),
            token,
            success: true
          })
        );
      }
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  CallbackFacebook = async (req, res) => {
    try {
      const facebookProfiel = req.session.grant.response.profile;

      const UserFb = await this.UserCrud.GetOpenIdAuth(facebookProfiel.id, 'uuidfacebook');

      if (UserFb.data.uuidfacebook === undefined) {
        const objUsers = {
          iduser: null,
          uuiduser: facebookProfiel.id,
          name: facebookProfiel.name,
          lastname: '',
          phone: '0000-0000',
          email: `${facebookProfiel.id}@FakeMail.com`,
          uuidfacebook: facebookProfiel.id,
          uuidgoogle: null,
          state: 'Activo'
        };

        const UsersC = await this.UserCrud.Create(objUsers);

        if (UsersC.success) {
          const token = this.TokenAuth.CreateToken(UsersC.data);

          res.cookie(
            'cookiauthControlCitas',
            JSON.stringify({ auth: true, token, id: UsersC.data }),
            {
              maxAge: 86400 * 1000, // 24 hours
              httpOnly: true // http only, prevents JavaScript cookie access
            }
          );
          // res.status(201).send({ Users });
          res.status(201).send(
            popupTools.popupResponse({
              mesage: 'Se a iniciado Secion',
              data: {
                iduser: UsersC.data.iduser,
                lastname: UsersC.data.lastname,
                name: UsersC.data.name,
                state: UsersC.data.state,
                type: 'C'
              },
              auth: true,
              dateExpired: MomentSv().format('l'),
              token,
              success: true
            })
          );
        }
      } else {
        const token = this.TokenAuth.CreateToken(UserFb.data);

        res.cookie(
          'cookiauthControlCitas',
          JSON.stringify({ auth: true, token, id: UserFb.data.iduser }),
          {
            maxAge: 86400 * 1000, // 24 hours
            httpOnly: true // http only, prevents JavaScript cookie access
          }
        );

        //  res.status(202).send({ mesage: 'Se a iniciado Secion', success: true, data: User });
        res.status(202).send(
          popupTools.popupResponse({
            mesage: 'Se a iniciado Secion',
            data: {
              iduser: UserFb.data.iduser,
              lastname: UserFb.data.lastname,
              name: UserFb.data.name,
              state: UserFb.data.state,
              type: 'C'
            },
            auth: true,
            dateExpired: MomentSv().format('l'),
            token,
            success: true
          })
        );
      }
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  LoginTraditional = async (req, res) => {
    try {
      const { username, password } = req.body;

      const Acces = await this.AccessCrud.FindCompare(username, password);

      if (Acces.success) {
        const User = await this.UserCrud.GetPk(Acces.data.iduser);
        if (User.success) {
          const token = this.TokenAuth.CreateToken(User.data);

          res.cookie(
            'cookiauthControlCitas',
            JSON.stringify({ auth: true, token, id: User.data.iduser }),
            {
              maxAge: 86400 * 1000, // 24 hours
              httpOnly: true // http only, prevents JavaScript cookie access
            }
          );
          res.status(202).send({
            mesage: 'Se a iniciado Secion',
            data: {
              iduser: User.data.iduser,
              lastname: User.data.lastname,
              name: User.data.name,
              state: User.data.state,
              type: Acces.data.type === 'C' ? Acces.data.type : 'C'
            },
            auth: true,
            dateExpired: MomentSv().format('l'),
            token,
            success: Acces.success
          });
        } else {
          res.status(409).send({ User, Acces });
        }
      } else {
        res.status(200).send(Acces);
      }
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  LoginTraditionalBusiness = async (req, res) => {
    try {
      const { username, password } = req.body;
      const { type } = req.params;

      const Acces = await this.AccessCrud.FindCompareB(username, password, type);

      if (Acces.success) {
        const User = await this.UserCrud.GetPk2(Acces.data.iduser);
        if (User.success) {
          const token = this.TokenAuth.CreateToken(User.data);

          res.cookie(
            'cookiauthControlCitas',
            JSON.stringify({ auth: true, token, id: User.data.iduser }),
            {
              maxAge: 86400 * 1000, // 24 hours
              httpOnly: true // http only, prevents JavaScript cookie access
            }
          );
          res.status(202).send({
            mesage: 'Se a iniciado Secion',
            data: {
              iduser: User.data.iduser,
              lastname: User.data.lastname,
              name: User.data.name,
              state: User.data.state,
              idbusiness: User.data.business.idbusiness,
              type: Acces.data.type === 'N' ? Acces.data.type : 'N'
            },
            auth: true,
            dateExpired: MomentSv().format('l'),
            token,
            success: Acces.success
          });
        } else {
          res.status(409).send({ User, Acces });
        }
      } else {
        res.status(409).send(Acces);
      }
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  Logout = async (req, res) => {
    res.cookie('cookiauthControlCitas', JSON.stringify({ auth: false }), {
      maxAge: 86400 * 1000, // 24 hours
      httpOnly: true // http only, prevents JavaScript cookie access
    });
  };
}
