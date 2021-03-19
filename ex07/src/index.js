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
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, 10, 18, 21],
    [72, 3, 17, 10],
  ])
); // Change this line
module.exports = largestNumFromArr;
