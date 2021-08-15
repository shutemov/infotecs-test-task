import {
  getUsersForPrevPage,
  getUsersForNextPage,
  setNumOfEntries,
  getTotalNumOfPages,
  getCurrentPage,
} from "./tablePagination.js";

import { insertDataIntoTable } from "./table.js";
import { getNumberOfUser } from "./data.js";

export const setUpPagination = (tableClassName, numOfEntries) => {
  setUpPaginationListener(tableClassName);
};

const setUpPaginationListener = (targetTableClassname) => {
  const tablePagination = document.querySelector(
    `.${targetTableClassname}-pagination`
  );

  tablePagination.addEventListener("click", (event) => {
    const backButtonClassName = `${targetTableClassname}-pagination__back-button`;
    const isBackButtonCLicked =
      event.target.classList.contains(backButtonClassName);

    const nextButtonClassName = `${targetTableClassname}-pagination__next-button`;
    const isNextButtonClicked =
      event.target.classList.contains(nextButtonClassName);

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
  const totalNumOfPages = getTotalNumOfPages();
  spanPaginationTotalPages.innerHTML = totalNumOfPages;
};

const insertCurrentPageIntoPaginationStats = (tableClassName) => {
  const spanPaginationTotalResults = document.querySelector(
    `.${tableClassName}-pagination__page`
  );
  const currentPage = getCurrentPage();

  spanPaginationTotalResults.innerHTML = currentPage;
};
