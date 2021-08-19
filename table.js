import { colourNameToHex } from "./color.js";
import { getHiddenColumns } from "./columnHider.js";

export const insertDataIntoTable = (tableClassName, data) => {
  buildContent(tableClassName, data);
};

  const tHeadTHsNodes = document.querySelectorAll(
    `.${tableClassName}__header-row > th`
  );

  const theadTHs = Array.from(tHeadTHsNodes);

  const orderedUniqeColumnClassNames = theadTHs.map((tr) => {
    return tr.classList.value;
  });

  const hiddenColumns = getHiddenColumns(tableClassName);

  let visibleColumns = [...orderedUniqeColumnClassNames];

  for (let hiddenColumn of hiddenColumns) {
    visibleColumns = visibleColumns.filter((uniqeColumnClassName) => {
      return !uniqeColumnClassName.includes(hiddenColumn);
    });
  }

  const tbody = document.querySelector(`.${tableClassName}__tbody`);
  tbody.innerHTML = "";

};
