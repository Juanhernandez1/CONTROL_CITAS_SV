/* eslint-disable node/no-path-concat */
import RoutesAppoiment from './RoutesAppoiment';
import RoutesBusiness from './RoutesBusiness';
import RoutesUsers from './RoutesUsers';
const path = require('path');

export default function RV1(router, controllers) {
  // *Ruta modelo
  const RM = router();

  const { RequestBusiness, RequestUsers, RequestAppoiment } = controllers;

  RM.use('/Business', RoutesBusiness(router, RequestBusiness));
  RM.use('/Users', RoutesUsers(router, RequestUsers));
  RM.use('/Appointment', RoutesAppoiment(router, RequestAppoiment));
  RM.get('/Politicas', function (req, res) {
    res.sendFile(path.join(__dirname + '/export.html'));
  });

  return RM;
}
