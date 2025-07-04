class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username); //ye supaer keyword use hota h jb bhi hm kisi parent class ke properties ko use krte h child class me
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@gmail.com","123");
chai.addCourse();

const masalaChai = new User("masalachai");
masalaChai.logMe();
console.log(chai instanceof User || Teacher);

