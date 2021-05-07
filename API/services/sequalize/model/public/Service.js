import _sequelize from 'sequelize';
const {
  Model,
  Sequelize
} = _sequelize;
export default class Service extends Model {
  static init(sequelize, DataTypes) {
    super.init({
      idservices: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
      },
      idbusiness: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'business',
          key: 'idbusiness'
        }
      },
      servicename: {
        type: DataTypes.STRING(555),
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(555),
        allowNull: false
      },
      imageurl: {
        type: DataTypes.STRING(555),
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      state: {
        type: DataTypes.STRING(555),
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'services',
      schema: 'public',
      timestamps: false,
      indexes: [{
        name: 'services_pkey',
        unique: true,
        fields: [{
          name: 'idservices'
        }]
      }]
    });
    return Service;
  }

}