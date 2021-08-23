import { initTable } from "./setUpTable.js";
import { initForm } from "./setUpForm.js";
import { createFormModel } from "./form.js";
import { createPaginationModel } from "./pagination.js";
import { initColumnHider } from "./setUpColumnHider.js";
import { createColumnHiderModel } from "./columnHider.js";
import { initPagination } from "./setUpTablePagination.js";

/**
 * 1st table
 */

const tableClassName = "users-table";

createPaginationModel(tableClassName);
createColumnHiderModel(tableClassName);
createFormModel(tableClassName);

//Инициализируем
const numOfUsersOnPage = 10;
const formClassName = "edit-form";

initPagination(tableClassName, numOfUsersOnPage);
initColumnHider(tableClassName);
initForm(tableClassName, formClassName);

// в конце
initTable(tableClassName);

/*
    2nd table
*/

// const tableClassName1 = "users-table-1";

// //Создаем модели
// createPaginationModel(tableClassName);
// createColumnHiderModel(tableClassName);
// createFormModel(tableClassName);

// //Инициализируем
// const numOfUsersOnPage = 5;
// const formClassName = "edit-form";

// initPagination(tableClassName, numOfUsersOnPage);
// initColumnHider(tableClassName);
// initForm(tableClassName, formClassName);

// // в конце
// initTable(tableClassName);
