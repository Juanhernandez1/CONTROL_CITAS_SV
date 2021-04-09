import _sequelize from 'sequelize';
import _Access from './public/Access.js';
import _Address from './public/Address.js';
import _Business from './public/Business.js';
import _Contactbusiness from './public/Contactbusiness.js';
import _Detail from './public/Detail.js';
import _Freeday from './public/Freeday.js';
import _Quote from './public/Quote.js';
import _Service from './public/Service.js';
import _Setting from './public/Setting.js';
import _User from './public/User.js';
const DataTypes = _sequelize.DataTypes;

export default function initModels(sequelize) {
  const Access = _Access.init(sequelize, DataTypes);
  const Address = _Address.init(sequelize, DataTypes);
  const Business = _Business.init(sequelize, DataTypes);
  const Contactbusiness = _Contactbusiness.init(sequelize, DataTypes);
  const Detail = _Detail.init(sequelize, DataTypes);
  const Freeday = _Freeday.init(sequelize, DataTypes);
  const Quote = _Quote.init(sequelize, DataTypes);
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
  Quote.belongsTo(Business, { as: 'QuoteidbusinessBusiness', foreignKey: 'idbusiness' });
  Business.hasMany(Quote, { as: 'quotes', foreignKey: 'idbusiness' });

  // * Relacion uno a muchos
  Service.belongsTo(Business, { as: 'ServiceidbusinessBusiness', foreignKey: 'idbusiness' });
  Business.hasMany(Service, { as: 'services', foreignKey: 'idbusiness' });

  // * Relacion uno a uno
  Setting.belongsTo(Business, { as: 'SettingidbusinessBusiness', foreignKey: 'idbusiness' });
  Business.hasOne(Setting, { as: 'setting', foreignKey: 'idbusiness' });

  // * Relacion uno a muchos
  Detail.belongsTo(Quote, { as: 'DetailidappointmentQuote', foreignKey: 'idappointment' });
  Quote.hasMany(Detail, { as: 'details', foreignKey: 'idappointment' });

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
  Quote.belongsTo(User, { as: 'QuoteiduserUser', foreignKey: 'iduser' });
  User.hasMany(Quote, { as: 'quotes', foreignKey: 'iduser' });

  return {
    Access,
    Address,
    Business,
    Contactbusiness,
    Detail,
    Freeday,
    Quote,
    Service,
    Setting,
    User
  };
}
