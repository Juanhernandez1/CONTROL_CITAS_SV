import CrudInterface from '../../../interface/CrudInterface';

export default class BusinessCrud extends CrudInterface {
  static #instance;

  constructor(Model, Operations) {
    super();

    if (BusinessCrud.#instance) {
      return BusinessCrud.#instance;
    }
    this.Model = Model;
    this.Operatios = Operations;
    this.Config = {
      raw: true,
      nest: true
    };

    BusinessCrud.#instance = this;
  }

  GetPk = async pk => {
    try {
      const data = await this.Model.findByPk(pk, {
        ...this.Config,
        include: [{ association: 'address' }, { association: 'contactbusiness' }]
      });

      return { data, success: true };
    } catch (error) {
      console.log(error);

      return { success: false };
    }
  };

  GetAll = async () => {
    try {
      const data = await this.Model.findAll({
        ...this.Config,
        offset: 1,
        limit: 1,
        include: [{ association: 'address' }, { association: 'contactbusiness' }]
      });

      console.log(data);

      return { data, success: true };
    } catch (error) {
      console.log(error);

      return { success: false };
    }
  };

  GetLikeName = async searchData => {
    try {
      const data = await this.Model.findAll({
        ...this.Config,
        where: {
          businessname: {
            [this.Operatios.like]: `%${searchData}%`
          }
        },
        include: [{ association: 'address' }, { association: 'contactbusiness' }]
      });

      return { data, success: true };
    } catch (error) {
      console.log(error);

      return { success: false };
    }
  };

  Create = async obj => {
    try {
      console.log(obj);
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
    try {
      const FieldPk = this.Model.primaryKeyAttribute;
      const data = await this.Model.update(
        { state: 'inactive' },
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
