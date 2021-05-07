export default class ConexionDb {
  static #instance;

  constructor(Sequelize, Config) {
    if (ConexionDb.#instance) {
      return ConexionDb.#instance;
    }

    this._InicializarConexion(Sequelize, Config);

    this.Testconexion();
    this.state = 'hola';
    ConexionDb.#instance = this;
  }

  _InicializarConexion(Sequelize, Config) {
    const {
      url,
      nombreDb,
      usuarioDb,
      claveDb,
      configuracionCnUrl,
      configuracionCnlocal
    } = Config;

    if (url !== '1') {
      this.conexion = new Sequelize(url, configuracionCnUrl);
      console.log('Configurando conexion a la Base de Datos. \u{2699}');
    } else {
      this.conexion = new Sequelize(nombreDb, usuarioDb, claveDb, configuracionCnlocal);
      console.log('Configurando conexion a la Base de Datos. \u{2699}');
    }
  }

  Testconexion() {
    (async () => {
      try {
        await this.conexion.authenticate();
        console.log('Conexión Establecida Satisfactoriamente. \u{1F680}');
      } catch (error) {
        console.error('No se puede conectar a la base de datos. \u{1F622}');
      }
    })();
  }

}