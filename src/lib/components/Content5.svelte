<script>
	import AOS from 'aos';
	import 'aos/dist/aos.css';

	// Initialize AOS after the component has been mounted
	import { onMount } from 'svelte';

	onMount(() => {
		AOS.init();
	});
</script>

<section class="py-20 bg-white sm:py-24 lg:py-28">
	<div class="px-4 mx-auto overflow-auto max-w-7xl sm:px-6 lg:px-8">
		<div>
			<h1 class="text-5xl font-bold text-blueshade20" data-aos="fade-right" data-aos-delay="300">
				Green growth: there is no alternative
			</h1>
			<p
				class="mt-3 mb-8 text-2xl font-semibold text-gray-900"
				data-aos="fade-right"
				data-aos-delay="500"
			>
				The new opportunities being ushered in by climate change mean that it is not only an
				existential issue of sustainability but also one that is integral to shifting to a higher
				growth trajectory.
			</p>
		</div>
		<div class="flex flex-col space-y-14 sm:flex-row sm:space-y-0 sm:space-x-14">
			<div class="w-full lg:w-1/2" data-aos="fade-right" data-aos-delay="700">
				<iframe
					title="Indonesian greenhouse gas emissions in 2045"
					aria-label="Column Chart"
					id="datawrapper-chart-hkYGq"
					src="https://datawrapper.dwcdn.net/hkYGq/2/"
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
			<div class="w-full lg:w-1/2" data-aos="fade-right" data-aos-delay="900">
				<iframe
					title="Indonesian GDP in 2045"
					aria-label="Column Chart"
					id="datawrapper-chart-s49xG"
					src="https://datawrapper.dwcdn.net/s49xG/2/"
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
