export default class Car {
    constructor(brand, motor, color) {
      this._brand = brand;
      this._motor = motor;
      this._color = color;
    }
  
    static get [Symbols.spcs]() {
      return this;
    }
  
    cloneCar() {
      const spcs = this.constructor[Symbols.spcs];
      return new spcs();
    }
  }