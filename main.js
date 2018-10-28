var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server, { origins: '*:*' });

var socketPort = process.env.PORT || 3031;

var messages = [{
	author: "Carlos",
    text: "Hola! que tal?"
},{
	author: "Pepe",
    text: "Muy bien! y tu??"
},{
	author: "Paco",
    text: "Genial!"
}];

server.listen(socketPort, function() {
	console.log('Servidor corriendo en http://localhost:8080');
});

io.on('connection', function(socket) {
	console.log('Un cliente se ha conectado');
    //socket.emit('messages', messages);
    socket.on('UserDatas', function(data) {
        console.log(data);
        //socket.emit('messages', messages);
    });
});