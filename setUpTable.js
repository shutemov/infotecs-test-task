import {
  updateTableByFirstNameAlphabetSorting,
  updateTableByLastNameAlphabetSorting,
  updateTableByAboutAlphabetSorting,
  updateTableByEyeColorAlphabetSorting,
} from "./columnsActions.js";
import { getUserById } from "./data.js";
import { setDataIntoForm } from "./form.js";
import { setUpPagination } from "./setUpTablePagination.js";
import { insertDataIntoTable } from "./table.js";
import { getUsersByCurrentPage } from "./tablePagination.js";

export const setUpTableActions = (tableClassName) => {
  if (!tableClassName)
    throw new Error(`Class name: ${tableClassName} is not defined`);

  setUpTableHeaderAction(tableClassName);
  setUpTableRowAction(`.${tableClassName}__tbody`);
};

const setUpTableHeaderAction = (tableClassName) => {
  const tableHeader = document.querySelector(`.${tableClassName}__header-row`);

  if (!tableHeader)
    throw new Error(`Table header element not found: ${tableClassName}`);

  tableHeader.addEventListener("click", (event) => {
    const firstColumnClassName = `${tableClassName}__first-column-head`;
    const isFirstNameColumnClicked =
      event.target.classList.contains(firstColumnClassName);

    const secondColumnClassName = `${tableClassName}__second-column-head`;
    const isLastNameColumnClicked = event.target.classList.contains(
      secondColumnClassName
    );

    const thirdColumnClassName = `${tableClassName}__third-column-head`;
    const isAboutColumnClicked = event.target.classList.contains(thirdColumnClassName);

    const fourthColumnClassName = `${tableClassName}__fourth-column-head`;
    const isEyeColorColumnClicked = event.target.classList.contains(
      fourthColumnClassName
    );

    if (isFirstNameColumnClicked)
      updateTableByFirstNameAlphabetSorting(tableClassName);
    if (isLastNameColumnClicked) updateTableByLastNameAlphabetSorting(tableClassName);
    if (isAboutColumnClicked) updateTableByAboutAlphabetSorting(tableClassName);
    if (isEyeColorColumnClicked) updateTableByEyeColorAlphabetSorting(tableClassName);
  });
};

const setUpTableRowAction = (className) => {
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
