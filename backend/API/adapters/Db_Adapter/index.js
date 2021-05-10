import AccessCrud from './Crud/AccessCrud';
import AddressCrud from './Crud/AddressCrud';
import BusinessCrud from './Crud/BusinessCrud';
import ContactbusinessCrud from './Crud/ContactbusinessCrud';
import DetailCrud from './Crud/DetailCrud';
import FreedayCrud from './Crud/FreedayCrud';
import AppointmentCrud from './Crud/AppointmentCrud';
import ServiceCrud from './Crud/ServiceCrud';
import SettingCrud from './Crud/SettingCrud';
import UserCrud from './Crud/UserCrud';
import services from '../../services';
import EncryptPassword from '../Encrypt_Adapter';

const { Model, Encrypt } = services;

const {
  Access,
  Address,
  Business,
  Contactbusiness,
  Detail,
  Freeday,
  Appointment,
  Service,
  Setting,
  User,
  Operations
} = Model;

const RootCrudAdapter = {
  accessCrud: new AccessCrud(new EncryptPassword(Encrypt), Access),
  addressCrud: new AddressCrud(Address),
  businessCrud: new BusinessCrud(Business, Operations),
  contactbusinessCrud: new ContactbusinessCrud(Contactbusiness),
  detailCrud: new DetailCrud(Detail),
  freedayCrud: new FreedayCrud(Freeday),
  appointmentCrud: new AppointmentCrud(Appointment, Operations),
  serviceCrud: new ServiceCrud(Service),
  settingCrud: new SettingCrud(Setting),
  userCrud: new UserCrud(User)
};

export default RootCrudAdapter;
