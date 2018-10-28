'use strict'
var express = require('express'); 
var app = express();

var socketPort = process.env.PORT || 3031;

var socketIO;

var server = require('http').Server(app);
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