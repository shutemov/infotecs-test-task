/*
  {
    table:test, 
    hiddenColumns:[]
  }
*/

import { ColumnHider } from "./models/ColumnHider.js";

const columnHiders = [];

export const createColumnHiderModel = (tableClassName) => {
  const isExistColumnHider = getColumnHider(tableClassName);
  if (isExistColumnHider) return;
  
  const columnHider = new ColumnHider(tableClassName);

  columnHiders.push(columnHider);
};

export const addHiddenColumn = (tableClassName, column) => {
  const columnHider = getColumnHider(tableClassName);
  columnHider.addHiddenColumn(column);
};

export const removeHiddenColumn = (tableClassName, column) => {
  const columnHider = getColumnHider(tableClassName);
  columnHider.removeHiddenColumn(column);
};

export const getHiddenColumns = (tableClassName) => {
  const columnHider = getColumnHider(tableClassName);
  const hiddenColumns = columnHider.getHiddenColumns();
  return hiddenColumns;
};

export const isColumnHidden = (tableClassName, column) => {
  const columnHider = getColumnHider(tableClassName);
  hiddenColumns = columnHider.getHiddenColumns();
  return hiddenColumns.includes(column);
};

const getColumnHider = (tableClassName) => {
  return columnHiders.find((columnHider) => {
    const tartgetTableClassName = columnHider.getTable();
    return tartgetTableClassName === tableClassName;
  });
};
