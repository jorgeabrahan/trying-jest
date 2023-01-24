function stringLength(string) {
  if (string.length < 1 || string.length > 10) {
    throw new Error('String does not meet the conditions (at least 1 character and not more than 10)');
  }
  return string.length;
}

module.exports = stringLength;