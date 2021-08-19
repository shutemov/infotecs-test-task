import { setUpTable } from "./setUpTable.js";
import { setUpFormActions } from "./setUpForm.js";
import { getUsersByCurrentPage } from "./data.js";
import { configurateEyeColorSelect } from "./form.js";
import { createPagination } from "./pagination.js";
import { hideColumn } from "./setUpColumnHider.js";
import { createColumnHider } from "./columnHider.js";

const tableClassName = "users-table";

//test
configurateEyeColorSelect("edit-form");
hideColumn(tableClassName);
createPagination(tableClassName);
createColumnHider(tableClassName);

const users = getUsersByCurrentPage(tableClassName);
console.log("Users from index", users);

const numOfUsersOnPage = 10;
setUpTable(tableClassName, numOfUsersOnPage);

// const newTableClassName = "users-table-1";
// setUpTableActions(newTableClassName);
// insertDataIntoTable(newTableClassName, users);

const formClassName = "edit-form";
setUpFormActions(formClassName, tableClassName);


