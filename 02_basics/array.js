//javaScript arrays are resizeable
//it can contains different data types

const myArr = [0,1,2,3,4,5];
const myHeroes = ["Ironman","captain America", "Spiderman"];

const myArr2 = new Array(1,2,3,4);
console.log(myArr[1]);

// Array Methods

myArr.push(6)
myArr.push(7) // to add the element in an array
console.log(myArr);

myArr.pop(); // to remove the uppermost element from an array
console.log(myArr);

myArr.unshift(9)  // to add an element at first position
console.log(myArr);

myArr.shift() // to remove the elment which is added from unshift
console.log(myArr);

console.log(myArr.includes(9)); //ye btata h ki us array me ye element available hai ya nhi answer boolean(true or false)

console.log(myArr.indexOf(3)); // ye element ka index btata h ki element kaun se index pe h

const newArr = myArr.join() // ye array ke datatype to string me convert kr dega
console.log(newArr);

console.log("A",myArr);

const myn1 = myArr.slice(1,3); // last wale index(3) ka element include nhi hota h
console.log(myn1); // output = [1,2]

console.log(" B ", myArr);

const myn2 = myArr.splice(1,3); //isme puri array hi manipulate ho jati h jitna bhi hamne range diya utne saare index ke element original array se remove ho jate h
console.log(myn2); // [1,2,3]

//original Array = myArr = [0,4,5,6]
console.log(" C " , myArr); // myArr = C [ 0,4,5,6]













