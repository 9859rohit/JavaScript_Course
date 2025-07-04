// hum log math.PI ki value kyu nhi change kar paate uska behind the scene
const descripter = Object.getOwnPropertyDescriptor(Math,"PI") //jb hm use karte h 'getOwnPropertyDescriptor' ye property object ki h aur isme hm check karna chahte h kisi aur
//ki property jaise pehla parameter 'math' ye bhi object ki property h aur us math ki kaun si property ko check karna chahte h to 'PI'

console.log(descripter); 
//jb hm console.log karate h to ye output nikal ke aati h isme jo writeable = false h uski wajah se hm hm PI ki value ko overwrite nhi kar skte isko hm true nhi kr skte ye itni hard coded h 
/*{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

//yes ye wali property hm dushre object ke liye bhi kar skte h

const chai = {
    name: 'Ginger chai',
    price: 250,
    isAvailable: true
}
console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai,"price"));

//Overwrite na karne wali property ko use karne ke liye niche wala line use karte h
Object.defineProperty(chai,'price',{
    writable:false,
    //enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,'price'));

chai.price = 300;
console.log(chai); //now the price of object in chai is not modifiable;



