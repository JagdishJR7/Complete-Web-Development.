// Creating a custom Backend Using Nodejs 
const http = require('http')
const fs = require('fs')
const fileContent = fs.readFileSync("tut.29.html")

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.end(fileContent)
})

server.listen(80,'127.0.0.1',()=>{
// server.listen(80,'JagdishJR7',()=>{    we can not give name !!!
    console.log("Listening on port 80")
})