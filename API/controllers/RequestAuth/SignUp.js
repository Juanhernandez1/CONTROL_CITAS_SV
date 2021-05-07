// TODO crear adapter para grant y botner datos de google para repara completar registro con google
import ErrorMessages from '../../assets/ErrorMessages';
export default class SignUp {
  static #instance;

  constructor(businessCrud, contactbusinessCrud, addressCrud, freedayCrud, settingCrud, userCrud, accessCrud) {
    if (SignUp.#instance) {
      return SignUp.#instance;
    }

    SignUp.#instance = this;
    this.BusinessCrud = businessCrud;
    this.ContactbusinessCrud = contactbusinessCrud;
    this.AddressCrud = addressCrud;
    this.FreedayCrud = freedayCrud;
    this.SettingCrud = settingCrud;
    this.UserCrud = userCrud;
    this.AccessCrud = accessCrud;
  }

  SignUpBusinessCreateTraditional = async (req, res) => {
    try {
      const {
        objUsers,
        obtAccess,
        objBusiness,
        obtSetting,
        objAddres,
        objContact
      } = req.body;
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
      if (Contact.success) res.status(201).send({
        UsersBusiness,
        Business
      });
    } catch (error) {
      const {
        ERDB404
      } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };
  SignUpBusinessCreateGoogle = async (req, res) => {
    try {
      const {
        objBusiness,
        obtSetting,
        objAddres,
        objContact
      } = req.body;
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
      if (Contact.success) res.status(201).send({
        UsersBusiness,
        Business
      });
    } catch (error) {
      const {
        ERDB404
      } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };
  SignUpUsersCreateTraditional = async (req, res) => {
    try {
      const {
        objUsers,
        obtAccess
      } = req.body;
      const Users = this.UserCrud.Create(objUsers);
      obtAccess.iduser = Users.iduser;
      const UsersAccess = this.AccessCrud.Create(objUsers);
      if (UsersAccess.success) res.status(201).send({
        Users
      });
    } catch (error) {
      const {
        ERDB404
      } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };
  SignUpUserCreateGoogle = async (req, res) => {
    try {
      const {
        objUsers,
        obtAccess
      } = req.body;
      const Users = this.UserCrud.Create(objUsers);
      obtAccess.iduser = Users.iduser;
      const UsersAccess = this.AccessCrud.Create(objUsers);
      if (UsersAccess.success) res.status(201).send({
        Users
      });
    } catch (error) {
      const {
        ERDB404
      } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };
  SignUpUsersCreateFacebook = async (req, res) => {
    try {
      const {
        objUsers,
        obtAccess
      } = req.body;
      const Users = this.UserCrud.Create(objUsers);
      obtAccess.iduser = Users.iduser;
      const UsersAccess = this.AccessCrud.Create(objUsers);
      if (UsersAccess.success) res.status(201).send({
        Users
      });
    } catch (error) {
      const {
        ERDB404
      } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };
}