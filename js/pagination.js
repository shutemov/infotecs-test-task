import { getNumberOfUser } from "./data.js";
import { Pagination } from "./models/Pagination.js";

/**
 * Модуль хранит объявленные пагинации и предоставлет api для работы с ними
 */

const paginations = [];

export const createPaginationModel = (tableClassName) => {
  const isExistPagination = getPagination(tableClassName);
  if (isExistPagination) return;

  const pagination = new Pagination(tableClassName);

  paginations.push(pagination);
};

export const getPagination = (tableClassName) => {
  return paginations.find((pagination) => {
    const targetTableClassName = pagination.getTable();
    return targetTableClassName === tableClassName;
  });
};

export const setPage = (tableClassName, page) => {
  const pagination = getPagination(tableClassName);
  pagination.setPage(page);
};

export const setNumOfEntries = (tableClassName, num) => {
  const pagination = getPagination(tableClassName);
  pagination.setNumOfEntries(num);
};

export const getCurrentPage = (tableClassName) => {
  const pagination = getPagination(tableClassName);
  return pagination.getPage();
};

export const getNumOfEntries = (tableClassName) => {
  const pagination = getPagination(tableClassName);
  return pagination.getNumOfEntries();
};

export const getTotalNumOfPages = (tableClassName) => {
  const pagination = getPagination(tableClassName);
  const numOfEntries = pagination.getNumOfEntries();
  const numOfUsers = getNumberOfUser();
  const totalNumOfPages = numOfUsers / numOfEntries;

  return totalNumOfPages;
};

export const increasePage = (tableClassName, num) => {
  const pagination = getPagination(tableClassName);
  pagination.increasePage(num);
};

export const decreasePage = (tableClassName, num) => {
  const pagination = getPagination(tableClassName);
  pagination.decreasePage(num);
};
