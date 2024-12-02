/*
Types of datatypes:
Primitive : It includes int,string,boolean,float,double,BigInteger,null,undefined,Symbol. We always use Stack for the same.
*/
let mymarks=100
const marks1=100.0
let myEmail="s@example.com"
isloggedIn=false
let isCity=null
let myhobby;

console.log(typeof mymarks) //number
console.log(typeof marks1) //number
console.log(typeof myEmail)// string
console.log(typeof isloggedIn) //boolean
console.log(typeof isCity) //object
console.log(typeof myhobby) //undefined

const firstid =Symbol('123')
const anotherId =Symbol('123')
console.log(firstid === anotherId) //false

const bigNumber=7564235698n //representation of big integer

// Non primitive: It includes objects, arrays,functions .We always use Heap  for the same

const isnames=['Rajat','Shweta','Twinkle','Princy'] //array represenation of names

let obj={              //object representation
    name:"Shweta",
    age:24,
}

const myname=function(){ 
    console.log("Hello World")
}                          //function representation

