import { colourNameToHex } from "./color.js";
import { getHiddenColumns } from "./columnHider.js";

export const insertDataIntoTable = (tableClassName, data) => {
  buildContent(tableClassName, data);
};

  const tHeadTHsNodes = document.querySelectorAll(
    `.${tableClassName}__header-row > th`
  );

  });

};
