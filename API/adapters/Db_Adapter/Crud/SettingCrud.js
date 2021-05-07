import CrudInterface from '../../../interface/CrudInterface';
export default class SettingCrud extends CrudInterface {
  static #instance;

  constructor(Model) {
    super();

    if (SettingCrud.#instance) {
      return SettingCrud.#instance;
    }

    SettingCrud.#instance = this;
    this.Model = Model;
    this.Config = {
      raw: true,
      nest: true
    };
  }

  GetPk = async pk => {
    try {
      const data = await this.Model.findByPk(pk, { ...this.Config
      });
      return {
        data,
        success: true
      };
    } catch (error) {
      console.log(error);
      return {
        success: false
      };
    }
  };
  Create = async obj => {
    try {
      const data = await this.Model.create(obj);
      return {
        data,
        success: true
      };
    } catch (error) {
      const {
        message,
        type,
        path,
        origin
      } = error.errors[0];
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
      return {
        data,
        success: true
      };
    } catch (error) {
      console.log(error);
      return {
        success: false
      };
    }
  };
}