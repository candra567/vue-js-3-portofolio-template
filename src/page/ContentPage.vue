<template>
<div class="content-page md:w-[80%] w-full min-h-screen bg-gray-300 md:ml-[20%] pt-4 relative">
  <div v-if="showTab" class="fixed z-[2] top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.5)]"></div>
  <slot></slot>
</div>
</template>
<script>
  export default{
    name:'ContentPage',
    computed:{
      showTab(){
       return  (this.$store.state.nav==true)? true :false;
      }
    }
  }
</script>