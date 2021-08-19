export const hideColumn = (tableClassName) => {
  const hiderSection = document.querySelector(
    `.${tableClassName}__column-hider`
  );
/*
  {
    table:test, 
    hiddenColumns:[]
  }
*/

  hiderSection.addEventListener("change", (event) => {
    const targetColumn = event.target.value;
    const isHide = event.target.checked;
const columnHiders = [];

    if (targetColumn === "first-column")
      switchColumnHiding(tableClassName, targetColumn, isHide);

    if (targetColumn === "second-column")
      switchColumnHiding(tableClassName, targetColumn, isHide);

    if (targetColumn === "third-column")
      switchColumnHiding(tableClassName, targetColumn, isHide);

    if (targetColumn === "fourth-column")
      switchColumnHiding(tableClassName, targetColumn, isHide);
  });
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
