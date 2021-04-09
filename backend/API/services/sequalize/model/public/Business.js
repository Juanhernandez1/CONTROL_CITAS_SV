import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Business extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        idbusiness: {
          autoIncrement: true,
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true
        },
        uuidbusiness: {
          type: DataTypes.STRING(555),
          allowNull: false,
          unique: 'business_uuidbusiness_key'
        },
        businessname: {
          type: DataTypes.STRING(555),
          allowNull: false
        },
        description: {
          type: DataTypes.STRING(555),
          allowNull: false
        },
        iduser: {
          type: DataTypes.BIGINT,
          allowNull: false,
          references: {
            model: 'users',
            key: 'iduser'
          },
          unique: 'business_iduser_key'
        },
        state: {
          type: DataTypes.STRING(555),
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'business',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: 'business_iduser_key',
            unique: true,
            fields: [{ name: 'iduser' }]
          },
          {
            name: 'business_pkey',
            unique: true,
            fields: [{ name: 'idbusiness' }]
          },
          {
            name: 'business_uuidbusiness_key',
            unique: true,
            fields: [{ name: 'uuidbusiness' }]
          }
        ]
      }
    );
    return Business;
  }
}
