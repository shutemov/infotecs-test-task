import { getAllUsers } from "./DataManager.js";
import { insertDataIntoTable } from "./TableManager.js";

const users = getAllUsers();
console.log("users from data manager", users);
export const sortFirstNameByAlphabet = () => {
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

};
