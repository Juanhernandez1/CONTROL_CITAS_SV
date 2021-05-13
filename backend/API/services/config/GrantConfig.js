// * objeto de configuracion para conectarse con firebase
import { config } from 'dotenv';
config();

const GranConfig = {
  defaults: {
    origin: !process.env.HEROKU_CALLBACK_GOOGLE
      ? `http://localhost:3100`
      : process.env.HEROKU_CALLBACK_GOOGLE,
    transport: 'session'
  },
  google: {
    key: process.env.GOOGLE_CLIENT_ID,
    secret: process.env.GOOGLE_CLIENT_SECRET,
    dynamic: ['scope'],
    callback:
      process.env.GOOGLE_URL_CALLBACK !== undefined
        ? process.env.GOOGLE_URL_CALLBACK
        : '/API/Auth/handle_google_callback',
    scope: ['openid', 'email', 'profile'],
    response: ['tokens', 'raw', 'profile']
  },
  facebook: {
    key: process.env.FACEBOOK_CLIENT_ID,
    secret: process.env.FACEBOOK_CLIENT_PASS,
    dynamic: ['scope'],
    callback:
      process.env.FACEBOOK_URL_CALLBACK !== undefined
        ? process.env.FACEBOOK_URL_CALLBACK
        : '/API/Auth/handle_facebook_callback',
    scope: ['openid', 'email'],
    response: ['tokens', 'raw', 'profile']
  }
};

export default GranConfig;
