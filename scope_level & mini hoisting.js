function One(){
    const username = "Hitesh"
    function Two(){
        const website="youtube"
        console.log(username);
}
// console.log(website);
Two()
}
One()
 if (true)
 {
    const username = "Hitesh"
    
    if (username == "Hitesh"){
        const website ="  youtube"
        console.log(username + website );

    }
    // console.log(website) it cannot be accessed because it lies outside the scope 
 }
 //console.log(username) it cannot be accessed because it lies outside the scope 

 // Interesting Point:
 console.log(addone(5))
 function addone(num){
    return num + 1
 }

 const addTwo= function(num){
    return num +2
 }
console.log(addTwo(8))

// Arrow Functions in js:
const sayHello = () => { // representation of arrow function 
    console.log("Heeyy")
}
sayHello()

const addNumber = (a,b) => { // takes parameters 
    return a + b
}
console.log(addNumber(2 ,7))

//Another form of arrow function:
const addV2 = (a,b) => a+b; // one liner arrow  function 
console.log(addV2(3,4))

/*const numarray = (val1,val2,val3) => { // In arrow function the parameters des not takes arguments to do this we use spread operator
    console.log(arguements)
}
(numarray(10,20,30))
*/

const addNumbers = (...nums) => {
    console.log(nums);
}
addNumbers(10,20,30,40,50)

// Hoisting is not allowed in arrow function but applicable in normal functions 
//Hoisting is defining  the function first and then using  it

const sayHeyy = () => {
    console.log("Heyy there")
};

sayHeyy()

// In normal function we can use this keyword to refer the object but in arrow function it is not allowed
const obj = {
    value:20,
    myFunction: () => {
        console.log(this.value)
    }
}
obj.myFunction();
