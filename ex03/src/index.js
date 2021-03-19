// Create a myPetsArray here
var myPetsArray = ["Dog", "Cat"];
// End of myPetsArray

function myArrayFunction(myPets) {
  var myNewPets = [...myPets];

  // only change code below this line
  myNewPets.push("Bird", "Fish");
  console.log(myNewPets);

  var firstPet = myNewPets.shift();
  console.log(firstPet);

  var lastPet = myNewPets.pop();
  console.log(lastPet);

  myNewPets.unshift("Lion");
  return myNewPets;
  // Only change code above this line
}

console.log(myArrayFunction(myPetsArray)); // Change this line
module.exports = myArrayFunction;
