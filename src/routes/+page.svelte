<script>
	import Content from '../lib/components/Content.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import Header from '../lib/components/Header.svelte';
	let contentRef;
</script>

<Header bind:contentRef />
<Content bind:contentRef />
<Footer />
