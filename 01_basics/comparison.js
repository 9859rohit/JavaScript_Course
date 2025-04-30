/*
console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);
*/
console.log("2">1);
console.log("02">1);

console.log(null>0); //o/p = false
console.log(null==0);//o/p = false
console.log(null>=0);//o/p = true the reason is
// is that an equality check == and comparisons ><>=<= works differently
//Comparison convert null to a number , treating it as 0.
//that's why(3) null >=0 is true and (1) null>0 is false;

//=== ye strictly check krta h ki dono values same hai kya aur inka datatypes same h kay
//jaise ki == isme jb comparison hota h to value agar dushre datatype ki bhi hoti h to ye convert kr deta h
//but === ye convert nhi karta
//example
// console.log("2" == 2) //output = true
//console.log("2"===2) //output = false

// most of the cases me humye sab conditions ko avoid karte h




