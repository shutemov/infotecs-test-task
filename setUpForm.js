import { getDataFromForm, clearForm } from "./form.js";
import { getAllUsers, getUserById, getUsersByCurrentPage, updateUser } from "./data.js";
import { insertDataIntoTable } from "./table.js";

export const setUpFormActions = (formClassName) => {
  if (!formClassName)
    throw new Error(`Form class name: ${formClassName} is not defined`);

  setUpFormSaveButtonAction(`.edit-form__save-button`);
};

const setUpFormSaveButtonAction = (buttonClassName) => {
  const saveButton = document.querySelector(buttonClassName);

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
    const users = getAllUsers();
    insertDataIntoTable("users-table", users);
    clearForm();
    storage.clear();
  });
};
