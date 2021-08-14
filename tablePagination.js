import { getUsersByInterval } from "./data.js";
import { insertDataIntoTable } from "./table.js";

let page = 0;
let numOfEntries = 1;

export const doNext = () => {
  page++;
  const start = page * numOfEntries;
  const end = start + numOfEntries;
  const users = getUsersByInterval(start, end);

  const tableClassName = `users-table`;
  insertDataIntoTable(tableClassName, users);

  return users;
};

export const doBack = () => {
  page--;
  const start = page * numOfEntries;
  const end = start + numOfEntries;

  const users = getUsersByInterval(start, end);

  const tableClassName = `users-table`;
  insertDataIntoTable(tableClassName, users);

  return users;
};

export const getUsersByCurrentPage = () => {
  const start = page * numOfEntries;
  const end = start + numOfEntries;
  const users = getUsersByInterval(start, end);

  return users;
};

export const setPage = (_page) => {
  page = _page;
};

export const setNumOfEntries = (num) => {
  numOfEntries = num;
};

export const getPage = () => {
  page;
};

export const getNumOfEntries = () => {
  return numOfEntries;
};
