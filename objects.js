// Objects can be created by using two ways:
//1. Using object literals: 2. By using constructor 
// In objects we store values in key/value pairs

//Object.create()  ; object creation by using constructor (Singleton method)

// Ways to use symol as keys in objects:
// Part 1: Objects:

const mySym = Symbol("keys1")
const Juser={
    name:"John",
    [mySym]:"key1",
    age:30,
    email:"john@gmail.com",
    isloggedIn:false,
    Lastlogindays: ["Monday", "Tuesday", "Wednesday"]
}

console.log(Juser.email)
// console.log(Juser[email]); it will throws an error  because the key (email) is considered as string by default
console.log(Juser["email"])
console.log(Juser.mySym)  
//console.log(typeof Juser.mySym) ;// Here the key mySym  is treated as a string 
console.log(Juser[mySym]) //In order to treat it as a symbol we need to enclose them with square parenthesis.

//Ways to change the value of an object:
Juser.email = "ShwetaShaw@google.com"
console.log(Juser.email)

// In order to freeze the value of an object
Object.freeze = (Juser)
Juser.name="Rajat"
console.log(Juser.name)

//Part 2: Objects 
const tinderUser = new Object() // a singleton object
const tinderUser1 = {} // a non singleton object

tinderUser.name = "John"
tinderUser.id="123abcd"
console.log(tinderUser) // it will print the list in the form of object

const regularname = {
    email:"John@example.com",
    fullname:{
        userfullname:{
            firstname:"John",
            lastname:"Doe"
        }
    }
}
console.log(regularname.fullname.userfullname) // it will print the details for userfirstname
console.log(regularname.fullname.userfullname.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// Ways to merge two objects (Typ1)
const obj3={obj1,obj2}

//(Type 2)
const obj4=Object.assign(obj1,obj2)

//(Type 3)
const obj5=Object.assign({},obj1,obj2)

//(Type 4)
const obj6={...obj1,...obj2}

console.log(obj3) //obj1: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }, obj2: { '3': 'c', '4': 'd' }}

console.log(obj4) // o/p : { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log(obj5) // o/p : { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log(obj6) // o/p : { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
 {
    id: 1,
    email: "test@example.com"
  }

]
console.log(users) // [ { id: 1, email: 'test@example.com' } ]

// Ways to access the keys of an object:
console.log(Object.keys(tinderUser)) // [ 'name', 'id' ]

// Ways to access the values of an object:
console.log(Object.values(tinderUser)) // [ 'John', '123abcd' ]

console.log(Object.entries(tinderUser)) // [ [ 'name', 'John' ], [ 'id', '123abcd' ] ]

console.log(regularname.hasOwnProperty(firstname)) // True