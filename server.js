const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = 3000 || process.env.PORT;

// set public as default folder to use
app.use(express.static(path.join(__dirname, 'public')));

server.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

// runs when a client connects
io.on('connection', (socket) => {
	console.log('a user connected');

	// on chat message
	socket.on('chat message', (msg) => {
		console.log('message: ' + msg);
	});

	// disconnected
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});

// http.listen(3000, () => {
// 	console.log('listening on PORT 3000');
// });

console.log('test');
