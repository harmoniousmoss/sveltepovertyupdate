<script>
	import Hero from './partials/Hero.svelte';
	import Navbar from './partials/Navbar.svelte';
	export let contentRef;
</script>

<div class="h-screen bg-gradient-to-b from-cyan-100 to-white">
	<Navbar />
	<Hero bind:contentRef />
</div>
