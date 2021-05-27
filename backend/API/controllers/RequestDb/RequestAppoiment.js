import ErrorMessages from '../../assets/ErrorMessages';

export default class RequestAppoiment {
  static #instance;
  constructor(appointmentCrud, AppointmentGen, DetailCrud) {
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

  RequestAppoimentCreate = async (req, res) => {
    try {
      const { Objappointment, ArrayDetail } = req.body;

      const ContactFindEmail = await this.appointmentCrud.GetAppointmen(
        Objappointment.idbusiness,
        Objappointment.iduser,
        Objappointment.dateappointment.fulldate
      );

      if (ContactFindEmail.data === null) {
        const Appoiment = await this.appointmentCrud.Create(Objappointment);
        const { data } = Appoiment;

        if (Appoiment.success) {
          const Detail = [];
          ArrayDetail.forEach(async element => {
            element.idappointment = data.idappointment;
            const detail = await this.AddressCrud.Create(element);
            Detail.push(detail);
          });

          if (Detail[0].success) {
            res.status(201).send({
              data: {
                Appoiment: Appoiment,
                Detail: Detail
              },
              status: true
            });
          } else {
            res.status(409).send({
              data: {
                Appoiment: Appoiment,
                Detail: Detail
              },
              status: false
            });
          }
        } else {
          res.status(409).send({
            data: {
              Appoiment: Appoiment
            },
            status: false
          });
        }
      } else {
        res.status(409).send({ data: 'Cita Existe' });
      }
    } catch (error) {
      console.log(error);
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };
}
