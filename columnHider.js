/*
  {
    table:test, 
    hiddenColumns:[]
  }
*/

const columnHiders = [];

export const createColumnHider = (tableClassName) => {
  const isExistColumnHider = getColumnHider(tableClassName);
  if (isExistColumnHider) return;

  const columnHider = {
    table: tableClassName,
    hiddenColumns: [],
  };

  columnHiders.push(columnHider);
};

};




const getColumnHider = (tableClassName) => {
  return columnHiders.find((columnHider) => {
    return columnHider.table === tableClassName;
  });
};
