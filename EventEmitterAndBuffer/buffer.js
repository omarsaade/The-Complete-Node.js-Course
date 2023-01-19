const { Buffer } = require("buffer");

const buff2 = Buffer.from([115, 116, 114], "dec");
// console.log(buff2); // <Buffer 73>
console.log(buff2.toString("utf-8")); // s

Buffer.alloc()
// The Buffer.alloc() method creates a new buffer of any size.
//  When you use this method, you assign the size of the buffer in bytes.
//  The expression below creates a buffer with a byte size of 6:

// ===========================================================

const buff = Buffer.alloc(8); // 8 byte
console.log(buff);

//  Buffer is available to us globally
const { Buffer } = require("buffer");
// there is no need to import but el afdal na3mela include
const buff = Buffer.alloc(8); // 8 byte
console.log(buff);

const { Buffer } = require("buffer");
 there is no need to import but el afdal na3mela include
 buff : container in memory has 8 bytes
const buff = Buffer.alloc(8); // 8 bytes
console.log(buff);
<Buffer 00 00 00 00 00 00 00 00> empty buffer ..now we can write data on it
we reserve it

buffer is expressed in hexadecimal number
const { Buffer } = require("buffer");

const buff = Buffer.alloc(8); // 8 bytes

buff.write("s", "utf-8");
console.log(buff);

<Buffer 73 00 00 00 00 00 00 00>

Buffer 3f dd 3e e4 c3 d0 a0>

=========================================================================================
buff.write("s", "utf-8"); // we can only write binary data on it and this is a string
//so we have to use encoding to convert it to a sequence of bytes
// and the character encoding im going to use here is utf-8 and its the default one

utf-8 : yaane 8 bits aw 1 byte
kell character 3ando 1 byte

===================================================

st   <Buffer 73 74 00 00 00 00 00 00>
=====================================================
console.log(buff.toJSON());

PS C:\Users\10User\Documents\The-Complete-Node.js-Course> node app.js
{
  type: 'Buffer',
  data: [
    115, 116, 0, 0,
      0,   0, 0, 0
  ]
}

const buff2 = Buffer.from("string", "utf-8");
console.log(buff2); // <Buffer 73 74 72 69 6e 67>

const buff2 = Buffer.from("string", "utf-8"); // automatically allocate and reserve number of bytes
console.log(buff2); // <Buffer 73 74 72 69 6e 67>

=======================================================

const { Buffer } = require("buffer");

const buff2 = Buffer.from([115, 116, 114], "dec");
// console.log(buff2); // <Buffer 73>
console.log(buff2.toString("utf-8")); // s

//iza kenet hajez 8 w katabet 10 lah yetjehal el 2 el a5irin
// const buff = Buffer.alloc(8); // 8 bytes

// buff.write("s", "utf-8"); // we can only write binary data on it and this is a string
//so we have to use encoding to convert it to a sequence of bytes
// and the character encoding im going to use here is utf-8 and its the default one

// const buff2 = Buffer.from("string", "utf-8"); // automatically allocate and reserve number of bytes
// console.log(buff2); // <Buffer 73 74 72 69 6e 67>

console.log(buff.toJSON()); // get it in decimal number
console.log(buff.length); //8
console.log(buff);
console.log(buff[0]); //115 return decimal
let char = String.fromCharCode(65);
console.log(char); A decimal
let char = String.fromCharCode("65");
console.log(char); // A decimal
so it basically decode that number 65 is A
String.fromCodePoint // same

https://blog.logrocket.com/node-js-buffer-complete-guide/
