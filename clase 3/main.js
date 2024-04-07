const http = require("http");

const hp = require("./hp.json");

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        // res.writeHead(200, {"Content-Type": "text/plain"})
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write("<h1>Harry Potter API</h1>")
        res.write("<p>Content</p>")
        res.end("Home Page")
    }else if(req.url === "/api"){
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify(hp))
    }
});

server.listen(3000, () =>{
    console.log("server running on port 3000")
})

