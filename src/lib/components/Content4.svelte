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
	<div class="px-4 mx-auto overflow-auto max-w-7xl sm:px-6 lg:px-8">
		<div style="flex: 0 0 100%;">
			<div class="relative mt-2">
				<div class="relative flex justify-start">
					<h1 class="text-base font-bold text-gray-900 sm:text-sm lg:text-2xl sm:font-medium">
						In regional terms, poverty rates tend to be higher in rural than urban areas, with the
						notable of Java where urban poverty is higher.
					</h1>
				</div>
				<div class="relative flex justify-start mt-4">
					<p class="text-base font-extrabold text-black sm:text-sm lg:text-2xl sm:font-medium">
						People living in poverty in urban and rural areas across Indonesia’s regions
					</p>
				</div>
				<div class="relative flex justify-start">
					<p class="text-xs font-bold text-black sm:text-xs lg:text-base sm:font-medium">
						Million people, %
					</p>
				</div>
			</div>

			<div class="mt-6">
				<img src="/regional-term.jpeg" alt="Regional cover section" class="rounded-xl" />
			</div>
		</div>
	</div>
</section>
