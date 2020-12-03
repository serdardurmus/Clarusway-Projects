const express = require("express");
const path = require("path");
const port = process.env.port || 5000;  // processteki neyse onu alır, onu almalı, yoksa 5000i alır
const app = express();

app.get("/", (request, response)=> {
    console.log("GET REQUEST TO /");
    // response.send({id: 0, name: "Serdar"});
    response.sendFile(path.join(__dirname, "about.html"));
    
})

app.listen(port, () => {
    console.log(`I'm listenind on ${port}`);
});