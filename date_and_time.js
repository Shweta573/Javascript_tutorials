let mydate=new Date
console.log(mydate)//The Date object in JS is used to represent a specific point in time.
//Output: 2024-12-04T04:59:05.057Z

console.log(mydate.toString()) //It converts the Date object into a human-readable string format.
//Output: Wed Dec 04 2024 10:31:08 GMT+0530 (India Standard Time)

console.log(mydate.toLocaleString()) //It formats the date and time in a way that's familiar to users in their region.
//Output: 4/12/2024, 10:35:22 am

console.log(mydate.toJSON()) // It converts a Date object into a string that represents the date and time in the ISO 8601 format.
//Output: 2024-12-04T05:07:50.564Z

console.log(mydate.toDateString()) // This  method is used to convert a Date object into a human-readable string 
//Output: Wed Dec 04 2024

let myCreatedate = new Date(0,23,2024)
console.log(myCreatedate.toDateString()) // 0-January,23-Date,2024-Year

let myTimestamp=Date.now()
console.log(myTimestamp)

console.log(Date.now())
console.log(Math.floor((Date.now())/1000))