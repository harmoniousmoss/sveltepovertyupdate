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

<section class="py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
	<div class="px-4 mx-auto overflow-auto max-w-7xl sm:px-6 lg:px-8">
		<div style="flex: 0 0 100%;">
			<div class="relative mt-2">
				<div class="relative flex justify-start">
					<span class="text-base font-bold text-gray-900 sm:text-sm lg:text-2xl sm:font-medium">
						Rural poverty rates have dropped more significantly than in urban areas, albeit from a
						higher peak, decreasing by nearly a percentage point since September 2020.
					</span>
				</div>
			</div>

			<div class="mt-6">
				<iframe
					title="The share of people in poverty has decreased across Indonesia "
					aria-label="Interactive line chart"
					id="datawrapper-chart-SfeL7"
					src="https://datawrapper.dwcdn.net/SfeL7/2/"
					scrolling="no"
					frameborder="0"
					style="width: 0; min-width: 100% !important; border: none;"
					height="400"
					data-external="1"
				/><script type="text/javascript">
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
