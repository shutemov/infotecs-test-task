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
