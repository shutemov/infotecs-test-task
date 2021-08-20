import { initTable } from "./setUpTable.js";
import { initForm } from "./setUpForm.js";
import { createFormModel } from "./form.js";
import { createPaginationModel } from "./pagination.js";
import { initColumnHider, setUpColumnHiderEvents } from "./setUpColumnHider.js";
import { createColumnHiderModel } from "./columnHider.js";

const tableClassName = "users-table";

//create models
createPaginationModel(tableClassName);
createColumnHiderModel(tableClassName);
createFormModel(tableClassName);

//init's
const numOfUsersOnPage = 10;
initTable(tableClassName, numOfUsersOnPage);

initColumnHider(tableClassName);
const formClassName = "edit-form";
initForm(tableClassName, formClassName);


