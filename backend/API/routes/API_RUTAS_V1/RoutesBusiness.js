export default function RoutesBusiness(router, RequestBusiness) {
  // * rutas de instancia
  const RI = router();

  const { RequestBusinessGetAll, RequestBusinessGetLikeName } = RequestBusiness;
  // * get
  RI.get('/GetAll', RequestBusinessGetAll);
  RI.get('/SearchByName/:Search', RequestBusinessGetLikeName);

  return RI;
}
