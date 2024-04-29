// const tinderUser = new Object()   // -> this is singlton object
const tinderUser1 = {}   // -> not singleton object

tinderUser1.id = "124abc"
tinderUser1.name = "sammy"
tinderUser1.isLoggedIn = false

// console.log(tinderUser)
// console.log(tinderUser1)

const regularUser = {
    email: "some@google.com",
    fullname: {
        userFullName:{
            firstName: "hitesh",
            lastName: "Choudhary"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

// const obj3 = {...obj1,...obj2}

// console.log(obj3)

const users = [
    {
        id: 1,
        email: "h2gmail.com"
    },
    {
        id: 1,
        email: "h2gmail.com"
    },
    {
        id: 1,
        email: "h2gmail.com"
    },
]

users[1].email
// console.log(tinderUser1);
// console.log(Object.keys(tinderUser1));
// console.log(Object.values(tinderUser1));
// console.log(Object.entries(tinderUser1));
// console.log(tinderUser1.hasOwnProperty('isLogged')); // -> return true or false


const course = {
    courseName: "js",
    coursePrice: "999",
    courseInstructor: "hitesh",
}

// course.courseInstructor

// const {courseInstructor} = course
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// json formate
// json object form
// {
//     "name" : "hitesh",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

// json array form
// [
//     {},
//     {},
//     {},
// ]
