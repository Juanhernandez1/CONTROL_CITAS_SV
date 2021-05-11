import { config } from 'dotenv';
import createError from 'http-errors';
import express, { json, urlencoded } from 'express';
// import { join } from 'path';
import cookieParser from 'cookie-parser';
import cros from 'cross';
import logger from 'morgan';

import session from 'express-session';
import Grant from './services/Grant';
import Routes from './routes';

// * Importando endpoint

config();
/**
 * * Se utiliza express-generator
 * * El Cual Contiene Algunas Configuraciones Predeterminadas
 * ! de las cuales se eliminan las que no se están usando
 */
const app = express();

/**
 * ? Motor de Visualización
 * // app.set('views', join(__dirname, 'views'));
 * // app.set('view engine', 'jade');
 */

app.use(session({ secret: 'grant', saveUninitialized: true, resave: false }));
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cros());
app.use(Grant);
/**
 * ? Ubicación de las Vistas que Cargaría el Motor de Visualización
 * // // app.use(express.static(path.join(__dirname, "public")));
 */

/**
 * * Creando Endpoint
 */

app.get('/handle_facebook_callback', (req, res) => {
  res.end(JSON.stringify(req.session.grant.response, null, 2));
});

app.get('/handle_google_callback', (req, res) => {
  res.end(JSON.stringify(req.session.grant.response, null, 2));
});

app.use('/API/Auth', (req, res) => {
  res.status(200).send({ message: 'probado endpoint' });
});

app.use('/API', Routes);

/**
 * * Captura las solicitudes no encontradas en los Endpoint
 * * enviando un error 404 al controlador de errores
 */
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({
    error:
      err.status >= 404
        ? {
            status: 404,
            message: 'Solicitud No encontrada \u{1F50D} \u{26A0}',
            success: true
          }
        : {
            status: 500,
            message: 'Error Interno Del Servidor \u{2757} ',
            sugerencia:
              'Intentar mas tarde \u{1F550} o Notifique al encargado de Soporte \u{1F514}',
            success: true
          }
  });
});

/**
 * * Exportando App
 */
export default app;
