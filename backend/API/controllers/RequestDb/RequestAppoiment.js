import ErrorMessages from '../../assets/ErrorMessages';

export default class RequestAppoiment {
  static #instance;
  constructor(appointmentCrud, appointmentGen, detailCrud) {
    if (RequestAppoiment.#instance) {
      return RequestAppoiment.#instance;
    }

    this.AppointmentCrud = appointmentCrud;
    this.AppointmentGen = appointmentGen;
    this.DetailCrud = detailCrud;

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

  RequestBusinessAppointmentGetPk = async (req, res) => {
    try {
      const { idappointmen, idbusiness } = req.body;

      const idAppointmen = idappointmen.replace(/-/g, '/').replaceAt(2, '-');

      const DataList = await this.AppointmentCrud.GetPkForBusiness(idAppointmen, idbusiness);
      console.log(DataList);
      if (DataList.success) res.status(200).send(DataList);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  RequestAppoimentCreate = async (req, res) => {
    try {
      const { Objappointment, ArrayDetail } = req.body;

      const ContactFindEmail = await this.AppointmentCrud.GetAppointmen(
        Objappointment.uuidappointment
      );

      if (ContactFindEmail.data === null) {
        const Appoiment = await this.AppointmentCrud.Create(Objappointment);

        if (Appoiment.success) {
          const Detail = [];

          ArrayDetail.forEach(element => {
            element.idappointment = Appoiment.data.idappointment;
            this.DetailCrud.Create(element);
          });

          if (Appoiment.success) {
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
