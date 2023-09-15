<script>
	import { onMount } from 'svelte';

	onMount(() => {
		window.addEventListener('scroll', () => {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				document.getElementById('backToTopBtn').style.display = 'block';
			} else {
				document.getElementById('backToTopBtn').style.display = 'none';
			}
		});
	});

	function topFunction() {
		document.body.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<button
	id="backToTopBtn"
	on:click={topFunction}
	class="fixed hidden w-10 h-10 text-white transition-colors duration-200 ease-in bg-black rounded-full bottom-4 right-4 focus:outline-none hover:bg-gray-700"
>
	&#8679;
</button>
