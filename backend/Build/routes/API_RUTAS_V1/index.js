'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = RV1;

var _RoutesAppoiment = _interopRequireDefault(require('./RoutesAppoiment'));

var _RoutesBusiness = _interopRequireDefault(require('./RoutesBusiness'));

var _RoutesUsers = _interopRequireDefault(require('./RoutesUsers'));

/* eslint-disable node/no-path-concat */
var path = require('path');

function RV1(router, controllers) {
  // *Ruta modelo
  var RM = router();
  var RequestBusiness = controllers.RequestBusiness,
    RequestUsers = controllers.RequestUsers,
    RequestAppoiment = controllers.RequestAppoiment;
  RM.use('/Business', (0, _RoutesBusiness['default'])(router, RequestBusiness));
  RM.use('/Users', (0, _RoutesUsers['default'])(router, RequestUsers));
  RM.use('/Appointment', (0, _RoutesAppoiment['default'])(router, RequestAppoiment));
  RM.get('/Politicas', function (req, res) {
    res.sendFile(path.join(__dirname + '/export.html'));
  });
  return RM;
}
