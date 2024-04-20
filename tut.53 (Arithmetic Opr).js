console.log("this is a JS function !");


// functions :
// if we want to print something 
// let name = "Jack";
// let name1 = "Shubham";
// let name2 = "Rahul";
// let name3 = "roky";

// console.log(name + " is a good boy!")
// console.log(name1 + " is a good boy!")
// console.log(name2 + " is a good boy!")
// console.log(name3 + " is a good boy!")

// can we not make it simple ??  yes for that we use functions /

function greet(name){
    console.log(name + " is a good boy");
}

let name = "Jack";
let name1 = "Shubham";
let name2 = "Rahul";
let name3 = "rocky";

greet(name);
greet(name1);  //this is function call ! iske bina function call nhi hoga .
greet(name2);
greet(name3);


// we can make two functions at a time ! like :

function great(name, greatText){
    // lets discuss about scope 
    let name4 = "name1"; //iska koi relation nhi hoga is function ke bhar koi name1 hoga toh 
    console.log(greatText + " " + name)
    console.log(name + " is a good boy")
}
let name4 = "Jack";
let name5 = "Shubham";
let name6 = "Rahul";
let name7 = "rocky";
let greatText = "good morning";

great(name4, greatText);
great(name5, greatText);
great(name6, greatText);
great(name7, greatText);

// we also give default value in funciton 

function greet(name, greetText = " greeting from JS"){
    console.log(name + greetText);
}

let name8 = "Jack";
let name9 = "Shubham";
let name10 = "Rahul";
let name11 = "rocky";
let greetText = "good morning";

greet(name8, greetText);
greet(name9, greetText);
greet(name10,);
greet(name11,);

// return in function 


// function sum(a,b,c){
//     let d = a + b + c;
// }
// let returnval = sum(1 ,2 ,3)
// console.log(returnval);   //undefined

// it will show undefined to us  bec. function do not return value it always carry console 
// so :::

function sum(a,b,c){
    let d = a + b + c;
    return d;
}
let returnval = sum(2,3,4)
console.log(returnval)