import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Freeday extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        idfreeday: {
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
        startdays: {
          type: DataTypes.DATEONLY,
          allowNull: false
        },
        endsdays: {
          type: DataTypes.DATEONLY,
          allowNull: false
        },
        state: {
          type: DataTypes.STRING(555),
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'freedays',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: 'freedays_pkey',
            unique: true,
            fields: [{ name: 'idfreeday' }]
          }
        ]
      }
    );
    return Freeday;
  }
}
