var http = require ("http");
var handler = require("./handler.js");

http.createServer(handler).listen(4000, function () {
  console.log("listening on 4000000");
});
