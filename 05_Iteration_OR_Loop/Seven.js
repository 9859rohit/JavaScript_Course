const myNumbers = [1,2,3,4,5,6,7,8,9,10];

//const myNewNums = myNumbers.map((num) => num+10) //Unlike Foreach map Return the value

//++++++++++++++CHAINING+++++++++++++++
const myNewNums = myNumbers.
                            map((num) => num*10 )
                            .map((num) => num+1) // ye hota h chaining aur ek function ke baad num ki value change ho jaati h jb wo dushre pe jaata h to updated value ke saath jata h aur uspe updated value se operation perform hota h
                            .filter((num) => num>40);

console.log(myNewNums);