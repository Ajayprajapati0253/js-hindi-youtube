//  forin loop
// iterate over objects

// const myObject = {
//     'js' : 'javaScript',
//     'cpp' : 'c++',
//     'rb' : 'ruby',
//     'java' : 'java'

// }

// for (const key in myObject) {
//     console.log(`${key} : shortcut is for :>  ${myObject[key]}`);
// }

const arr = ["cpp","py","js","java","rb"]

for (const key in arr) {
    console.log(arr[key]);
}