<script>
	import { onMount } from 'svelte';
	import { animate, scroll } from 'motion';
	export let contentRef;

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

<section
	bind:this={contentRef}
	class="py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-gray-50 to-white"
>
	<div class="px-4 mx-auto overflow-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-4">
			<!-- First Section -->
			<div class="relative mt-2 lg:col-span-1">
				<div class="relative flex justify-start">
					<span class="text-xl text-gray-900 lg:text-base">
						Over the last decade Indonesia has made progress in reducing poverty both nominally and
						as a percentage of the population. However, Covid-19 proved a setback with the national
						poverty rate only now nearing pre-pandemic levels.
					</span>
				</div>
			</div>

			<!-- Second section -->
			<div class="mt-2 lg:col-span-3">
				<iframe
					title="Indonesian Population Living in Poverty"
					aria-label="Interactive line chart"
					id="datawrapper-chart-RoaJV"
					src="https://datawrapper.dwcdn.net/RoaJV/2/"
					scrolling="no"
					frameborder="0"
					style="width: 0; min-width: 100% !important; border: none;"
					height="287"
					data-external="1"
				/>
				<script type="text/javascript">
					!(function () {
						'use strict';
						window.addEventListener('message', function (a) {
							if (void 0 !== a.data['datawrapper-height']) {
								var e = document.querySelectorAll('iframe');
								for (var t in a.data['datawrapper-height'])
									for (var r = 0; r < e.length; r++)
										if (e[r].contentWindow === a.source) {
											var i = a.data['datawrapper-height'][t] + 'px';
											e[r].style.height = i;
										}
							}
						});
					})();
				</script>
			</div>
		</div>
	</div>
</section>
