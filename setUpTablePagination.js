import { doBack, doNext, setNumOfEntries } from "./tablePagination.js";

export const setUpPagination = () => {
  const tableClassName = `users-table`;
  setNumOfEntries(10);
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
