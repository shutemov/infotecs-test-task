/*
  {
    table:test, 
    hiddenColumns:[]
  }
*/

const columnHiders = [];




};

const switchColumnHiding = (tableClassName, targetColumn, isHide) => {
  const candidateToHideTDs = document.querySelectorAll(
    `.${tableClassName}__${targetColumn}-body`
  );

  const candidateToHideTH = document.querySelector(
    `.${tableClassName}__${targetColumn}-head`
  );

  const tableTDFromNodes = Array.from(candidateToHideTDs);
  tableTDFromNodes.push(candidateToHideTH);

const getColumnHider = (tableClassName) => {
  return columnHiders.find((columnHider) => {
    return columnHider.table === tableClassName;
  });
};
