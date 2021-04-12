import { DataTypes, Op } from 'sequelize';
import _Access from './public/Access';
import _Address from './public/Address';
import _Business from './public/Business';
import _Contactbusiness from './public/Contactbusiness';
import _Detail from './public/Detail';
import _Freeday from './public/Freeday';
import _Appointment from './public/Appointment';
import _Service from './public/Service';
import _Setting from './public/Setting';
import _User from './public/User';

export default function initModels(sequelize) {
  const Access = _Access.init(sequelize, DataTypes);
  const Address = _Address.init(sequelize, DataTypes);
  const Business = _Business.init(sequelize, DataTypes);
  const Contactbusiness = _Contactbusiness.init(sequelize, DataTypes);
  const Detail = _Detail.init(sequelize, DataTypes);
  const Freeday = _Freeday.init(sequelize, DataTypes);
  const Appointment = _Appointment.init(sequelize, DataTypes);
  const Service = _Service.init(sequelize, DataTypes);
  const Setting = _Setting.init(sequelize, DataTypes);
  const User = _User.init(sequelize, DataTypes);

  // * Relacion uno a uno
  Address.belongsTo(Business, { as: 'AddressIdbusinessBusiness', foreignKey: 'idbusiness' });
  Business.hasOne(Address, { as: 'address', foreignKey: 'idbusiness' });

  // * Relacion uno a uno
  Contactbusiness.belongsTo(Business, {
    as: 'ContactbusinessIdbusinessBusiness',
    foreignKey: 'idbusiness'
  });
  Business.hasOne(Contactbusiness, { as: 'contactbusiness', foreignKey: 'idbusiness' });

  // * Relacion uno a muchos
  Freeday.belongsTo(Business, { as: 'FreedayidbusinessBusiness', foreignKey: 'idbusiness' });
  Business.hasMany(Freeday, { as: 'freedays', foreignKey: 'idbusiness' });

  // * Relacion uno a muchos
  Appointment.belongsTo(Business, {
    as: 'AppointmentidbusinessBusiness',
    foreignKey: 'idbusiness'
  });
  Business.hasMany(Appointment, { as: 'appointment', foreignKey: 'idbusiness' });

  // * Relacion uno a muchos
  Service.belongsTo(Business, { as: 'ServiceidbusinessBusiness', foreignKey: 'idbusiness' });
  Business.hasMany(Service, { as: 'services', foreignKey: 'idbusiness' });

  // * Relacion uno a uno
  Setting.belongsTo(Business, { as: 'SettingidbusinessBusiness', foreignKey: 'idbusiness' });
  Business.hasOne(Setting, { as: 'setting', foreignKey: 'idbusiness' });

  // * Relacion uno a muchos
  Detail.belongsTo(Appointment, {
    as: 'DetailidappointmentAppointment',
    foreignKey: 'idappointment'
  });
  Appointment.hasMany(Detail, { as: 'details', foreignKey: 'idappointment' });

  // * Relacion uno a muchos
  Detail.belongsTo(Service, { as: 'DetailidservicesService', foreignKey: 'idservices' });
  Service.hasMany(Detail, { as: 'details', foreignKey: 'idservices' });

  // * Relacion uno a uno
  Access.belongsTo(User, { as: 'AccessiduserUser', foreignKey: 'iduser' });
  User.hasOne(Access, { as: 'access', foreignKey: 'iduser' });

  // * Relacion uno a uno
  Business.belongsTo(User, { as: 'BusinessiduserUser', foreignKey: 'iduser' });
  User.hasOne(Business, { as: 'business', foreignKey: 'iduser' });

  // * Relacion uno a muchos
  Appointment.belongsTo(User, { as: 'AppointmentiduserUser', foreignKey: 'iduser' });
  User.hasMany(Appointment, { as: 'appointment', foreignKey: 'iduser' });

  return {
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
    Operations: Op
  };
}
