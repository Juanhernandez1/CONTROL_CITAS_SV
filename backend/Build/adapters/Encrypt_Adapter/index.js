'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized')
);

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn')
);

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _EncryptInterface2 = _interopRequireDefault(require('../../interface/ EncryptInterface'));

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

function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
  _classCheckPrivateStaticAccess(receiver, classConstructor);
  _classCheckPrivateStaticFieldDescriptor(descriptor, 'set');
  _classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}

function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError('attempted to set read only private field');
    }
    descriptor.value = value;
  }
}

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
  _classCheckPrivateStaticAccess(receiver, classConstructor);
  _classCheckPrivateStaticFieldDescriptor(descriptor, 'get');
  return _classApplyDescriptorGet(receiver, descriptor);
}

function _classCheckPrivateStaticFieldDescriptor(descriptor, action) {
  if (descriptor === undefined) {
    throw new TypeError('attempted to ' + action + ' private static field before its declaration');
  }
}

function _classCheckPrivateStaticAccess(receiver, classConstructor) {
  if (receiver !== classConstructor) {
    throw new TypeError('Private static access of wrong provenance');
  }
}

function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }
  return descriptor.value;
}

var EncryptPassword = /*#__PURE__*/ (function (_EncryptInterface) {
  (0, _inherits2['default'])(EncryptPassword, _EncryptInterface);

  var _super = _createSuper(EncryptPassword);

  function EncryptPassword(Encrypt) {
    var _this;

    (0, _classCallCheck2['default'])(this, EncryptPassword);
    _this = _super.call(this);
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'ComparePassword',
      function (hashPassword, password) {
        var valid = _this.encrypter.compareSync(password, hashPassword);

        return valid;
      }
    );
    (0, _defineProperty2['default'])(
      (0, _assertThisInitialized2['default'])(_this),
      'EncryptUserPassword',
      function (password) {
        var hash = _this.encrypter.hashSync(password, _this.salt);

        return hash;
      }
    );

    if (_classStaticPrivateFieldSpecGet(EncryptPassword, EncryptPassword, _instance)) {
      return (0, _possibleConstructorReturn2['default'])(
        _this,
        _classStaticPrivateFieldSpecGet(EncryptPassword, EncryptPassword, _instance)
      );
    }

    _classStaticPrivateFieldSpecSet(
      EncryptPassword,
      EncryptPassword,
      _instance,
      (0, _assertThisInitialized2['default'])(_this)
    );

    _this.encrypter = Encrypt.bcrypt;
    _this.salt = Encrypt.salt;
    return _this;
  }

  return EncryptPassword;
})(_EncryptInterface2['default']);

exports['default'] = EncryptPassword;
var _instance = {
  writable: true,
  value: void 0
};
