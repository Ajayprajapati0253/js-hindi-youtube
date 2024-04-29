const user = {
    username :"hitesh",
    price: 299,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "ajay"
// user.welcomeMessage()

// console.log(this)


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()


// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// +++++++++++++++++ arrow function ++++++++++++++++

// const chai = () => {
//     let username = "hitesh"
//     // console.log(this.username);
//     console.log(this);
// }

// chai()

//++++++++++ explicite ++++++++++++++
// aapko return keyword likhna padta hai

// const addTwo = (num1,num2) => {
//     return num1 + num2 
// }

// ++++++++++ implicite ++++++++++++++++++
// yhe man leta hai ki return keyword likhne ki jarurat nhi hai

// const addTwo = (num1,num2) => num1 + num2 

// const addTwo = (num1,num2) => (num1 + num2) 

const addTwo = (num1,num2) => ({username : "hitesh"})

console.log(addTwo(3,4))