import CrudInterface from '../../../interface/CrudInterface';

export default class QuoteCrud extends CrudInterface {
  static #instance;

  constructor(Model, Operations) {
    super();

    if (QuoteCrud.#instance) {
      return QuoteCrud.#instance;
    }

    QuoteCrud.#instance = this;
    this.Model = Model;
    this.Operations = Operations;
    this.Config = {
      raw: true,
      nest: true
    };
  }

  GetPkForUsers = async pk => {
    try {
      const data = await this.Model.findByPk(pk, {
        ...this.Config,
        include: [
          {
            association: 'QuoteidbusinessBusiness',
            attributes: ['businessname'],
            include: [
              { association: 'AddressidbusinessBusiness' },
              { association: 'ContactbusinessIdbusinessBusiness' },
              ...this.Config
            ]
          },
          {
            association: 'DetailidappointmentQuote',
            include: { association: 'DetailidservicesService' },
            ...this.Config
          }
        ]
      });

      return { data, success: true };
    } catch (error) {
      console.log(error);

      return { success: false };
    }
  };

  GetAllForUsers = async iduser => {
    try {
      const data = await this.Model.findAll({
        where: { iduser },
        ...this.Config,
        include: [
          {
            association: 'QuoteidbusinessBusiness',
            attributes: ['businessname']
          }
        ]
      });

      return { data, success: true };
    } catch (error) {
      console.log(error);

      return { success: false };
    }
  };

  GetPkForBusiness = async pk => {
    try {
      const data = await this.Model.findByPk(pk, {
        ...this.Config,
        include: [
          { association: 'QuoteiduserUser', attributes: ['name', 'lastname', 'phone'] },
          {
            association: 'DetailidappointmentQuote',
            include: { association: 'DetailidservicesService' },
            raw: true,
            nest: true
          }
        ]
      });

      return { data, success: true };
    } catch (error) {
      console.log(error);

      return { success: false };
    }
  };

  GetAllForBusiness = async () => {
    try {
      const data = await this.Model.findAll({
        ...this.Config,
        include: [{ association: 'QuoteiduserUser', attributes: ['name', 'lastname'] }]
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
      const FieldPk = this.Model.primaryKeyAttribute;
      await this.Model.update(
        { state: 'inactive' },
        {
          where: {
            [FieldPk]: pk
          }
        }
      );

      return { success: true };
    } catch (error) {
      console.log(error);

      return { success: false };
    }
  };
}
