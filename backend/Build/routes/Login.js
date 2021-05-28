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
    SignUpUsersCreateTraditional = controllers.SignUpUsersCreateTraditional,
    LoginTraditionalBusiness = controllers.LoginTraditionalBusiness;
  RAuth.get('/handle_facebook_callback', CallbackFacebook);
  RAuth.get('/handle_google_callback', CallbackGoogle);
  RAuth.post('/Login', LoginTraditional);
  RAuth.post('/Login/Business/:type', LoginTraditionalBusiness);
  RAuth.post('/Registre/User', SignUpUsersCreateTraditional);
  return RAuth;
}
