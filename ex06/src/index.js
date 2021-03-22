// Only change code below this line
function multiplyArrayFunction(myArray) {
  var sum = 0;
  var product = 1;

  for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length; j++) {
      sum += myArray[i][j];
      product *= myArray[i][j];
      myArray.push([sum, product]);
    }
  }
  return myArray;
}
// Only change code above this line
console.log(multiplyArrayFunction([2], [5, 6, 7], [8, 9])); // Change this line
module.exports = multiplyArrayFunction;
