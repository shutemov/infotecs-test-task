import { colourNameToHex } from "./color.js";
import { getHiddenColumns } from "./columnHider.js";

/**
 * Модуль работы с содержимым таблицы
 */

/**
 * Функция вставки данных в таблицу в зависимости от видимых столбцов
 */
export const insertDataIntoTable = (tableClassName, data) => {
  const tHeadTHsNodes = document.querySelectorAll(
    `.${tableClassName}__header-row > th`
  );

  const theadTHs = Array.from(tHeadTHsNodes);

  // получаем информацию о всех столбцах таблицы
  const orderedUniqeColumnClassNames = theadTHs.map((tr) => {
    return tr.classList.value;
  });

  const hiddenColumns = getHiddenColumns(tableClassName);

  //по умолчанию видимы все
  let visibleColumns = [...orderedUniqeColumnClassNames];

  //Фильтруем все видимые столбцы относительно скрытых столбцов таблицы
  for (let hiddenColumn of hiddenColumns) {
    visibleColumns = visibleColumns.filter((uniqeColumnClassName) => {
      return !uniqeColumnClassName.includes(hiddenColumn);
    });
  }

  const tbody = document.querySelector(`.${tableClassName}__tbody`);
  tbody.innerHTML = "";

  data.forEach((element) => {
    /* размечаем полученные данные для дальнейшего
    соотнесения с видимыми столбцами таблицы: _1 - первый столбец и т.д.*/
    const {
      id: _0,
      name: { firstName: _1, lastName: _2 },
      about: _3,
      eyeColor: _4,
    } = element;

    const hexCodeForEyeColor = colourNameToHex(_4);
    // создаем объект соотноситель
    const orderedRenamedPropByObjectInData = { _0, _1, _2, _3, _4 };

    //создаем tr
    const tr = document.createElement("tr");
    tr.setAttribute("data-id", _0);
    tr.setAttribute("class", `${tableClassName}__body-row`);

    /* Для каждого пропа в объекте соотносителе находим видимую колонку 
    и если названии колонки есть проп, то создаем ячейку */
    for (const prop in orderedRenamedPropByObjectInData) {
      for (const visibleColumn of visibleColumns) {
        const isVisibleColumnProp = visibleColumn.includes(prop);
        if (isVisibleColumnProp) {
          //создаем td
          const td = document.createElement("td");
          td.setAttribute("class", `${tableClassName}_${prop}-column-body`);
          td.innerHTML = orderedRenamedPropByObjectInData[prop];

          if (prop === "_4") {
            //создаем input
            const colorInput = document.createElement("input");
            colorInput.setAttribute("class", "eye-color-input");
            colorInput.setAttribute("type", "color");
            colorInput.setAttribute("value", hexCodeForEyeColor);
            colorInput.setAttribute("disabled", "");

            //вставляем
            td.innerHTML = "";
            td.appendChild(colorInput);
          }

          tr.appendChild(td);
        }
      }
    }

    tbody.appendChild(tr);
  });
};
