/* Sync in JS:
1) Synchronous : It means the code runs in a particular sequence of instructions given in the program.
Each instruction waits for the previous instruction to complete its execution.
 
2) Asynchronous : It means the code runs concurrently with other instructions and avoids unnecessary delay in processing the next instructions.

setTimeout(() => {  A function which sets the execution time of an instruction 
    console.log("Hello");
},4000);

Callback : A function which is passed as an arguement in another function 
Callback Hell : Nested callbacks stacked below one another forming a pyramid structure (Pyramid of Doom).
This style of programming becomes difficult to understand & manage. 

Promise: It is for "eventual" completion of task.It is an object in JS which it creates internally .It is a solution to callback hell.
It consists of three states: 1) pending, 2) fulfilled(resolve), 3)rejected
Handlers of js: let promise = new Promise((resolve, reject) => {
    
}

A javascript Promise object can be:
. pending : the resule is undefined.
. resolved : the result is fulfilled   resolve(result)
. rejected : the result is an error object reject (error)


Example of callback:
# Way 1 :
function sum(a,b){
    console.log(a+b)
}

function calculator(a, b, sumcallback) {
    sumcallback(a,b);
}
calculator (1, 2, sum)

# Way 2:
function sum(a,b){
    console.log(a+b)
}

function calculator(a, b, sumcallback) {
    sumcallback(a,b);
}
calculator (1, 2, (a,b) => {
    console.log(a+b)
});




# Example of Callback:
function getData(dataId) {   // It is a function that acts as a database 
    console.log("data",dataId)
}


function getData(dataId) { 
    setTimeout(() => { // This example shows that the database is taking time to fetch data 
    console.log("data",dataId)
},2000)
}

Write a program such that  I want to print a data within a  span of 2 seconds each.
/* Example of callback hell 
function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData){
            getNextData()
        }
    }, 2000);
}
getData(1, () => {
    console.log("Getting data2....")
    getData(2, () => {
       console.log("Getting data3....")
        getData(3, () => {
           console.log("Getting data4....")
            getData(4);
        })
   })
})

# Promise (Way 1)
let promise = new Promise((resolve, reject) => {
    console.log("I am a promise")
});

# Promise (Way 2)
let promise = new Promise((resolve, reject) => {
    console.log("I am a promise") #In this case the promise state is fulfilled.
    resolve("Success")
});  

#Promise (way 3)
let promise = new Promise((resolve, reject) => {
    console.log("I am a promise") #In this case it will throw an error
    reject("some error ")
});       



const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise")
    });
};

let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled",res)
}); 

/* We have two functions then and catch in which we pass functions and will print when the promise state is fulfilled 
promise.catch((err) => {
    console.log("rejected",err);
});
Promise chaining */
function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data1")
            resolve("Success");
        }, 2000);
    });
}

console.log("fetching data1");
let p1 = asyncFunc();
p1.then((res)  => {
    console.log(res);
});