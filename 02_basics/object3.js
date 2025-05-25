//code destructuring  //this is not mandatory
const course = {
    courseName:"JavaScript",
    coursePrice: "999",
    courseInstructor: "Rohit Gupta"
}

const {courseInstructor:instructor} = course  //isme jaise hame lg rha tha ki courseInstructor bhut bada name h to isko hm logo ne chota naam de diya 'instructor' an course instructor kaam karega instructor ke naam se
//console.log(courseInstructor);
console.log(instructor); // yhi upar aur ye h syntex destructuring ka

/*{
    "name": "Rohit Gupta",
    "Course":"JavaSript",
    "Price" : "999" 
    //ye hai json ka format jo api me use hota h
    //key aur values dono string me hoti h aur yha pe object ka koi naam nhi hota
}*/
