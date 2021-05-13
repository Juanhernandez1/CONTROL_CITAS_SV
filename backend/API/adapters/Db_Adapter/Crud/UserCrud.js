import CrudInterface from '../../../interface/CrudInterface';

export default class UserCrud extends CrudInterface {
  static #instance;

  constructor(Model) {
    super();

    if (UserCrud.#instance) {
      return UserCrud.#instance;
    }

    this.Model = Model;
    this.Config = {
      raw: true,
      nest: true
    };
    UserCrud.#instance = this;
  }

  GetPk = async pk => {
    try {
      const data = await this.Model.findByPk(pk, {
        ...this.Config
      });
      return { data, success: true };
    } catch (error) {
      return { success: false };
    }
  };

  GetOpenIdAuth = async (id, field) => {
    try {
      const data = await this.Model.findOne({
        ...this.Config,
        where: {
          [field]: id
        }
      });

      return { data: { ...data }, success: true };
    } catch (error) {
      return { success: false };
    }
  };

  Create = async obj => {
    try {
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
      const FieldPk = this.Model.primaryKeyAttribute;
      const pk = obj[FieldPk];
      delete obj[FieldPk];

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

  Delete = async pk => {
    try {
      const FieldPk = this.Model.primaryKeyAttribute;
      const data = await this.Model.update(
        { state: 'inactivo' },
        {
          where: {
            [FieldPk]: pk
          }
        }
      );

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
