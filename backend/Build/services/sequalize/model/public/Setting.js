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

var Setting = /*#__PURE__*/ (function (_Model) {
  (0, _inherits2['default'])(Setting, _Model);

  var _super = _createSuper(Setting);

  function Setting() {
    (0, _classCallCheck2['default'])(this, Setting);
    return _super.apply(this, arguments);
  }

  (0, _createClass2['default'])(Setting, null, [
    {
      key: 'init',
      value: function init(sequelize, DataTypes) {
        (0, _get2['default'])((0, _getPrototypeOf2['default'])(Setting), 'init', this).call(
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
            sequelize: sequelize,
            tableName: 'settings',
            schema: 'public',
            timestamps: false,
            indexes: [
              {
                name: 'settings_pkey',
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
        return Setting;
      }
    }
  ]);
  return Setting;
})(Model);

exports['default'] = Setting;
