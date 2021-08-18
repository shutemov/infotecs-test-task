import { setUpTable } from "./setUpTable.js";
import { setUpFormActions } from "./setUpForm.js";
import { getUsersByCurrentPage } from "./data.js";
import { configurateEyeColorSelect } from "./form.js";
import { hideColumn } from "./columnHider.js";

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

//test
configurateEyeColorSelect("edit-form");
hideColumn(tableClassName,2)