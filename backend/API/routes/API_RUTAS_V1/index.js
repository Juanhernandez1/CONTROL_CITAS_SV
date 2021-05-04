import RoutesAppoiment from './RoutesAppoiment';
import RoutesBusiness from './RoutesBusiness';
import RoutesUsers from './RoutesUsers';

export default function RV1(router, controllers) {
  // *Ruta modelo
  const RM = router();

  const { RequestBusiness, RequestUsers, RequestAppoiment } = controllers;

  RM.use('/Business', RoutesBusiness(router, RequestBusiness));
  RM.use('/Users', RoutesUsers(router, RequestUsers));
  RM.use('/Appoiment', RoutesAppoiment(router, RequestAppoiment));

  return RM;
}
