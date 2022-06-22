<svelte:head>
    <title>Home</title>
</svelte:head>
<div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
        <div>
          <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
          </div>
          <div class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            </div>
          </div>
        </div>

        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block text-slate-400 xl:inline">Data Structures</span>
              <span class="block text-slate-600 xl:inline">&</span>
              <span class="block text-slate-400 xl:inline">Algorithms</span>
            </h1>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Page created with the purpose of demonstrating web development skills making a dynamic page using svelte.</p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a href="/DataStructures" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-800 hover:bg-slate-600 md:py-4 md:text-lg md:px-10"> Get started </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a href="mailto:n.nievesarce@gmail.com" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-700 bg-slate-200 hover:bg-slate-300 md:py-4 md:text-lg md:px-10"> Email me </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="src\images\homepage\pexels-nemuel-sereti-6424586.jpg" alt="">
    </div>
  </div>
  <!-- This example requires Tailwind CSS v2.0+ -->
<div class="py-12 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2 class="text-base text-slate-600 font-semibold tracking-wide uppercase">About</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Quick overview about Data Structures and Algorithms that you as a programmer will need in the future.</p>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Made in Svelte.js</p>
    </div>

    <div class="mt-10">
      <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-slate-800 text-white">
              <!-- Heroicon name: outline/globe-alt -->
            <img src="src\images\homepage\monitor.png" class="bg-white" alt="algorithms"/>
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">What are Algorithms?</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">An algorithm is a procedure used for solving a problem or performing a computation.
            Algorithms act as a precise list of instructions that conduct specified actions step by step in either hardware- or software-based routines.</dd>
        </div>

        <div class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-slate-800 text-white">
              <!-- Heroicon name: outline/scale -->
            <img src="src\images\homepage\diagram.png" class="bg-white" alt="datastructure"/>
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">What are Data Structures?</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">Data structure is a storage that is used to store and organize data.
            It is a way of arranging data on a computer so that it can be accessed and updated efficiently.
            Depending on your requirement and project, it is important to choose the right data structure for your project.</dd>
        </div>

      </dl>
    </div>
  </div>
</div>