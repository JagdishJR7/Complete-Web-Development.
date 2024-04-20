// Creating Custom modules in node using nodejs ::::::::::::

console.log("this is index.js")

// const average = require("./mod");
// console.log(average([3,4]));

const mod = require("./mod");
console.log(mod.avg([3,4]));
console.log(mod.name);
console.log(mod.repo);

// const mod = require("./mod");
console.log(mod.FullName);





