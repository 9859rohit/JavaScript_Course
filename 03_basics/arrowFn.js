const user = {
    username: "Rohit",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
 //       console.log(this);     
    }
}
user.welcomeMessage(); // this key btata current context
user.username = "sam" // ab username ki value change ho gyi
user.welcomeMessage();

/*function chai(){
    let username = "Rohit"
    console.log(this.username) //output = undefined  ye aisa is liye aata h kyu ki hm isko object me acche se use kr paate h
} // function me this ko use nhi kr skte
chai()
*/
//+++++++++++++++++++Arrow Function++++++++++++++++++++++

/*const chai = function(){
    let userName = "Rohit";
    console.log(this.userName); // same output - undefined
}
chai();
*/
const chai = () => { // arrow function ko kaise declare karte h ; function keyword ko hata do aur parameter wale parenthesis ke aage arrow laga do
    let userName = "Rohit";
    console.log(userName); 
}
chai();

//syntax of arrow function
const addTwo = (num1, num2) =>{
    return num1+num2;
}
console.log(addTwo(5,7))

//another way to declare arrow function in which we implicitly returning the value
const addThree = (num1,num2) => num1 + num2; // isme kya hota h hm curly braces ko remove kr dete 
console.log(addThree(8,7));

//another way
const addFour = (num1,num2) => (num1+num2) //yha pe hm cirle wala braces use kr skte h but agar curly braces lagaya to hame return keyword ko use karna padega
console.log(addFour(9,9)); // this method is used mostly in react

//if we want to return an object in arrow function
const addFive = () => ({username:"ROhit"})
console.log(addFive());
