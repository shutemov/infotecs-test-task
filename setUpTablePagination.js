import {
  setNumOfEntries,
  getTotalNumOfPages,
  getCurrentPage,
} from "./pagination.js";

import { insertDataIntoTable } from "./table.js";
import {
  getNumberOfUser,
  getUsersForNextPage,
  getUsersForPrevPage,
} from "./data.js";

export const setUpPagination = (tableClassName, numOfEntries) => {
  setNumOfEntries(tableClassName, numOfEntries);
  setUpPaginationListener(tableClassName);
  insertDataIntoPaginationStats(tableClassName);
};

const setUpPaginationListener = (tableClassName) => {
  const tablePagination = document.querySelector(
    `.${tableClassName}-pagination`
  );

  tablePagination.addEventListener("click", (event) => {
    const backButtonClassName = `${tableClassName}-pagination__back-button`;
    const isBackButtonCLicked =
      event.target.classList.contains(backButtonClassName);

    const nextButtonClassName = `${tableClassName}-pagination__next-button`;
    const isNextButtonClicked =
      event.target.classList.contains(nextButtonClassName);

    if (isNextButtonClicked) {
      const users = getUsersForNextPage(tableClassName);
      if (users.length === 0) return;
      insertDataIntoTable(tableClassName, users);
      insertCurrentPageIntoPaginationStats(tableClassName);
    }

    if (isBackButtonCLicked) {
      const users = getUsersForPrevPage(tableClassName);
      if (users.length === 0) return;
      insertDataIntoTable(tableClassName, users);
      insertCurrentPageIntoPaginationStats(tableClassName);
    }
  });
};

const insertDataIntoPaginationStats = (tableClassName) => {
  insertTotalResultIntoPaginationStats(tableClassName);
  insertNumOfPagesIntoPaginationStats(tableClassName);
  insertCurrentPageIntoPaginationStats(tableClassName);
};

const insertTotalResultIntoPaginationStats = (tableClassName) => {
  const spanPaginationTotalResults = document.querySelector(
    `.${tableClassName}-pagination__total-results`
  );
  const totalResult = getNumberOfUser();
  spanPaginationTotalResults.innerHTML = totalResult;
};

const insertNumOfPagesIntoPaginationStats = (tableClassName) => {
  const spanPaginationTotalPages = document.querySelector(
    `.${tableClassName}-pagination__total-pages`
  );
  const totalNumOfPages = getTotalNumOfPages(tableClassName);
  spanPaginationTotalPages.innerHTML = totalNumOfPages;
};

const insertCurrentPageIntoPaginationStats = (tableClassName) => {
  const spanPaginationTotalResults = document.querySelector(
    `.${tableClassName}-pagination__page`
  );
  const currentPage = getCurrentPage(tableClassName);

  spanPaginationTotalResults.innerHTML = currentPage;
};
