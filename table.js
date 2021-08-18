import { colourNameToHex } from "./color.js";

export const insertDataIntoTable = (targetClassName, data) => {
  const tbody = document.querySelector(`.${targetClassName}__tbody`);
  let content = buildContent(targetClassName, data);
  tbody.innerHTML = content;
};

const buildContent = (targetClassName, data) => {
  let content = "";
  const thirdColumnStyle = `${targetClassName}__third-column-body`;

  data.forEach((element) => {
    const { id, name, about, eyeColor } = element;
    const { firstName, lastName } = name;
    const hexCodeForEyeColor = colourNameToHex(eyeColor);

    content += `<tr data-id=${id}>`;

    content += `<td>${firstName}</td>`;
    content += `<td>${lastName}</td>`;
    content += `<td class=${thirdColumnStyle}> ${about} </td>`;
    content += `<td>`;
    content += `<input type="color" value=${hexCodeForEyeColor} disabled/>`;
    content += `</td>`;
    content += `</tr>`;
  });

  return content;
};
