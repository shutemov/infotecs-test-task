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

  data.forEach((element) => {
    const {
      id: _1,
      name: { firstName: _2, lastName: _3 },
      about: _4,
      eyeColor: _5,
    } = element;

    const hexCodeForEyeColor = colourNameToHex(_5);
    const orderedData = [_1, _2, _3, _4, _5];
  });
};
