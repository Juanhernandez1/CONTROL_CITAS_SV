import ErrorMessages from '../../assets/ErrorMessages';

export default class RequestUsers {
  static #instance;
  constructor(userCrud, accessCrud, appointmentCrud) {
    if (RequestUsers.#instance) {
      return RequestUsers.#instance;
    }

    RequestUsers.#instance = this;
    this.UserCrud = userCrud;

    this.AppointmentCrud = appointmentCrud;
  }

  RequestUsersGetPk = async (req, res) => {
    try {
      const { id } = req.params;

      const User = await this.UserCrud.GetPk(id);

      if (User.success) res.status(User.data ? 200 : 204).send(User);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  RequestUsersUpdate = async (req, res) => {
    try {
      const objUser = req.body;

      const User = await this.UserCrud.Update(objUser);

      if (User.success) {
        res.status(202).send(User);
      } else {
        res.status(409).send(User);
      }
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  RequestUsersDelete = async (req, res) => {
    try {
      const { id } = req.params;

      const User = await this.UserCrud.Delete(id);

      if (User.success) {
        res.status(202).send(User);
      } else {
        res.status(409).send(User);
      }
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  RequestUsersAccessUpdate = async (req, res) => {
    try {
      const objAcces = req.body;

      const UsersAccess = await this.AccessCrud.Update(objAcces);

      if (UsersAccess.success) {
        res.status(202).send(UsersAccess);
      } else {
        res.status(409).send(UsersAccess);
      }
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  // * no test
  RequestUsersAppointmentGetAll = async (req, res) => {
    try {
      const iduser = req.param.iduser;
      const DataList = this.AppointmentCrud.GetAllForUsers(iduser);
      if (DataList.success) res.status(200).send(DataList);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  RequestUsersAppointmentGetPk = async (req, res) => {
    try {
      const { idappointmen, iduser } = req.body;
      const DataList = this.AppointmentCrud.GetPkForUsers(idappointmen, iduser);
      if (DataList.success) res.status(200).send(DataList);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  RequestUsersAppointmentDelete = async (req, res) => {
    try {
      const pk = req.param.Pk;
      const Data = this.AppointmentCrud.Delete(pk);
      if (Data.success) res.status(202).send(Data);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };
}
