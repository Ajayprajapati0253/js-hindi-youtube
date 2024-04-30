const myNums = [1,2,3]
// acc -> accumulate

// const myTotals = myNums.reduce( function (acc,currVal) {
//     console.log(`acc:-> ${acc} currVal:-> ${currVal}`);              // more readable
//     return acc + currVal
// },0)

// const myTotals = myNums.reduce( (acc,currVal) => acc+currVal , 0)       // less readable

// console.log(myTotals);


const shoppingCart = [
    {
        itemName : "js course",
        price : 2999,
    },
    {
        itemName : "py course",
        price : 999,
    },
    {
        itemName : "mobile dev course",
        price : 5999,
    },
    {
        itemName : "data science course",
        price : 12999,
    }
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price , 0)

console.log(priceToPay);