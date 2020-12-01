const socket = io();
let form = document.getElementById('form');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	socket.emit('chat message', document.getElementById('m').value);
	document.getElementById('m').value = '';
	return false;
});

// TODO: create session using express-session
// TODO: create peer to peer connection between 2 or more users
// TODO: create a room & password and attatch that password to a session
// TODO: when user want to receive file(s) request to enter a room name & its password
// TODO: USE: project-name-generator || namor - random name generator
// TODO: search for a technique to show % done - file transfer
// TODO: send file metadata - make a file.js file to make object for every file - attatch room info to every file to remove file info after that room has been destroyed
// TODO:

// click to copy code
// function copy() {
// 	var copyText = document.querySelector("#input");
// 	copyText.select();
// 	document.execCommand("copy");
//   }

//   document.querySelector("#copy").addEventListener("click", copy);
