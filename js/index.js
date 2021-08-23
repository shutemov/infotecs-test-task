import { initTable } from "./setUpTable.js";
import { initForm } from "./setUpForm.js";
import { createFormModel } from "./form.js";
import { createPaginationModel } from "./pagination.js";
import { initColumnHider } from "./setUpColumnHider.js";
import { createColumnHiderModel } from "./columnHider.js";

/**
 * 1st table
 */

const tableClassName = "users-table";

//Создаем модели
createPaginationModel(tableClassName);
createColumnHiderModel(tableClassName);
createFormModel(tableClassName);

//Инициализируем
const numOfUsersOnPage = 10;
initTable(tableClassName, numOfUsersOnPage);

initColumnHider(tableClassName);
const formClassName = "edit-form";
initForm(tableClassName, formClassName);

/*
    2nd table
*/

// const secondTableClassName = "users-table-1";

// //create models
// createPaginationModel(secondTableClassName);
// createColumnHiderModel(secondTableClassName);
// createFormModel(secondTableClassName);

// //init's
// const numOfUsersOnPageForSecondTable = 5;
// initTable(secondTableClassName, numOfUsersOnPageForSecondTable);

// initColumnHider(secondTableClassName);
// const formClassNameForSecondTable = "edit-form";
// initForm(secondTableClassName, formClassNameForSecondTable);
