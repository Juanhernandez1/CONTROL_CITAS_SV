import CrudInterface from '../../../interface/CrudInterface';
export default class AppointmentCrud extends CrudInterface {
  static #instance;

  constructor(Model, Operations, LastFiveDays, MomentSv) {
    super();

    if (AppointmentCrud.#instance) {
      return AppointmentCrud.#instance;
    }

    AppointmentCrud.#instance = this;
    this.Model = Model;
    this.Operations = Operations;
    this.LastFiveDays = LastFiveDays;
    this.MomentSv = MomentSv;
    this.Config = {
      raw: true,
      nest: true
    };
  }

  GetPkForUsers = async (pk, iduser) => {
    try {
      const data = await this.Model.findByPk(pk, {
        where: {
          iduser
        },
        ...this.Config,
        include: [{
          association: 'AppointmentidbusinessBusiness',
          attributes: ['businessname']
        }, {
          association: 'DetailidappointmentAppointment',
          include: {
            association: 'DetailidservicesService',
            attributes: ['servicename']
          },
          raw: true,
          nest: true
        }]
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
  GetPkForBusiness = async (pk, idbusiness) => {
    try {
      const data = await this.Model.findByPk(pk, {
        where: {
          idbusiness
        },
        ...this.Config,
        include: [{
          association: 'AppointmentiduserUser',
          attributes: ['name', 'lastname', 'phone']
        }, {
          association: 'DetailidappointmentAppointment',
          include: {
            association: 'DetailidservicesService',
            attributes: ['servicename']
          },
          raw: true,
          nest: true
        }]
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
  GetAllForUsers = async iduser => {
    try {
      const data = await this.Model.findAll({
        where: {
          iduser
        },
        ...this.Config,
        include: [{
          association: 'AppointmentidbusinessBusiness',
          attributes: ['businessname']
        }, {
          association: 'DetailidappointmentAppointment',
          include: {
            association: 'DetailidservicesService',
            attributes: ['servicename']
          },
          raw: true,
          nest: true
        }]
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
  GetAllForBusiness = async idbusiness => {
    try {
      const data = await this.Model.findAll({
        where: {
          idbusiness
        },
        ...this.Config,
        include: [{
          association: 'AppointmentiduserUser',
          attributes: ['name', 'lastname', 'phone']
        }, {
          association: 'DetailidappointmentAppointment',
          include: {
            association: 'DetailidservicesService',
            attributes: ['servicename']
          },
          raw: true,
          nest: true
        }]
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
  TempAppointmentList = () => {
    return this.LastFiveDays();
  };
}