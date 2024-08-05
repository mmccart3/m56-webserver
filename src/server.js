const express = require("express");
// note ES5 syntax is required. Can't use import yet
const app = express();
// just convention to remap express to be called app

app.use("/", express.static("website1"));

app.use("/website2", express.static("website2"))

app.listen(5001,() => {console.log("Listening on port 5001")})
// first parameter is the port to listen on and second parameter is a function to execute when the servers starts