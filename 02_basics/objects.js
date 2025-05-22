//Object literals

const JsUser = {
    name: "Rohit",
    "full name":"Rohit Gupta",
    age : 18,
    location:"Gorakhpur",
    email: "guptarohitas40@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email); // This is the wrong method to access the object because
//name,age,email,etc. ye sabhi yha string me consider hote h aur jb hum ye ye 'key' dete h jaise full name
//to ye access nhi kr pata is method se to hm use karte h 

//console.log(JsUser."full name"));  ye error dega is wajah se nhi use krte is method ko
console.log(JsUser["full name"]);
console.log(JsUser["email"]);
console.log(JsUser["age"]);
console.log(JsUser["location"]);

// Symbol Datatypes ko kaise use krte h Object me
const mySym = Symbol("key1") //declaring a symbol

/*const JsUser1 = {
    name: "Rohit",
    "full name":"Rohit Gupta",
    age : 18,
    mySym: "key1" // agr aise use karenge to to ye wrong h yha pe key ka jo datatype hoga wo string hoga na ki symbol
}*/
// To symbol ko object me use karte is tarike se
const JsUser1 = {
    name: "Rohit",
    "full name":"Rohit Gupta",
    age : 18,
    [mySym]: "mykey1" // ab yha pe jb hamne square bracket lga diya to key ka datatype symbol ho jayega
}

console.log(JsUser1[mySym]); // aur symbol ko object se aise access krte h

//Object me agar koi value change karni ho to like

JsUser.email = "rohitgupta@google.com"
console.log(JsUser["email"]);

//agar hame object ko lock karna ho ki jaise koi bhi koi value change kare to change na ho

Object.freeze(JsUser)
JsUser.email = "Rohit.Gupta@microsoft.com"; // ye value ab change nhi hogi
console.log(JsUser["email"]);

//Object me function kaise use karte h
JsUser1.greeting = function(){
    console.log("Hello JS user");
}

JsUser1.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser1.greeting());
console.log(JsUser1.greetingTwo());











