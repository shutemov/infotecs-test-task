import { colourNameToHex } from "./color.js";

export const insertDataIntoTable = (targetClassName, data) => {
  const tbody = document.querySelector(`.${targetClassName}__tbody`);
  let content = buildContent(targetClassName, data);
  tbody.innerHTML = content;
};

const buildContent = (targetClassName, data) => {
  let content = "";
  const firstColumnStyle = `${targetClassName}__first-column-body`;
  const secondColumnStyle = `${targetClassName}__second-column-body`;
  const thirdColumnStyle = `${targetClassName}__third-column-body`;
  const fourthColumnStyle = `${targetClassName}__fourth-column-body`;

  data.forEach((element) => {
    const { id, name, about, eyeColor } = element;
    const { firstName, lastName } = name;
    const hexCodeForEyeColor = colourNameToHex(eyeColor);

    content += `<tr data-id=${id}>`;

    content += `<td class=${firstColumnStyle}>${firstName}</td>`;
    content += `<td class=${secondColumnStyle}>${lastName}</td>`;
    content += `<td class=${thirdColumnStyle}> ${about} </td>`;
    content += `<td class=${fourthColumnStyle}>`;
    content += `<input type="color" value=${hexCodeForEyeColor} disabled/>`;
    content += `</td>`;
    content += `</tr>`;
  });

  return content;
};
