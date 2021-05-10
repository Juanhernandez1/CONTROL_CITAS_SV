import adapters from '../adapters';
import RequestUsers from './RequestDb/ RequestUsers';
import RequestAppoiment from './RequestDb/RequestAppoiment';
import RequestBusiness from './RequestDb/RequestBusiness';

const { RootCrudAdapter, AppointmentGen } = adapters;

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
    appointmentCrud,
    AppointmentGen
  ),
  RequestUsers: new RequestUsers(userCrud, accessCrud, appointmentCrud),
  RequestAppoiment: new RequestAppoiment(appointmentCrud, AppointmentGen)
};

export default controllers;
