// * Clase de coneccion a la base de datos
export default class ConnectionDb {
  static #instance;

  constructor(Sequelize, Config) {
    if (ConnectionDb.#instance) {
      return ConnectionDb.#instance;
    }
    this._InitializeConnectionDb(Sequelize, Config);
    this.TestConnectionDb();
    ConnectionDb.#instance = this;
  }

  _InitializeConnectionDb(Sequelize, Config) {
    const { url, nombreDb, usuarioDb, claveDb, configuracionCnUrl, configuracionCnlocal } = Config;

    if (url != null) {
      this.connection = new Sequelize(url, configuracionCnUrl);
      console.log('Configurando conexion a la Base de Datos. \u{2699}');
    } else {
      this.Connection = new Sequelize(nombreDb, usuarioDb, claveDb, configuracionCnlocal);
      console.log('Configurando conexion a la Base de Datos. \u{2705}');
    }
  }

  TestConnectionDb() {
    (async () => {
      try {
        await this.connection.authenticate();
        console.log('Conexión Establecida Satisfactoriamente. \u{1F418}');
      } catch (error) {
        console.error('No se puede conectar a la base de datos. \u{26A0}');
      }
    })();
  }
}
