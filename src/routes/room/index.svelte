<script context="module">
	export function preload({ params, query }) {
        const URL = 'http://85.159.215.21/listrooms';
        return this.fetch(`http://85.159.215.21/listrooms`, {
        method: "GET",
        mode: 'cors'
        })
        .then(res => res.json()).then(data => {
            
             const rooms = JSON.stringify(data.map(room => {
                return {
                    title: room,
                    full: true,
                    slug: room
                };
            }));
            return { rooms };
        })
        .catch(err => {
            console.log(err);
        })
	}
</script>

<script>
    export let rooms;
    console.log(rooms);
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
    article a {
        font-weight: 400;
        font-size: 1.25rem;
		text-decoration: none;
    }
    article p {
        font-size: 2.25rem;
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
    /* article button svg {
        display: block;
        width: 100%;
        height: 100%;
        color: hsl(240, 25%, 20%);
    } */
</style>

<svelte:head>
	<title>Rooms</title>
</svelte:head>


<h1>Rooms</h1>
<main>
{console.log(rooms)}
	{#each rooms as room (room.title)}
		<article class="{room.full ? 'red' : 'green'}">
            <a rel='prefetch' href='room/{room.slug}'>{room.title}</a>
		</article>
	{/each}
</main>
