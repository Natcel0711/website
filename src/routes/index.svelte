<script>
	import Homecard from '../components/homecard.svelte';
	import HomeAbout from '../components/homeabout.svelte';
	import { getInfo } from '../stores/ModalStore';
	import { onMount } from 'svelte';

	onMount(async () => {
		getInfo();
	});
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>
<Homecard />
<!-- This example requires Tailwind CSS v2.0+ -->
<HomeAbout />
