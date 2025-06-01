// for each loop

const coding = ["js", "ruby", "java","python","cpp"]

coding.forEach(function (val){
    //console.log(val);
    
}) // ye function call back function hota h jiski wajah se hm function ka naam nhi dete

//For each by Arrow function
coding.forEach((item)=>{
    //console.log(item);   
})


//function phle bna ke bhi pass kar skte h
/* function printMe(item){
    console.log(item);  
}

coding.forEach(printMe);
 */

//=== for each bs item hi nhi rkhta aur bhi chize rhkta h jaise

/* coding.forEach((item,index,arr) => {
 console.log((item,index,arr));  // yha pe item jo current item h, index jo h wo item ka index h array me, aur arr jo h array ki puri array list h
})
 */

//Agar Array me bhut saare Object ho to unko kaise access kare
const myCodingLang = [
    {
    languageName:"javascript",
    languageFileName: "js"
    },
    {
    languageName:"java",
    languageFileName: "js"
    },
    {
    languageName:"python",
    languageFileName: "js"
    }
]

myCodingLang.forEach((item)=>{
    console.log(item.languageName);  
})