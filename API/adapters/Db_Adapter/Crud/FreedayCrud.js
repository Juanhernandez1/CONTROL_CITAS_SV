import CrudInterface from '../../../interface/CrudInterface';
export default class FreedayCrud extends CrudInterface {
  static #instance;

  constructor(Model) {
    super();

    if (FreedayCrud.#instance) {
      return FreedayCrud.#instance;
    }

    FreedayCrud.#instance = this;
    this.Model = Model;
    this.Config = {
      raw: true,
      nest: true
    };
  }

  GetPk = async pk => {
    try {
      const data = await this.Model.findByPk(pk, this.Config);
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
  GetAll = async () => {
    try {
      const data = await this.Model.findAll(this.Config);
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
      await this.Model.create(obj);
      return {
        success: true
      };
    } catch (error) {
      console.log(error);
      return {
        success: false
      };
    }
  };
  Update = async obj => {
    try {
      const FieldPk = this.Model.primaryKeyAttribute;
      const pk = obj[FieldPk];
      delete obj[FieldPk];
      await this.Model.update(obj, {
        where: {
          [FieldPk]: pk
        }
      });
      return {
        success: true
      };
    } catch (error) {
      console.log(error);
      return {
        success: false
      };
    }
  };
  Delete = async pk => {
    try {
      const FieldPk = this.Model.primaryKeyAttribute;
      await this.Model.update({
        state: 'inactive'
      }, {
        where: {
          [FieldPk]: pk
        }
      });
      return {
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