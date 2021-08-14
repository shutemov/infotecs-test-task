import { getAllUsers } from "./dataManager.js";

const users = getAllUsers();
console.log("users from sorting", users);

export const sortByFirstName = () => {
  return users.sort(firstNameComparatorByAlphabet("name", "firstName"));
};

export const sortByLastName = () => {
  return users.sort(lastNameComparatorByAlphabet("name", "lastName"));
};

export const sortByAbout = () => {
  return users.sort(aboutComparatorByAlphabet("about"));
};

export const sortByEyeColor = () => {
  return users.sort(eyeColorComparatorByAlphabet("eyeColor"));
};



const alphabetComparator = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const firstNameComparatorByAlphabet = (...path) => {
  const [name, firstName] = path;
  return (a, b) => {
    if (a[name][firstName] < b[name][firstName]) return -1;
    if (a[name][firstName] > b[name][firstName]) return 1;
    return 0;
  };
};

const lastNameComparatorByAlphabet = (...path) => {
  const [name, lastName] = path;
  return (a, b) => {
    if (a[name][lastName] < b[name][lastName]) return -1;
    if (a[name][lastName] > b[name][lastName]) return 1;
    return 0;
  };
};

const aboutComparatorByAlphabet = (...path) => {
  const [about] = path;
  return (a, b) => {
    if (a[about] < b[about]) return -1;
    if (a[about] > b[about]) return 1;
    return 0;
  };
};

const eyeColorComparatorByAlphabet = (...path) => {
  const [eyeColor] = path;
  return (a, b) => {
    if (a[eyeColor] < b[eyeColor]) return -1;
    if (a[eyeColor] > b[eyeColor]) return 1;
    return 0;
  };
};
