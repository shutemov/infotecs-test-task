import { colourNameToHex } from "./color.js";
import { getHiddenColumns } from "./columnHider.js";

export const insertDataIntoTable = (tableClassName, data) => {
  buildContent(tableClassName, data);
};

const buildContent = (tableClassName, data) => {
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

    //insert
    tbody.appendChild(tr);
  });
};

// export const insertDataIntoTable = (tableClassName, data) => {
//   const tbody = document.querySelector(`.${tableClassName}__tbody`);
//   let content = buildContent(tableClassName, data);
//   tbody.innerHTML = content;
// };

// const buildContent = (tableClassName, data) => {
//   let content = "";
//   const firstColumnStyle = `${tableClassName}__a-column-body`;
//   const secondColumnStyle = `${tableClassName}__b-column-body`;
//   const thirdColumnStyle = `${tableClassName}__c-column-body`;
//   const fourthColumnStyle = `${tableClassName}__d-column-body`;

//   data.forEach((element) => {
//     const { id, name, about, eyeColor } = element;
//     const { firstName, lastName } = name;
//     const hexCodeForEyeColor = colourNameToHex(eyeColor);

//     content += `<tr data-id=${id}>`;

//     content += `<td class=${firstColumnStyle}>${firstName}</td>`;
//     content += `<td class=${secondColumnStyle}>${lastName}</td>`;
//     content += `<td class=${thirdColumnStyle}> ${about} </td>`;
//     content += `<td class=${fourthColumnStyle}>`;
//     content += `<input type="color" value=${hexCodeForEyeColor} disabled/>`;
//     content += `</td>`;
//     content += `</tr>`;
//   });

//   return content;
// };
