<template>
       <div class="profil md:w-full md:min-h-[150px] md:mt-12 mb-2">
       <button class="btn-close md:hidden block ml-auto p-3" @click="hideNav"></button>
      <img src="../../assets/img/profil.jpg" class=" h-[100px] w-[100px] block mx-auto rounded-full md:mt-0 md:mt-6">
      <p class="text-center my-2">Adam Smith</p>
      <router-link to="/profil" class="md:w-[90%] w-[70%] block mx-auto text-center px-2 py-2 md:w-1/2 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Profil Me</router-link>
    </div>
</template>
<script>
  export default {
    name:'SidebarProfil',
    methods: {
      hideNav(){
        this.$store.commit('hideNav')
      }
    },
  }
</script>