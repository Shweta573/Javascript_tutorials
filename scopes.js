let toy = "Car"; // Global variable

function playWithToy() {
  console.log(toy); // Everyone can see and use the "toy"
}
console.log(toy); // Output: Car


function playInRoom() {
    let toy = "Doll"; // Local variable
    console.log(toy); // Only visible inside this function
  }
  playInRoom(); // Output: Doll
  console.log(toy); // Error! "toy" is not visible here
  