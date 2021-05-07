'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;
var ErrorMessages = {
  ER500: {
    error: {
      status: 500,
      message: 'Error Interno Del Servidor \u2757 ',
      sugerencia:
        'Intentar mas tarde \uD83D\uDD50 o Notifique al encargado de Soporte \uD83D\uDD14',
      success: true
    }
  },
  ER404: {
    error: {
      status: 404,
      message: 'Solicitud No encontrada \uD83D\uDD0D \u26A0',
      success: true
    }
  },
  ER401: {
    error: {
      status: 401,
      message: 'Acceso Denegado',
      otros: 'No Esta autorizado  \uD83D\uDD12',
      sugerencia: 'Iniciar Seccion',
      success: true
    }
  },
  ER403: {
    error: {
      status: 403,
      message: 'Acceso Denegado',
      otros: 'No pose permisos para esta petici\xF3n  \uD83D\uDD12',
      success: true
    }
  },
  ER405: {
    error: {
      status: 405,
      message: 'Método no Permitido',
      otros: 'No esta Permitido Eliminar Datos De Forma Directa \uD83D\uDED1',
      success: true
    }
  },
  ERDB01: {
    error: {
      message: 'Error de La base de datos \u26A0',
      otros: 'puede estar ingresando un identificador existente',
      sugerencia: 'cambie el identificador',
      success: true
    }
  },
  ERDB02: {
    error: {
      message: 'Error  La base de datos \u26A0',
      otros: 'El identificador no existe ',
      sugerencia: 'verifique el identificador que ingresa este correctamente escrito',
      success: true
    }
  },
  ERDB404: {
    message: 'No se Pudo Completar La Peticion \uD83D\uDD0D',
    otros: 'No Se Pude Acceder A La Base De Datos \uD83D\uDEA7',
    success: true
  },
  ERDB404LIKE: {
    message: 'No se Encontraron Coincidencias En los registros \uD83D\uDD0D',
    otros: 'No Se Pude Acceder A La Base De Datos \uD83D\uDEA7',
    success: true
  },
  ERDBLOGIN: {
    error: {
      message: 'Error de Acceso No existe Usuario con Las Credenciales dadas',
      success: true
    }
  },
  ERMET_PATH: {
    error: {
      message: 'El Método No Es el Correcto para La Petición',
      success: true
    }
  },
  ERREMP: {
    error: {
      message: 'No se puede Registrar El usuario \u26A0',
      otros: 'Es posible que exista El nombre de usuario',
      sugerencias: 'Cambie El nombre de Usuario ',
      success: true
    }
  }
};
var _default = ErrorMessages;
exports['default'] = _default;
