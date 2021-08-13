import { data as users } from "./data.js";
import {
  sortFirstNameByAlphabet,
  sortLastNameByAlphabet,
  sortAboutByAlphabet,
  sortEyeColorByAlphabet,
} from "./SortingActions.js";

console.log("Users from index", users);

import { insertDataIntoTable } from "./TableManager.js";



  });
};

insertDataIntoTable(users);
setUpSortingActions(users);
