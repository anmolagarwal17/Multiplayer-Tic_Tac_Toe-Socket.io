const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const generator = require('generate-password');
const namor = require('namor');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 3000;

// set public as default folder to use for static resources
app.use(express.static(path.join(__dirname, 'public')));

server.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

// to decode and get form parameters - POST method
app.use(express.urlencoded());

// this runs only on '/send' page request
// app.use('/send', (req, res, next) => {
// 	var password = generator.generate({
// 		length: 5,
// 		numbers: true,
// 		excludeSimilarCharacters: true,
// 		strict: true,
// 	});
// 	res.send(password);
// 	// res.send(`${req.body.name}  ${req.body.password}`);
// 	// throw new Error('chala ja bsdk');
// 	next();
// });

app.get('/send', (req, res) => {
	res.sendFile(__dirname + '/public/send.html');
});

// this runs only on '/receive' page request
app.use('/receive', (req, res, next) => {
	next();
});

app.get('/receive', (req, res) => {
	res.sendFile(__dirname + '/public/receive.html');
});

// runs when a client connects
io.on('connection', (socket) => {
	console.log('a user connected');
	// console.log(socket.rooms);

	// on chat message
	socket.on('chat message', (msg) => {
		console.log('message: ' + msg);
	});

	// disconnected
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
	socket.on('send', () => {
		console.log('das');
		console.log('filedata', file);
	});
});

// const name = namor.generate({ words: 2, separator: '_', saltLength: 0 });
// console.log(name);

// test
io.on('connection', (socket) => {
	// socket.on('joinRoom');
	// socket.join('room 237');

	socket.on('sendFile', (file) => {
		console.log('das');
		console.log('filedata', file);
	});

	socket.on('msgg', (msg) => {
		console.log(msg);
	});
});
