const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('A user connected');
    
  
    socket.on('chat message', (message) => {
    console.log('Received message:', message);
    // Emit the message to all connected clients
    io.emit('chat message', message);
    });socket.on('disconnect', () => {
        console.log('A user disconnected');
        });
        });