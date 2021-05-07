"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RoutesBusiness;

function RoutesBusiness(router, RequestUsers) {
  // * rutas de instancia
  var BusinessRoutes = router();
  var RequestBusinessGetPk = RequestUsers.RequestBusinessGetPk,
      RequestBusinessGetAll = RequestUsers.RequestBusinessGetAll,
      RequestBusinessGetLikeName = RequestUsers.RequestBusinessGetLikeName,
      RequestBusinessCreate = RequestUsers.RequestBusinessCreate,
      RequestBusinessUpdate = RequestUsers.RequestBusinessUpdate,
      RequestBusinessDelete = RequestUsers.RequestBusinessDelete,
      RequestBusinessSettingGetPk = RequestUsers.RequestBusinessSettingGetPk,
      RequestBusinessSettingUpdate = RequestUsers.RequestBusinessSettingUpdate,
      RequestBusinessAddressGetPk = RequestUsers.RequestBusinessAddressGetPk,
      RequestBusinessAddressUpdate = RequestUsers.RequestBusinessAddressUpdate,
      RequestBusinessContacGetPk = RequestUsers.RequestBusinessContacGetPk,
      RequestBusinessContactUpdate = RequestUsers.RequestBusinessContactUpdate,
      RequestBusinessServicesGetAll = RequestUsers.RequestBusinessServicesGetAll,
      RequestBusinessServicesGetPk = RequestUsers.RequestBusinessServicesGetPk,
      RequestBusinessServicesCreate = RequestUsers.RequestBusinessServicesCreate,
      RequestBusinessServicesUpdate = RequestUsers.RequestBusinessServicesUpdate,
      RequestBusinessServicesDelete = RequestUsers.RequestBusinessServicesDelete; // * get

  BusinessRoutes.get('/GetPk/:id', RequestBusinessGetPk);
  BusinessRoutes.get('/GetAll/:page', RequestBusinessGetAll);
  BusinessRoutes.get('/SearchByName/:search/:page', RequestBusinessGetLikeName);
  BusinessRoutes.get('/Settings/GetPk/:id', RequestBusinessSettingGetPk);
  BusinessRoutes.get('/Address/GetPk/:id', RequestBusinessAddressGetPk);
  BusinessRoutes.get('/Contact/GetPk/:id', RequestBusinessContacGetPk);
  BusinessRoutes.get('/Services/GetPk/:idbusiness/:id', RequestBusinessServicesGetPk);
  BusinessRoutes.get('/Services/GetAll/:idbusiness', RequestBusinessServicesGetAll); // * post

  BusinessRoutes.post('/Create', RequestBusinessCreate);
  BusinessRoutes.put('/Service/Create', RequestBusinessServicesCreate); // * put

  BusinessRoutes.put('/Update', RequestBusinessUpdate);
  BusinessRoutes.put('/Settings/Update', RequestBusinessSettingUpdate);
  BusinessRoutes.put('/Contact/Update', RequestBusinessContactUpdate);
  BusinessRoutes.put('/Address/Update', RequestBusinessAddressUpdate);
  BusinessRoutes.put('/Service/Update', RequestBusinessServicesUpdate); // * delete

  BusinessRoutes["delete"]('/Delete/:id', RequestBusinessDelete);
  BusinessRoutes.put('/Service/Delete/:id', RequestBusinessServicesDelete);
  return BusinessRoutes;
}