import { data as users } from "./data.js";
console.log(users);
const alphabetComparatorByProp = (...props) => {
  if (props.length > 1) {
    const [propLevel1, propLevel2] = props;
    return (a, b) => {
      if (a[propLevel1][propLevel2] < b[propLevel1][propLevel2]) return -1;
      if (a[propLevel1][propLevel2] > b[propLevel1][propLevel2]) return 1;
      return 0;
    };
  }

  const [prop] = [props];
  return (a, b) => {
    if (a[prop] < b[prop]) return -1;
    if (a[prop] > b[prop]) return 1;
    return 0;
  };
};

insertDataIntoTable(users);
setUpSortingActions(users);
