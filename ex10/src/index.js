// Only change code below this line
function mySplice(arr1, arr2, n) {
  for (let counter = 0; counter < arr1.length; counter++) {
    arr2.splice(n, 0, arr1[counter]);
  }
  return arr2;
}
// Only change code above this line

console.log(mySplice([1, 2, 3], [4, 5], 1)); // Change this line
module.exports = mySplice;
