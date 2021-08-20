import { setUpTable } from "./setUpTable.js";
import { initForm } from "./setUpForm.js";
import { createFormModel } from "./form.js";
import { createPaginationModel } from "./pagination.js";
import { setUpColumnHiderEvents } from "./setUpColumnHider.js";
import { createColumnHiderModel } from "./columnHider.js";

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


