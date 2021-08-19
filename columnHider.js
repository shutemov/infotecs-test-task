/*
  {
    table:test, 
    hiddenColumns:[]
  }
*/

const columnHiders = [];




};




const getColumnHider = (tableClassName) => {
  return columnHiders.find((columnHider) => {
    return columnHider.table === tableClassName;
  });
};
