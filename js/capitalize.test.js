const capitalize = require('./capitalize');

describe('Capitalize function tests', () => {
  it('Should return "hello" capitalized (Hello)', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
  it('Should return "today" capitalized (Today)', () => {
    expect(capitalize('today')).toBe('Today');
  });
});