<template>
 <nav class="fixed z-[1]  w-full flex flex-wrap items-center hover:bg-gray-200 justify-between p-2 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700">
    <NavbarDesktopSearchVue/>
    <NavbarDesktopMenuVue/>
  </nav>
</template>
<script>
import NavbarDesktopMenuVue from './NavbarDesktopMenu.vue';
import NavbarDesktopSearchVue from './NavbarDesktopSearch.vue';
  export default {
    name:'NavbarCompo',
    components:{
      NavbarDesktopSearchVue,
      NavbarDesktopMenuVue
    }
  }
</script>