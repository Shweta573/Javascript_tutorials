const temperature = 100
if ( temperature < 50){
    console.log("It is cold")

}
else{
    console.log("It is hot")
}

// Else-if in js
/*if (consition1){

}
else if(consition2){
}
else if(consition3){
}
else{

}

// AND and OR operators in js:

 if(condition1 && condition2 && condition3){

}
if(condition1 || condition2 || condition3){

}


// SWITCH CASE IN JS:
switch (key)
{
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    default:
        // code block
}
*/
// Example of switch case:

const month = 3

switch (month) {
    case 1:
       console.log("January")
       break;

    case 2: 
        console.log("February")
        break;

    case 3:
        console.log("March")
        break;

}

const month1 = "march"

switch (month1) {
    case "jan":
       console.log("January")
       break;

    case "feb": 
        console.log("February")
        break;

    case "mar":
        console.log("March")
        break;

}

/*falsy values : some values assumed to be false i.e : false, 0, -0, BigInt 0n, "", null ,undefined, NAN
While some values that are assumed to be true are called truthy value i.e : "0" , 'false' ,{}, [], function(){}

*/
// To check whether empty array is truthy value:

const array = []
if(array ===0 ){
    console.log("Array is truthy")// we cannot directly access the empty array
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0){ // we cannot directly access the empty array so we used length method instead 
    console.log("Object is empty")
}

// Nullish Coalescing Operator (??) : It deals with only null and undefined

let val1
val1 = 5 ?? 10


console.log(val1)
