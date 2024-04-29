


// objects litrals

const mySym = Symbol("key1")

const jsUser = {
    name: "Hitesh",
    "full name":"Hitesh Choadhary",
    [mySym]:"mykey1",  // yahan interview question banta hai
    age: 18,
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedIn:"false",
    lastLogginDays:["Monday","saturday"]
}

// console.log(jsUser.email);  // first way to access this is not good way to access 
// console.log(jsUser["email"]);  // second way to access this is best way to access then above
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);


jsUser.email = "hitesh&chargpt"
// Object.freeze(jsUser)
jsUser.email = "hitesh@microshoft"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello JS users");
}

jsUser.greetingTwo = function(){
    console.log(`hello JS users , ${this.name}`);
}

// console.log(jsUser.greeting)
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())