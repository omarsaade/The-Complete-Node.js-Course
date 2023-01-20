var fs = require("fs");

var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf-8");
var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt", "utf-8");

myReadStream.pipe(myWriteStream);

/*

data to the user a client this way
because they start to receive the data
quicker by using these streams and in
fact because we do this so often reading
streams then writing streams and sending
data from one place to another there is
actually a way to do this even quicker
than all of this that we've done here in
nodejs and that is by using pipes so
we're going to take a look at pipes in
the next tutorial and then how we can
use this way of dealing with data to
send information to reuse it so until
then if you have any questions feel free
to leave a comment down below otherwise
guys I'm going to see you in a very next
tutorial
*/
