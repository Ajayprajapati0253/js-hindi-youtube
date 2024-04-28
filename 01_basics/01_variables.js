const accountId = 4423424
let accountEmail = "ajay@google"
var accountPassward = "@ajay09"
accountCity = "jaipur"
let accoountState;

// accountId = 287423489; not allowed

accountEmail = "ay@google"
accountPassward = "ajay@-09"
accountCity = "indore"



console.table([accountEmail,accountCity,accountPassward,accoountState]);

/*
    Prefer not to use var
    because of issue in block scope and function scope
*/
console.log(accountId);