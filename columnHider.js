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

export const addHiddenColumn = (tableClassName, column) => {
  const columnHider = getColumnHider(tableClassName);
  const hasColumn = columnHider.hiddenColumns.includes(column);

  if (hasColumn) return;

  columnHider.hiddenColumns.push(column);
};

export const removeHiddenColumn = (tableClassName, column) => {
  const columnHider = getColumnHider(tableClassName);
  
  const hiddenColumns = columnHider.hiddenColumns.filter((hiddenColumn) => {
    return hiddenColumn !== column;
  });
  columnHider.hiddenColumns = hiddenColumns;
};



const getColumnHider = (tableClassName) => {
  return columnHiders.find((columnHider) => {
    return columnHider.table === tableClassName;
  });
};
