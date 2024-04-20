// synchronous or blocking ::
// line by line excution 

// Asynchronous or non-blocking ::
// line by line not guaranted and callback will fire . 


const fs = require("fs");
fs.readFile("tle.txt","utf-8",(a,b)=>{
    console.log(a,b)
});
console.log("This is a message");