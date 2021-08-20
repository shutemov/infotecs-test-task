import { getDataFromForm, clearFormData } from "./form.js";
import { getUserById, getUsersByCurrentPage, updateUser } from "./data.js";
import { insertDataIntoTable } from "./table.js";
import { getColorsNames } from "./color.js";

export const setUpFormActions = (formClassName, tableClassName) => {

const setUpFormEvents = (tableClassName, formClassName) => {
  if (!formClassName)
    throw new Error(`Form class name: ${formClassName} is not defined`);

  const saveButtonClassName = `edit-form__save-button`;
  setUpSaveButtonEvent(tableClassName, saveButtonClassName);
};

const setUpSaveButtonEvent = (tableClassName, buttonClassName) => {
  const saveButton = document.querySelector(
    `.${tableClassName}__edit-form > .edit-form__item > .${buttonClassName}`
  );

  saveButton.addEventListener("click", () => {
    const storage = window.localStorage;
    const id = storage.getItem("userId");

    if (!id) {
      alert("User not selected");
      return;
    }

    const user = getUserById(id);

    const { firstName, lastName, about, eyeColor } =
      getDataFromFormFields(tableClassName);

    user.name.firstName = firstName;
    user.name.lastName = lastName;
    user.about = about;
    user.eyeColor = eyeColor;

    updateUser(user);

    const users = getUsersByCurrentPage(tableClassName);
    insertDataIntoTable(tableClassName, users);

    //clear form after using
    clearFormData(tableClassName);
    clearFormFields(tableClassName);
    storage.clear();
  });
};

export const getDataFromFormFields = (tableClassName) => {
  const [firstNameInput, lastNameInput, aboutTextarea, eyeColorSelect] =
    getInputFields(tableClassName);

  const data = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    about: aboutTextarea.value,
    eyeColor: eyeColorSelect.value,
  };

  return data;
};

export const clearFormFields = (tableClassName) => {
  const [firstNameInput, lastNameInput, aboutTextarea, eyeColorSelect] =
    getInputFields(tableClassName);

  firstNameInput.value = "";
  lastNameInput.value = "";
  aboutTextarea.value = "";
  eyeColorSelect.value = "";
};

export const setDataIntoFormFields = (tableClassName) => {
  const { firstName, lastName, about, eyeColor } =
    getDataFromForm(tableClassName);

  const [firstNameInput, lastNameInput, aboutTextarea, eyeColorInput] =
    getInputFields(tableClassName);

  firstNameInput.value = firstName;
  lastNameInput.value = lastName;
  aboutTextarea.value = about;
  eyeColorInput.value = eyeColor;
};

/*
  Каждый 3 элемент item'a содержит значение
*/
const getInputFields = (tableClassName) => {
  const nodeListEditFormItems = document.querySelectorAll(
    `.${tableClassName}__edit-form > .edit-form__item`
  );

  const formInputFields = Array.from(nodeListEditFormItems).map((item) => {
    return item.childNodes[3];
  });

  return formInputFields;
};

export const initEyeColorSelect = (tableClassName, formClassName) => {
  const select = document.querySelector(
    `.${tableClassName}__edit-form > .edit-form__item > .${formClassName}__eye-color-select`
  );
  const allColorNames = getColorsNames();

  allColorNames.forEach((color) => {
    insertOption(select, color);
  });
};

const insertOption = (select, value) => {
  //create option
  const option = document.createElement("option");
  option.value = value;
  option.innerHTML = value;

  //insert
  select.appendChild(option);
};
