class Calculator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add() {
    return this.x + this.y;
  }

  subtract() {
    return this.x - this.y;
  }

  divide() {
    if(x === 0 && y !== 0)
      throw new Error('Invalid!');
    
    if((x === 0 && y === 0) || (x !== 0 && y === 0))
      throw new Error('Not Allowed!');

    return this.x / this.y;
  }

  multiply() {
    return this.x * this.y;
  }
}