import { getColorsNames } from "./color.js";

export const setDataIntoForm = (data) => {
  if (!data) alert("Empty data");
  const { name, about, eyeColor } = data;
  const { firstName, lastName } = name;

  const [firstNameInput, lastNameInput, aboutTextarea, eyeColorInput] =
    getInputFields();

  firstNameInput.value = firstName;
  lastNameInput.value = lastName;
  aboutTextarea.value = about;
  eyeColorInput.value = eyeColor;
};

export const getDataFromForm = () => {
  const [firstNameInput, lastNameInput, aboutTextarea, eyeColorInput] =
    getInputFields();

  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const about = aboutTextarea.value;
  const eyeColor = eyeColorInput.value;
  const data = { firstName, lastName, about, eyeColor };

  return data;
};

export const clearForm = () => {
  const [firstNameInput, lastNameInput, aboutTextarea, eyeColorInput] =
    getInputFields();

  firstNameInput.value = "";
  lastNameInput.value = "";
  aboutTextarea.value = "";
  eyeColorInput.value = "";
};

const getInputFields = () => {
  const nodeListEditFormItems = document.querySelectorAll(".edit-form__item");

  const formInputFields = Array.from(nodeListEditFormItems).map((item) => {
    // each 3 elem is input or textarea
    return item.childNodes[3];
  });

  return formInputFields;
};
