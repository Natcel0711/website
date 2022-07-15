<script>
    import {ModalInfo, getInfo, getResult} from "../stores/ModalStore";
    getInfo();
</script>
<svelte:head>
    <title>Data Structures</title>
</svelte:head>
<div class="bg-white">
    <div class="max-w-2xl bg-white mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 class="text-6xl text-gray-700 pb-9 font-mono">Data Structures</h1>
      <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

        {#each $getResult as struc }
        <a href="#" on:click={() => {ModalInfo(struc.Name, struc.Description)}} class="group">
          <div class="w-full mt-10 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img src="src\images\DataStrucs\Array.png" alt={struc.Name} class="w-full h-full object-center object-cover group-hover:opacity-75">
          </div>
          <h3 class="mt-4 text-2xl text-gray-700">{struc.Name}</h3>
        </a>
        {/each}
        <!-- More products... -->
      </div>
      <div style="margin-left: 34em; margin-right: 34em;" class="rounded-md shadow">
        <a href="/Algorithms" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-slate-600 md:py-4 md:text-lg md:px-10"> Next </a>
      </div>
    </div>
  </div>