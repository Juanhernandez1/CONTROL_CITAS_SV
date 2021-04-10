import CrudInterface from '../../../interface/CrudInterface';

export default class DetailCrud extends CrudInterface {
  static #instance;

  constructor(Model) {
    super();

    if (DetailCrud.#instance) {
      return DetailCrud.#instance;
    }

    DetailCrud.#instance = this;
    this.Model = Model;
    this.Config = {
      raw: true,
      nest: true
    };
  }

  GetAll = async idQuote => {
    try {
      const data = await this.Model.findAll({
        ...this.Config,
        include: [{ association: 'DetailidservicesService' }],
        where: {
          idappointment: idQuote
        }
      });

      return { data, success: true };
    } catch (error) {
      console.log(error);

      return { success: false };
    }
  };

  Create = async obj => {
    try {
      await this.Model.create(obj);

      return { success: true };
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

  Delete = async pk => {
    try {
      await this.Model.destry(pk);

      return { success: true };
    } catch (error) {
      console.log(error);

      return { success: false };
    }
  };
}
