let str = 'Hello I am Swapnil';

function stringReverse(str) {
  let reverseStr = '';
  for (i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;

}
const result = stringReverse(str);
console.log(result);