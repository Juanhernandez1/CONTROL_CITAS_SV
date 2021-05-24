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

var Service = /*#__PURE__*/ (function (_Model) {
  (0, _inherits2['default'])(Service, _Model);

  var _super = _createSuper(Service);

  function Service() {
    (0, _classCallCheck2['default'])(this, Service);
    return _super.apply(this, arguments);
  }

  (0, _createClass2['default'])(Service, null, [
    {
      key: 'init',
      value: function init(sequelize, DataTypes) {
        (0, _get2['default'])((0, _getPrototypeOf2['default'])(Service), 'init', this).call(
          this,
          {
            idservices: {
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
            servicename: {
              type: DataTypes.STRING(555),
              allowNull: false
            },
            description: {
              type: DataTypes.STRING(555),
              allowNull: false
            },
            imageurl: {
              type: DataTypes.STRING(555),
              allowNull: false
            },
            price: {
              type: DataTypes.DECIMAL,
              allowNull: false
            },
            state: {
              type: DataTypes.STRING(555),
              allowNull: false
            }
          },
          {
            sequelize: sequelize,
            tableName: 'services',
            schema: 'public',
            timestamps: false,
            indexes: [
              {
                name: 'services_pkey',
                unique: true,
                fields: [
                  {
                    name: 'idservices'
                  }
                ]
              }
            ]
          }
        );
        return Service;
      }
    }
  ]);
  return Service;
})(Model);

exports['default'] = Service;
