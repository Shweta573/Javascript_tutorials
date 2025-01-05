/* The basic HTML tag in terms of browsers is called DOM.It can include
title tag,image tag,link tag and so on.In JS we can perform various opeartions in DOM and make it interactive.
When we open any website by clicking on inspect option : We will have multiple options.

Elements : It will show the elements present in html code
Console : The errors occurred in our code will show here
Sources: It will show all the files and their code present in the source
Network: When API COMMUNICATES with other servers then it is visible here

Methods :
Applications : The data available in cookies , manage & sessions storage
Using prompt we can interact with the browser and can take user input
Alert : To give some alert message to the browser


DOM Manipulation:

 let heading = document.getElementById("heading")
 console.dir(heading)

 let headings = document.getElementsByClassName("heading-class")
 console.dir(headings)
 console.log(headings)

let parahs = document.getElementsByTagName("p1")
console.dir(parahs)*/

let parahs = document.querySelector("p")
console.dir(parahs)

let parah1 = document.querySelectorAll("p")
console.dir(parah1)

let headings = document.querySelector(".heading-class")
console.dir(headings)

let chld = document.querySelector("div").children
console.dir(chld)
 /*let heading1 = document.querySelectorAll(".heading-class")
 console.dir(heading1)
 console.log(heading1)

 let heading = document.querySelector("#heading")
 console.dir(heading)
 
 let heading2= document.querySelectorAll("#heading")
 console.dir(heading2)
 */
 


