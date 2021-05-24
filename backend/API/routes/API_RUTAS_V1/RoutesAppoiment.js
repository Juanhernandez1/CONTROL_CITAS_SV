export default function RoutesAppoiment(router, RequestAppoiment) {
  // * rutas de instancia
  const AppoimentRoutes = router();

  const { RequestAppoimentLastFiveDay } = RequestAppoiment;
  // * get
  AppoimentRoutes.get('/LastFiveDay', RequestAppoimentLastFiveDay);

  return AppoimentRoutes;
}
