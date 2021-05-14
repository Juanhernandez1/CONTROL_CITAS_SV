'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _AccessCrud = _interopRequireDefault(require('./Crud/AccessCrud'));

var _AddressCrud = _interopRequireDefault(require('./Crud/AddressCrud'));

var _BusinessCrud = _interopRequireDefault(require('./Crud/BusinessCrud'));

var _ContactbusinessCrud = _interopRequireDefault(require('./Crud/ContactbusinessCrud'));

var _DetailCrud = _interopRequireDefault(require('./Crud/DetailCrud'));

var _FreedayCrud = _interopRequireDefault(require('./Crud/FreedayCrud'));

var _AppointmentCrud = _interopRequireDefault(require('./Crud/AppointmentCrud'));

var _ServiceCrud = _interopRequireDefault(require('./Crud/ServiceCrud'));

var _SettingCrud = _interopRequireDefault(require('./Crud/SettingCrud'));

var _UserCrud = _interopRequireDefault(require('./Crud/UserCrud'));

var _services = _interopRequireDefault(require('../../services'));

var _Encrypt_Adapter = _interopRequireDefault(require('../Encrypt_Adapter'));

var Model = _services['default'].Model,
  Encrypt = _services['default'].Encrypt;
var Access = Model.Access,
  Address = Model.Address,
  Business = Model.Business,
  Contactbusiness = Model.Contactbusiness,
  Detail = Model.Detail,
  Freeday = Model.Freeday,
  Appointment = Model.Appointment,
  Service = Model.Service,
  Setting = Model.Setting,
  User = Model.User,
  Operations = Model.Operations;
var RootCrudAdapter = {
  accessCrud: new _AccessCrud['default'](new _Encrypt_Adapter['default'](), Access),
  addressCrud: new _AddressCrud['default'](Address),
  businessCrud: new _BusinessCrud['default'](Business, Operations),
  contactbusinessCrud: new _ContactbusinessCrud['default'](Contactbusiness),
  detailCrud: new _DetailCrud['default'](Detail),
  freedayCrud: new _FreedayCrud['default'](Freeday),
  appointmentCrud: new _AppointmentCrud['default'](Appointment, Operations),
  serviceCrud: new _ServiceCrud['default'](Service),
  settingCrud: new _SettingCrud['default'](Setting),
  userCrud: new _UserCrud['default'](User)
};
var _default = RootCrudAdapter;
exports['default'] = _default;
