<script>
	import { onMount } from 'svelte';
	import { animate, scroll } from 'motion';

	onMount(() => {
		const contentSections = document.querySelectorAll('section > div > div');
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
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-4">
			<!-- First section (Full width on small screens, 1/4 on larger screens) -->
			<div class="sm:col-span-1">
				<div class="relative flex justify-start">
					<span class="text-xl text-gray-900 lg:text-base">
						In March 2023, the national poverty rate had decreased from a year earlier. While this
						reduction was reflected in most provinces, it was not the case across the board with a
						notable increase in Maluku.
					</span>
				</div>
			</div>

			<!-- Second section (Full width on small screens, 3/4 on larger screens) -->
			<div class="mt-2 sm:col-span-3 lg:mt-0">
				<iframe
					title="Changes in the poverty rate varied by province"
					aria-label="Map"
					id="datawrapper-chart-r1k6Z"
					src="https://datawrapper.dwcdn.net/r1k6Z/1/"
					scrolling="no"
					frameborder="0"
					style="width: 0; min-width: 100% !important; border: none;"
					height="319"
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
