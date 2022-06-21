<script>
    import {ModalOpen} from '../stores/ModalStore';
    import {ModalInfo} from "../stores/ModalStore";
</script>
<svelte:head>
    <title>Data Structures</title>
</svelte:head>
<div class="bg-white">
    <div class="max-w-2xl bg-white mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 class="text-6xl text-gray-700 pb-9 font-mono">Data Structures</h1>
      <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a href="#" on:click={() => {ModalInfo("Array")}} class="group">
          <div class="w-full mt-10 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img src="src\images\DataStrucs\Array.png" alt="Arrays" class="w-full h-full object-center object-cover group-hover:opacity-75">
          </div>
          <h3 class="mt-4 text-2xl text-gray-700">Arrays</h3>
        </a>

        <a href="#" on:click={() => {ModalInfo("Linked List")}}  class="group">
          <div class="w-full mt-2 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img src="src\images\DataStrucs\Linkedlists.jpg" alt="Linked Lists" class="w-full h-full object-center object-cover group-hover:opacity-75">
          </div>
          <h3 class="mt-4 text-2xl text-gray-700">Linked lists</h3>
        </a>

        <a href="#" on:click={() => {ModalInfo("Stack")}} class="group">
          <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img src="src\images\DataStrucs\Stack.png" alt="Stack" class="w-full h-full object-center object-cover group-hover:opacity-75">
          </div>
          <h3 class="mt-4 text-2xl text-gray-700">Stack</h3>
        </a>

        <a href="#" on:click={() => {ModalInfo("Queue")}}  class="group">
          <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img src="src\images\DataStrucs\Queue.jpg" alt="Queue" class="w-full h-full object-center object-cover group-hover:opacity-75">
          </div>
          <h3 class="mt-4 text-2xl text-gray-700">Queue</h3>
        </a>

        <a href="#" on:click={() => {ModalInfo("Binary Tree")}}  class="group">
            <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img src="src\images\DataStrucs\BinaryTree.png" alt="Binary Tree" class="w-full h-full object-center object-cover group-hover:opacity-75">
            </div>
            <h3 class="mt-4 text-2xl text-gray-700">Binary Tree</h3>
          </a>

          <a href="#" on:click={() => {ModalInfo("Binary Search Tree")}}  class="group">
            <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img src="src\images\DataStrucs\BinarySearchTree.png" alt="Binary Search Tree" class="w-full h-full object-center object-cover group-hover:opacity-75">
            </div>
            <h3 class="mt-4 text-2xl text-gray-700">Binary Search Tree</h3>
          </a>

          <a href="#" on:click={() => {ModalInfo("Heap")}}  class="group">
            <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img src="src\images\DataStrucs\Heap.png" alt="Heap" class="w-full h-full object-center object-cover group-hover:opacity-75">
            </div>
            <h3 class="mt-4 text-2xl text-gray-700">Heap</h3>
          </a>

          <a href="#" on:click={() => {ModalInfo("Hashing")}}  class="group">
            <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img src="src\images\DataStrucs\Hash.png" alt="Hashing" class="w-full h-full object-center object-cover group-hover:opacity-75">
            </div>
            <h3 class="mt-4 text-2xl text-gray-700">Hashing</h3>
          </a>

          <a href="#" on:click={() => {ModalInfo("Graph")}}  class="group">
            <div class="w-full h-40 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img src="src\images\DataStrucs\Graph.png" alt="Graph" class="w-full h-full object-center object-cover group-hover:opacity-75">
            </div>
            <h3 class="mb-8 mt-4 text-2xl text-gray-700">Graph</h3>
          </a>

          <a href="#" on:click={() => {ModalInfo("Matrix")}}  class="group">
            <div class="w-full h-20 mb-16 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img src="src\images\DataStrucs\Matrix.png" alt="Matrix" class="w-full h-full object-center object-cover group-hover:opacity-75">
            </div>
            <h3 class="mt-4 text-2xl text-gray-700">Matrix</h3>
          </a>
        <!-- More products... -->
      </div>
      <div style="margin-left: 34em; margin-right: 34em;" class="rounded-md shadow">
        <a href="/Algorithms" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-slate-600 md:py-4 md:text-lg md:px-10"> Next </a>
      </div>
    </div>
  </div>