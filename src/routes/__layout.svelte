<script>
	import '../app.css';
	import Nav from '../components/navbar.svelte';
	import Foot from '../components/footer.svelte';
	import { ModalOpen } from '../stores/ModalStore';
	import Modal from '../components/modal.svelte';
	import { supabase } from '../lib/supabase.js';
	console.log(supabase);
	import { getInfo } from '../stores/ModalStore';
	import { onMount } from 'svelte';

	onMount(async () => {
		getInfo();
	});
</script>

{#if $ModalOpen}
	<Modal />
{/if}
<Nav />
<slot />
<Foot />
