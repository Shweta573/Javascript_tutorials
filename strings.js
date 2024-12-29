//Different ways to represent strings in js
//Way 1:
const name="Shweta"
const repocount=50
console.log(name   +  repocount  + "Value" ) // Shweta50Value

//Way 2 :
console.log(`Hello my name is ${name} and my repo count is ${repocount}`); // Hello my name is Shweta and my repo count is 50

//way 3:
const gameName = new String("hiteshhic-hc-com")
console.log(gameName[0]) // h

//way4:
console.log(gameName.__proto__) //The output will show the prototype of the string. This is an object
                                // {}
//way5 (String Methods):
console.log(gameName.length) //9
console.log(gameName.toUpperCase()) // HITESHHIC
console.log(gameName.charAt(2)) //it gives the character at position 2
console.log(gameName.indexOf('h')) //it gives the index of the  character .//0 (o/p)

const newstring=gameName.substring(0,6) 
console.log(newstring) //hitesh (includes character from 0 to 5)

const anotherString=gameName.slice(-6,-1)
console.log(anotherString)//eshhi , it simply reverses the string 

const String1="   Shweta    "
console.log(String1.trim()) //it removes the extra space from a string

const String2="https://github.com/Shweta573"
console.log(String2.replace('/', '-')) // it replaces the first occurence of / into -

console.log(String2.includes('Shweta')) // it checks whether the string includes shweta into it or not and returns boolean value

console.log(gameName.split('-'))//it splits the string into array based on '-'
                                // output: [ 'hiteshhic', 'hc', 'com' ]


