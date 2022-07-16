<script>
  import {ModalInfo, getResult} from "../stores/ModalStore";
</script>
<svelte:head>
    <title>Algorithms</title>
</svelte:head>
<div class="bg-white">
    <div class="max-w-2xl bg-white mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 class="text-6xl text-gray-700 pb-9 font-mono">Algorithms</h1>
      <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {#each $getResult as Algo }
        {#if Algo.Category === 'Algorithm' }
        <a href="#" on:click={() => {ModalInfo(Algo.Name, Algo.Description)}} class="group">
          <div class="w-full mt-10 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img src={Algo.Image} alt={Algo.Name} class="w-full h-full object-center object-cover group-hover:opacity-75">
          </div>
          <h3 class="mt-4 text-2xl text-gray-700">{Algo.Name}</h3>
        </a>
        {/if}
        {/each}
        <!-- More products... -->
      </div>
    </div>
  </div>