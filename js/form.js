import { Form } from "./models/Form.js";

/**
 * Модуль хранит объявленные формы и предоставлет api для работы с ними
 */

const forms = [];

export const createFormModel = (tableClassName) => {
  const isExistPagination = getForm(tableClassName);
  if (isExistPagination) return;

  const form = new Form(tableClassName);

  forms.push(form);
};

export const setDataIntoForm = (tableClassName, data) => {
  if (!data) alert("Empty data");
  const {
    name: { firstName, lastName },
    about,
    eyeColor,
  } = data;

  const form = getForm(tableClassName);
  const extractedData = { firstName, lastName, about, eyeColor };
  form.setData(extractedData);
};

export const getDataFromForm = (tableClassName) => {
  const form = getForm(tableClassName);
  const data = form.getData();
  return data;
};

export const getForm = (tableClassName) => {
  return forms.find((form) => {
    const targetTableClassName = form.getTable();
    return targetTableClassName === tableClassName;
  });
};

export const clearFormData = (tableClassName) => {
  const { data } = getForm(tableClassName);

  for (const prop in data) {
    data[prop] = "";
  }
};
