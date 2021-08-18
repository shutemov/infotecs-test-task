
const switchHide = (tableClassName, targetColumn, isHide) => {
  const candidateToHideTDs = document.querySelectorAll(
    `.${tableClassName}__${targetColumn}-body`
  );

  const candidateToHideTH = document.querySelector(
    `.${tableClassName}__${targetColumn}-head`
  );

  const tableTDFromNodes = Array.from(candidateToHideTDs);
  tableTDFromNodes.push(candidateToHideTH);

  tableTDFromNodes.forEach((td) => {
    td.style.display = isHide ? "none" : "";
  });
};
