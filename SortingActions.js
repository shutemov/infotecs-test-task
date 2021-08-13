import { getAllUsers } from "./DataManager.js";
import { insertDataIntoTable } from "./TableManager.js";

const users = getAllUsers();
console.log("users from data manager", users);
