<script>
	import Content from '../lib/components/Content.svelte';
	import Content2 from '../lib/components/Content2.svelte';
	import Content3 from '../lib/components/Content3.svelte';
	import Content4 from '../lib/components/Content4.svelte';
	import Content5 from '../lib/components/Content5.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import Header from '../lib/components/Header.svelte';
	import BackToTop from '../lib/components/partials/BackToTop.svelte';

	let contentRef;
</script>

<Header bind:contentRef />
<Content bind:contentRef />
<Content2 />
<Content3 />
<Content4 />
<Content5 />
<BackToTop />
<Footer />
