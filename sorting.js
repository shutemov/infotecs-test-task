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