const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
// referència a la llibreria
const { Server } = require('socket.io');


const app = express();
const server = createServer(app);
// creació del nostre servidor
const io = new Server(server);


app.get('/', (req, res) => {
 res.sendFile(join(__dirname, 'index.html'));
});


// escoltem l'esdeveniment 'connection' per saber si apareix un nou client
io.on('connection', (socket) => {
 socket.on('missatge enviat', (msg) => {
   console.log('missatge: ' + msg);
   io.emit('missatge enviat', msg);
 });
});





server.listen(3000, () => {
 console.log('server running at http://localhost:3000');
});
