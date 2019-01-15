'use strict'
var express = require('express'); 
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
var app = express();
let apiRoutes = require("./routes/test.route.js")

var server = require('http').Server(app);

var socketPort = process.env.PORT || 3031;
var socketIO;

var io = require('socket.io')(server, { origins: '*:*', forceNew: true });

server.listen(socketPort, function() {
	console.log('socket server running on 3031 port');
});

io.on('connection', function(socket) {
    socketIO = socket;
	console.log('Un cliente se ha conectado');
    socketIO.on('UserDatas', function(data) {
        console.log(data);
        io.emit("messages", data);
    });
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/TestingDatas');

var db = mongoose.connection;

var port = process.env.PORT || 8080;

app.use('/', apiRoutes)

app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});