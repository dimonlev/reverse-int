module.exports = function reverse(n) {
  let newString = "";
  let str = n.toString();
  for (let i = str.length - 1; i >= 0; i--) {
    newString = newString + str[i];
  }
  return parseInt(newString, 10);

}
