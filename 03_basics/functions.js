function sayMyName(){
    console.log("R");
    console.log("O");
    console.log("H");
    console.log("I");
    console.log("T");
}

//sayMyName();

//creating function for adding two numbers
function addTwoNumbers(number1,number2){
    console.log(number1+number2);
}
addTwoNumbers(5,7);
function addTwoNumbers1(number1,number2){
    let result = number1+number2;
    return result;
}

const temp = addTwoNumbers1(5,8);
console.log("Results: ", temp);

function loginUserMessage(username){
    return `${username} just logged in`
     
}

console.log(loginUserMessage("Rohit"))



