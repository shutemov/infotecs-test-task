import {
  updateTableByFirstNameAlphabetSorting,
  updateTableByLastNameAlphabetSorting,
  updateTableByAboutAlphabetSorting,
  updateTableByEyeColorAlphabetSorting,
} from "./columnsActions.js";
import { getUserById } from "./dataManager.js";
import { setDataIntoForm } from "./form.js";
    if (isLastNameColumn) updateTableByLastNameAlphabetSorting(className);
    if (isAboutColumn) updateTableByAboutAlphabetSorting(className);
    if (isEyeColorColumn) updateTableByEyeColorAlphabetSorting(className);
  });
};

const setUpTableRowAction = (className) => {
  const tableTBody = document.querySelector(className);

  tableTBody.addEventListener("click", (event) => {
    const tableRow = event.target.closest("tr");
    const userId = tableRow.getAttribute("data-id");

    const user = getUserById(userId);
    setDataIntoForm(user);

    const storage = window.localStorage;
    storage.setItem("userId", userId);
  });
};
