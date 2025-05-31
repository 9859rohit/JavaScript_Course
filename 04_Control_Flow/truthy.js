// Kabhi kabhi kisi values ko assume kiya jata h ki ye values false aur ye values true h
//example

const userEmail = "rohitgupta@gmail.com";

if(userEmail){ // jaise yha pe abhi ye true value maan ke chalega but abhi mai isko empty value de du to false jaise treat karega
    console.log("User email Found");   
}
else{
    console.log("User Email not found");  
}

// Inbuilt falsy values
// false,0, -0, 0n, "", null, undefined,Nan // iske alawa aur bhi koi value hogi to wo true hogi

//agar hame check karna ho ki array emty h ya nhi

if(userEmail.length===0){
    console.log("Array is empty"); 
}

//agar check karna h ki object empty h ya nhi
const emptyObj = {}

if(Object.keys(emptyObj).length ===0){
    console.log("Object is empty ");
}

//Ye new COncept hai
//Nullish Coalescing Operator (??) // isme hm bs do keyword ke upar dekhte h  'null' or 'undefined'

let val1;
//val1 = 5 ?? 10;  //Output = 5
//val1 = null ?? 10; //Output = 10; yha pe check karta h ki agar value aayi to wo value assign kar do nhi to null assign kar do
//val1 = undefined ?? 15 ; //Output = 15
val1 = null ?? 15 ?? 20; // output = 15 isme kya hota h jo value phle aa jati usko assign kar deta hai
console.log(val1);

// ternary operator
//Syntax = condition ? true : false;

const iceTeaPrice =100;

(iceTeaPrice<=80) ? console.log("less than 80 "): console.log("more than 80 ");
;

