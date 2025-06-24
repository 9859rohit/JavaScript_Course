const promisOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async is created")
        resolve(); // the below written function is resolve.We are calling the below function here. The below function is written inside the resolve function.
    },1000)
}) // This function is known is as Promise Created

//Now we have to consumed the above promise
promisOne.then(function(){
    console.log("promise Consumed")
}) //This method is known is as prommise consumed

//Another way to write and consumed the promises
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async 2nd task ")
        resolve()
    },1000)
    }).then(function(){
    console.log("Async 2 is consumed");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"rohit",email:"rohit@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"gupta",passwor:"7080Rohit@"})
        }
        else{
            reject('EROR: Something Went wrong')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("Tje promise is either resolved or rejected");
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"javascript",password:"abc123"})
        }
        else{
            reject("ERROR: JS went wrong")
        }
    },1000)
})

async function consumePromise(){
    try{
        const response = await promiseFive
        console.log((response));
    }
    catch(error){
        console.log(error);
    }
}

consumePromise();

//Jab koi bhi data ko lana hota h jaise ki database se , nework se etc

/*async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    }
    catch(error){
        console.log("E: ",error);
        
    }
}
getAllUsers(); */

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((error) =>{
console.log(error)
});
