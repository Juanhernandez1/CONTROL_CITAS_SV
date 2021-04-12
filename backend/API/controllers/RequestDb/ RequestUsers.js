import ErrorMessages from '../../assets/ErrorMessages';

export default class RequestUsers {
  static #instance;
  constructor(userCrud, accessCrud, appointmentCrud) {
    if (RequestUsers.#instance) {
      return RequestUsers.#instance;
    }

    RequestUsers.#instance = this;
    this.UserCrud = userCrud;
    this.AccessCrud = accessCrud;
    this.AppointmentCrud = appointmentCrud;
  }

  RequestUsersUpdate(req, res) {
    try {
      const objUser = req.body;

      const Business = this.UserCrud.Update(objUser);

      if (objUser.success) res.status(202).send(objUser);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  }

  RequestUsersAccessUpdate(req, res) {
    try {
      const objAcces = req.body;

      const UsersAccess = this.AccessCrud.Update(objAcces);

      if (UsersAccess.success) res.status(202).send(UsersAccess);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  }

  RequestUsersAppointmentGetAll(req, res) {
    try {
      const iduser = req.param.iduser;
      const DataList = this.AppointmentCrud.GetAllForUsers(iduser);
      if (DataList.success) res.status(200).send(DataList);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  }

  RequestUsersAppointmentGetPk(req, res) {
    try {
      const { idappointmen, iduser } = req.body;
      const DataList = this.AppointmentCrud.GetPkForUsers(idappointmen, iduser);
      if (DataList.success) res.status(200).send(DataList);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  }

  RequestUsersAppointmentDelete(req, res) {
    try {
      const pk = req.param.Pk;
      const Data = this.AppointmentCrud.Delete(pk);
      if (Data.success) res.status(202).send(Data);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  }
}
