import {
  updateTableByFirstNameAlphabetSorting,
  updateTableByLastNameAlphabetSorting,
  updateTableByAboutAlphabetSorting,
  updateTableByEyeColorAlphabetSorting,
} from "./columnsActions.js";
import { getUserById, getUsersByCurrentPage } from "./data.js";
import { setDataIntoForm } from "./form.js";
import { setUpPagination } from "./setUpTablePagination.js";
import { insertDataIntoTable } from "./table.js";

export const setUpTable = (tableClassName, numOfIntriesOnPage) => {
  setUpTableListeners(tableClassName);
  setUpPagination(tableClassName, numOfIntriesOnPage);
  const users = getUsersByCurrentPage(tableClassName);
  insertDataIntoTable(tableClassName, users);
};

const setUpTableListeners = (tableClassName) => {
  if (!tableClassName)
    throw new Error(`Class name: ${tableClassName} is not defined`);

  setUpTableHeaderListener(tableClassName);
  setUpTableRowListener(`.${tableClassName}__tbody`);
};

const setUpTableHeaderListener = (tableClassName) => {
  const tableHeader = document.querySelector(`.${tableClassName}__header-row`);

  if (!tableHeader)
    throw new Error(`Table header element not found: ${tableClassName}`);

  tableHeader.addEventListener("click", (event) => {
    const firstColumnClassName = `${tableClassName}__1-column-head`;
    const isFirstNameColumnClicked =
      event.target.classList.contains(firstColumnClassName);

    const secondColumnClassName = `${tableClassName}__2-column-head`;
    const isLastNameColumnClicked = event.target.classList.contains(
      secondColumnClassName
    );

    const thirdColumnClassName = `${tableClassName}__3-column-head`;
    const isAboutColumnClicked =
      event.target.classList.contains(thirdColumnClassName);

    const fourthColumnClassName = `${tableClassName}__4-column-head`;
    const isEyeColorColumnClicked = event.target.classList.contains(
      fourthColumnClassName
    );

    if (isFirstNameColumnClicked)
      updateTableByFirstNameAlphabetSorting(tableClassName);
    if (isLastNameColumnClicked)
      updateTableByLastNameAlphabetSorting(tableClassName);
    if (isAboutColumnClicked) updateTableByAboutAlphabetSorting(tableClassName);
    if (isEyeColorColumnClicked)
      updateTableByEyeColorAlphabetSorting(tableClassName);
  });
};

const setUpTableRowListener = (className) => {
  const tableTBody = document.querySelector(className);

  tableTBody.addEventListener("click", (event) => {
    const tableRow = event.target.closest("tr");
    const userId = tableRow.getAttribute("data-id");

    const user = getUserById(userId);
    setDataIntoForm(user);

    const storage = window.localStorage;
    storage.setItem("userId", userId);
  });
};
