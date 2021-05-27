'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = RoutesAppointment;

function RoutesAppointment(router, RequestAppoiment) {
  // * rutas de instancia
  var AppointmentRoutes = router();
  var RequestAppoimentCreate = RequestAppoiment.RequestAppoimentCreate; // * get
  // AppointmentRoutes.get('/GetPk/:id', RequestUsersGetPk);
  // * post

  AppointmentRoutes.post('/Create', RequestAppoimentCreate);
  return AppointmentRoutes;
}
