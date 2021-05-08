'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _typeof = require('@babel/runtime/helpers/typeof');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _dotenv = require('dotenv');

var _httpErrors = _interopRequireDefault(require('http-errors'));

var _express = _interopRequireWildcard(require('express'));

var _cookieParser = _interopRequireDefault(require('cookie-parser'));

var _morgan = _interopRequireDefault(require('morgan'));

var _expressSession = _interopRequireDefault(require('express-session'));

var _Grant = _interopRequireDefault(require('./services/Grant'));

var _routes = _interopRequireDefault(require('./routes'));

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (_typeof(obj) !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

// import { join } from 'path';
// * Importando endpoint
(0, _dotenv.config)();
/**
 * * Se utiliza express-generator
 * * El Cual Contiene Algunas Configuraciones Predeterminadas
 * ! de las cuales se eliminan las que no se están usando
 */

var app = (0, _express['default'])();
/**
 * ? Motor de Visualización
 * // app.set('views', join(__dirname, 'views'));
 * // app.set('view engine', 'jade');
 */

app.use(
  (0, _expressSession['default'])({
    secret: 'grant',
    saveUninitialized: true,
    resave: false
  })
);
app.use((0, _morgan['default'])('dev'));
app.use((0, _express.json)());
app.use(
  (0, _express.urlencoded)({
    extended: false
  })
);
app.use((0, _cookieParser['default'])());
app.use(_Grant['default']);
/**
 * ? Ubicación de las Vistas que Cargaría el Motor de Visualización
 * // // app.use(express.static(path.join(__dirname, "public")));
 */

/**
 * * Creando Endpoint
 */

app.get('/handle_facebook_callback', function (req, res) {
  res.end(JSON.stringify(req.session.grant.response, null, 2));
});
app.get('/handle_google_callback', function (req, res) {
  res.end(JSON.stringify(req.session.grant.response, null, 2));
});
app.use('/API/Auth', function (req, res) {
  res.status(200).send({
    message: 'probado endpoint'
  });
});
app.use('/API', _routes['default']);
/**
 * * Captura las solicitudes no encontradas en los Endpoint
 * * enviando un error 404 al controlador de errores
 */

app.use(function (req, res, next) {
  next((0, _httpErrors['default'])(404));
});
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.send({
    error:
      err.status >= 404
        ? {
            status: 404,
            message: 'Solicitud No encontrada \uD83D\uDD0D \u26A0',
            success: true
          }
        : {
            status: 500,
            message: 'Error Interno Del Servidor \u2757 ',
            sugerencia:
              'Intentar mas tarde \uD83D\uDD50 o Notifique al encargado de Soporte \uD83D\uDD14',
            success: true
          }
  });
});
/**
 * * Exportando App
 */

var _default = app;
exports['default'] = _default;
