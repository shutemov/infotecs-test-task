import { getAllUsers } from "./data.js";

const users = getAllUsers();

export const sortByFirstName = () => {
  const action = (current, next) =>
    alphabetComparator(current.name.firstName, next.name.firstName);
  return users.sort(action);
};

export const sortByLastName = () => {
  const action = (current, next) =>
    alphabetComparator(current.name.lastName, next.name.lastName);
  return users.sort(action);
};

export const sortByAbout = () => {
  const action = (current, next) =>
    alphabetComparator(current.about, next.about);
  return users.sort(action);
};

export const sortByEyeColor = () => {
  const action = (current, next) =>
    alphabetComparator(current.eyeColor, next.eyeColor);
  return users.sort(action);
};

const alphabetComparator = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};
