import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Setting extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        idbusiness: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          references: {
            model: 'business',
            key: 'idbusiness'
          }
        },
        starttime: {
          type: DataTypes.STRING(555),
          allowNull: false
        },
        timeends: {
          type: DataTypes.STRING(555),
          allowNull: false
        },
        nsa: {
          type: DataTypes.STRING(555),
          allowNull: false
        },
        ta: {
          type: DataTypes.STRING(555),
          allowNull: false
        },
        tba: {
          type: DataTypes.STRING(555),
          allowNull: false
        },
        ad: {
          type: DataTypes.STRING(555),
          allowNull: false
        },
        workingdays: {
          type: DataTypes.STRING(555),
          allowNull: false
        },
        lunchtime: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        startimelunch: {
          type: DataTypes.STRING(555),
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'settings',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: 'settings_pkey',
            unique: true,
            fields: [{ name: 'idbusiness' }]
          }
        ]
      }
    );
    return Setting;
  }
}
