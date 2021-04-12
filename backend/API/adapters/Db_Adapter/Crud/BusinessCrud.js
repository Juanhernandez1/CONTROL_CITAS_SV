import CrudInterface from '../../../interface/CrudInterface';

export default class BusinessCrud extends CrudInterface {
  static #instance;

  constructor(Model, Operations) {
    super();

    if (BusinessCrud.#instance) {
      return BusinessCrud.#instance;
    }

    BusinessCrud.#instance = this;
    this.Model = Model;
    this.Operatios = Operations;
    this.Config = {
      raw: true,
      nest: true
    };
  }

  GetPk = async pk => {
    try {
      const data = await this.Model.findByPk(pk, {
        ...this.Config,
        include: [
          { association: 'AddressidbusinessBusiness' },
          { association: 'ContactbusinessIdbusinessBusiness' }
        ]
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
        include: [
          { association: 'AddressidbusinessBusiness' },
          { association: 'ContactbusinessIdbusinessBusiness' }
        ]
      });

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
          title: {
            [this.Operatios.like]: `%${searchData}%`
          }
        },
        include: [
          { association: 'AddressidbusinessBusiness' },
          { association: 'ContactbusinessIdbusinessBusiness' }
        ]
      });

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
      console.log(error);

      return { success: false };
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
