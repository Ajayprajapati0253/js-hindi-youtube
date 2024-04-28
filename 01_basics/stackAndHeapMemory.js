
// stack(primitive),

let myYoutubeName = "hiteshChoudarydotcom"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName)
console.log(anotherName)


// heap(non-primitive)
let userOne = {
    email:"user@google.com",
    upi:"user@ybl",
}

let userTwo = userOne

userTwo.email = "hiteshChoudary@google.com"

console.log(userTwo.email);
console.log(userOne.email)