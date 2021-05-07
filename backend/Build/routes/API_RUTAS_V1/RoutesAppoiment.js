"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RoutesAppoiment;

function RoutesAppoiment(router, RequestAppoiment) {
  // * rutas de instancia
  var AppoimentRoutes = router();
  var RequestAppoimentTempList = RequestAppoiment.RequestAppoimentTempList; // * get

  AppoimentRoutes.get('/TempList', RequestAppoimentTempList);
  return AppoimentRoutes;
}