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

