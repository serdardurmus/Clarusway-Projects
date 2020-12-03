const express = require("express");
const port = 5000;
const app = express();

app.listen(port, () => {
    console.log(`I'm listenind on ${port}`);
});