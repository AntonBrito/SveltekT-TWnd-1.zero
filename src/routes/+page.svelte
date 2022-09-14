<script>
	export let data;
	console.log(data);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1 class="text-3xl p-6 font-bold underline">Hello THis SvelteKit</h1>
	<p class="p-4">I'm {data.age} years hold</p>
	<h3>Users</h3>
	<ul>
		{#each data.users as user}
			<br />
			{user.name}<br />
			{user.email}<br />
			{user.website}
		{/each}
	</ul>
</section>
