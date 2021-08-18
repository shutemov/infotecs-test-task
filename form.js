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
  const [firstNameInput, lastNameInput, aboutTextarea, eyeColorSelect] =
    getInputFields();

  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const about = aboutTextarea.value;
  const eyeColor = eyeColorSelect.value;
  const data = { firstName, lastName, about, eyeColor };

  return data;
};

export const clearForm = () => {
  const [firstNameInput, lastNameInput, aboutTextarea, eyeColorSelect] =
    getInputFields();

  firstNameInput.value = "";
  lastNameInput.value = "";
  aboutTextarea.value = "";
  eyeColorSelect.value = "";
};

export const configurateEyeColorSelect = (targetClassName, selectedElement) => {
  const select = document.querySelector(
    `.${targetClassName}__eye-color-select`
  );

  const allColorNames = getColorsNames();

  allColorNames.forEach((color) => {
    const isSelected = color === selectedElement;
    insertOption(select, color, isSelected);
  });
};

const insertOption = (select, value, isSelected) => {
  const opt = document.createElement("option");
  opt.value = value;
  opt.innerHTML = value;

  if (isSelected) {
    opt.setAttribute("selected");
  }

  select.appendChild(opt);
};

const getInputFields = () => {
  const nodeListEditFormItems = document.querySelectorAll(".edit-form__item");

  const formInputFields = Array.from(nodeListEditFormItems).map((item) => {
    // each 3 elem is input or textarea
    return item.childNodes[3];
  });

  return formInputFields;
};
