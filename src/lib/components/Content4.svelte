<script>
	import AOS from 'aos';
	import 'aos/dist/aos.css';

	// Initialize AOS after the component has been mounted
	import { onMount } from 'svelte';

	onMount(() => {
		AOS.init();
	});
</script>

<section class="py-10 sm:py-16 lg:py-24 bg-gray-50">
	<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<!-- Testi start -->

		<div
			class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"
		/>
		<div
			class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
		/>
		<div class="max-w-2xl mx-auto lg:max-w-4xl" data-aos="fade-down" data-aos-delay="300">
			<div class="mt-10">
				<p class="text-2xl font-semibold text-center text-blueshade20">
					“Decarbonisation is not merely a source of constraints and impositions on potential
					economic opportunities; it is also a change that will create new industries, markets and
					avenues for growth.”
				</p>

				<div class="mt-10" data-aos="fade-down" data-aos-delay="500">
					<img
						class="mx-auto rounded-full"
						src="https://growthlab.hks.harvard.edu/sites/projects.iq.harvard.edu/files//growthlab/files/hausmann_profile_photo_2021_cropped_for_website.jpg?m=1697492377&itok=yX8Uumd0"
						alt=""
					/>
					<div class="flex flex-col items-center justify-center mt-4 space-x-3 text-2xl">
						<div class="font-semibold text-gray-900" data-aos="fade-down" data-aos-delay="700">
							Ricardo Hausemann
						</div>
						<svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
							<circle cx="1" cy="1" r="1" />
						</svg>
						<div class="text-center text-gray-600" data-aos="fade-down" data-aos-delay="900">
							Founder and Director, Harvard University Growth Lab
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Test end -->
	</div>
</section>
