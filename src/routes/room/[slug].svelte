<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`room/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { room: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let room;
</script>

<style>
    /* display the items as squares in a grid */
    main {
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(auto-fill, 150px);
        grid-auto-rows: 150px;
        grid-gap: 2rem;
    }
    /* display the text elements in a column */
    article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: hsla(240, 25%, 50%, 0.1);
        border: 5px solid currentColor;
        border-radius: 25px;
        position: relative;

    }
    article h2 {
        font-weight: 400;
        font-size: .725rem;
		text-decoration: none;
    }
    article p {
        font-size: 2.0rem;
        font-weight: 700;
    }
    /* absolute position the button in the top right corner */
    article button {
        position: absolute;
        top: 0%;
        right: 0%;
        transform: translate(50%, -50%);
        background: none;
        border: none;
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
        color: inherit;
        background: currentColor;
        /* use the same hue as the background to fake a clip on the border underneath */
        box-shadow: 0 0 0 0.5rem hsl(240, 25%, 20%);
    }
	.green {
		 border: 5px solid rgb(0, 128, 89); 
	}
	.red {
		 border: 5px solid rgb(225, 87, 89); 
	}
</style>

<svelte:head>
	<title>{room.title}</title>
</svelte:head>

<h1>{room.title} information</h1>

<main>
	<article>
		<h2>Average Occupation</h2>
        <p>{room.amount}</p>
	</article>
	<article class="{room.full ? 'red' : 'green'}">
		<h2>Current Occupation</h2>
        <p>{room.amount}</p>
	</article>
    <article>
		<h2>Room Surface</h2>
        <p>30m2</p>
	</article>
</main>

