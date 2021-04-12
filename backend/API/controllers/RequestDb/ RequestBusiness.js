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

    RequestBusiness.#instance = this;
    this.BusinessCrud = businessCrud;
    this.ContactbusinessCrud = contactbusinessCrud;
    this.AddressCrud = addressCrud;
    this.FreedayCrud = freedayCrud;
    this.SettingCrud = settingCrud;
    this.AppointmentCrud = appointmentCrud;
  }

  RequestBusinessGetAll(req, res) {
    try {
      const DataList = this.BusinessCrud.GetAll();
      if (DataList.success) res.status(200).send(DataList);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  }

  RequestBusinessGetLikeName(req, res) {
    try {
      const searchData = req.param.Search;
      const DataList = this.BusinessCrud.GetLikeName(searchData);
      if (DataList.success) res.status(200).send(DataList);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  }

  RequestBusinessGetPk(req, res) {
    try {
      const pk = req.param.Pk;
      const Data = this.BusinessCrud.GetPk(pk);
      if (Data.success) res.status(200).send(Data);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  }

  RequestBusinessSettingGetPk(req, res) {
    try {
      const pk = req.param.Pk;
      const Data = this.SettingCrud.GetPk(pk);
      if (Data.success) res.status(200).send(Data);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  }

  RequestBusinessCreate(req, res) {
    try {
      const { objBusiness, obtSetting, objAddres, objContact } = req.body;

      const Business = this.BusinessCrud.Create(objBusiness);

      obtSetting.idbusiness = Business.idbusiness;
      objAddres.idbusiness = Business.idbusiness;
      objContact.idbusiness = Business.idbusiness;

      const BusinessAddess = this.AddressCrud.Create(objAddres);
      const BusinessSetting = this.SettingCrud.Create(obtSetting);
      const BusinessContact = this.ContactbusinessCrud.Create(objContact);

      if (BusinessContact.success) res.status(201).send(Business);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  }

  RequestBusinessSettingUpdate(req, res) {
    try {
      const obtSetting = req.body;

      const BusinessSetting = this.SettingCrud.Update(obtSetting);

      if (BusinessSetting.success) res.status(202).send(BusinessSetting);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  }

  RequestBusinessAddressUpdate(req, res) {
    try {
      const objAddres = req.body;

      const Business = this.BusinessCrud.Update(objAddres);

      objAddres.idbusiness = Business.idbusiness;

      const BusinessAddess = this.AddressCrud.Create(objAddres);

      if (BusinessAddess.success) res.status(202).send(BusinessAddess);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  }

  RequestBusinessUpdate(req, res) {
    try {
      const objBusiness = req.body;

      const Business = this.BusinessCrud.Update(objBusiness);

      if (Business.success) res.status(202).send(Business);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  }

  RequestBusinessContactUpdate(req, res) {
    try {
      const objContact = req.body;

      const BusinessContact = this.ContactbusinessCrud.Update(objContact);

      if (BusinessContact.success) res.status(202).send(BusinessContact);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  }

  RequestBusinessDelete(req, res) {
    try {
      const pk = req.param.Pk;
      const Data = this.BusinessCrud.Delete(pk);
      if (Data.success) res.status(202).send(Data);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  }

  RequestBusinessAppointmentGetAll(req, res) {
    try {
      const idbusiness = req.param.idbusiness;
      const DataList = this.AppointmentCrud.GetAllForBusiness(idbusiness);
      if (DataList.success) res.status(200).send(DataList);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  }

  RequestBusinessAppointmentGetPk(req, res) {
    try {
      const { idappointmen, idbusiness } = req.body;
      const DataList = this.AppointmentCrud.GetPkForBusiness(idappointmen, idbusiness);
      if (DataList.success) res.status(200).send(DataList);
    } catch (error) {
      const { ERDB404 } = ErrorMessages;
      console.log(ERDB404);
      res.status(404).send(ERDB404);
    }
  }

  RequestBusinessAppointmentDelete(req, res) {
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

  RequestBusinessResoveSetting(req, res) {}
}
