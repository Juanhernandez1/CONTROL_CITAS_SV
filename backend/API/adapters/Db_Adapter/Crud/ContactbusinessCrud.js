import CrudInterface from '../../../interface/CrudInterface';
import { Model } from '../../../services';

export default class ContactbusinessCrud extends CrudInterface {
  static #instance;

  constructor() {
    super();

    if (ContactbusinessCrud.#instance) {
      return ContactbusinessCrud.#instance;
    }

    ContactbusinessCrud.#instance = this;
    this.Model = Model.Contactbusiness;
    this.Config = {
      raw: true,
      nest: true
    };
  }

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
}
