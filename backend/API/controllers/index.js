import adapters from '../adapters';
import RequestBusiness from './RequestDb/RequestBusiness';

const { RootCrudAdapter } = adapters;

const {
  businessCrud,
  contactbusinessCrud,
  addressCrud,
  freedayCrud,
  settingCrud,
  appointmentCrud
} = RootCrudAdapter;

const controllers = {
  RequestBusiness: new RequestBusiness(
    businessCrud,
    contactbusinessCrud,
    addressCrud,
    freedayCrud,
    settingCrud,
    appointmentCrud
  )
};

export default controllers;
