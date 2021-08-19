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

    //create tr
    const tr = document.createElement("tr");
    tr.setAttribute("data-id", _1);
    tr.setAttribute("class", `${tableClassName}__body-row`);

    for (const prop in orderedData) {
      for (const visibleColumn of visibleColumns) {
        const isPropForVisibleColumn = visibleColumn.includes(prop);
        if (isPropForVisibleColumn) {
          //create td
          const td = document.createElement("td");
          td.setAttribute("class", `${tableClassName}__${prop}-column-body`);
          td.innerHTML = orderedData[prop];

          if (prop === "4") {
            //create input
            const colorInput = document.createElement("input");
            colorInput.setAttribute("type", "color");
            colorInput.setAttribute("value", hexCodeForEyeColor);
            colorInput.setAttribute("disabled", "");

            //insert
            td.innerHTML = "";
            td.appendChild(colorInput);
          }

          //insert
          tr.appendChild(td);
        }
      }
    }

  });
};
