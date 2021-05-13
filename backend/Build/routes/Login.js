'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = AuthRouter;

function AuthRouter(router, controllers) {
  // *Ruta modelo
  var RAuth = router();
  var CallbackGoogle = controllers.CallbackGoogle,
    CallbackFacebook = controllers.CallbackFacebook;
  RAuth.get('/handle_facebook_callback', CallbackFacebook);
  RAuth.get('/handle_google_callback', CallbackGoogle);
  return RAuth;
}
