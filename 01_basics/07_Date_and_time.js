// Dates

let myDate = new Date()
// yanha per mydate ek -> object hai
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2024,0,29)
// let myCreatedDate = new Date(2024,0,29,5,3)
let myCreatedDate = new Date("01-29-2024")  // mm-dd-yy
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000)) //+++++++++ this convert into second


let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth())
// console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday:"long"
})