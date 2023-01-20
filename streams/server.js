var fs = require("fs");
var http = require("http");
// res object is writable stream so we can write to it
var server = http.createServer((req, res) => {
  console.log("request was made: " + req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });
  // createReadStream(path.join(__dirname,"readMe.txt"),"utf-8")
  var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf-8");
  myReadStream.pipe(res);
});

server.listen(3000);
console.log("yo dawgs , now listening to port 3000");
