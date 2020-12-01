const express = require("express");
const os = require("os");  // işletim sistemine ilişkn bilgileri alabiliyoruz

const path = require("path");  //
const customPath = path.join(__dirname,"/testFolder");
console.log("customPath", customPath)
/* joinsiz böye yapardık:
 * `${__dirname}/testFolder` 
 */

const wrongPath = `${__dirname}//testFolder/int`;
const customFile = "custom.png";
console.log("customFile Extension", path.extname(customFile));
console.log("normalized path:", path.normalize(wrongPath));

// express().listen()  // express server oluşturuyor listen dinliyor
const app = express();
const port = 3000
const host = "http://localhost";

app.get("*", (req, res) => {
    // console.log("req url", req.url);
    // console.log("req baseUrl", req.baseUrl);
    // console.log("req original Url", req.originalUrl);
    // console.log("req path", req.path);
    // console.log("req query", req.query);
    // const clientNumber = req.query.no;
    // res.send(`Your number is ${clientNumber}`);
    
    
    // OS MODULE
    // console.log(os.freemem());
    // console.log(os.totalmem());
    res.send(`Server Os Type is ${os.type()}`);

  });
  app.listen(port, () => {
    console.log(`I'm listening on ${host}:${port}`);
  });
  