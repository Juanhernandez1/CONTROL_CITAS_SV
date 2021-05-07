"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var CrudInterface = /*#__PURE__*/function () {
  function CrudInterface() {
    (0, _classCallCheck2["default"])(this, CrudInterface);
  }

  (0, _createClass2["default"])(CrudInterface, [{
    key: "GetAll",
    value: function GetAll() {}
  }, {
    key: "GetPk",
    value: function GetPk(pk) {}
  }, {
    key: "SerachLikeAll",
    value: function SerachLikeAll(data) {}
  }, {
    key: "searchLikeOne",
    value: function searchLikeOne(data) {}
  }, {
    key: "Create",
    value: function Create(obj) {}
  }, {
    key: "Update",
    value: function Update(obj) {}
  }, {
    key: "Delete",
    value: function Delete(pk) {}
  }]);
  return CrudInterface;
}();

exports["default"] = CrudInterface;