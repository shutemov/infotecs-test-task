import {
  updateTableByFirstNameAlphabetSorting,
  updateTableByLastNameAlphabetSorting,
  updateTableByAboutAlphabetSorting,
  updateTableByEyeColorAlphabetSorting,
} from "./columnsActions.js";
import { getUserById } from "./dataManager.js";
import { setDataIntoForm } from "./form.js";

export const setUpTableActions = (tableClassName) => {
  if (!tableClassName) throw new Error(`Class name: ${tableClassName} is not defined`);

  setUpTableHeaderAction(tableClassName);
  setUpTableRowAction(`.${tableClassName}__tbody`);
};

const setUpTableHeaderAction = (className) => {
  const tableHeader = document.querySelector(`.${className}__header-row`);

  tableHeader.addEventListener("click", (event) => {
    const firstColumnClassName = `${className}__first-column-head`;
    const isFirstNameColumn =
      event.target.classList.contains(firstColumnClassName);

    const secondColumnClassName = `${className}__second-column-head`;
    const isLastNameColumn = event.target.classList.contains(
      secondColumnClassName
    );

    const thirdColumnClassName = `${className}__third-column-head`;
    const isAboutColumn = event.target.classList.contains(thirdColumnClassName);

    const fourthColumnClassName = `${className}__fourth-column-head`;
    const isEyeColorColumn = event.target.classList.contains(
      fourthColumnClassName
    );

    if (isFirstNameColumn) updateTableByFirstNameAlphabetSorting(className);
    if (isLastNameColumn) updateTableByLastNameAlphabetSorting(className);
    if (isAboutColumn) updateTableByAboutAlphabetSorting(className);
    if (isEyeColorColumn) updateTableByEyeColorAlphabetSorting(className);
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
