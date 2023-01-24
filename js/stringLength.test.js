const stringLength = require('./stringLength');

it('Should return 6 as the length of the string: border', () => {
  expect(stringLength('border')).toBe(6);
});

it('Should return 8 as the length of the string: notebook', () => {
  expect(stringLength('notebook')).toBe(8);
});

it('Should return an error because the string is empty', () => {
  expect(() => stringLength('')).toThrow(Error);
});

it('Should return an error because the string has more than 10 characters', () => {
  expect(() => stringLength('accomplishment')).toThrow(Error);
});