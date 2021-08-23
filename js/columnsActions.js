import { getUsersByCurrentPage, updateAllUsers } from "./data.js";
import { insertDataIntoTable } from "./table.js";
import {
  sortByFirstName,
  sortByLastName,
  sortByAbout,
  sortByEyeColor,
} from "./sorting.js";

/**
 * Модуль экспортирует экшены для эвентов ячеек thead
 */

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
