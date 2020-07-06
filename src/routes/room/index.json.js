import rooms from './_rooms.js';

const contents = JSON.stringify(rooms.map(room => {
	return {
		title: room.title,
		full: room.full,
		slug: room.slug,
		amount: room.amount
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}