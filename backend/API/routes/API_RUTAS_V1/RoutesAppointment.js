export default function RoutesAppointment(router, RequestAppoiment) {
  // * rutas de instancia
  const AppointmentRoutes = router();

  const { RequestAppoimentCreate } = RequestAppoiment;
  // * get
  // AppointmentRoutes.get('/GetPk/:id', RequestUsersGetPk);
  // * post
  AppointmentRoutes.post('/Create', RequestAppoimentCreate);

  return AppointmentRoutes;
}
