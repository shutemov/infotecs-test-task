import { getAllUsers } from "./DataManager.js";
import { insertDataIntoTable } from "./TableManager.js";

const users = getAllUsers();
console.log("users from data manager", users);
const firstNameComparatorByAlphabet = (...path) => {
  const [name, firstName] = path;
  return (a, b) => {
    if (a[name][firstName] < b[name][firstName]) return -1;
    if (a[name][firstName] > b[name][firstName]) return 1;
    return 0;
  };
};

};
