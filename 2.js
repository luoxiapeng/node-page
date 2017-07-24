'use strict'
const http=require("http");
const fs=require("fs");
const querystring = require('querystring');
const server=http.createServer();
server.on('request',(req,res) => {
  console.log(req.url);
      if(req.url=='/test.js'&& req.method=='GET'){
          fs.readFile('./test.js','utf8',function(err,data){
                 res.end(data);
          })
     }
    else if(req.url=='/1.html'&& req.method=='GET'){
          fs.readFile('./1.html','utf8',function(err,data){
                 res.end(data);
          })
     }
     else if(req.url=='/getData'&& req.method=='POST'){
       var data='';
       req.on('data',function(chunk){
                 data=data+chunk;
       })
       req.on('end',function(){
               console.log(data);
         var dataObj= querystring.parse(data);
         console.log(dataObj);
           res.end('123');
       })
     }
});
server.listen(3000);

//引入querystring模块
//const querystring = require('querystring');
//使用parse格式化参数，把string转obj
// var dataObj= querystring.parse(data);

