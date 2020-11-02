// import using require
const Shape = require("./shape");
// declare class
class Circle extends Shape {
  constructor() {
    super();
  }

  calculateArea() {
    return 3.14 * 5 * 5;
  }
}

// export class using module.exports

module.exports = Circle;
