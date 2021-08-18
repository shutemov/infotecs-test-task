export const hideColumn = (tableClassName) => {
  const hiderSection = document.querySelector(
    `.${tableClassName}__column-hider`
  );

  hiderSection.addEventListener("change", (event) => {
    const targetColumn = event.target.value;
    const isHide = event.target.checked;

    if (targetColumn === "first-column")
      switchHide(tableClassName, targetColumn, isHide);

    if (targetColumn === "second-column")
      switchHide(tableClassName, targetColumn, isHide);

    if (targetColumn === "third-column")
      switchHide(tableClassName, targetColumn, isHide);

    if (targetColumn === "fourth-column")
      switchHide(tableClassName, targetColumn, isHide);
  });
};

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
