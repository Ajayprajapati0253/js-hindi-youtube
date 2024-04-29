// console.log("H");
// console.log("i");
// console.log("t");
// console.log("e");
// console.log("s");
// console.log("H");

// create function
function sayMyName() {
    console.log("H");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("H");

}

// sayMyName  // -> this is reference 
// sayMyName()  //  -> this is execution
// sayMyName()

// function addTwoNumbers(number1,number2) {
//         console.log(number1+number2)
// }


function addTwoNumbers(number1,number2) {
   
    // let result = number1 + number2
    // return result

    return number1 + number2;
}

const result = addTwoNumbers(4,5)

// console.log("result :",result);

// addTwoNumbers(3,4)
// function userloggedIn(username="ajay")  // if ke andar jaun hi na
function userloggedIn(username){
    // if(username === undefined)
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(userloggedIn("hitesh"));
// console.log(userloggedIn());



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++ SECOND LECTURE OF FUNCTION +++++++++++++++++++++++++++++++++++++++++++

// this is called rest operator for here -> ...
function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,300,400,2000))

// ++++++++++++ function with object ++++++++++++++
const user = {
        username : "hitesh",
        price : 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

// console.log(handleObject(user))
// object bana kar bhi pass kar sakte hain
handleObject({
    username: "ajay",
    price : 399
})



// +++++++++ function with arrays

const myArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArray))
console.log(returnSecondValue([100,200,300,400]))