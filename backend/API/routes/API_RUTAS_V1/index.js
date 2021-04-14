import RoutesBusiness from './RoutesBusiness';

export default function RV1(router, controllers) {
  // *Ruta modelo
  const RM = router();

  const { RequestBusiness } = controllers;

  RM.use('/Business', RoutesBusiness(router, RequestBusiness));

  return RM;
}
