//const coding = ['js',"ruby","java","python","cpp"]
/* 
const values = coding.forEach((item)=>{
    //console.log(item); 
    return item; // Output - undefined // Foreach loop me jb bhi hm kisi value ko return karana chahte h to wo return nhi karta
})

console.log(values);
 */

// Filter 

const myNums = [1,2,3,4,5,6,7,8,9,10];

//const myNewNums = myNums.filter((num) => num>4); //value ko return karane ke liye use karte h filter keyword with condition ke saath
/* const myNewNums = myNums.filter((num)=> {
    return num>4; // another way of writing the just above line
}) */
/* 
    const newNums = [];
    myNums.forEach((num) => {
        if(num>4){
            newNums.push(num);
        }
    })
console.log(newNums);

 */

const userBooks = [
    {title:"Book One", genre:"Non-fiction",publish:1981,edition:1989},

    {title:"Book Two", genre:"Fiction",publish:1985,edition:1991},

    {title:"Book Three", genre:"Drama",publish:1990,edition:1993},

    {title:"Book Four", genre:"Novel",publish:1995,edition:1998},

    {title:"Book Five", genre:"Non-fiction",publish:2001,edition:2003},

    {title:"Book Six", genre:"Romantic",publish:2004,edition:2005},

    {title:"Book Seven", genre:"Fiction",publish:2005,edition:2007},

    {title:"Book Eight", genre:"Horror",publish:2010,edition:2010},

    {title:"Book Nine", genre:"Comedy",publish:2013,edition:2013}
]

let booklist = userBooks.filter((bk) => bk.genre==="Fiction")
booklist = userBooks.filter((bk) => {
    return bk.publish>=2010 && bk.genre === "Horror"
})
console.log(booklist);
