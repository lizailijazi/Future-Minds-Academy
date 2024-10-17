const http = require("http");
const fs = require("fs").promises;
const path = require("path");

const FILE_PATH = path.join(__dirname, "teksti.txt");

const server = http.createServer(async (req, res) => {
  if (req.url == "/teksti.txt") {
    try {
      const data = await fs.readFile(FILE_PATH);
      const stringData = data.toString();
      res.setHeader("Content-Disposition", 'attachment; filename="teksti.txt"');
      res.setHeader("Content-Type", "text/plain");
      res.setHeader("Content-Length", stringData.length);
      res.writeHead(200);
      res.end(stringData);
    } catch (err) {
      console.log(err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error reading file.");
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 NOT FOUND");
  }
});

server.listen(8585);
