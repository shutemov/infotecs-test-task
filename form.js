/*
  {
    table:test, 
    data:{
      firstName:"",
      lastName:"",
      about:"",
      eyeColor:""
    }
  }
*/

const forms = [];

export const createFormModel = (tableClassName) => {
  const isExistPagination = getForm(tableClassName);
  if (isExistPagination) return;

  const form = {
    table: tableClassName,
    data: {
      firstName: "",
      lastName: "",
      about: "",
      eyeColor: "",
    },
  };

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
  form.data = { firstName, lastName, about, eyeColor };
};

export const getDataFromForm = (tableClassName) => {
  const { data } = getForm(tableClassName);
  return data;
};

export const getForm = (tableClassName) => {
  return forms.find((form) => {
    return form.table === tableClassName;
  });
};

export const clearFormData = (tableClassName) => {
  const { data } = getForm(tableClassName);

  for (const prop in data) {
    data[prop] = "";
  }
};
