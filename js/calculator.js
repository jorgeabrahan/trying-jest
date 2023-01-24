class Calculator {
  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }

  divide(x, y) {
    if(x === 0 && y !== 0)
      throw new Error('Invalid!');
    
    if((x === 0 && y === 0) || (x !== 0 && y === 0))
      throw new Error('Not Allowed!');

    return x / y;
  }

  multiply(x, y) {
    return x * y;
  }
}

module.exports = Calculator;