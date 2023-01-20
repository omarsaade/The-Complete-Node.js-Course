const fs = require("fs/promises");

(async () => {
  // Execution time 280.295ms
  //Memory usage 200mb
  // dont do it this way
  console.time("writeMany");
  const fileHandle = await fs.open("test.txt", "w");

  const stream = fileHandle.createWriteStream();

  for (let i = 0; i < 100000; i++) {
    const buff = Buffer.from(`${i} `, "utf-8");
    stream.write(buff);
  }
  console.timeEnd("writeMany");
})();

/*

/*
Execution Time : 8 s
CPU Usage: 100% (one core)
Memory Usage: 50 MB
NUMBER IS SORTING ASC

(async () => {
  console.time("writeMany");
  const fileHandle = await fs.open("test.txt", "w");
  for (let i = 0; i < 1000000; i++) {
    await fileHandle.write(` ${i} `);
  }
  console.timeEnd("writeMany");
})();
*/

// Execution Time : 1.6 s
// CPU Usage: 100% (one core)
// Memory Usage: 700 MB
// fs.open("test.txt", "a", (err, fd) => {
//   console.time("writeMany");
//   for (let i = 0; i < 1000000; i++) {
//     // NUMBERS will be sorting randomly
//     // fs.write(fd, ` ${i} `, () => {});
//     /*or
//      NUMBER IS SORTING ASC
//      */
//     // Memory Usage: 40 MB
//     // Execution Time : 5 s
//     fs.writeSync(fd, ` ${i} `);
//   }
//   console.timeEnd("writeMany");
// });

// fs.open("test.txt", "a", (err, fd) => {
//   // Execution Time : 1.8s
//   // CPU Usage: 100% (one core)
//   // Memory Usage: 700 MB
//   console.time("writeMany");
//   for (let i = 0; i < 10; i++) {
//     const buff = Buffer.from(`${i}`, "utf-8");
//     console.log(buff);
//     fs.writeSync(fd, buff);
//   }
//   console.timeEnd("writeMany");
// });
