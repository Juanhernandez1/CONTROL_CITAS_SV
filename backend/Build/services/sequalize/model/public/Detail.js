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

var Detail = /*#__PURE__*/ (function (_Model) {
  (0, _inherits2['default'])(Detail, _Model);

  var _super = _createSuper(Detail);

  function Detail() {
    (0, _classCallCheck2['default'])(this, Detail);
    return _super.apply(this, arguments);
  }

  (0, _createClass2['default'])(Detail, null, [
    {
      key: 'init',
      value: function init(sequelize, DataTypes) {
        (0, _get2['default'])((0, _getPrototypeOf2['default'])(Detail), 'init', this).call(
          this,
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
                model: 'appointment',
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
            price: {
              type: DataTypes.DECIMAL,
              allowNull: false
            }
          },
          {
            sequelize: sequelize,
            tableName: 'details',
            schema: 'public',
            timestamps: false,
            indexes: [
              {
                name: 'details_pkey',
                unique: true,
                fields: [
                  {
                    name: 'iddetails'
                  }
                ]
              }
            ]
          }
        );
        return Detail;
      }
    }
  ]);
  return Detail;
})(Model);

exports['default'] = Detail;
