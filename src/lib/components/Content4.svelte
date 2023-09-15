<script>
	import { onMount } from 'svelte';
	import { animate, scroll } from 'motion';

	onMount(() => {
		const contentSections = document.querySelectorAll('section > div');
		contentSections.forEach((section) => {
			scroll(animate(section, { opacity: [0, 1, 1, 0] }), {
				target: section,
				offset: ['start end', 'end end', 'start start', 'end start']
			});
		});
	});
</script>

<section class="py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-cyan-50 to-white">
	<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-4">
			<!-- First section (1/4 on lg) -->
			<div class="lg:col-span-1">
				<div class="relative space-y-4">
					<h1 class="text-xl text-gray-900 lg:text-base">
						In regional terms, poverty rates tend to be higher in rural than urban areas, with the
						notable exception of Java where urban poverty is higher.
					</h1>
				</div>
			</div>

			<!-- Second section (3/4 on lg) -->
			<div class="mt-4 lg:mt-0 lg:col-span-3">
				<p class="text-2xl font-bold text-gray-900 lg:text-xl">
					People living in poverty in urban and rural areas across Indonesia’s regions
				</p>
				<p class="text-sm">Million people, %</p>
				<img
					src="/regional-term.jpeg"
					alt="Regional cover section"
					class="w-full mt-4 rounded-xl"
				/>
			</div>
		</div>
	</div>
</section>
