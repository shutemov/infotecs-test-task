import { setUpTable } from "./setUpTable.js";
import { initForm } from "./setUpForm.js";
import { createFormModel } from "./form.js";
import { createPaginationModel } from "./pagination.js";
import { setUpColumnHiderEvents } from "./setUpColumnHider.js";
import { createColumnHiderModel } from "./columnHider.js";

const tableClassName = "users-table";

//create models
createPaginationModel(tableClassName);
createColumnHiderModel(tableClassName);
createFormModel(tableClassName);


//init's
const numOfUsersOnPage = 10;
setUpTable(tableClassName, numOfUsersOnPage);

const formClassName = "edit-form";
setUpColumnHiderEvents(tableClassName);

initForm(tableClassName, formClassName);

// const newTableClassName = "users-table-1";
// setUpTableActions(newTableClassName);
// insertDataIntoTable(newTableClassName, users);
