import http from "http";

const server =http.createServer((req, resp)=>{
    resp.writeHead(200, {"Content-Type":"text/plain"});
resp.end("Hello from TypeScript + Node.js HTTP Server!");
})
server.listen(3000,()=>{
    console.log("server is running");
})