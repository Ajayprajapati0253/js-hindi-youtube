// forof loop

// [{},{},{}]
// ["","",""]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

// const greeting = "Hello world!"
// for (const greet of greeting) {
//     if(greet === ' '){
//         // console.log('--------------------------');
//         continue
//     }
//     // console.log(`greet is ${greet}`);
// }



// ++++++========= Map ==========+++++++++++++++++

const map = new Map()

map.set('IN','India')
map.set('Bh','Bhopal')
map.set('vd','Vidisha')

// for (const key of map) {
//     console.log(key);   
// }
// for (const [key,value] of map) {
//     console.log(key , ':->' , value);   
// }


const myObject = {
    game1 : "nfs",
    'game2' : "ludo"
}

for (const [key,value] of myObject) {
    console.log(key , ':->' ,value);
}