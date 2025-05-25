//agar hame pata na ho kitne parameter pass karne h
//jaie ki hm cart me items add akrte h to pehle se pta nhi hota ki kitne items add karna h

function calculateCartPrice(...nums1){  // these three dot here known as rest(...)
    return nums1;
}

console.log(calculateCartPrice(200,400,600,2000)) //Now they will store into an array, as we see we are passing only one parameter but at the time of console.log we various amounts these amounts will store into an array

//jb hame object ki value ko use karna ho function me to

const user = {
    username: "Rohit",
    price:199
}

function handleObject(anyObject){
    console.log(`UserName is ${anyObject.username} and price is ${anyObject.price}`);

}

//handleObject(user); zarori nhi ki hum phle hi object bna le hm baad me argument me bhi object ko pass kar skte h jaise

handleObject({
    username:"Smith",
    price: 499
})

const myNewArray = [200,400,600,800]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));// zaroori nhi hm array ko phle hi bnaye
console.log((returnSecondValue([800,500,100,600,900])));


