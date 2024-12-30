let score = 33
let score2 = "33abc"

let marks = Number(score2)
console.log(typeof score) //Number
console.log(typeof score2) // string
console.log( marks) //The Number function converts a value to a numeric type.
                    // If the string contains only valid numeric characters (e.g., "33"), it converts successfully.
                    // If the string contains invalid numeric characters (e.g., "33abc"), the conversion fails, and the result is NaN (Not a Number).

// 33 --> 33
// 33abc -->  Nan
// true --> 1 
// false --> 0 

let ispass = 1
let isresult = Boolean(ispass)
console.log(isresult)

// 1 --> true

let isname = "Shweta"
let firstname = Boolean(isname)
console.log(firstname)

// " " --> false
// "Shweta" --> true
