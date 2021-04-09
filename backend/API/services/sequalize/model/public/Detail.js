import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Detail extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        iddetails: {
          autoIncrement: true,
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true
        },
        idappointment: {
          type: DataTypes.BIGINT,
          allowNull: false,
          references: {
            model: 'quotes',
            key: 'idappointment'
          }
        },
        idservices: {
          type: DataTypes.BIGINT,
          allowNull: false,
          references: {
            model: 'services',
            key: 'idservices'
          }
        },
        total: {
          type: DataTypes.DECIMAL,
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'details',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: 'details_pkey',
            unique: true,
            fields: [{ name: 'iddetails' }]
          }
        ]
      }
    );
    return Detail;
  }
}
