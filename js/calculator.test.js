const Calculator = require('./calculator');

const calc = new Calculator();
describe('Calculator class tests', () => {
  describe('Add method tests', () => {
    it('Should return 5 (3 + 2)', () => {
      expect(calc.add(3, 2)).toEqual(5);
    });
    it('Should return 23 (18 + 5)', () => {
      expect(calc.add(18, 5)).toEqual(23);
    });
    it('Should return 100 (33 + 67)', () => {
      expect(calc.add(33, 67)).toEqual(100);
    });
  });
  describe('Subtract method tests', () => {
    it('Should return 5 (10 - 5)', () => {
      expect(calc.subtract(10, 5)).toEqual(5);
    });
    it('Should return 23 (30 - 7)', () => {
      expect(calc.subtract(30, 7)).toEqual(23);
    });
    it('Should return 100 (200 - 100)', () => {
      expect(calc.subtract(200, 100)).toEqual(100);
    });
  });
  describe('Divide method tests', () => {
    it('Should return 5 (10 / 2)', () => {
      expect(calc.divide(10, 2)).toEqual(5);
    });
    it('Should throw an error since 0 / 5 is invalid', () => {
      expect(() => calc.divide(0, 5)).toThrow('Invalid!');
    });
    it('Should throw an error since 0 / 0 is not allowed', () => {
      expect(() => calc.divide(0, 0)).toThrow('Not Allowed!');
    });
  });
});