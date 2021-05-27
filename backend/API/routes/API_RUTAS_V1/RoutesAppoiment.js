export default function RoutesAppoiment(router, RequestAppoiment) {
  // * rutas de instancia
  const AppoimentRoutes = router();

  const { RequestAppoimentLastFiveDay, RequestAppoimentCreate } = RequestAppoiment;
  // * get
  AppoimentRoutes.get('/LastFiveDay', RequestAppoimentLastFiveDay);
  // * post
  AppoimentRoutes.post('/Create', RequestAppoimentCreate);

  return AppoimentRoutes;
}
