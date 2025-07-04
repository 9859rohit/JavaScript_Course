class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`);
    }

    static creatId(){
        console.log(`123`)
    }
}

const chai = new User("rohit");
chai.logMe();

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email;
    }
}

const iphone = new Teacher("iphone","iphone@gmail.com");
iphone.logMe();
//iphone.creatId(); //ye function return hi nhi hoga chahe wo parent ho ya phr child ho kyu ki function static h