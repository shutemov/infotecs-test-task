import { getNumberOfUser, getUsersByInterval } from "./data.js";

let page = 0;
let numOfEntries = 1;

export const setPage = (_page) => {
  page = _page;
};

export const setNumOfEntries = (num) => {
  numOfEntries = num;
};

export const getCurrentPage = () => {
  return page;
};

export const getNumOfEntries = () => {
  return numOfEntries;
};

export const getTotalNumOfPages = () => {
  const numOfUsers = getNumberOfUser();
  const totalNumOfPages = numOfUsers / numOfEntries;
  return totalNumOfPages;
};

export const increasePage = (num) => {
  page += num ? num : 1;
  return page;
};

