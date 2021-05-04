import ErrorMessages from '../../assets/ErrorMessages';

export default class RequestBusiness {
  static #instance;
  constructor(
    businessCrud,
    contactbusinessCrud,
    addressCrud,
    freedayCrud,
    settingCrud,
    appointmentCrud
  ) {
    if (RequestBusiness.#instance) {
      return RequestBusiness.#instance;
    }
    this.BusinessCrud = businessCrud;
    this.ContactbusinessCrud = contactbusinessCrud;
    this.AddressCrud = addressCrud;
    this.FreedayCrud = freedayCrud;
    this.SettingCrud = settingCrud;
    this.AppointmentCrud = appointmentCrud;
    RequestBusiness.#instance = this;
  }

  RequestBusinessGetAll = async (req, res) => {
    try {
      const DataList = await this.BusinessCrud.GetAll();
      if (DataList.success) res.status(200).send(DataList);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404, error);
      res.status(404).send(ERDB404);
    }
  };

  RequestBusinessGetLikeName = async (req, res) => {
    try {
      console.log(req.params.Search);
      const searchData = req.params.Search;
      const DataList = await this.BusinessCrud.GetLikeName(searchData);
      if (DataList.success) res.status(200).send(DataList);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  RequestBusinessGetPk = async (req, res) => {
    try {
      const pk = req.params.Pk;
      const Data = await this.BusinessCrud.GetPk(pk);
      if (Data.success) res.status(200).send(Data);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  RequestBusinessSettingGetPk = async (req, res) => {
    try {
      const pk = req.params.Pk;
      const Data = await this.SettingCrud.GetPk(pk);
      if (Data.success) res.status(200).send(Data);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  RequestBusinessCreate = async (req, res) => {
    try {
      const { objBusiness, obtSetting, objAddres, objContact } = req.body;

      const ContactFindEmail = await this.ContactbusinessCrud.Find(objContact.email);

      if (ContactFindEmail.data === null) {
        const Business = await this.BusinessCrud.Create(objBusiness);
        const { data } = Business;

        if (Business.success) {
          objAddres.idbusiness = data.idbusiness;
          objContact.idbusiness = data.idbusiness;
          obtSetting.idbusiness = data.idbusiness;

          console.log({ objBusiness, obtSetting, objAddres, objContact });

          const BusinessAddess = await this.AddressCrud.Create(objAddres);
          const BusinessContact = await this.ContactbusinessCrud.Create(objContact);
          const BusinessSetting = await this.SettingCrud.Create(obtSetting);

          if (BusinessContact.success && BusinessSetting.success && BusinessAddess.success) {
            res.status(201).send({
              Business: Business,
              BusinessContact: BusinessContact,
              BusinessSetting: BusinessSetting,
              BusinessAddess: BusinessAddess
            });
          } else {
            res.status(409).send({
              Business: Business,
              BusinessContact: BusinessContact,
              BusinessSetting: BusinessSetting,
              BusinessAddess: BusinessAddess
            });
          }
        } else {
          res.status(409).send(Business);
        }
      } else {
        res
          .status(409)
          .send(
            ContactFindEmail.success
              ? { ...ContactFindEmail, data: 'mail exists' }
              : ContactFindEmail
          );
      }
    } catch (error) {
      console.log(error);
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  RequestBusinessSettingUpdate = async (req, res) => {
    try {
      const obtSetting = req.body;

      const BusinessSetting = await this.SettingCrud.Update(obtSetting);

      if (BusinessSetting.success) res.status(202).send(BusinessSetting);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  RequestBusinessAddressUpdate = async (req, res) => {
    try {
      const objAddres = req.body;

      const Business = await this.BusinessCrud.Update(objAddres);

      objAddres.idbusiness = Business.idbusiness;

      const BusinessAddess = await this.AddressCrud.Create(objAddres);

      if (BusinessAddess.success) res.status(202).send(BusinessAddess);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  RequestBusinessUpdate = async (req, res) => {
    try {
      const objBusiness = req.body;

      const Business = await this.BusinessCrud.Update(objBusiness);

      if (Business.success) res.status(202).send(Business);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  RequestBusinessContactUpdate = async (req, res) => {
    try {
      const objContact = req.body;

      const BusinessContact = await this.ContactbusinessCrud.Update(objContact);

      if (BusinessContact.success) res.status(202).send(BusinessContact);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  RequestBusinessDelete = async (req, res) => {
    try {
      const pk = req.params.Pk;
      const Data = await this.BusinessCrud.Delete(pk);
      if (Data.success) res.status(202).send(Data);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  RequestBusinessAppointmentGetAll = async (req, res) => {
    try {
      const idbusiness = req.params.idbusiness;
      const DataList = await this.AppointmentCrud.GetAllForBusiness(idbusiness);
      if (DataList.success) res.status(200).send(DataList);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  RequestBusinessAppointmentGetPk = async (req, res) => {
    try {
      const { idappointmen, idbusiness } = req.body;
      const DataList = await this.AppointmentCrud.GetPkForBusiness(idappointmen, idbusiness);
      if (DataList.success) res.status(200).send(DataList);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  RequestBusinessAppointmentDelete = async (req, res) => {
    try {
      const pk = req.params.Pk;
      const Data = await this.AppointmentCrud.Delete(pk);
      if (Data.success) res.status(202).send(Data);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  RequestBusinessResoveSetting = async (req, res) => {};
}
