import { insertDataIntoTable } from "./table.js";
import { setUpTable } from "./setUpTable.js";
import { setUpFormActions } from "./setUpForm.js";
import { setUpPagination } from "./setUpTablePagination.js";
import { getUsersByCurrentPage } from "./tablePagination.js";

//test
// setUpPagination();

const users = getUsersByCurrentPage();
console.log("Users from index", users);

const tableClassName = "users-table";
const numOfUsersOnPage = 10;
setUpTable(tableClassName, numOfUsersOnPage);

// const newTableClassName = "users-table-1";
// setUpTableActions(newTableClassName);
// insertDataIntoTable(newTableClassName, users);

const formClassName = "edit-form";
setUpFormActions(formClassName);
