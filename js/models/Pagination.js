export class Pagination {
  constructor(tableClassName) {
    this.table = tableClassName;
    this.page = 0;
    this.numOfEntries = 1;
  }

  increasePage(num) {
    this.page += num ? num : 1;
  }

  decreasePage(num) {
    this.page -= num ? num : 1;
  }

  setTable(tableClassName) {
    this.table = tableClassName;
  }

  setPage(page) {
    this.page = page;
  }

  setNumOfEntries(num) {
    this.numOfEntries = num;
  }

  getTable() {
    return this.table;
  }

  getPage() {
    return this.page;
  }

  getNumOfEntries() {
    return this.numOfEntries;
  }
}
