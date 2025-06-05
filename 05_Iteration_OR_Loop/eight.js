//Reduce Function
const myNums = [1,2,3];
/* 
const myTotal = myNums.reduce(function(accumulator,currentVal) {
    console.log(`acc: ${accumulator} and currentValue: ${currentVal}`);
    return accumulator+currentVal;   
},0) */
//Upar just ye jo reduce function h usme kya hota hm do value pass karte phla hota h accumulator aur dushra value hota h current Value jo ki hm array se lete h kahi se aur bhi
//but accumulator ke paas koi bhi value nhi hoti to usko hm last me cooma laga ke uski value ko initialize karte h jaise ki is case me hamne 0 liya h
//aur last me hm accumulator ko return kar dete h
//mainly ye e-coomerce me use hota h jaise ki hm cart me item add karte jaate aur saare item ka value add hote jata h


//BY Arrow function
const myTotal = myNums.reduce((acc,currVal) => acc+currVal, 0)
console.log(myTotal);

//Shopping Cart Item

const shoppingCart = [
    {
        itemName: "PYthon Course",
        price: 999
    },
    {
        itemName: "javaScript Course",
        price: 2999
    },
    {
        itemName: "Mobile dev Course",
        price: 5999
    },
    {
        itemName: "DAta Science Course",
        price: 12999
    }
]

const courseTotal = shoppingCart.reduce((acc,item) => acc+item.price, 0)
console.log(courseTotal);

