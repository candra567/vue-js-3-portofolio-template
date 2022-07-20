<template>
<main>
  <NavbarCompoVue/>
  <SidebarCompoVue/>
  <content-page-vue>
  <router-view name="home"></router-view>
  </content-page-vue>
</main>
</template>

<script>
import NavbarCompoVue from '@/components/desktop/NavbarCompo.vue';
import SidebarCompoVue from '@/components/desktop/SidebarCompo.vue';
import ContentPageVue from './page/ContentPage.vue';
export default {
  name: 'App',
  components:{
     NavbarCompoVue,
    SidebarCompoVue,
    ContentPageVue
  }
}
</script>

