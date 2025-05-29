//Immediately Invoked Function Expressions (IIFE)
//Global Scope ke pollution se kai baar problem aati h  to global scope ke pollution ko hatane ke use karte h
// aur function ko immediate execute karane ke liye IIFE use krte h

(function chai(){
    console.log(`Db Connected`);  // is function ko named IIFE kahte h kyu ki is function ka naam h isliye
    
}) ();

//syntax
//() ()  pehle wale bracket ke andar function ko likte h aur dushra wala bracket function ko execute karne ke use hota h

//with arrow function

( aurCode = () => {
    console.log((`DB CONNECTED TWO`))
}) (); // aur agar hame Do IIFE code likhne ko kh diya jaye to  execute wale braces ke baad semicolon lagate h

//agar parameter dena ho to
( (name) => { // ye unnamed IIFE h 
    console.log(`DB CONNECTED TWO ${name}`);
    
}) ('Rohit')

