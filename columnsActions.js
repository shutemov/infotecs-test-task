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

export const updateTableByFirstNameAlphabetSorting = (targetTableClassName) => {
  const sortedUsers = sortByFirstName();
  updateAllUsers(sortedUsers);

  const currentPageUsers = getUsersByCurrentPage();
  insertDataIntoTable(targetTableClassName, currentPageUsers);
};

export const updateTableByLastNameAlphabetSorting = (targetTableClassName) => {
  const sortedUsers = sortByLastName();
  updateAllUsers(sortedUsers);

  const currentPageUsers = getUsersByCurrentPage();
  insertDataIntoTable(targetTableClassName, currentPageUsers);
};

export const updateTableByAboutAlphabetSorting = (targetTableClassName) => {
  const sortedUsers = sortByAbout();
  updateAllUsers(sortedUsers);

  const currentPageUsers = getUsersByCurrentPage();
  insertDataIntoTable(targetTableClassName, currentPageUsers);
};

export const updateTableByEyeColorAlphabetSorting = (targetTableClassName) => {
  const sortedUsers = sortByEyeColor();
  updateAllUsers(sortedUsers);

  const currentPageUsers = getUsersByCurrentPage();
  insertDataIntoTable(targetTableClassName, currentPageUsers);
};
