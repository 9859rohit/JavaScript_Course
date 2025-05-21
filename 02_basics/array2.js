const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros);
/*console.log(marvel_heros); // isme ek array ke andar ek aaray aa jayega
console.log(marvel_heros[3][1]); //output = flash
*/

const allHeros = marvel_heros.concat(dc_heros); //ek array ke andar ek aur array na bane balki uske saare element add ho jaye
console.log(allHeros);

//Spread Operator
const all_new_heros = [...marvel_heros,...dc_heros] // This is spread operation which gives result as concat. This is more useful than concat function
console.log(all_new_heros);

//agar ek array ke andar bhut saare array present ho usko convert karna h ek hi array me to use karte h flat function

const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_Array = another_Array.flat(Infinity)
console.log(real_another_Array);


console.log(Array.isArray("Rohit")); // yha hum puch rhe ki aisa koi array available hai kya //output = false
console.log(Array.from("Rohit"));  //yha pe ye jitne bhi character hai usme mil ke ek array bna dega // output = [ 'R', 'o', 'h', 'i', 't' ]
console.log(Array.from({name:"Rohit"})); // ye bhut important hai yha pe abhi ye empty array bnayega isko nhi pta ki 'key' ya 'value' se bnanan h

let score1 = 100;
let score2 = 200;
let score3 = 300;

//agr hamare pass alag alag variable h aur unko array me convert karna hai to

console.log(Array.of(score1,score2,score3)); //Output = [ 100, 200, 300 ]






