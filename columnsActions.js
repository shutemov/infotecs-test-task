import { getAllUsers } from "./dataManager.js";
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
  insertDataIntoTable(targetTableClassName, sortedUsers);
};

export const updateTableByLastNameAlphabetSorting = (targetTableClassName) => {
  const sortedUsers = sortByLastName();
  insertDataIntoTable(targetTableClassName, sortedUsers);
};

export const updateTableByAboutAlphabetSorting = (targetTableClassName) => {
  const sortedUsers = sortByAbout();
  insertDataIntoTable(targetTableClassName, sortedUsers);
};

export const updateTableByEyeColorAlphabetSorting = (targetTableClassName) => {
  const sortedUsers = sortByEyeColor();
  insertDataIntoTable(targetTableClassName, sortedUsers);
};
