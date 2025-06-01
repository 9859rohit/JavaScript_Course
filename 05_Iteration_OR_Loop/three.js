// for of loop
// this is used for array specific

const arr = [1,2,3,4,5];

for(const num of arr){                    // ye iterator(num) humne  arr pe lagaya 
    console.log(num);  
}

const greetings = "Hello World";

for(const str of greetings){
console.log(str);

}

//Map
const map = new Map()    // Map hamesa unique value leta h. Agar isme hm koi duplicate value entry de dete h to wo print nhi karega // Jis order me hmne values diya h usi order me print hoti h
    map.set('IN',"India")
    map.set('USA', "United State Of America")
    map.set('FR', "France");

   // console.log(map);

for(const [key,value] of map){
    console.log(key, ':-', value);
}

// For Of loop on Object 
const myObj = {
    js: 'javasccript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "Swift by apple"
}

//For Of loop Object pe kaam nhi karta. Object ke liye hm for in loop use karte h
/* for(const [key,value] of myObj){
    console.log(key,value);
    
} */