const http=require("http");
const server=http.createServer((req, resp)=>{
resp.end("server with pure nodejs (without express)");
})
server.listen(3000, ()=>{
    console.log("server is running ");
})