import ErrorMessages from '../../assets/ErrorMessages';

export default class RequestAppoiment {
  static #instance;
  constructor(appointmentCrud) {
    if (RequestAppoiment.#instance) {
      return RequestAppoiment.#instance;
    }

    RequestAppoiment.#instance = this;
    this.AppointmentCrud = appointmentCrud;
  }

  RequestAppoimentTempList = (req, res) => {
    try {
      const AppointmentList = this.AppointmentCrud.TempAppointmentList();

      if (AppointmentList) res.status(200).send(AppointmentList);
    } catch (error) {
      console.log(error);

      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };
}
