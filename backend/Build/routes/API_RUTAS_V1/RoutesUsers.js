'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = RoutesUsers;

function RoutesUsers(router, RequestUsers) {
  // * rutas de instancia
  var UserRoutes = router();
  var RequestUsersGetPk = RequestUsers.RequestUsersGetPk,
    RequestUsersUpdate = RequestUsers.RequestUsersUpdate,
    RequestUsersDelete = RequestUsers.RequestUsersDelete,
    RequestUsersAccessUpdate = RequestUsers.RequestUsersAccessUpdate; // * get

  UserRoutes.get('/GetPk/:id', RequestUsersGetPk); // * put

  UserRoutes.put('/Update', RequestUsersUpdate);
  UserRoutes.put('/Access/Update', RequestUsersAccessUpdate); // * delete

  UserRoutes['delete']('/Delete/:id', RequestUsersDelete);
  return UserRoutes;
}
