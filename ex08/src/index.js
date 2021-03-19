// Only change code below this line
function myMutation(arr) {
  var wordOne = arr[0].toLowerCase();
  console.log(wordOne);
  var wordTwo = arr[1].toLowerCase();
  console.log(wordTwo);

  for (let i = 0; i < wordTwo.length; i++) {
    if (wordOne.indexOf(wordTwo[i]) < 0) {
      return false;
    }
  }
  return true;
}

// Onyl change code above this line

console.log(myMutation(["Noel", "Ole"])); // Change this line
module.exports = myMutation;
