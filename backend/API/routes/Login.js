export default function AuthRouter(router, controllers) {
  // *Ruta modelo
  const RAuth = router();

  const { CallbackGoogle, CallbackFacebook } = controllers;

  RAuth.get('/handle_facebook_callback', CallbackFacebook);

  RAuth.get('/handle_google_callback', CallbackGoogle);

  return RAuth;
}
