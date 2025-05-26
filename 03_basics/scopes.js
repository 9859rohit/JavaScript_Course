//var c =300; //ye local aur global scope me difference nhi samjhta khi bhi update ho jata h wo
//isliye hm log avoid krte h var ko use karne se

let a = 300;
if(true){
    let a = 10;
    const b = 20;
  //  c = 30;
  console.log("Inner: ", a);  //Output = 10
  
}

console.log(a); //Output = 300

////////////=====Nested Scope ======//////

function one(){
    const username = "Rohit"
    {
        function two(){
            const website = "google.com";
            console.log(username);
        }
        //console.log(website) // ye yha pe execute nhi hoga kyu ki iska scope bs two function tk hi tha

        two();
    }
    return username;
}
//Note = child function parent, function ke variables ko access kr skte h
console.log(one());  


///+++++++++++++Interesting++++++++++++

console.log(addOne(5)) // yha pe hmne function ban ne se phle hi call kr diya aur yha pe koi error bhi nhi aaya
function addOne(num){
    return num+1;
}


//console.log(addTwo) // yha pe error de dega kyu ki yha pe hmne function ko ek variable me store karwa diya h aur wo variable baad me declare hua h 
//java script ke variables bhut hi strong hote h ye kuch bhi hold kr skte h
const addTwo = function(num){
    return num+2;
}

console.log(addTwo(5));
