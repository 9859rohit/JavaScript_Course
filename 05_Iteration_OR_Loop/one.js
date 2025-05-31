//for Loop

/* for(let index = 0; index<=10; index++){
    const element = index;

    if(element == 5){
        console.log("5 is best number ");
    }
    console.log(element);
} */

/*for(let i = 1; i<=10; i++) {
    console.log(`Outer Loop ${i}`);
    
    for( let j = 1; j<=5; j++){
      //console.log(`Inner Loop ${j} and Inner Loop ${i}`);
      console.log(i + "* " + j + "=", i*j);
      
    } 
}
    */
  
/* let myArray = ["flash","batman","superman","spiderman"]
for(let i = 0; i<myArray.length; i++){
    const element = myArray[i];
    console.log(element);
}
 */


//Break And Continue
for(let i = 1; i<=20;i++){

    /* if(i==5){
        console.log("Detected 5");
        break; // break kya karta h, jb bhi break pe aa jaye to ye aage ka code execute nhi karta loop se bahar aa jaata h
    } */
    if(i==5){
        console.log("Detected 5");
        continue; // continue kya karta h, jb bhi flow continue pe aa jaye to ye aage ka code execute nhi karta  bs us time ke loop ke liye phr se aage ka loop continue karta h
        //yha pe ab jb 5 detect o jayega to ye loop phr dushre iteration ke liye check karega
    }
    console.log(`value of i is ${i}`);
    
}