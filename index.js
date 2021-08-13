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

const setUpTableRowAction = () => {
  const tableTBody = document.querySelector(".users-table__tbody");

  tableTBody.addEventListener("click", (event) => {
    const tableRow = event.target.closest("tr");
    const userId = tableRow.getAttribute("data-id");

    const user = getUserById(userId);
    setDataIntoForm(user);

    const storage = window.localStorage;
    storage.setItem("userId", userId);
  });
};

const setUpSaveAction = () => {
  const saveButton = document.querySelector(".edit-form__save-button");

  saveButton.addEventListener("click", () => {
    const storage = window.localStorage;
    const id = storage.getItem("userId");

    if (!id) alert("user not selected");

    const user = getUserById(id);

    const { firstName, lastName, about, eyeColor } = getDataFromForm();

    user.name.firstName = firstName;
    user.name.lastName = lastName;
    user.about = about;
    user.eyeColor = eyeColor;

    updateUser(user);
    insertDataIntoTable(users);
    clearForm()
    storage.clear()
  });
};

insertDataIntoTable(users);
setUpTableHeaderAction();
setUpTableRowAction();
setUpSaveAction();
