import CrudInterface from '../../../interface/CrudInterface';
import { v4 as uuidv4 } from 'uuid';

export default class AppointmentCrud extends CrudInterface {
  static #instance;

  constructor(Model, Operations) {
    super();

    if (AppointmentCrud.#instance) {
      return AppointmentCrud.#instance;
    }

    AppointmentCrud.#instance = this;
    this.Model = Model;
    this.Operations = Operations;
    this.Config = {
      raw: true,
      nest: true
    };
  }

  GetFullDate = async (id, date) => {
    try {
      const data = await this.Model.findAll({
        where: {
          idbusiness: id,
          dateappointment: {
            fulldate: date
          }
        },
        ...this.Config
      });

      return { data, success: true };
    } catch (error) {
      console.log(error);

      return { success: false };
    }
  };

  GetAppointmen = async uuidappointment => {
    try {
      const data = await this.Model.findOne({
        where: {
          uuidappointment
        },
        ...this.Config
      });

      return { data, success: true };
    } catch (error) {
      console.log(error);

      return { success: false };
    }
  };

  GetPkForUsers = async (pk, iduser) => {
    try {
      const data = await this.Model.findByPk(pk, {
        where: { iduser },
        ...this.Config,
        include: [
          {
            association: 'AppointmentidbusinessBusiness',
            attributes: ['businessname']
          },
          {
            association: 'DetailidappointmentAppointment',
            include: { association: 'DetailidservicesService', attributes: ['servicename'] },
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

  GetPkForBusiness = async (uuidappointment, idbusiness) => {
    try {
      const data = await this.Model.findAll({
        where: { idbusiness, uuidappointment },
        ...this.Config,
        include: [
          {
            association: 'AppointmentiduserUser',
            attributes: ['name', 'lastname', 'phone', 'state']
          },
          { association: 'details', include: [{ association: 'DetailidservicesService' }] }
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
            association: 'AppointmentidbusinessBusiness',
            attributes: ['businessname']
          },
          {
            association: 'DetailidappointmentAppointment',
            include: { association: 'DetailidservicesService', attributes: ['servicename'] },
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

  GetAllForBusiness = async idbusiness => {
    try {
      const data = await this.Model.findAll({
        where: { idbusiness },
        ...this.Config,
        include: [
          { association: 'AppointmentiduserUser', attributes: ['name', 'lastname', 'phone'] },
          {
            association: 'DetailidappointmentAppointment',
            include: { association: 'DetailidservicesService', attributes: ['servicename'] },
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
        { state: 'inactivo' },
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
