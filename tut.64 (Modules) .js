// built in module :
// 1) read write module :
// console.log("hello world");

const fs = require("fs");
const text = fs.readFileSync("tle.txt","utf-8");
text1 = text.replace("everyone","Rohan");


console.log("The content of the file is :",text);
console.log(text);

// to replace something in the content :
console.log("creating the new file...")
fs.writeFileSync("rohan.txt", text1);

// 2) 










