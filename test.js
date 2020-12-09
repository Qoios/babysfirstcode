#!/bin/node

// This is a comment.
// This is not a comment.

// const fs = require("fs");
const http = require('http');

const server = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end("Congrats this is a web page.");
});

server.listen(9001, "localhost", () => {
	console.log(`Listening at http://localhost:9001/`);
});
