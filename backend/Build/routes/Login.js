'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = AuthRouter;

function AuthRouter(router, controllers) {
  // *Ruta modelo
  var RAuth = router();
  var CallbackGoogle = controllers.CallbackGoogle,
    CallbackFacebook = controllers.CallbackFacebook,
    LoginTraditional = controllers.LoginTraditional,
    SignUpUsersCreateTraditional = controllers.SignUpUsersCreateTraditional;
  RAuth.get('/handle_facebook_callback', CallbackFacebook);
  RAuth.get('/handle_google_callback', CallbackGoogle);
  RAuth.post('/Login', LoginTraditional);
  RAuth.post('/Registre/User', SignUpUsersCreateTraditional);
  return RAuth;
}
