//ye puran way h getter aur setter ko use karne ka 
//pehle hm property ke ander hi inhe use kr lete the

function User(email,password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value;
        }
    })
    Object.defineProperty(this,'password',{
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password = value;
        }
    })
}
const user1 = new User("gupta@gamil.com","123gupta");
console.log(user1.email);
console.log(user1.password)