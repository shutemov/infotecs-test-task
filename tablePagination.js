import { getNumberOfUser, getUsersByInterval } from "./data.js";

let page = 0;
let numOfEntries = 1;



export const getUsersByCurrentPage = () => {
  const start = page * numOfEntries;
  const end = start + numOfEntries;
  const users = getUsersByInterval(start, end);

  return users;
};

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
