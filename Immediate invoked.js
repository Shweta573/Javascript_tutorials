(function() // An Immediately Invoked Function Expression (IIFE) is a JavaScript function that is executed as soon as it is defined.It is mainly used to create a private scope, so variables inside it don’t interfere with the outside code.
{
    let message="Hello World!"
    console.log(message)
})();

console.log(message)

// Execution Context in js :
// javascript is a synchronous , single-threaded language.
//Two parts of excecution context : i) Memory (variable context), ii) Code (Thread of execution)
// In memory the variables are stored in key:value pairs
//Js excecute line by line code and in a specific ord
