import { Model } from '../../services';
import AccessCrud from './Crud/AccessCrud';
import AddressCrud from './Crud/AddressCrud';
import BusinessCrud from './Crud/BusinessCrud';
import ContactbusinessCrud from './Crud/ContactbusinessCrud';
import DetailCrud from './Crud/DetailCrud';
import FreedayCrud from './Crud/FreedayCrud';
import QuoteCrud from './Crud/QuoteCrud';
import ServiceCrud from './Crud/ServiceCrud';
import SettingCrud from './Crud/SettingCrud';
import UserCrud from './Crud/UserCrud';

const {
  Access,
  Address,
  Business,
  Contactbusiness,
  Detail,
  Freeday,
  Quote,
  Service,
  Setting,
  User,
  Operations
} = Model;

const RootCrudAdapter = {
  accessCrud: new AccessCrud(Access),
  addressCrud: new AddressCrud(Address),
  businessCrud: new BusinessCrud(Business),
  contactbusiness: new ContactbusinessCrud(Contactbusiness),
  detail: new DetailCrud(Detail),
  freeday: new FreedayCrud(Freeday),
  quote: new QuoteCrud(Quote, Operations),
  service: new ServiceCrud(Service),
  setting: SettingCrud(Setting),
  user: UserCrud(User)
};

export default RootCrudAdapter;
