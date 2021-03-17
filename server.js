const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req,res)=>{
    const pathName = req.url;
    if (pathName === "/home") {
      res.end("working");
    } else if (pathName === "/movie") {
      res.end("working");
    } else if (pathName === "/cricket") {
      res.end("working");
    } else if (pathName === "/update") {
        fs.readFile("userData.txt","utf-8",(err,data)=>{
            res.end(data)
        });
    }else{
        res.writeHead(400);
            res.end("not found")
    } 
});

server.listen(3000, "127.0.0.1",()=>{
    console.log('server is lisensing')
});


