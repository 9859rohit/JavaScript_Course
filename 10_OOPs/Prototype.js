//Prototype 

//prototype ek aisa chiz hota h jb tk use null value nhi mil jaati tb tk wo inherit hota rhata h lgbhag
//jaise parent me nhi mila to grandparent , grandparent me nhi mila to grandGrandparents ans so on;
//take an example of array

//array ------> Object------->Null;
//string------>Object------> null;

//to hm ye kh skate h ki javascript me saari chize object se hi hoke aati h

function multiplyBy5(num){
    return num*5;
}
multiplyBy5.power = 2;
console.log(multiplyBy5(5)); 
console.log(multiplyBy5.power); 
console.log(multiplyBy5.prototype);

//Upar wale example se dekh sakte h ki function bhi object se  hoke aata h to
//Array bhi ek tarike se object hi h
//function bhi function h aur ek tarike se object hi h
//string bhi ek tarike se object hi h
//End of the day hm ye kh skte h ki javascript me har chiz apne aap me object h;


//This and new keyword
function createUser(username,score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score} `);
}

const chai = new createUser("chai",25);
const tea =  new createUser("tea",250);

chai.printMe();
chai.increment();


