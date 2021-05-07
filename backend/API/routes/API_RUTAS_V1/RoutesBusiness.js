export default function RoutesBusiness(router, RequestUsers) {
  // * rutas de instancia
  const BusinessRoutes = router();

  const {
    RequestBusinessGetPk,
    RequestBusinessGetAll,
    RequestBusinessGetLikeName,
    RequestBusinessCreate,
    RequestBusinessUpdate,
    RequestBusinessDelete,
    RequestBusinessSettingGetPk,
    RequestBusinessSettingUpdate,
    RequestBusinessAddressGetPk,
    RequestBusinessAddressUpdate,
    RequestBusinessContacGetPk,
    RequestBusinessContactUpdate,
    RequestBusinessServicesGetAll,
    RequestBusinessServicesGetPk,
    RequestBusinessServicesCreate,
    RequestBusinessServicesUpdate,
    RequestBusinessServicesDelete
  } = RequestUsers;
  // * get
  BusinessRoutes.get('/GetPk/:id', RequestBusinessGetPk);
  BusinessRoutes.get('/GetAll/:page', RequestBusinessGetAll);
  BusinessRoutes.get('/SearchByName/:search/:page', RequestBusinessGetLikeName);
  BusinessRoutes.get('/Settings/GetPk/:id', RequestBusinessSettingGetPk);
  BusinessRoutes.get('/Address/GetPk/:id', RequestBusinessAddressGetPk);
  BusinessRoutes.get('/Contact/GetPk/:id', RequestBusinessContacGetPk);
  BusinessRoutes.get('/Services/GetPk/:idbusiness/:id', RequestBusinessServicesGetPk);
  BusinessRoutes.get('/Services/GetAll/:idbusiness', RequestBusinessServicesGetAll);
  // * post
  BusinessRoutes.post('/Create', RequestBusinessCreate);
  BusinessRoutes.put('/Service/Create', RequestBusinessServicesCreate);
  // * put
  BusinessRoutes.put('/Update', RequestBusinessUpdate);
  BusinessRoutes.put('/Settings/Update', RequestBusinessSettingUpdate);
  BusinessRoutes.put('/Contact/Update', RequestBusinessContactUpdate);
  BusinessRoutes.put('/Address/Update', RequestBusinessAddressUpdate);
  BusinessRoutes.put('/Service/Update', RequestBusinessServicesUpdate);
  // * delete
  BusinessRoutes.delete('/Delete/:id', RequestBusinessDelete);
  BusinessRoutes.put('/Service/Delete/:id', RequestBusinessServicesDelete);

  return BusinessRoutes;
}
