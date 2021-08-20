import { addHiddenColumn, removeHiddenColumn } from "./columnHider.js";
import { getUsersByCurrentPage } from "./data.js";
import { insertDataIntoTable } from "./table.js";

export const initColumnHider = (tableClassName) => {
  setUpColumnHiderEvents(tableClassName);
};

export const setUpColumnHiderEvents = (tableClassName) => {
  const hiderSection = document.querySelector(
    `.${tableClassName}__column-hider`
  );

  hiderSection.addEventListener("change", (event) => {
    const column = event.target.value;
    const isChecked = event.target.checked;

    if (!isChecked) {
      removeHiddenColumn(tableClassName, column);
      updateTableAndHeader(tableClassName, column, isChecked);
      return;
    }
    addHiddenColumn(tableClassName, column);
    updateTableAndHeader(tableClassName, column, isChecked);
  });
};

const updateTableAndHeader = (tableClassName, column, isChecked) => {
  const users = getUsersByCurrentPage(tableClassName);
  insertDataIntoTable(tableClassName, users);
  switchColumnHeaderVisible(tableClassName, column, isChecked);
};

const switchColumnHeaderVisible = (tableClassName, selectedColumn, isHide) => {
  const candidateToHideTH = document.querySelector(
    `.${tableClassName}_${selectedColumn}-column-head`
  );
  const visible = isHide ? "none" : "";
  candidateToHideTH.style.display = visible;
};
