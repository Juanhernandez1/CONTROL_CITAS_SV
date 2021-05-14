export default function AuthRouter(router, controllers) {
  // *Ruta modelo
  const RAuth = router();

  const { CallbackGoogle, CallbackFacebook, LoginTraditional, SignUpUsersCreateTraditional } =
    controllers;

  RAuth.get('/handle_facebook_callback', CallbackFacebook);

  RAuth.get('/handle_google_callback', CallbackGoogle);

  RAuth.post('/Login', LoginTraditional);

  RAuth.post('/Registre/User', SignUpUsersCreateTraditional);

  return RAuth;
}
