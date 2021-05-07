import adapters from '../adapters';
import RequestUsers from './RequestDb/ RequestUsers';
import RequestAppoiment from './RequestDb/RequestAppoiment';
import RequestBusiness from './RequestDb/RequestBusiness';

const { RootCrudAdapter } = adapters;

const {
  accessCrud,
  addressCrud,
  businessCrud,
  contactbusinessCrud,
  detailCrud,
  freedayCrud,
  appointmentCrud,
  serviceCrud,
  settingCrud,
  userCrud
} = RootCrudAdapter;

const controllers = {
  RequestBusiness: new RequestBusiness(
    businessCrud,
    contactbusinessCrud,
    addressCrud,
    freedayCrud,
    settingCrud,
    serviceCrud,
    appointmentCrud
  ),
  RequestUsers: new RequestUsers(userCrud, accessCrud, appointmentCrud),
  RequestAppoiment: new RequestAppoiment(appointmentCrud)
};

export default controllers;
