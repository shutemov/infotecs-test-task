import { initTable } from "./setUpTable.js";
import { initForm } from "./setUpForm.js";
import { createFormModel } from "./form.js";
import { createPaginationModel } from "./pagination.js";
import { initColumnHider } from "./setUpColumnHider.js";
import { createColumnHiderModel } from "./columnHider.js";
import { initPagination } from "./setUpTablePagination.js";

/**
 * 1-ая таблица
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

/**
 * 2-ая таблица (+ необходимо расскоменитровать код в index.html)
 */


// const tableClassName1 = "users-table-1";

// //Создаем модели
// createPaginationModel(tableClassName1);
// createColumnHiderModel(tableClassName1);
// createFormModel(tableClassName1);

// //Инициализируем
// const numOfUsersOnPage1 = 5;
// const formClassName1 = "edit-form";

// initPagination(tableClassName1, numOfUsersOnPage1);
// initColumnHider(tableClassName1);
// initForm(tableClassName1, formClassName1);

// // в конце
// initTable(tableClassName1);
