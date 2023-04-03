export class mockLocalStorage {
  constructor() {
    this.value = {};
  }

  removeItem(key) {
    this.value.delete(key);
  }

  getItem(key) {
    return this.value.get(key) || null;
  }

  setItem(key, value) {
    this.value.set(key, value);
  }

  clear() {
    this.value.clear();
  }
}
