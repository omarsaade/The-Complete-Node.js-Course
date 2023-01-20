var fs = require("fs");

var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf-8");
var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt", "utf-8");

myReadStream.pipe(myWriteStream);
/*

data to the user a client this way
4:33
because they start to receive the data
4:35
quicker by using these streams and in
4:39
fact because we do this so often reading
4:41
streams then writing streams and sending
4:44
data from one place to another there is
4:46
actually a way to do this even quicker
4:48
than all of this that we've done here in
4:50
nodejs and that is by using pipes so
4:54
we're going to take a look at pipes in
4:55
the next tutorial and then how we can
4:58
use this way of dealing with data to
5:00
send information to reuse it so until
5:04
then if you have any questions feel free
5:05
to leave a comment down below otherwise
5:07
guys I'm going to see you in a very next
5:08
tutorial
*/
