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
      id: _0,
      name: { firstName: _1, lastName: _2 },
      about: _3,
      eyeColor: _4,
    } = element;

    const hexCodeForEyeColor = colourNameToHex(_4);
    const orderedRenamedPropByObjectInData = { _0, _1, _2, _3, _4 };

    //create tr
    const tr = document.createElement("tr");
    tr.setAttribute("data-id", _0);
    tr.setAttribute("class", `${tableClassName}__body-row`);

    for (const prop in orderedRenamedPropByObjectInData) {
      for (const visibleColumn of visibleColumns) {
        const isVisibleColumnProp = visibleColumn.includes(prop);
        if (isVisibleColumnProp) {
          //create td
          const td = document.createElement("td");
          td.setAttribute("class", `${tableClassName}_${prop}-column-body`);
          td.innerHTML = orderedRenamedPropByObjectInData[prop];

          if (prop === "_4") {
            //create input
            const colorInput = document.createElement("input");
            colorInput.setAttribute("class", "eye-color-input");
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
