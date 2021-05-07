'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
  _classCheckPrivateStaticAccess(receiver, classConstructor);
  _classCheckPrivateStaticFieldDescriptor(descriptor, 'set');
  _classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}

function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError('attempted to set read only private field');
    }
    descriptor.value = value;
  }
}

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
  _classCheckPrivateStaticAccess(receiver, classConstructor);
  _classCheckPrivateStaticFieldDescriptor(descriptor, 'get');
  return _classApplyDescriptorGet(receiver, descriptor);
}

function _classCheckPrivateStaticFieldDescriptor(descriptor, action) {
  if (descriptor === undefined) {
    throw new TypeError('attempted to ' + action + ' private static field before its declaration');
  }
}

function _classCheckPrivateStaticAccess(receiver, classConstructor) {
  if (receiver !== classConstructor) {
    throw new TypeError('Private static access of wrong provenance');
  }
}

function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }
  return descriptor.value;
}

var ConexionDb = /*#__PURE__*/ (function () {
  function ConexionDb(Sequelize, Config) {
    (0, _classCallCheck2['default'])(this, ConexionDb);

    if (_classStaticPrivateFieldSpecGet(ConexionDb, ConexionDb, _instance)) {
      return _classStaticPrivateFieldSpecGet(ConexionDb, ConexionDb, _instance);
    }

    this._InicializarConexion(Sequelize, Config);

    this.Testconexion();
    this.state = 'hola';

    _classStaticPrivateFieldSpecSet(ConexionDb, ConexionDb, _instance, this);
  }

  (0, _createClass2['default'])(ConexionDb, [
    {
      key: '_InicializarConexion',
      value: function _InicializarConexion(Sequelize, Config) {
        var url = Config.url,
          nombreDb = Config.nombreDb,
          usuarioDb = Config.usuarioDb,
          claveDb = Config.claveDb,
          configuracionCnUrl = Config.configuracionCnUrl,
          configuracionCnlocal = Config.configuracionCnlocal;

        if (url !== '1') {
          this.conexion = new Sequelize(url, configuracionCnUrl);
          console.log('Configurando conexion a la Base de Datos. \u2699');
        } else {
          this.conexion = new Sequelize(nombreDb, usuarioDb, claveDb, configuracionCnlocal);
          console.log('Configurando conexion a la Base de Datos. \u2699');
        }
      }
    },
    {
      key: 'Testconexion',
      value: function Testconexion() {
        var _this = this;

        (0, _asyncToGenerator2['default'])(
          /*#__PURE__*/ _regenerator['default'].mark(function _callee() {
            return _regenerator['default'].wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.prev = 0;
                      _context.next = 3;
                      return _this.conexion.authenticate();

                    case 3:
                      console.log('Conexi\xF3n Establecida Satisfactoriamente. \uD83D\uDE80');
                      _context.next = 9;
                      break;

                    case 6:
                      _context.prev = 6;
                      _context.t0 = _context['catch'](0);
                      console.error('No se puede conectar a la base de datos. \uD83D\uDE22');

                    case 9:
                    case 'end':
                      return _context.stop();
                  }
                }
              },
              _callee,
              null,
              [[0, 6]]
            );
          })
        )();
      }
    }
  ]);
  return ConexionDb;
})();

exports['default'] = ConexionDb;
var _instance = {
  writable: true,
  value: void 0
};
