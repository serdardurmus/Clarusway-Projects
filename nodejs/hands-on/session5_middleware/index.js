const express = require("express");

console.log(process.env);
const port = process.env.port || 5001;
const app = express();

app.listen(port, ()=> {
    console.log("I'm listening")
})