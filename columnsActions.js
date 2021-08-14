import { getAllUsers, updateAllUsers } from "./data.js";
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
  insertDataIntoTable(targetTableClassName, sortedUsers);
};

export const updateTableByLastNameAlphabetSorting = (targetTableClassName) => {
  const sortedUsers = sortByLastName();
  updateAllUsers(sortedUsers);
  insertDataIntoTable(targetTableClassName, sortedUsers);
};

export const updateTableByAboutAlphabetSorting = (targetTableClassName) => {
  const sortedUsers = sortByAbout();
  updateAllUsers(sortedUsers);
  insertDataIntoTable(targetTableClassName, sortedUsers);
};

export const updateTableByEyeColorAlphabetSorting = (targetTableClassName) => {
  const sortedUsers = sortByEyeColor();
  updateAllUsers(sortedUsers);
  insertDataIntoTable(targetTableClassName, sortedUsers);
};
