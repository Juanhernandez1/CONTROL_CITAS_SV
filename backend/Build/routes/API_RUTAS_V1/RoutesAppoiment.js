'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = RoutesAppoiment;

function RoutesAppoiment(router, RequestAppoiment) {
  // * rutas de instancia
  var AppoimentRoutes = router();
  var RequestAppoimentLastFiveDay = RequestAppoiment.RequestAppoimentLastFiveDay; // * get

  AppoimentRoutes.get('/LastFiveDay', RequestAppoimentLastFiveDay);
  return AppoimentRoutes;
}
