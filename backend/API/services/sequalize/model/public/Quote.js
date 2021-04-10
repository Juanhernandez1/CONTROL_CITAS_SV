import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Quote extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        idappointment: {
          autoIncrement: true,
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true
        },
        uuidappointment: {
          type: DataTypes.STRING(555),
          allowNull: false
        },
        iduser: {
          type: DataTypes.BIGINT,
          allowNull: false,
          references: {
            model: 'users',
            key: 'iduser'
          }
        },
        idbusiness: {
          type: DataTypes.BIGINT,
          allowNull: false,
          references: {
            model: 'business',
            key: 'idbusiness'
          }
        },
        dateappointment: {
          type: DataTypes.JSONB,
          allowNull: false
        },
        total: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        state: {
          type: DataTypes.STRING(555),
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'quotes',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: 'quotes_pkey',
            unique: true,
            fields: [{ name: 'idappointment' }]
          }
        ]
      }
    );
    return Quote;
  }
}
