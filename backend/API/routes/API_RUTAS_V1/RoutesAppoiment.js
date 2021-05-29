export default function RoutesAppoiment(router, RequestAppoiment) {
  // * rutas de instancia
  const AppoimentRoutes = router();

  const { RequestAppoimentLastFiveDay, RequestAppoimentCreate, RequestBusinessAppointmentGetPk } =
    RequestAppoiment;
  // * get
  AppoimentRoutes.get('/LastFiveDay', RequestAppoimentLastFiveDay);
  AppoimentRoutes.get('/Get/:idbusiness/:idappointmen', RequestBusinessAppointmentGetPk);
  // * post
  AppoimentRoutes.post('/Create', RequestAppoimentCreate);

  return AppoimentRoutes;
}
