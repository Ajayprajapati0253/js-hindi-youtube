
const myArr = [1,2,3,4,5,6]
const myHeros = ["shaktiman","nagraj"]
const myArr2 = new Array(1,3,5,6,8)

// console.log(myArr[0])
// myArr.push(9)
// myArr.push(10)
// myArr.pop()

// myArr.unshift(9)   // -> it insert element at start of the array
myArr.shift()       // -> it remove first element of the array

// console.log(myArr.includes(9))  // -> return true if present in the array else return false
// console.log(myArr.indexOf(6))   // -> return index if present else return -1

const newArr = myArr.join()

// console.log(myArr)
// // console.log(newArr)
// console.log(typeof newArr)


// ++++++++++++++ slice, splice +++++++++++++++++

console.log("A",myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr)

const myn2 = myArr.splice(1,3)  // ye original array ko manipulate kar deta hai 
// means ye original array se ye value ko nikal leta hai
console.log(myn2)
console.log("C",myArr)