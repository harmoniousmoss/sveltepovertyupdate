<script>
	import { onMount } from 'svelte';
	import { animate, scroll } from 'motion';
	export let contentRef;

	onMount(() => {
		const heroSections = document.querySelectorAll('section > div > div');
		heroSections.forEach((section) => {
			scroll(animate(section, { opacity: [0, 1, 1, 0] }), {
				target: section,
				offset: ['start end', 'end end', 'start start', 'end start']
			});
		});
	});
</script>

<section class="py-10 sm:py-16 lg:py-24">
	<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
			<!-- First section -->
			<div>
				<h1
					class="text-4xl font-bold text-transparent bg-gradient-to-b from-cyan-500 to-amber-400 bg-clip-text sm:text-6xl lg:text-7xl"
				>
					Visualised: Poverty and income inequality
				</h1>
				<p class="mt-8 text-base text-gray-700 sm:text-lg lg:text-xl">
					This month we look at the changes in poverty and inequality across Indonesia. As of March
					2023, the poverty rate was nearly back to pre-pandemic poverty levels, though there had
					been a slight rise in inequality.
				</p>
				<div class="mt-10 sm:flex sm:items-center sm:space-x-8">
					<a
						href="/"
						title=""
						class="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 ease-in-out transform hover:scale-105 rounded-xl bg-cyan-500"
						role="button"
						on:click|preventDefault={() => contentRef.scrollIntoView({ behavior: 'smooth' })}
					>
						Start exploring
					</a>
				</div>
			</div>

			<!-- Second section -->
			<div>
				<img class="w-full rounded-xl" src="/hero-img-poverty.png" alt="" />
			</div>
		</div>
	</div>
</section>
