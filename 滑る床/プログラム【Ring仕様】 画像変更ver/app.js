var http = require("http");
var socketio = require("socket.io");
var fs = require("fs");

var express = require("express");
var app = express();


var server = http.createServer(function(req, res) {
     res.writeHead(200, {"Content-Type":"text/html"});
     var output = fs.readFileSync("./index.html", "utf-8");
     res.end(output);
}).listen(process.env.VMC_APP_PORT || 3000);
var io = socketio.listen(server);


io.sockets.on("connection", function(socket){
    app.get('/right', function(req, res){
        console.log("right");
        socket.emit("test", "right");
    });
    app.get('/left', function(req, res){
        console.log("left");
        socket.emit("test", "left");
    });
    app.get('/up', function(req, res){
        console.log("up");
        socket.emit("test", "up");
    });
	app.get('/down', function(req, res){
        console.log("down");
        socket.emit("test", "down");
    });
});

app.listen(4000);