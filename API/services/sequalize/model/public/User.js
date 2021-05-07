import _sequelize from 'sequelize';
const {
  Model,
  Sequelize
} = _sequelize;
export default class User extends Model {
  static init(sequelize, DataTypes) {
    super.init({
      iduser: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
      },
      uuiduser: {
        type: DataTypes.STRING(555),
        allowNull: false,
        unique: 'users_uuiduser_key'
      },
      name: {
        type: DataTypes.STRING(555),
        allowNull: false
      },
      lastname: {
        type: DataTypes.STRING(555),
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING(555),
        allowNull: true
      },
      email: {
        type: DataTypes.STRING(555),
        allowNull: true,
        unique: 'users_email_key'
      },
      uuidfacebook: {
        type: DataTypes.STRING(555),
        allowNull: true,
        unique: 'users_uuidfacebook_key'
      },
      uuidgoogle: {
        type: DataTypes.STRING(555),
        allowNull: true,
        unique: 'users_uuidgoogle_key'
      },
      state: {
        type: DataTypes.STRING(555),
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'users',
      schema: 'public',
      timestamps: false,
      indexes: [{
        name: 'users_email_key',
        unique: true,
        fields: [{
          name: 'email'
        }]
      }, {
        name: 'users_pkey',
        unique: true,
        fields: [{
          name: 'iduser'
        }]
      }, {
        name: 'users_uuidfacebook_key',
        unique: true,
        fields: [{
          name: 'uuidfacebook'
        }]
      }, {
        name: 'users_uuidgoogle_key',
        unique: true,
        fields: [{
          name: 'uuidgoogle'
        }]
      }, {
        name: 'users_uuiduser_key',
        unique: true,
        fields: [{
          name: 'uuiduser'
        }]
      }]
    });
    return User;
  }

}