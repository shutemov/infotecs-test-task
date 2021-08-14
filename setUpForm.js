import { getDataFromForm, clearForm } from "./form.js";
import { getUserById, updateUser } from "./dataManager.js";

export const setUpFormActions = (formClassName) => {
  if (!formClassName)
    throw new Error(`Form class name: ${formClassName} is not defined`);

  setUpFormSaveButtonAction(`.${formClassName}__save-button`);
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
    // insertDataIntoTable(users);
    clearForm();
    storage.clear();
  });
};

