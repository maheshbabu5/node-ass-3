const fs = require("fs");

const http = require("http");

fs.writeFile("Index.html", "<h1> Hello World </h1> ", (err, data) => {
    console.log(err);
});


const server = http.createServer((req, res) => {
    const html = fs.readFileSync("index.html");
    res.writeHead(200, { "content-type": "text/html" });
    res.end(html);
})

server.listen(5000, () => { console.log("server started") });