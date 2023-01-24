const reverseString = require('./reverseString');

it('Should return the reversed string of: reversed, which is desrever', () => {
  expect(reverseString('reversed')).toBe('desrever');
});

it('Should return the reversed string of: return, which is nruter', () => {
  expect(reverseString('return')).toBe('nruter');
});