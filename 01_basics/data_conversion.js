let score = "33abc";

console.log(typeof score)
console.log(score)

let valueInNumber = Number(score);
console.log(valueInNumber);

/*
33 => 33
"33abc"=>NaN
true=>1; false=>0;
*/

let isLoggedIn = "Rohit"
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

/*
1 => true; 0 => false;
"" => false;
"Rohit" => true;
*/

let someNumber = 54;
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
