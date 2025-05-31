/*
Three types of Execution in javascript
1. Global Execution Context
2. Function or Functional Execution Context
3. Eval 

Also there are two phases 
1. Memory Creation Phase
2. Exection  Phase

Let's take an example 
let val1 = 10;
let val2 = 5;
function addNum(num1, num2){
let total = num1+num2;
return total;
}
let result1= addNum1(val1, val2);
let result2 = addNum(10,2);

1- Step me to Global Execution Context banta hi h ye har ek me banta hi banta h
2- Memory creation phase, ab is phase me hm jitne bhi variable use hue h code me unko hm ikattha karte h

val1 = undefined
val2 = undefined
addNum = defination
result1 = undefined
result2 = undefined

3. Execution phase, ab is phase me value assign hoti h
val1 = 10
val2 = 5
addNum ek  function hai isiye ye alag context banyega
//jitni baar ye function execute hote h utni baar ye context banta h with combinaation of 'new variable enviorment + Execution thread
//ab phr se memory creation phase aur execution phase banega addNum ke liye

*/
