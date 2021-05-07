"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _adapters = _interopRequireDefault(require("../adapters"));

var _RequestUsers = _interopRequireDefault(require("./RequestDb/ RequestUsers"));

var _RequestAppoiment = _interopRequireDefault(require("./RequestDb/RequestAppoiment"));

var _RequestBusiness = _interopRequireDefault(require("./RequestDb/RequestBusiness"));

var RootCrudAdapter = _adapters["default"].RootCrudAdapter;
var accessCrud = RootCrudAdapter.accessCrud,
    addressCrud = RootCrudAdapter.addressCrud,
    businessCrud = RootCrudAdapter.businessCrud,
    contactbusinessCrud = RootCrudAdapter.contactbusinessCrud,
    detailCrud = RootCrudAdapter.detailCrud,
    freedayCrud = RootCrudAdapter.freedayCrud,
    appointmentCrud = RootCrudAdapter.appointmentCrud,
    serviceCrud = RootCrudAdapter.serviceCrud,
    settingCrud = RootCrudAdapter.settingCrud,
    userCrud = RootCrudAdapter.userCrud;
var controllers = {
  RequestBusiness: new _RequestBusiness["default"](businessCrud, contactbusinessCrud, addressCrud, freedayCrud, settingCrud, serviceCrud, appointmentCrud),
  RequestUsers: new _RequestUsers["default"](userCrud, accessCrud, appointmentCrud),
  RequestAppoiment: new _RequestAppoiment["default"](appointmentCrud)
};
var _default = controllers;
exports["default"] = _default;