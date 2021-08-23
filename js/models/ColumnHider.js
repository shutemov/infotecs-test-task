export class ColumnHider {
  constructor(tableClassName) {
    this.table = tableClassName;
    this.hiddenColumns = [];
  }

  addHiddenColumn(column) {
    const hasColumn = this.hiddenColumns.includes(column);
    if (hasColumn) return false;

    this.hiddenColumns.push(column);
  }

  removeHiddenColumn(column) {
    const hiddenColumns = this.hiddenColumns.filter((hiddenColumn) => {
      return hiddenColumn !== column;
    });

    this.hiddenColumns = hiddenColumns;
  }

  getTable() {
    return this.table;
  }

  getHiddenColumns() {
    return this.hiddenColumns;
  }
}
