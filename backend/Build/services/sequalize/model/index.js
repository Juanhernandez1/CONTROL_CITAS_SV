'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = initModels;

var _sequelize2 = _interopRequireDefault(require('sequelize'));

var _Access2 = _interopRequireDefault(require('./public/Access.js'));

var _Address2 = _interopRequireDefault(require('./public/Address.js'));

var _Appointment2 = _interopRequireDefault(require('./public/Appointment.js'));

var _Business2 = _interopRequireDefault(require('./public/Business.js'));

var _Contactbusiness2 = _interopRequireDefault(require('./public/Contactbusiness.js'));

var _Detail2 = _interopRequireDefault(require('./public/Detail.js'));

var _Freeday2 = _interopRequireDefault(require('./public/Freeday.js'));

var _Service2 = _interopRequireDefault(require('./public/Service.js'));

var _Setting2 = _interopRequireDefault(require('./public/Setting.js'));

var _User2 = _interopRequireDefault(require('./public/User.js'));

var DataTypes = _sequelize2['default'].DataTypes;
var Op = _sequelize2['default'].Op;

function initModels(sequelize) {
  var Access = _Access2['default'].init(sequelize, DataTypes);

  var Address = _Address2['default'].init(sequelize, DataTypes);

  var Appointment = _Appointment2['default'].init(sequelize, DataTypes);

  var Business = _Business2['default'].init(sequelize, DataTypes);

  var Contactbusiness = _Contactbusiness2['default'].init(sequelize, DataTypes);

  var Detail = _Detail2['default'].init(sequelize, DataTypes);

  var Freeday = _Freeday2['default'].init(sequelize, DataTypes);

  var Service = _Service2['default'].init(sequelize, DataTypes);

  var Setting = _Setting2['default'].init(sequelize, DataTypes);

  var User = _User2['default'].init(sequelize, DataTypes);

  Detail.belongsTo(Appointment, {
    as: 'DetailidappointmentAppointment',
    foreignKey: 'idappointment'
  });
  Appointment.hasMany(Detail, {
    as: 'details',
    foreignKey: 'idappointment'
  });
  Address.belongsTo(Business, {
    as: 'AddressidbusinessBusiness',
    foreignKey: 'idbusiness'
  });
  Business.hasOne(Address, {
    as: 'address',
    foreignKey: 'idbusiness'
  });
  Appointment.belongsTo(Business, {
    as: 'AppointmentidbusinessBusiness',
    foreignKey: 'idbusiness'
  });
  Business.hasMany(Appointment, {
    as: 'appointments',
    foreignKey: 'idbusiness'
  });
  Contactbusiness.belongsTo(Business, {
    as: 'ContactbusinessidbusinessBusiness',
    foreignKey: 'idbusiness'
  });
  Business.hasOne(Contactbusiness, {
    as: 'contactbusiness',
    foreignKey: 'idbusiness'
  });
  Freeday.belongsTo(Business, {
    as: 'FreedayidbusinessBusiness',
    foreignKey: 'idbusiness'
  });
  Business.hasMany(Freeday, {
    as: 'freedays',
    foreignKey: 'idbusiness'
  });
  Service.belongsTo(Business, {
    as: 'ServiceidbusinessBusiness',
    foreignKey: 'idbusiness'
  });
  Business.hasMany(Service, {
    as: 'services',
    foreignKey: 'idbusiness'
  });
  Setting.belongsTo(Business, {
    as: 'SettingidbusinessBusiness',
    foreignKey: 'idbusiness'
  });
  Business.hasOne(Setting, {
    as: 'setting',
    foreignKey: 'idbusiness'
  });
  Detail.belongsTo(Service, {
    as: 'DetailidservicesService',
    foreignKey: 'idservices'
  });
  Service.hasMany(Detail, {
    as: 'details',
    foreignKey: 'idservices'
  });
  Access.belongsTo(User, {
    as: 'AccessiduserUser',
    foreignKey: 'iduser'
  });
  User.hasOne(Access, {
    as: 'access',
    foreignKey: 'iduser'
  });
  Appointment.belongsTo(User, {
    as: 'AppointmentiduserUser',
    foreignKey: 'iduser'
  });
  User.hasMany(Appointment, {
    as: 'appointments',
    foreignKey: 'iduser'
  });
  Business.belongsTo(User, {
    as: 'BusinessiduserUser',
    foreignKey: 'iduser'
  });
  User.hasOne(Business, {
    as: 'business',
    foreignKey: 'iduser'
  });
  return {
    Access: Access,
    Address: Address,
    Appointment: Appointment,
    Business: Business,
    Contactbusiness: Contactbusiness,
    Detail: Detail,
    Freeday: Freeday,
    Service: Service,
    Setting: Setting,
    User: User,
    Operations: Op
  };
}
