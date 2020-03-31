class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b) {
      return a-b; // muss sein, weil javascript mit sort() nur bei strings funktioniert, nicht bei Nummern, weil es die Nummern in einen string konvertiert
      //shorter: this.items.sort((a, b) => a - b);
    });
    this.length++; // or this.length += 1;
  }

  get(pos) {
    if (pos > this.length -1) {
    throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) { throw new Error(`EmptySortedList`) }
    return this.items[this.items.length -1];
  }

  min() {
    if (this.length === 0) { throw new Error(`EmptySortedList`) }
    return this.items[0];
  }

  sum() {
    if (this.length === 0) { return 0 }
    return this.items.reduce(function(a, b) {
      return a + b;
    });
  }

  avg() {
    if (this.length === 0) { throw new Error(`EmptySortedList`) }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;



