'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = RoutesAppoiment;

function RoutesAppoiment(router, RequestAppoiment) {
  // * rutas de instancia
  var AppoimentRoutes = router();
  var RequestAppoimentLastFiveDay = RequestAppoiment.RequestAppoimentLastFiveDay,
    RequestAppoimentCreate = RequestAppoiment.RequestAppoimentCreate; // * get

  AppoimentRoutes.get('/LastFiveDay', RequestAppoimentLastFiveDay); // * post

  AppoimentRoutes.post('/Create', RequestAppoimentCreate);
  return AppoimentRoutes;
}
