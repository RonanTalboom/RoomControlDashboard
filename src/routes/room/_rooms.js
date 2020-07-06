// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const rooms = [
    {
		title: 'L4.52',
		full: false,
		slug: 'L4.52',
		amount: 5,
	},

	{
		title: 'Z1.54',
		full: false,
		slug: 'Z1.54',
		amount: 20,
	},

	{
		title: 'K7.1',
		full: false,
		slug: 'K7.1',
		amount: 20,
	},

	{
		title: 'K7.12',
		full: false,
		slug: 'K7.12',
		amount: 20,
	},

	{
		title: 'k4.56',
		full: true,
		slug: 'K4.56',
		amount: 10,
	}
];

export default rooms;
