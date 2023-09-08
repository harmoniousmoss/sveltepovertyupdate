<script>
	export let contentRef;
</script>

<section
	bind:this={contentRef}
	class="flex items-center justify-center py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white"
>
	<div class="flex px-4 mx-auto overflow-auto max-w-7xl sm:px-6 lg:px-8 scrollable-content">
		<!-- First grid -->
		<div style="flex: 0 0 100%;">
			<div class="relative mt-2">
				<div class="relative flex justify-start">
					<span class="pr-5 text-2xl font-bold text-gray-900">
						In March 2023, the national poverty rate had decreased from a year earlier. While this
						reduction was reflected in most provinces, it was not the case across the board with a
						notable increase in Maluku.
					</span>
				</div>
			</div>

			<div class="mt-6">
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
