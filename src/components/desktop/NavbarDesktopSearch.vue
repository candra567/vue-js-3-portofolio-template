<template>
  <div class="md:w-[30%] w-[70%] px-3">
    <div class="input-group relative flex flex-wrap items-center w-full ">
      <input type="search"
        class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Search" aria-label="Search" aria-describedby="button-addon3">
      <button
        class="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        type="button">Search</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavbarDesktopSearch',
}
</script>