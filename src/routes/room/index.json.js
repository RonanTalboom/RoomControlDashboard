import rooms from './_rooms.js';

const contents = JSON.stringify(rooms.map(room => {
	return {
		title: room.title,
		slug: room.slug
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}