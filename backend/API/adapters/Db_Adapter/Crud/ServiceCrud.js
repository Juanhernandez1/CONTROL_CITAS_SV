import CrudInterface from '../../../interface/CrudInterface';

export default class ServiceCrud extends CrudInterface {
  static #instance;

  constructor(Model) {
    super();

    if (ServiceCrud.#instance) {
      return ServiceCrud.#instance;
    }

    ServiceCrud.#instance = this;
    this.Model = Model;
    this.Config = {
      raw: true,
      nest: true
    };
  }

  GetPk = async (idbusiness, pk) => {
    try {
      const data = await this.Model.findByPk(pk, {
        ...this.Config,
        where: { idbusiness }
      });

      return { data, success: true };
    } catch (error) {
      console.log(error);

      return { success: false };
    }
  };

  GetAll = async (idbusiness, state) => {
    try {
      let data;
      if (state !== undefined) {
        data = await this.Model.findAll({
          ...this.Config,
          where: { idbusiness, state }
        });
      } else {
        data = await this.Model.findAll({
          ...this.Config,
          where: { idbusiness }
        });
      }
      return { data, success: true };
    } catch (error) {
      console.log(error);

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
      return { data, success: true };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  };

  Delete = async pk => {
    console.log(pk);
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

      return { data, success: true };
    } catch (error) {
      console.log(error);

      return { success: false };
    }
  };
}
