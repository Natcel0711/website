<script>
  import {ModalInfo} from "../stores/ModalStore";
</script>
<svelte:head>
    <title>Algorithms</title>
</svelte:head>
<div class="bg-white">
    <div class="max-w-2xl bg-white mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 class="text-6xl text-gray-700 pb-9 font-mono">Sorting Algorithms</h1>
      <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a href="#" on:click={() => {ModalInfo("Array")}} class="group">
          <div class="w-full mt-10 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img src="src\images\BubbleSort.gif" alt="Bubble Sort" class="w-full h-full object-center object-cover group-hover:opacity-75">
          </div>
          <h3 class="mt-4 text-2xl text-gray-700">Bubble Sort</h3>
        </a>

        <a href="#" on:click={() => {ModalInfo("Array")}} class="group">
          <div class="w-full mt-2 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img src="src\images\SelectionSort.gif" alt="Selection Sort" class="w-full h-full object-center object-cover group-hover:opacity-75">
          </div>
          <h3 class="mt-4 text-2xl text-gray-700">Selection Sort</h3>
        </a>

        <a href="#" on:click={() => {ModalInfo("Array")}}  class="group">
          <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img src="src\images\InsertionSort.gif" alt="Insertion Sort" class="w-full h-full object-center object-cover group-hover:opacity-75">
          </div>
          <h3 class="mt-4 text-2xl text-gray-700">Insertion Sort</h3>
        </a>

        <a href="#" on:click={() => {ModalInfo("Array")}}  class="group">
          <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img src="src\images\MergeSort.gif" alt="Merge Sort" class="w-full h-full object-center object-cover group-hover:opacity-75">
          </div>
          <h3 class="mt-4 text-2xl text-gray-700">Merge Sort</h3>
        </a>

        <a href="#" on:click={() => {ModalInfo("Array")}}  class="group">
            <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img src="src\images\CountingSort.gif" alt="Counting Sort" class="w-full h-full object-center object-cover group-hover:opacity-75">
            </div>
            <h3 class="mt-4 text-2xl text-gray-700">Counting Sort</h3>
          </a>

          <a href="#" on:click={() => {ModalInfo("Array")}}  class="group">
            <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img src="src\images\BucketSort.gif" alt="Bucket Sort" class="w-full h-full object-center object-cover group-hover:opacity-75">
            </div>
            <h3 class="mt-4 text-2xl text-gray-700">Bucket Sort</h3>
          </a>

          <a href="#" on:click={() => {ModalInfo("Array")}}  class="group">
            <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img src="src\images\QuickSort.gif" alt="Quick Sort" class="w-full h-full object-center object-cover group-hover:opacity-75">
            </div>
            <h3 class="mt-4 text-2xl text-gray-700">Quick Sort</h3>
          </a>

          <a href="#" on:click={() => {ModalInfo("Array")}}  class="group">
            <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img src="src\images\HeapSort.gif" alt="Heap Sort" class="w-full h-full object-center object-cover group-hover:opacity-75">
            </div>
            <h3 class="mt-4 text-2xl text-gray-700">Heap Sort</h3>
          </a>
        <!-- More products... -->
      </div>
    </div>
    <div class="max-w-2xl bg-white mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 class="text-6xl pb-9 font-mono">Search Algorithms</h1>
        <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <a href="#" on:click={() => {ModalInfo("Array")}}  class="group">
            <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img src="src\images\LinearSearch.gif" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover group-hover:opacity-75">
            </div>
            <h3 class="mt-4 text-2xl text-gray-700">Linear Search</h3>
          </a>

          <a href="#" on:click={() => {ModalInfo("Array")}}  class="group">
            <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img src="src\images\BinarySearch.gif" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="w-full h-full object-center object-cover group-hover:opacity-75">
            </div>
            <h3 class="mt-4 text-2xl text-gray-700">Binary Search</h3>
          </a>

          <a href="#" on:click={() => {ModalInfo("Array")}}  class="group">
            <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img src="src\images\JumpSearch.gif" alt="Person using a pen to cross a task off a productivity paper card." class="w-full h-full object-center object-cover group-hover:opacity-75">
            </div>
            <h3 class="mt-4 text-2xl text-gray-700">Jump Search</h3>
          </a>

          <a href="#" on:click={() => {ModalInfo("Array")}}  class="group">
            <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img src="src\images\InterpolationSearch.gif" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="w-full h-full object-center object-cover group-hover:opacity-75">
            </div>
            <h3 class="mt-4 text-2xl text-gray-700">Interpolation Search</h3>
          </a>
          <!-- More products... -->
        </div>
        <div style="margin-left: 34em; margin-right: 34em;" class="rounded-md shadow">
          <a href="/DataStructures" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-slate-600 md:py-4 md:text-lg md:px-10"> Back </a>
        </div>
    </div>
  </div>