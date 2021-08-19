import { getNumberOfUser } from "./data.js";

/*
  {
    table:test, 
    state:{
      page:0,
      numOfEntries:1
    }
  }
*/

const paginations = [];

export const createPagination = (tableClassName) => {
  const isExistPagination = getPagination(tableClassName)
  if(isExistPagination) return

  const pagination = {
    table: tableClassName,
    state: {
      page: 0,
      numOfEntries: 1,
    },
  };

  paginations.push(pagination);
};

export const getPagination = (tableClassName) => {
  return paginations.find((pagination) => {
    return pagination.table === tableClassName;
  });
};

export const setPage = (tableClassName, page) => {
  const pagination = getPagination(tableClassName);
  pagination.state.page = page;
};

export const setNumOfEntries = (tableClassName, num) => {
  const pagination = getPagination(tableClassName);
  pagination.state.numOfEntries = num;
};

export const getCurrentPage = (tableClassName) => {
  const pagination = getPagination(tableClassName);
  return pagination.state.page;
};

export const getNumOfEntries = () => {
  return numOfEntries;
  const pagination = getPagination(tableClassName);
  return pagination.state.numOfEntries;
};

export const getTotalNumOfPages = () => {
  const pagination = getPagination(tableClassName);
  const numOfEntries = pagination.state.numOfEntries;
  const numOfUsers = getNumberOfUser();
  const totalNumOfPages = numOfUsers / numOfEntries;
  return totalNumOfPages;
};

export const increasePage = (num) => {
  page += num ? num : 1;
  return page;
  pagination.state.page += num ? num : 1;
  return pagination.state.page;
};

export const decreasePage = (tableClassName, num) => {
  const pagination = getPagination(tableClassName);
  pagination.state.page -= num ? num : 1;
  return pagination.state.page;
};
