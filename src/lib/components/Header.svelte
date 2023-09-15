<script>
	import Hero from './partials/Hero.svelte';
	import Navbar from './partials/Navbar.svelte';
	export let contentRef;
</script>

<div class="h-auto bg-gradient-to-t from-cyan-100 to-white lg:h-screen sm:h-auto">
	<Navbar />
	<Hero bind:contentRef />
</div>
