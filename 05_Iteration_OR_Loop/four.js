//For In Loop

const myObj = {
    js: 'javasccript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "Swift by apple"
}

for(const key in myObj){
    console.log(`${key} shortcut is for ${myObj[key]}`); 
}

//For in Loop on Array

const programming = ["js", "rb", "py", "java", "cpp"]
for(const key in programming){
    console.log(programming[key]);
}


