export const insertDataIntoTable = (data) => {
  const tbody = document.querySelector(".users-table>tbody");
  let content = buildContent(data);
  tbody.innerHTML = content;
};

const buildContent = (data) => {
  let content = "";

  data.forEach((element) => {
    const { id, name, about, eyeColor } = element;
    const { firstName, lastName } = name;
    const thirdColumnStyle = `users-table__third-column-body`;

    content += `<tr data-id=${id}>`;

    content += `<td>${firstName}</td>`;
    content += `<td>${lastName}</td>`;
    content += `<td class=${thirdColumnStyle}> ${about} </td>`;
    content += `<td>${eyeColor}</td>`;

    content += `</tr>`;
  });

  return content;
};
