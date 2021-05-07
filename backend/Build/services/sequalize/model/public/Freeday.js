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

var Freeday = /*#__PURE__*/ (function (_Model) {
  (0, _inherits2['default'])(Freeday, _Model);

  var _super = _createSuper(Freeday);

  function Freeday() {
    (0, _classCallCheck2['default'])(this, Freeday);
    return _super.apply(this, arguments);
  }

  (0, _createClass2['default'])(Freeday, null, [
    {
      key: 'init',
      value: function init(sequelize, DataTypes) {
        (0, _get2['default'])((0, _getPrototypeOf2['default'])(Freeday), 'init', this).call(
          this,
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
            sequelize: sequelize,
            tableName: 'freedays',
            schema: 'public',
            timestamps: false,
            indexes: [
              {
                name: 'freedays_pkey',
                unique: true,
                fields: [
                  {
                    name: 'idfreeday'
                  }
                ]
              }
            ]
          }
        );
        return Freeday;
      }
    }
  ]);
  return Freeday;
})(Model);

exports['default'] = Freeday;
