import adapters from '../adapters';
import SignUp from './RequestAuth/SignUp';
import RequestUsers from './RequestDb/ RequestUsers';
import RequestAppoiment from './RequestDb/RequestAppoiment';
import RequestBusiness from './RequestDb/RequestBusiness';

const { RootCrudAdapter, AppointmentGen, TokenAuth } = adapters;

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
  RequestAppoiment: new RequestAppoiment(appointmentCrud, AppointmentGen, detailCrud),
  SignUp: new SignUp(TokenAuth, userCrud, accessCrud)
};

export default controllers;
