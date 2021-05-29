'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = RoutesAppoiment;

function RoutesAppoiment(router, RequestAppoiment) {
  // * rutas de instancia
  var AppoimentRoutes = router();
  var RequestAppoimentLastFiveDay = RequestAppoiment.RequestAppoimentLastFiveDay,
    RequestAppoimentCreate = RequestAppoiment.RequestAppoimentCreate,
    RequestBusinessAppointmentGetPk = RequestAppoiment.RequestBusinessAppointmentGetPk; // * get

  AppoimentRoutes.get('/LastFiveDay', RequestAppoimentLastFiveDay);
  AppoimentRoutes.get('/Get/:idbusiness/:idappointmen', RequestBusinessAppointmentGetPk); // * post

  AppoimentRoutes.post('/Create', RequestAppoimentCreate);
  return AppoimentRoutes;
}
