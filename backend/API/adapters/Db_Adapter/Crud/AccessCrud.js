import CrudInterface from '../../../interface/CrudInterface';

export default class AccessCrud extends CrudInterface {
  static #instance;

  constructor(Encrypter, Model) {
    super();

    if (AccessCrud.#instance) {
      return AccessCrud.#instance;
    }

    AccessCrud.#instance = this;
    this.Model = Model;
    this.encrypter = Encrypter;
    this.Config = {
      raw: true,
      nest: true
    };
  }

  FindCompare = async (username, password) => {
    try {
      const PasswordHash = this.encrypter.EncryptUserPassword(password);

      const data = await this.Model.findOne({
        ...this.Config,
        where: { username, password: PasswordHash }
      });

      const valid = this.encrypter.ComparePassword(data.password, PasswordHash);

      return { data, success: valid };
    } catch (error) {
      return { success: false };
    }
  };

  FindCompareB = async (username, password, type) => {
    try {
      const PasswordHash = this.encrypter.EncryptUserPassword(password);

      const data = await this.Model.findOne({
        ...this.Config,
        where: { username, password: PasswordHash, type }
      });

      const valid = this.encrypter.ComparePassword(data.password, PasswordHash);

      return { data, success: valid };
    } catch (error) {
      return { success: false };
    }
  };

  Create = async obj => {
    try {
      obj.password = this.encrypter.EncryptUserPassword(obj.password);

      const data = await this.Model.create(obj);

      return { data, success: true };
    } catch (error) {
      const { message, type, path, origin } = error.errors[0];

      return {
        success: false,
        message,
        type,
        path,
        origin
      };
    }
  };

  Update = async obj => {
    try {
      // obtener el campo el cual es la primary key y eliminar lo del objeto que ingresa por parametro
      const FieldPk = this.Model.primaryKeyAttribute;
      const pk = obj[FieldPk];
      delete obj[FieldPk];

      // buscar el regitro de acceso correco
      const useracces = await this.Model.findByPk(pk, this.Config);

      // comparar las contrasemas ingresada para determinar si se actualiza la contrase??a o no
      const valid = this.encrypter.ComparePassword(useracces.password, obj.password);

      if (valid) {
        obj.password = useracces.password;
      } else {
        // encriptar contrase??a a actualizar
        obj.password = this.encrypter.EncryptUserPassword(obj.password);
      }

      const data = await this.Model.update(obj, {
        where: {
          [FieldPk]: pk
        }
      });

      return { success: true };
    } catch (error) {
      const { message, type, path, origin } = error.errors[0];

      return {
        success: false,
        message,
        type,
        path,
        origin
      };
    }
  };
}
