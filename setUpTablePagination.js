import {
  getUsersForPrevPage,
  getUsersForNextPage,
  setNumOfEntries,
  getTotalNumOfPages,
  getCurrentPage,
} from "./tablePagination.js";

export const setUpPagination = () => {
  const tableClassName = `users-table`;
  setNumOfEntries(10);
import { insertDataIntoTable } from "./table.js";
import { getNumberOfUser } from "./data.js";
  setUpPaginationListener(tableClassName);
};

const setUpPaginationListener = (targetTableClassname) => {
  const tablePagination = document.querySelector(
    `.${targetTableClassname}-pagination`
  );

  tablePagination.addEventListener("click", (event) => {
    const backButtonClassName = `${targetTableClassname}-pagination__backward`;
    const isBackButton = event.target.classList.contains(backButtonClassName);

    const nextButtonClassName = `${targetTableClassname}-pagination__forward`;
    const isNextButton = event.target.classList.contains(nextButtonClassName);

    if (isNextButton) doNext();
    if (isBackButton) doBack();
  });
};
