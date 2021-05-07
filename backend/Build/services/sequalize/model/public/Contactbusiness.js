'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _get2 = _interopRequireDefault(require('@babel/runtime/helpers/get'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn')
);

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _sequelize2 = _interopRequireDefault(require('sequelize'));

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf2['default'])(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2['default'])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0, _possibleConstructorReturn2['default'])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

var Model = _sequelize2['default'].Model,
  Sequelize = _sequelize2['default'].Sequelize;

var Contactbusiness = /*#__PURE__*/ (function (_Model) {
  (0, _inherits2['default'])(Contactbusiness, _Model);

  var _super = _createSuper(Contactbusiness);

  function Contactbusiness() {
    (0, _classCallCheck2['default'])(this, Contactbusiness);
    return _super.apply(this, arguments);
  }

  (0, _createClass2['default'])(Contactbusiness, null, [
    {
      key: 'init',
      value: function init(sequelize, DataTypes) {
        (0, _get2['default'])((0, _getPrototypeOf2['default'])(Contactbusiness), 'init', this).call(
          this,
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
          },
          {
            sequelize: sequelize,
            tableName: 'contactbusiness',
            schema: 'public',
            timestamps: false,
            indexes: [
              {
                name: 'contactbusiness_email_key',
                unique: true,
                fields: [
                  {
                    name: 'email'
                  }
                ]
              },
              {
                name: 'contactbusiness_pkey',
                unique: true,
                fields: [
                  {
                    name: 'idbusiness'
                  }
                ]
              }
            ]
          }
        );
        return Contactbusiness;
      }
    }
  ]);
  return Contactbusiness;
})(Model);

exports['default'] = Contactbusiness;
