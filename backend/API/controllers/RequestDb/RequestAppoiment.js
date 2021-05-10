import ErrorMessages from '../../assets/ErrorMessages';

export default class RequestAppoiment {
  static #instance;
  constructor(appointmentCrud, AppointmentGen) {
    if (RequestAppoiment.#instance) {
      return RequestAppoiment.#instance;
    }

    this.AppointmentCrud = appointmentCrud;
    this.AppointmentGen = AppointmentGen;

    RequestAppoiment.#instance = this;
  }

  RequestAppoimentLastFiveDay = (req, res) => {
    try {
      const LastFiveDay = this.AppointmentGen.GetLastFiveDays();
      if (LastFiveDay) res.status(200).send(LastFiveDay);
    } catch (error) {
      console.log(error);

      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };
}
