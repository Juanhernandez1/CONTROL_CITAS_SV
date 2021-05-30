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

  replaceAt = (index, replacement, string) => {
    if (index >= this.length) {
      return string.valueOf();
    }

    const chars = string.split('');
    chars[index] = replacement;
    return chars.join('');
  };

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
      const { idappointmen, idbusiness } = req.params;
      console.log(idappointmen, idbusiness);
      const idAppointmen = idappointmen.replace(/-/g, '/');

      console.log(this.replaceAt(1, '-', idAppointmen));

      const DataList = await this.AppointmentCrud.GetPkForBusiness(
        this.replaceAt(1, '-', idAppointmen),
        idbusiness
      );

      const ArrDetails = [];
      const responseData = { ...DataList.data[0] };
      DataList.data.forEach(element => {
        console.log(element.details);
        element.details.DetailidservicesService.price = element.details.price;
        ArrDetails.push(element.details.DetailidservicesService);
      });

      responseData.details = ArrDetails;

      if (DataList.success) res.status(200).send({ data: responseData, success: true });
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
