// Readable streams
// WritableStream - allow node js to write data to a stream   write/send data
// readble streams - allow node js to read data from a stream
// duplex - can read and write to a stream

var fs = require("fs");
//                                      curr dir
var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf-8");
// iZa hadadna fo2 ano el character encoding..se3eta lah nestelem ka text
// iza ma hadadna ..lan nestelem 3adad m3ayan men el buffer ..
myReadStream.on("data", (chunk) => {
  console.log("new chunck received: ");
  console.log(chunk);
});

/*

4:54
going to fire back a function every time
4:56
we receive some data and then this data
5:00
is  called a chunk okay so we read
5:04
the file it fills up the buffer the
5:06
buffer passes that chunk on and every
5:09
time it passes a chunk of data on it
5:12
recognizes it because we're listening
5:14
for that data event and we find this
5:15
function okay so now what we could do


*/
