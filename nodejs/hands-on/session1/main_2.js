var http = require("http");
// console.log("http",http)

http.createServer((request, response) => {
    console.log("request url", request.url)
    if (request.url === "/") {
        response.end("Hello from homapage");
    } else {
        response.writeHead(404);
        response.end(http.STATUS_CODES[404]);
    }
    
    // response.end("Hello from server");  // gelen isteyi sonlandırıp gönderiyor
}).listen(3000) // server 3000 portunu dinleyecek
// localhost 3000 portundan yayın yapıyor

// NOTES
// babel yok, kullanamayız
// import http from 'http';