let index = 0
while (index <=10){
    console.log(`The value of index is ${index}`);
    index = index + 1;
}

let myArray = ['flash','Batman','superman']
let arr = 0 
while (arr < myArray.length){
    console.log(`The value of index is ${myArray[arr]}`)
    arr = arr + 1;
}
let score =11
do{
    console.log(`The score is ${score}`)
    score++
}while(score<=10)

// High Order Loop Arrays :
// 1) For Each:Loops through each element in the array and performs an action.
let fruits = ["apple", "banana", "cherry"];
fruits.forEach(fruit => {
    console.log(fruit);
});
// Output: apple, banana, cherry


// 2) Map:Loops through the array and creates a new array by applying a transformation to each element.
let number = [1,2,3,4]
const number1 = number.map(num => num*num)
console.log(number1) // 1,4,9,16

// 3) filter: Loops through the array and creates a new array containing only the elements that pass a condition.
let numbers = [1, 2, 3, 4];
let even = numbers.filter(num => num % 2 === 0);
console.log(even);
// Output: [2, 4]

//4) reduce: Reduces the array to a single value by applying a function repeatedly.
let num= [1, 2, 3, 4];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
// Output: 10

//5. find : Finds the first element that matches a condition.
let num2 = [5, 12, 8, 130, 44];
let found = num2.find(num2 => num2 > 10);
console.log(found);
// Output: 12

//6) some: Checks if at least one element matches a condition.
let num3 = [1, 2, 3, 4];
let hasEven = num3.some(num => num % 2 === 0);
console.log(hasEven);
// Output: true

//7) every : Checks if all elements match a condition.
let num4 = [2, 4, 6];
let allEven = num4.every(num => num % 2 === 0);
console.log(allEven);
// Output: true
