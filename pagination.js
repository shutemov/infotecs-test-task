import { getNumberOfUser } from "./data.js";

/*
  {
    table:test, 
    state:{
      page:0,
      numOfEntries:1
    }
  }
*/

export const setPage = (_page) => {
  page = _page;
const paginations = [];
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

export const decreasePage = (num) => {
  page -= num ? num : 1;
  return page;
};
