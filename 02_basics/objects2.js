const tinderUser = new Object() //Singleton Object

tinderUser.Id = "abc123";
tinderUser.name = "Sammy";
tinderUser.IsLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
    email : "sam@gmail.com",
    fullName: {
        userfullName : {
            firstname: "Rohit",
            lastname: "Gupta"
        }
    }
}
//console.log(regularUser.fullName.userfullName);

//merge the two object
const obj1 = {1: "a",2:"b"}
const obj2 = {3: "c",4:"d"}


//const obj3 = Object.assign(target,source)  //Syntex to combine the objects

//const obj3 = Object.assign({},obj1,obj2); //{}- ye target ho gya ,aur obj1,obj2 sources ho gye

//different way to combine the objects using spread(...) operator just like we used in array
//most used way to combine the object 
const obj3 = {...obj1, ...obj2}
console.log(obj3);

//jb data database se aayega tb

const user = [  //isko array of object kahte h
    {
        id:1,
        email: "sam@gmail.com"
    },
    {

    },
    {

    },
    {
        // aise hi kai saare object aayenge 
    }
]

//agr hame object ko access karna h to
//user[1].email

//agar hame object ke keys aur value ko check karna h to
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

//agar hame check karna h ki kisi object ke pass ye wali property h ya nhi
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //ye hamesha boolean me hi result dega








