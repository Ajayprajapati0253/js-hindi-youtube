const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + "value")  // old version

// new version and good
console.log(`Hello my name is ${name} and repo count is ${repoCount}`)

const gameName = new String('hitesh-hc')

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())

console.log(gameName.charAt(2)) //it give the character at this position
console.log(gameName.indexOf('t'))  // it give the index where this character is present if not it give -1a


const newString = gameName.substring(0,4) // start included but end is exclusive 
console.log(newString)

const anotherString = gameName.slice(-3,9)
console.log(anotherString)

const newStringOne = "   hitesh  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('hitesh')) // if present return true else return false