export default function RoutesAppoiment(router, RequestAppoiment) {
  // * rutas de instancia
  const AppoimentRoutes = router();

  const { RequestAppoimentTempList } = RequestAppoiment;
  // * get
  AppoimentRoutes.get('/TempList', RequestAppoimentTempList);

  return AppoimentRoutes;
}
