// TODO crear adapter para grant y botner datos de google para repara completar registro con google
import ErrorMessages from '../../assets/ErrorMessages';

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
      console.log(objUser, objAccess);
      const User = await this.UserCrud.Create(objUser);

      const { data } = User;
      console.log(User);
      if (User.success) {
        objAccess.iduser = data.iduser;
        const Acces = await this.AccessCrud.Create(objAccess);

        if (Acces.success) {
          delete Acces.password;
          res.status(201).send({ User, Acces });
        } else {
          res.status(409).send({ User, Acces });
        }
      } else {
        res.status(409).send(User);
      }
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  CallbackGoogle = async (req, res) => {
    try {
      const GoogleProfiel = req.session.grant.response.profile;

      const User = await this.UserCrud.GetOpenIdAuth(GoogleProfiel.sub, 'uuidgoogle');

      if (User.data.uuidgoogle === undefined) {
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

        const Users = await this.UserCrud.Create(objUsers);

        if (Users.success) {
          const token = this.TokenAuth.CreateToken(User.data);
          console.log(token);
          res.cookie('cookiauth', JSON.stringify({ auth: true, token, id: User.data.iduser }), {
            maxAge: 86400 * 1000, // 24 hours
            httpOnly: true // http only, prevents JavaScript cookie access
          });
          res.status(201).send({ Users });
        }
      } else {
        const token = this.TokenAuth.CreateToken(User.data);

        res.cookie('cookiauth', JSON.stringify({ auth: true, token, id: User.data.iduser }), {
          maxAge: 86400 * 1000, // 24 hours
          httpOnly: true // http only, prevents JavaScript cookie access
        });
        res.status(202).send({ mesage: 'Se a iniciado Secion', success: true });
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

      const User = await this.UserCrud.GetOpenIdAuth(facebookProfiel.id, 'uuidfacebook');

      if (User.data.uuidfacebook === undefined) {
        const objUsers = {
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

        const Users = await this.UserCrud.Create(objUsers);

        if (Users.success) {
          const token = this.TokenAuth.CreateToken(User.data);
          console.log(token);
          res.cookie(
            'cookiauthControlCitas',
            JSON.stringify({ auth: true, token, id: User.data.iduser }),
            {
              maxAge: 86400 * 1000, // 24 hours
              httpOnly: true // http only, prevents JavaScript cookie access
            }
          );
          res.status(201).send({ Users });
        }
      } else {
        const token = this.TokenAuth.CreateToken(User.data);

        res.cookie(
          'cookiauthControlCitas',
          JSON.stringify({ auth: true, token, id: User.data.iduser }),
          {
            maxAge: 86400 * 1000, // 24 hours
            httpOnly: true // http only, prevents JavaScript cookie access
          }
        );
        res.status(202).send({ mesage: 'Se a iniciado Secion', success: true });
      }
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };
}
