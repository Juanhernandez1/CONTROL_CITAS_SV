export default function RoutesBusiness(router, RequestUsers) {
  // * rutas de instancia
  const BusinessRoutes = router();

  const { RequestBusinessGetAll, RequestBusinessGetLikeName, RequestBusinessCreate } = RequestUsers;
  // * get
  BusinessRoutes.get('/GetAll', RequestBusinessGetAll);
  BusinessRoutes.get('/SearchByName/:Search', RequestBusinessGetLikeName);

  BusinessRoutes.post('/Create', RequestBusinessCreate);

  return BusinessRoutes;
}
