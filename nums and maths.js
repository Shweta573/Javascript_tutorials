//Explicit conversion of datatype:'

const score=400
console.log(typeof(score)) //number

const balance = new Number(1000) // new Number(1000) creates a Number object, not a primitive number.
console.log(typeof(balance)) ;//object 

//Numbers in js:
console.log(balance.toString()) //it converts the number into string

console.log(balance.toString().length) // it tells the number of characters in a string

const number2=1296
console.log(number2.toFixed(3)) // it adds three digits to the number after the decimal point

const number3=12.96
console.log(number3.toPrecision(3)) //13

const number4=312.96
console.log(number4.toPrecision(3)) //313 ,it will simply precise the nuber depending upon its didgits

const number5=782312.96
console.log(number5.toPrecision(3))

const hundreds=1000000
console.log(hundreds.toLocaleString())//it represents the number according to International Number System

const hundreds1=100000
console.log(hundreds1.toLocaleString('en-IN'))////it represents the number according to Indian Number System

// Maths in js:
console.log(Math)
console.log(Math.abs(-10)) //it represents the absolute number,10
console.log(Math.ceil(2.3)) //it represents the highest number thus it is bit larger,3
console.log(Math.floor(2.9))//it represents the smaller number thus it is bit larger,2
console.log(Math.round(2.9))//3

console.log(Math.max(10,2,7,3)) //10
console.log(Math.min(10,2,7,3)) //2

console.log(Math.random()) //it always generates random number between 0-1,  0.59

console.log(Math.random()*10) //it always generates  random number between 0-10 , 5.9

console.log((Math.random()*10) +1) // generates  the random number is between 1 and 11 ,6.9

const min=10
const max=20

console.log(Math.floor(Math.random() * ( max-min + 1)) )
// Suppose a random number 0.5 is generated
//max-min +1 =11
//11 * 0.5 = 5.5
//Math.floor(5.5) = 5


