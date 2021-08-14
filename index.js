import { data as users } from "./data.js";
import { insertDataIntoTable } from "./table.js";
import { setUpTableActions } from "./setUpTable.js";
import { setUpFormActions } from "./setUpForm.js";

console.log("Users from index", users);

const tableClassName = "users-table";
setUpTableActions(tableClassName);
insertDataIntoTable(tableClassName, users);

const newTableClassName = "users-table-1";
setUpTableActions(newTableClassName);
insertDataIntoTable(newTableClassName, users);

const formClassName = "edit-form";
setUpFormActions(formClassName);
