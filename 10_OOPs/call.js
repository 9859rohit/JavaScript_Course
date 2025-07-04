function SetUserName(username){
    this.username = username;
    console.log("called");
}

function createUser(username,email,password){
    SetUserName.call(this,username);
    this.email = email;
    this.password =password;
}

const chai = new createUser("Rohit","rohit@gmail.com","12345");
console.log(chai);


