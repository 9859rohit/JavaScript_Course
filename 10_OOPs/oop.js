//Object Literals it is as of type object
const user = {
    username:"Rohit Gupta",
    password:"fbhdfnbjf",
    isLoggedin:"true",

    userInfo: function(){
        console.log("This is the function which contains the userInfo data"); 
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
console.log(user.userInfo());

//Constructor Function 

//jb bhi new keyword use karte h to ek naya empty object bn jata h
//Constructor function call hota wo new key keyword ke dwara hota h
//uske baad jo bhi chize this me hoti h wo nject ho jati h isme

function User(username,loginCount,isLoggedin){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin;
    return this;
}

const userOne = new User("Gupta",12,true);
const userTwo = new User('Rohit',15,false);
console.log(userOne);
