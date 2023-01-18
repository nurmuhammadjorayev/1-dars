
// const { response } = require("express");
// const http= require("http")

// const server=http.createServer((request,response)=>

// {console.log(request.url);
// response.write("<h1>hello world</h1>")
// response.end()
// }



// )

// server.listen(3000,() =>{

// console.log("server has benn started");

// })



// const http=require("http")
// const server=http.createServer((request,response)=>{

// console.log(request.url);

// response.write("<h1>salom dunyo ahliga<h1/>")
// response.end()
// })

// server.listen(3000,()=>{


// console.log("HAmmasi muvaffaqiyatli yakunlandi");

// }
// )

const { response } = require("express");
const http=require("http")
const server=http.createServer((request,response)=>{

console.log(request.url);
response.write("kotaklar jamoasiga salomlar")
response.end()}

)
server.listen(3000,()=>{

console.log("ыфтолвчлооооо");


})



























