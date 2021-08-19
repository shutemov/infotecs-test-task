import { getAllUsers, getUsersByCurrentPage, updateAllUsers } from "./data.js";
import { insertDataIntoTable } from "./table.js";
import {
  sortByFirstName,
  sortByLastName,
  sortByAbout,
  sortByEyeColor,
} from "./sorting.js";

const users = getAllUsers();
console.log("users from data manager", users);

export const updateTableByFirstNameAlphabetSorting = (tableClassName) => {
  const sortedUsers = sortByFirstName();
  updateAllUsers(sortedUsers);

  const currentPageUsers = getUsersByCurrentPage(tableClassName);
  insertDataIntoTable(tableClassName, currentPageUsers);
};

export const updateTableByLastNameAlphabetSorting = (tableClassName) => {
  const sortedUsers = sortByLastName();
  updateAllUsers(sortedUsers);

  const currentPageUsers = getUsersByCurrentPage(tableClassName);
  insertDataIntoTable(tableClassName, currentPageUsers);
};

export const updateTableByAboutAlphabetSorting = (tableClassName) => {
  const sortedUsers = sortByAbout();
  updateAllUsers(sortedUsers);

  const currentPageUsers = getUsersByCurrentPage(tableClassName);
  insertDataIntoTable(tableClassName, currentPageUsers);
};

export const updateTableByEyeColorAlphabetSorting = (tableClassName) => {
  const sortedUsers = sortByEyeColor();
  updateAllUsers(sortedUsers);

  const currentPageUsers = getUsersByCurrentPage(tableClassName);
  insertDataIntoTable(tableClassName, currentPageUsers);
};
