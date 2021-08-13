import { data as users } from "./data.js";
import {
  sortFirstNameByAlphabet,
  sortLastNameByAlphabet,
  sortAboutByAlphabet,
  sortEyeColorByAlphabet,
} from "./SortingActions.js";

const buildContent = (data) => {
  let content = "";

  data.forEach((element) => {
    const { id, name, about, eyeColor } = element;
    const { firstName, lastName } = name;
    const thirdColumnStyle = `users-table__third-column-body`;
import { insertDataIntoTable } from "./TableManager.js";

    content += `<tr data-id=${id}>`;

    content += `<td>${firstName}</td>`;
    content += `<td>${lastName}</td>`;
    content += `<td class=${thirdColumnStyle}> ${about} </td>`;
    content += `<td>${eyeColor}</td>`;

    content += `</tr>`;
  });

  return content;
};

const insertDataIntoTable = (data) => {
  const tbody = document.querySelector(".users-table>tbody");
  let content = buildContent(data);
  tbody.innerHTML = content;
};

const setUpSortingActions = (data) => {
  const [firstNameCell, lastNameCell, aboutCell, eyeColorCell] =
    document.querySelectorAll(".users-table>thead>tr>th");

  firstNameCell.addEventListener("click", () => {
    const sortedData = data.sort(alphabetComparatorByProp("name", "firstName"));
    insertDataIntoTable(sortedData);
  });

  lastNameCell.addEventListener("click", () => {
    const sortedData = data.sort(alphabetComparatorByProp("name", "lastName"));
    insertDataIntoTable(sortedData);
  });

  aboutCell.addEventListener("click", () => {
    const sortedData = data.sort(alphabetComparatorByProp("about"));
    insertDataIntoTable(sortedData);
  });

  eyeColorCell.addEventListener("click", () => {
    const sortedData = data.sort(alphabetComparatorByProp("eyeColor"));
    insertDataIntoTable(sortedData);
  });

const alphabetComparatorByProp = (...props) => {
  if (props.length > 1) {
    const [propLevel1, propLevel2] = props;
    return (a, b) => {
      if (a[propLevel1][propLevel2] < b[propLevel1][propLevel2]) return -1;
      if (a[propLevel1][propLevel2] > b[propLevel1][propLevel2]) return 1;
      return 0;
    };
  }

  const [prop] = [props];
  return (a, b) => {
    if (a[prop] < b[prop]) return -1;
    if (a[prop] > b[prop]) return 1;
    return 0;
  };
};

insertDataIntoTable(users);
setUpSortingActions(users);
