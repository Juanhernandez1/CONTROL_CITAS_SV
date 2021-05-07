import _sequelize from 'sequelize';
const {
  Model,
  Sequelize
} = _sequelize;
export default class Access extends Model {
  static init(sequelize, DataTypes) {
    super.init({
      iduser: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'users',
          key: 'iduser'
        }
      },
      username: {
        type: DataTypes.STRING(555),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(555),
        allowNull: false
      },
      type: {
        type: DataTypes.CHAR(1),
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'access',
      schema: 'public',
      timestamps: false,
      indexes: [{
        name: 'access_pkey',
        unique: true,
        fields: [{
          name: 'iduser'
        }]
      }]
    });
    return Access;
  }

}