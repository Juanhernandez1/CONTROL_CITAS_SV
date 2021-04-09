import CrudInterface from '../../../interface/CrudInterface';
import { Model } from '../../../services';

export default class AccessCrud extends CrudInterface {
  static #instance;

  constructor(Encrypter) {
    super();

    if (AccessCrud.#instance) {
      return AccessCrud.#instance;
    }

    AccessCrud.#instance = this;
    this.Model = Model.Access;
    this.encrypter = Encrypter;
    this.Config = {
      raw: true,
      nest: true
    };
  }

  FindCompare = async (username, password) => {
    try {
      const PasswordHash = this.encrypter.EncryptPassword(password);

      const data = await this.Model.findOne(
        { where: { username, password: PasswordHash } },
        this.Config
      );

      const valid = this.encrypter.ComparePassword(data.password, password);

      return { data, success: true, valid };
    } catch (error) {
      console.log(error);

      return { success: false };
    }
  };

  Create = async obj => {
    try {
      obj.password = this.encrypter.EncryptPassword(obj.password);

      await this.Model.create(obj);

      return { success: true };
    } catch (error) {
      console.log(error);

      return { success: false };
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
      // comparar las contrasemas ingresada para determinar si se actualiza la contraseña o no
      const valid = this.encrypter.ComparePassword(useracces.password, obj.password);

      if (valid) {
        delete obj.password;
      } else {
        // encriptar contraseña a actualizar
        obj.password = this.encrypter.EncryptPassword(obj.password);
      }

      await this.Model.update(obj, {
        where: {
          [FieldPk]: pk
        }
      });

      return { success: true };
    } catch (error) {
      console.log(error);

      return { success: false };
    }
  };
}
