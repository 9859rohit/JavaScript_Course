let myDate = new Date();
console.log(myDate);
console.log(myDate.toString()); //Output = 2025-05-19T10:33:48.338Z
console.log(myDate.toDateString()); //Output = Mon May 19 2025 10:33:48 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleDateString()); //Output = Mon May 19 2025
console.log(myDate.toISOString()); //Output = 5/19/2025
console.log(myDate.toJSON); //Output = 2025-05-19T10:33:48.338Z
console.log(typeof myDate);  //Output = object 

/*let myCreateDate = new Date(2023, 0, 23)
console.log(myCreateDate.toLocaleString());
console.log(myCreateDate.toDateString());
console.log(myCreateDate.toISOString());*/

/*let myCreateDate = new Date(2023, 0, 23,5,3) // is format se last ke dono time btayenge 
console.log(myCreateDate.toLocaleString());// 1/23/2023, 5:03:00 AM
console.log(myCreateDate.toDateString());
console.log(myCreateDate.toISOString())*/

let myTimeStamp = Date.now();
//console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

//====================Gar mujhe particular day,month or year chahiye tomuske liye function

let newDate = new Date();
console.log(newDate); // this will give the current date
console.log(newDate.getDay()); //day
console.log(newDate.getMonth()); //month
console.log(newDate.getFullYear()); //year

//====================toLocalString ek function iske andar hum aur customize kr skte h
newDate.toLocaleString('default',{
    weekday: "long",
    month:"narrow",
    day:"2-digit",
    year:"numeric"
})

















