const http = require("http");

const logger = require("morgan");


// global object
// console.log("__filename: ",__filename)
// console.log("__dirname: ",__dirname)
// setTimeout

http.createServer((request, response) => {
    console.log("request url", request.url)
    if (request.url === "/") {
        response.end("Hello from homapage");
    } else {
        response.writeHead(404);
        response.end(http.STATUS_CODES[404]);
    }
    
}).listen(3000) 