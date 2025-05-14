const score = 400;
console.log(score);

const balance = new Number(100); // this will declare the value of number type
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2)); //ye batata hai ki value ke baad hame kitne decimal value chahiye yha pe humne 2 diya to ye to decimal value tk jayega


const otherNumber = 12.78998;
console.log(otherNumber.toPrecision(2)); //output = 13 kyu ki ye aage ke do number dega aur roundoff kr ke dega , ek aur example next line
console.log(otherNumber.toPrecision(3)); // output = 12.8

const currentValue = 1000000000;
console.log(currentValue.toLocaleString('en-IN')); // ye values ko separate kr dega jaise hm indians values ko separate krte h 

//=================MATHS===========//
console.log(Math.abs(-4)); // output = 4 ye negative value ko postive me convert kr deta h
console.log(Math.round(4.3)); // output = 4
console.log(Math.round(4.6)); // output = 5

console.log(Math.ceil(4.3)); // output = 5 // ceil ka matlb value ke just upar wala number. yha pe 4 se ek bhi number upar hua to 5 de diya
console.log(Math.ceil(4)); // output = 4 // matlab ki given value (4) se upar honi chahiye kuch bhi like (4.01,4.1,4.0001)

console.log(Math.floor(4.9)); //output = 4 matlab ki niche wali value agar 4.7 ya 4.08 kuch bhi ho to ye sabse niche wali hi value lega

console.log(Math.random()); // ye hamesha value return karta h 0 aur 1 ke beech me
console.log((Math.random()*10+1)); // isme 10 se multiply is liye kr rhe ki value left shift ho jaye aur wo value mil jaye
// + 1 isliye kr rhe ki agar 0 se multiply kiya to 0 mil jayega isme km se km value 1 to milega
console.log(Math.floor(Math.random()*10+1));

//trick
const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min); // isme value jo bhi generate hogi wo 10 aur 20 ke beech me hogi














