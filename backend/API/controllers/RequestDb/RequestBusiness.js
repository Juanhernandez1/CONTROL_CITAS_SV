import ErrorMessages from '../../assets/ErrorMessages';

export default class RequestBusiness {
  static #instance;
  constructor(
    businessCrud,
    contactbusinessCrud,
    addressCrud,
    freedayCrud,
    settingCrud,
    servicesCrud,
    appointmentCrud,
    AppointmentGen
  ) {
    if (RequestBusiness.#instance) {
      return RequestBusiness.#instance;
    }
    this.BusinessCrud = businessCrud;
    this.ContactbusinessCrud = contactbusinessCrud;
    this.AddressCrud = addressCrud;
    this.FreedayCrud = freedayCrud;
    this.SettingCrud = settingCrud;
    this.ServicesCrud = servicesCrud;
    this.AppointmentCrud = appointmentCrud;
    this.AppointmentGen = AppointmentGen;
    RequestBusiness.#instance = this;
  }

  RequestBusinessGetAll = async (req, res) => {
    try {
      const { page } = req.params;
      const BusinessList = await this.BusinessCrud.GetAll(parseInt(page));
      if (BusinessList.success) res.status(BusinessList.data ? 200 : 204).send(BusinessList);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404, error);
      res.status(404).send(ERDB404);
    }
  };

  RequestBusinessGetAllNoPaginate = async (req, res) => {
    try {
      const { state } = req.params;
      const BusinessList = await this.BusinessCrud.GetAllNoPaginate(state);
      if (BusinessList.success) res.status(BusinessList.data ? 200 : 204).send(BusinessList);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404, error);
      res.status(404).send(ERDB404);
    }
  };

  RequestBusinessGetLikeName = async (req, res) => {
    try {
      const { search, page } = req.params;
      const BusinessList = await this.BusinessCrud.GetLikeName(search, parseInt(page));
      if (BusinessList.success) res.status(BusinessList.data ? 200 : 204).send(BusinessList);
    } catch (error) {
      console.log(error);
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  RequestBusinessGetPk = async (req, res) => {
    try {
      const { id } = req.params;
      const Business = await this.BusinessCrud.GetPk(id);
      if (Business.success) res.status(Business.data ? 200 : 204).send(Business);
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

  RequestBusinessUpdate = async (req, res) => {
    try {
      const objBusiness = req.body;

      const Business = await this.BusinessCrud.Update(objBusiness);

      if (Business.data[0] === 1) res.status(202).send(Business);
      else res.status(406).send(Business);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  RequestBusinessDelete = async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id);
      const Business = await this.BusinessCrud.Delete(id);
      if (Business.data[0] === 1) res.status(202).send(Business);
      else res.status(406).send(Business);
    } catch (error) {
      console.log(error);
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  RequestBusinessSettingGetPk = async (req, res) => {
    try {
      const { id } = req.params;
      const BusinessSetting = await this.SettingCrud.GetPk(id);
      if (BusinessSetting.success)
        res.status(BusinessSetting.data ? 200 : 204).send(BusinessSetting);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);

      res.status(404).send(ERDB404);
    }
  };

  RequestBusinessSettingUpdate = async (req, res) => {
    try {
      const obtSetting = req.body;

      const BusinessSetting = await this.SettingCrud.Update(obtSetting);

      if (BusinessSetting.data[0] === 1) res.status(202).send(BusinessSetting);
      else res.status(406).send(BusinessSetting);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  RequestBusinessAddressGetPk = async (req, res) => {
    try {
      const { id } = req.params;

      const BusinessAddess = await this.AddressCrud.GetPk(id);
      if (BusinessAddess.success) res.status(BusinessAddess.data ? 200 : 204).send(BusinessAddess);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);

      res.status(404).send(ERDB404);
    }
  };

  RequestBusinessAddressUpdate = async (req, res) => {
    try {
      const objAddres = req.body;

      const BusinessAddess = await this.AddressCrud.Update(objAddres);

      if (BusinessAddess.data[0] === 1) res.status(202).send(BusinessAddess);
      else res.status(406).send(BusinessAddess);
    } catch (error) {
      console.log(error);
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  RequestBusinessContacGetPk = async (req, res) => {
    try {
      const { id } = req.params;
      const BusinessContact = await this.ContactbusinessCrud.GetPk(id);
      if (BusinessContact.success)
        res.status(BusinessContact.data ? 200 : 204).send(BusinessContact);
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

      if (BusinessContact.data[0] === 1) res.status(202).send(BusinessContact);
      else res.status(406).send(BusinessContact);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  RequestBusinessServicesGetAll = async (req, res) => {
    try {
      const { idbusiness } = req.params;
      const ServicesList = await this.ServicesCrud.GetAll(idbusiness);
      if (ServicesList.success) res.status(ServicesList.data ? 200 : 204).send(ServicesList);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404, error);
      res.status(404).send(ERDB404);
    }
  };

  RequestBusinessServicesGetAllClient = async (req, res) => {
    try {
      const { idbusiness } = req.params;
      const ServicesList = await this.ServicesCrud.GetAll(idbusiness, 'Activo');
      if (ServicesList.success) res.status(ServicesList.data ? 200 : 204).send(ServicesList);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404, error);
      res.status(404).send(ERDB404);
    }
  };

  RequestBusinessServicesGetPk = async (req, res) => {
    try {
      const { idbusiness, id } = req.params;
      const BusinessService = await this.ServicesCrud.GetPk(idbusiness, id);
      if (BusinessService.success)
        res.status(BusinessService.data ? 200 : 204).send(BusinessService);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  RequestBusinessServicesCreate = async (req, res) => {
    try {
      const objServices = req.body;

      const BusinessService = await this.ServicesCrud.Create(objServices);

      if (BusinessService.success) {
        res.status(201).send(BusinessService);
      } else {
        res.status(409).send(BusinessService);
      }
    } catch (error) {
      console.log(error);
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  // * no testeado
  RequestBusinessServicesUpdate = async (req, res) => {
    try {
      const objServices = req.body;

      const BusinessService = await this.ServicesCrud.Update(objServices);

      if (BusinessService.data[0] === 1) res.status(202).send(BusinessService);
      else res.status(406).send(BusinessService);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  };

  RequestBusinessServicesDelete = async (req, res) => {
    try {
      const { id } = req.params;

      const BusinessService = await this.ServicesCrud.Delete(id);
      if (BusinessService.data[0] === 1) res.status(202).send(BusinessService);
      else res.status(406).send(BusinessService);
    } catch (error) {
      console.log(error);
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

  RequestBusinessResolveSetting = async (req, res) => {
    try {
      const { id } = req.params;
      const BusinessSetting = await this.SettingCrud.GetPk(id);
      if (BusinessSetting.success)
        res
          .status(BusinessSetting.data ? 200 : 204)
          .send(await this.AppointmentGen.GetHoursAppointment(BusinessSetting.data));
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);

      res.status(404).send(ERDB404);
    }
  };
}
