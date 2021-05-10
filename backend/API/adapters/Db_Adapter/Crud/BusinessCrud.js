import CrudInterface from '../../../interface/CrudInterface';
import pagination from '../../../assets/pagination';

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
      return { success: false };
    }
  };

  GetAll = async page => {
    const { getPreviousPage, getOffset, getNextPage } = pagination;
    try {
      const { count, rows } = await this.Model.findAndCountAll({
        ...this.Config,
        offset: getOffset(page, 6),
        limit: 6,
        include: [{ association: 'address' }, { association: 'contactbusiness' }],
        where: {
          state: 'Activo'
        }
      });

      return {
        previousPage: getPreviousPage(page),
        currentPage: page,
        nextPage: getNextPage(page, 6, count),
        totalPage: Math.ceil(count / 6),
        limit: 6,
        data: rows,
        success: true
      };
    } catch (error) {
      console.log(error);

      return { success: false };
    }
  };

  GetAllNoPaginate = async state => {
    try {
      let data;
      console.log(state);
      if (state === 'ShowHide') {
        data = await this.Model.findAll({
          ...this.Config,
          where: { state }
        });
      } else {
        data = await this.Model.findAll({
          ...this.Config,
          where: { state: 'Activo' }
        });
      }
      return { data, success: true };
    } catch (error) {
      console.log(error);

      return { success: false };
    }
  };

  GetLikeName = async (searchData, page) => {
    const { getPreviousPage, getOffset, getNextPage } = pagination;
    try {
      const { count, rows } = await this.Model.findAndCountAll({
        ...this.Config,
        where: {
          businessname: {
            [this.Operatios.like]: `%${searchData}%`
          },
          state: 'Activo'
        },
        offset: getOffset(page, 6),
        limit: 6,
        include: [{ association: 'address' }, { association: 'contactbusiness' }]
      });

      return {
        previousPage: getPreviousPage(page),
        currentPage: page,
        nextPage: getNextPage(page, 6, count),
        totalPage: Math.ceil(count / 6),
        limit: 6,
        data: rows,
        success: true
      };
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
