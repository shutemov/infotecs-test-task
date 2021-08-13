import { getAllUsers } from "./DataManager.js";
import { insertDataIntoTable } from "./TableManager.js";

const users = getAllUsers();
console.log("users from data manager", users);
export const sortFirstNameByAlphabet = () => {
  const sortedUsers = users.sort(
    firstNameComparatorByAlphabet("name", "firstName")
  );
  insertDataIntoTable(sortedUsers);
};

export const sortLastNameByAlphabet = () => {
  const sortedUsers = users.sort(
    lastNameComparatorByAlphabet("name", "lastName")
  );
  insertDataIntoTable(sortedUsers);
};
const firstNameComparatorByAlphabet = (...path) => {
  const [name, firstName] = path;
  return (a, b) => {
    if (a[name][firstName] < b[name][firstName]) return -1;
    if (a[name][firstName] > b[name][firstName]) return 1;
    return 0;
  };
};

const lastNameComparatorByAlphabet = (...path) => {
  const [name, lastName] = path;
  return (a, b) => {
    if (a[name][lastName] < b[name][lastName]) return -1;
    if (a[name][lastName] > b[name][lastName]) return 1;
    return 0;
  };
};

const aboutComparatorByAlphabet = (...path) => {
  const [about] = path;
  return (a, b) => {
    if (a[about] < b[about]) return -1;
    if (a[about] > b[about]) return 1;
    return 0;
  };
};

const eyeColorComparatorByAlphabet = (...path) => {
  const [eyeColor] = path;
  return (a, b) => {
    if (a[eyeColor] < b[eyeColor]) return -1;
    if (a[eyeColor] > b[eyeColor]) return 1;
    return 0;
  };
};
