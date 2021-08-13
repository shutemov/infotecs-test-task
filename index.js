import { data as users } from "./data.js";
import {
  sortFirstNameByAlphabet,
  sortLastNameByAlphabet,
  sortAboutByAlphabet,
  sortEyeColorByAlphabet,
} from "./sortingActions.js";
import { insertDataIntoTable } from "./table.js";
import { getUserById, updateUser } from "./dataManager.js";
import { getDataFromForm, setDataIntoForm, clearForm } from "./form.js";

console.log("Users from index", users);

const setUpTableHeaderAction = () => {
  const tableHeader = document.querySelector(".users-table__header-row");

  tableHeader.addEventListener("click", (event) => {
    const isFirstNameColumn = event.target.classList.contains(
      "users-table__first-column-head"
    );

    const isLastNameColumn = event.target.classList.contains(
      "users-table__second-column-head"
    );

    const isAboutColumn = event.target.classList.contains(
      "users-table__third-column-head"
    );

    const isEyeColorColumn = event.target.classList.contains(
      "users-table__fourth-column-head"
    );

    if (isFirstNameColumn) sortFirstNameByAlphabet();
    if (isLastNameColumn) sortLastNameByAlphabet();
    if (isAboutColumn) sortAboutByAlphabet();
    if (isEyeColorColumn) sortEyeColorByAlphabet();
  });
};

insertDataIntoTable(users)
setUpTableHeaderAction();
