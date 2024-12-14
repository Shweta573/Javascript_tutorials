function setmyname(){
    console.log("S");
    console.log("H");
    console.log("W");
    console.log("E");
    console.log("T");
    console.log("A");
}
setmyname() // if we need to execute the function
setmyname// this is the reference of function 

//Simple Function to add two numbers :
 function addNumbers(a, b) { // Here a & b are parameters 
    console.log( a + b);
}
addNumbers(3,4)
addNumbers() 
addNumbers(3,"4") // Here 3 and "4" are arguements 
const result = addNumbers(5,6) 
console.log(result) // undefined 

//In order to avoid such errors:
//Technique 1:
function productNumbers(a,b){
    let res = a*b
    return res
    console.log("Hello World") // By default the print statement doesn't work inside  function definition in js . If we write print statement on top of return statement then it will work.
}
const res = productNumbers(10,20)
console.log("The result is:" ,res);

//Technique 2:
function productNumbers(a,b){ 
    console.log("Hello World")
    return  a * b  // By default the print statement doesn't work inside  function definition in js . If we write print statement on top of return statement then it will work.
}
const res1= productNumbers(5,20)
console.log("The result is:" ,res1);

function loginUsermessege(username){
    return `${username} just logged in`

}
console.log(loginUsermessege("Shweta"));


// Working Of If-Else Condition:
function loginUsermessege(username){
    if(username === undefined){
        console.log("Please enter a username");
    }
    return `${username} just logged in`

}
console.log(loginUsermessege("Shweta"));

// FUNCTION PART 2 :
function CalculateCarPrice(...num1){
    return num1  //This is called rest opeartor

}
console.log(CalculateCarPrice(200,300,400)) // it returns the array of car prices , op: [ 200, 300, 400 ]

function CalculateBusPrice(val1,val2,...num1){
    return num1
}
console.log(CalculateBusPrice(200,300,400,500)) // here num1 will store [400,500] into it

const user={
    username:"Shweta",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)

handleObject({
    username:"Rajat", // another type of object definition 
    price:299
})

const newarray = [200,400,600]
    function returnSecondvalue(getArray){ // another form of function definition 
        return getArray[1]
    }
console.log(returnSecondvalue(newarray))

