export default function RoutesUsers(router, RequestUsers) {
  // * rutas de instancia
  const UserRoutes = router();
  const {
    RequestUsersGetPk,
    RequestUsersCreate,
    RequestUsersUpdate,
    RequestUsersDelete,
    RequestUsersAccessUpdate
  } = RequestUsers; // * get

  UserRoutes.get('/GetPk/:id', RequestUsersGetPk); // * post

  UserRoutes.post('/Create', RequestUsersCreate); // * put

  UserRoutes.put('/Update', RequestUsersUpdate);
  UserRoutes.put('/Access/Update', RequestUsersAccessUpdate); // * delete

  UserRoutes.delete('/Delete/:id', RequestUsersDelete);
  return UserRoutes;
}