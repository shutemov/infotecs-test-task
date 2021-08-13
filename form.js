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
