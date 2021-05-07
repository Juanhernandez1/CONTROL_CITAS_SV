import _sequelize from 'sequelize';
const {
  Model,
  Sequelize
} = _sequelize;
export default class Contactbusiness extends Model {
  static init(sequelize, DataTypes) {
    super.init({
      idbusiness: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'business',
          key: 'idbusiness'
        }
      },
      phone: {
        type: DataTypes.STRING(555),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(555),
        allowNull: false,
        unique: 'contactbusiness_email_key'
      },
      fabookurl: {
        type: DataTypes.STRING(555),
        allowNull: true
      },
      whatsappurl: {
        type: DataTypes.STRING(555),
        allowNull: true
      },
      twitterurl: {
        type: DataTypes.STRING(555),
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'contactbusiness',
      schema: 'public',
      timestamps: false,
      indexes: [{
        name: 'contactbusiness_email_key',
        unique: true,
        fields: [{
          name: 'email'
        }]
      }, {
        name: 'contactbusiness_pkey',
        unique: true,
        fields: [{
          name: 'idbusiness'
        }]
      }]
    });
    return Contactbusiness;
  }

}