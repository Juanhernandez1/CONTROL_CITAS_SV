import _sequelize from 'sequelize';
const {
  Model,
  Sequelize
} = _sequelize;
export default class Address extends Model {
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
      department: {
        type: DataTypes.STRING(555),
        allowNull: false
      },
      address: {
        type: DataTypes.STRING(555),
        allowNull: false
      },
      addressurl: {
        type: DataTypes.STRING(555),
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'addresses',
      schema: 'public',
      timestamps: false,
      indexes: [{
        name: 'addresses_pkey',
        unique: true,
        fields: [{
          name: 'idbusiness'
        }]
      }]
    });
    return Address;
  }

}