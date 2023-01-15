const http = require("http");
const fs = require("fs/promises");

const PORT = 8000;
// req and res Obj
const server = http.createServer(async (req, res) => {
  const contentBuffer = await fs.readFile(__dirname + "/text.txt");
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  // decoding
  res.end(contentBuffer.toString("utf-8"));
});

server.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
