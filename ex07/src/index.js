// Only change code below this line
function largestNumFromArr(arr) {
  var maxNumArray = [0, 0, 0, 0];

  for (var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
    for (
      var subArrayIndex = 0;
      subArrayIndex < arr[arrayIndex].length;
      subArrayIndex++
    ) {
      if (arr[arrayIndex][subArrayIndex] > maxNumArray[arrayIndex]) {
        maxNumArray[arrayIndex] = arr[arrayIndex][subArrayIndex];
      }
    }
  }
  return maxNumArray;
}
// Only change code above this line

console.log(
  largestNumFromArr([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1],
  ])
); // Change this line
module.exports = largestNumFromArr;
