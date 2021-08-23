export class Form {
  constructor(tableClassName) {
    this.table = tableClassName;
    this.data = {
      firstName: undefined,
      lastName: undefined,
      about: undefined,
      eyeColor: undefined,
    };
  }

  setData(data) {
    this.data = data;
  }

  getTable() {
    return this.table;
  }

  getData() {
    return this.data;
  }
}
