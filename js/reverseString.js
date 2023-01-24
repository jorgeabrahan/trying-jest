function reverseString(string) {
  const reversed = [];
  for (let i = string.length; i >= 0; i-=1) {
    reversed.push(string[i]);
  }
  return reversed.join('');
}

module.exports = reverseString;