const http = require("http");
const fs = require("fs");

const data=fs.readFileSync('userData.txt',"utf-8");
const server =  http.createServer((req,res)=>{
    const pathName = req.url;

    if (pathName === "/home") {};