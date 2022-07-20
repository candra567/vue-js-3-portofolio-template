<template>
  <div :class="{sidebarmenu:show}"  class="md:w-[20%] w-[60%] md:z-[0] z-[3] md:left-0 left-[-60%]  md:pt-5 fixed h-screen bg-gray-200  overflow-y-scroll " >
    <!-- profil -->
    <SidebarProfilVue/>
    <SidebarMenuVue/>
  </div>
</template>
<script>
import SidebarMenuVue from './SidebarMenu.vue';
import SidebarProfilVue from './SidebarProfil.vue';
export default {
  name: 'SidebarCompo',
  components:{
    SidebarProfilVue,
    SidebarMenuVue
  },
  computed:{
    show(){
      return this.$store.state.nav
    }
  }
}
</script>



<style scoped>
@media screen and (max-width:768px) {
  .sidebarmenu{
      animation: run 1s ease forwards;
  }
  @keyframes run {
  0%{

  }
  100%{
    left: 0;
  }
}
}

</style>
