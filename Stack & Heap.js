let myYoutubename="ShwetaShaw.com"
let anothername=myYoutubename
console.log(myYoutubename) //ShwetaShaw.com
console.log(anothername) //ShwetaShaw.com

let myYoutubename1 ="ShwetaShaw.com"
let anothername1=myYoutubename
anothername1 = "Rajat.com"
console.log(myYoutubename1) //ShwetaShaw.com
console.log(anothername1) //Rajat.com

//Note:In primitive datatypes ,the value is assigned to the copy of the variable thus no change takes in the original variable

let user1={
    email:"user@google.com",
    upi:"user@ybl",
}
let user2=user1
user2.email="new@gmail.com"
console.log(user2.email) //new@gmail.com
console.log(user1.email) //new@gmail.com

//Note:In non-primitive datatypes ,the reference is assigned to the copy of the variable thus change takes place in the original variable
