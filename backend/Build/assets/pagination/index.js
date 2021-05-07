"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getOffset = function getOffset(page, limit) {
  return page * limit - limit;
};

var getNextPage = function getNextPage(page, limit, total) {
  if (total / limit > page) {
    return page + 1;
  }

  return null;
};

var getPreviousPage = function getPreviousPage(page) {
  if (page <= 1) {
    return null;
  }

  return page - 1;
};

var pagination = {
  getPreviousPage: getPreviousPage,
  getOffset: getOffset,
  getNextPage: getNextPage
};
var _default = pagination;
exports["default"] = _default;