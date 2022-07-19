<script>
	import { getResult } from '../stores/ModalStore';
	import Card from '../components/card.svelte';
</script>

<svelte:head>
	<title>Algorithms</title>
</svelte:head>
<div class="bg-white">
	<div class="max-w-2xl bg-white mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
		<h1 class="text-6xl text-gray-700 pb-9 font-mono">Sort Algorithms</h1>
		<div
			class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
		>
			{#each $getResult as Algo}
				{#if Algo.Category === 'Algorithm' && Algo.Type === 'Sort'}
					<Card cardInfo={Algo} />
				{/if}
			{/each}
			<!-- More products... -->
		</div>
	</div>
	<div class="max-w-2xl bg-white mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
		<h1 class="text-6xl text-gray-700 pb-9 font-mono">Search Algorithms</h1>
		<div
			class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
		>
			{#each $getResult as Algo}
				{#if Algo.Category === 'Algorithm' && Algo.Type === 'Search'}
					<Card cardInfo={Algo} />
				{/if}
			{/each}
			<!-- More products... -->
		</div>
	</div>
</div>
