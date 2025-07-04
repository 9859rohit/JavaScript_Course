let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);    
    }
}

Object.prototype.rohit = function(){
    console.log(`rohit is present in all objects`); 
} // yha pe hamne Object me ek properties daal di rohit naam ki ab ye properties sb me available hoga kyu ki har chiz Object se hi hoke jaati h

//heroPower.rohit();
//myHeros.rohit();

//Upar to hamne Object me properties daali h to sb ke paas us properties ka acces h but jb hm kisi ek me array, string, function me properties add kr denge to wo Object ko access nhi hoga
//example array me hm ek properties daal rhe but wo object me nhi hoga

Array.prototype.heyRohit = function(){
    console.log(`Rohit says Hello`);
}

myHeros.heyRohit() //isme to present aur access hoga hoga kyu ki upar hmne array me ye properties daali hui h
//heroPower.heyRohit() //isme isko access nhi hoga kyu ki hmne bs array me daali hui h 