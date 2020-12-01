const rooms = [];

// when a new room is created (when user choose send option then a room and password is created)
function newRoom(name, password) {
	const room = { name, password };
	// TODO use generate-password in frontend to generate password

	rooms.push(room);

	return room;
}
