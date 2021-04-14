import _sequelize from 'sequelize';
import _Access from './public/Access.js';
import _Address from './public/Address.js';
import _Appointment from './public/Appointment.js';
import _Business from './public/Business.js';
import _Contactbusiness from './public/Contactbusiness.js';
import _Detail from './public/Detail.js';
import _Freeday from './public/Freeday.js';
import _Service from './public/Service.js';
import _Setting from './public/Setting.js';
import _User from './public/User.js';
const DataTypes = _sequelize.DataTypes;
const Op = _sequelize.Op;

export default function initModels(sequelize) {
  const Access = _Access.init(sequelize, DataTypes);
  const Address = _Address.init(sequelize, DataTypes);
  const Appointment = _Appointment.init(sequelize, DataTypes);
  const Business = _Business.init(sequelize, DataTypes);
  const Contactbusiness = _Contactbusiness.init(sequelize, DataTypes);
  const Detail = _Detail.init(sequelize, DataTypes);
  const Freeday = _Freeday.init(sequelize, DataTypes);
  const Service = _Service.init(sequelize, DataTypes);
  const Setting = _Setting.init(sequelize, DataTypes);
  const User = _User.init(sequelize, DataTypes);

  Detail.belongsTo(Appointment, {
    as: 'DetailidappointmentAppointment',
    foreignKey: 'idappointment'
  });
  Appointment.hasMany(Detail, { as: 'details', foreignKey: 'idappointment' });

  Address.belongsTo(Business, { as: 'AddressidbusinessBusiness', foreignKey: 'idbusiness' });
  Business.hasOne(Address, { as: 'address', foreignKey: 'idbusiness' });

  Appointment.belongsTo(Business, {
    as: 'AppointmentidbusinessBusiness',
    foreignKey: 'idbusiness'
  });
  Business.hasMany(Appointment, { as: 'appointments', foreignKey: 'idbusiness' });

  Contactbusiness.belongsTo(Business, {
    as: 'ContactbusinessidbusinessBusiness',
    foreignKey: 'idbusiness'
  });
  Business.hasOne(Contactbusiness, { as: 'contactbusiness', foreignKey: 'idbusiness' });

  Freeday.belongsTo(Business, { as: 'FreedayidbusinessBusiness', foreignKey: 'idbusiness' });
  Business.hasMany(Freeday, { as: 'freedays', foreignKey: 'idbusiness' });

  Service.belongsTo(Business, { as: 'ServiceidbusinessBusiness', foreignKey: 'idbusiness' });
  Business.hasMany(Service, { as: 'services', foreignKey: 'idbusiness' });

  Setting.belongsTo(Business, { as: 'SettingidbusinessBusiness', foreignKey: 'idbusiness' });
  Business.hasOne(Setting, { as: 'setting', foreignKey: 'idbusiness' });

  Detail.belongsTo(Service, { as: 'DetailidservicesService', foreignKey: 'idservices' });
  Service.hasMany(Detail, { as: 'details', foreignKey: 'idservices' });

  Access.belongsTo(User, { as: 'AccessiduserUser', foreignKey: 'iduser' });
  User.hasOne(Access, { as: 'access', foreignKey: 'iduser' });

  Appointment.belongsTo(User, { as: 'AppointmentiduserUser', foreignKey: 'iduser' });
  User.hasMany(Appointment, { as: 'appointments', foreignKey: 'iduser' });

  Business.belongsTo(User, { as: 'BusinessiduserUser', foreignKey: 'iduser' });
  User.hasOne(Business, { as: 'business', foreignKey: 'iduser' });

  return {
    Access,
    Address,
    Appointment,
    Business,
    Contactbusiness,
    Detail,
    Freeday,
    Service,
    Setting,
    User,
    Operations: Op
  };
}
