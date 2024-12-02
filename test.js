const accountId = 1432368
let accountEmail = "shweta@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

/* accountId = 21648 
*/
console.log(accountId);
console.log(accountCity);
console.log([accountId , accountEmail, accountPassword, accountCity]);

//Output: This statement is used to print multiple variables at a time.

accountEmail = "s@tcs.com"
accountPassword = "121212" // Here we have modified the value of a variable thus prints the new value
accountCity = "Kolkata"

console.log(accountId);
console.log([accountId , accountEmail, accountPassword, accountCity]);

/*Output:
143268 , s@tcs.com, 121212 , Kolkata 
Note I) In java script we use const for constants  and let for variables & prefer not to use var for variable because of issue in functional  and  block scope.
     ii) If we not define any value in variable in js then it considers it to be undefined.
/*



