const name = "Rohit"
const repoCount = 50;

//console.log(name + repoCount);

//console.log(`Hello my name is ${name} and the repoCount is ${repoCount}`);

const gameName = new String("rohit_Gupta");

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4) // it does not supports -ve values
console.log(newString); // output = rohi

const anotherString = gameName.slice(-8,4) //it supports -ve values 
console.log(anotherString); //output = i

const newStringOne = ("      Rohit      ");
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https//rohit%20gupta.com";
console.log(url.replace("%20","-"))

console.log(url.includes("rohit")); // ye check karta ki ye value available hai ya nhi given string me

//Split
const str = "The quick brown fox jumps over the lazy dog.";
const words = str.split(" ");
console.log(words[3]);

const chars = str.split("");
console.log(chars[8]);

const strcpy = str.split();
console.log(strcpy);












