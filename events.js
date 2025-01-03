/* The change in the state of an object is known as Event
Types of Events:
.Mouse events(click,doubleClick,mouseover)
.keyboard events
.Form events
.Print events

Event Handling in JS:(General Syntax)
node.event=() =>{
    // handle here
}

let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("btn1 clicked")
    let a = 25;
    a++;
    console.log(a); // 26
}
/*

let div  = document.querySelector("div");
div.onmouseover = () => {
    console.log("You are inside div ")
}

/* Important Note:
.If we perform Inline Event Handling in HTML and Event Handling in js file then priority will be given to js file.
.If we define multiple handlers then the last handler will overwrite the first one.

Event Object: It is a special object that has details about the event.
All event handlers have access to the Event Object's properties & methods.
General Representation :
Node.event = (e) => {
    // handle here
}

let btn1 = document.querySelector("#btn1"); // event  performed on click  

btn1.onclick = (e) => {
    console.log(e)
    console.log(e.type)
    console.log(e.target)

}


let div  = document.querySelector("div");
div.onmouseover = (e) => {
    console.log(e)
    console.log(e.type)
    console.log(e.target)
    console.log(e.clientX, e.clientY)
}

*/

// Event Listerner : Another way of handling events.
/* Syntax:

i)node.addEventListener(event,callback)
ii)node.removeEventListener(event,callback)

* Note: the callback reference should be same to remove


btn1.addEventListener("click" , () => {
   console.log("button was clicked")
})

btn1.addEventListener("click" , () => {
    console.log("button was clicked - handler2")
})

//Clearly seen multiple event handler can be done on the same event

// We can also pass event objects on the event listeners
btn1.addEventListener("click" , (e) => {
    console.log("button was clicked")
    console.log(e)
    console.log(e.target)
    console.log(e.type)
 })

 btn1.addEventListener("click" , () => {
    console.log("button was clicked handler-1")
 })
 
btn1.addEventListener("click" , () => {
     console.log("button was clicked  handler2")
 })

/*btn1.addEventListener("click" , () => {
    console.log("button was clicked  handler3")
})


btn1.addEventListener("click" , () => {
    console.log("button was clicked  handler4")
})
// In order to remove event listerner:

btn1.removeEventListener("click" , () => {
    console.log("button was clicked handler-1") // In this case it is not removed
})

const handler3 = () => {
    console.log("button was clicked  handler3")
} // In order to remove we need to store in a variable

btn1.removeEventListener("click" , handler3)
*/

/* Way1:
let modebtn = document.querySelector("#mode")
let currmode ="light"

modebtn.addEventListener("click" , () => {
    if(currmode === "light"){
        currmode = "dark"
        document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        currmode = "light"
        document.querySelector("body").style.backgroundColor = "white";

    }  
    console.log(currmode)
})

*/


let modebtn = document.querySelector("#mode")
let body = document.querySelector("body")
let currmode ="light"

modebtn.addEventListener("click" , () => {
    if(currmode === "light"){
       currmode = "dark"
       body.classList.add("dark") 
       body.classList.remove("light")
    }
    else{
        currmode = "light"
        body.classList.add("light")
        body.classList.remove("dark")

    }  
    console.log(currmode)
})
