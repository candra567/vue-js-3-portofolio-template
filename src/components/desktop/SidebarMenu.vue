<template>
    <nav class=" w-full py-3 border-t-2 border-indigo-200">
      <p class="font-bold ml-2">Menu</p>
      <ul>
      <li class="py-3 border-gray-100 border-b-4 px-5 ">
        <router-link to="/" class="flex items-center">
        <img src="../../assets/img/home.png" class="w-[30px] h-[30px]"><small class="ml-5 font-bold">Home</small>
        </router-link>
        </li>
       <li class="py-3 border-gray-100 border-b-4 px-5 ">
        <router-link to="/message" class="flex items-center">
        <img src="../../assets/img/messenger.png" class="w-[30px] h-[30px]"><small class="ml-5 font-bold">Message</small>
        </router-link>
        </li>
         <li class="py-3 border-gray-100 border-b-4 px-5 ">
        <router-link to="/video" class="flex items-center">
        <img src="../../assets/img/movie.png" class="w-[30px] h-[30px]"><small class="ml-5 font-bold">Me Video</small>
        </router-link>
        </li>
        <li class="py-3 border-gray-100 border-b-4 px-5 ">
        <router-link to="/projek" class="flex items-center">
        <img src="../../assets/img/code.png" class="w-[30px] h-[30px]"><small class="ml-5 font-bold">Project</small>
        </router-link>
        </li>
      </ul>
    <p class="md:hidden block font-bold ml-2 my-3">Sosial Media</p>
      <ul class="md:hidden block">
       <li class="py-3 border-gray-100 border-b-4 px-5 ">
        <a href="" class="flex items-center">
        <img src="../../assets/img/fb.png" class="w-[30px] h-[30px]"><small class="ml-5 font-bold">Facebook</small>
        </a>
        </li>
      <li class="py-3 border-gray-100 border-b-4 px-5 ">
        <a href="" class="flex items-center">
        <img src="../../assets/img/wa.png" class="w-[30px] h-[30px]"><small class="ml-5 font-bold">WhatsApp</small>
        </a>
        </li>
         <li class="py-3 border-gray-100 border-b-4 px-5 ">
        <a href="" class="flex items-center">
        <img src="../../assets/img/github.png" class="w-[30px] h-[30px]"><small class="ml-5 font-bold">Github</small>
        </a>
        </li>
         <li class="py-3 border-gray-100 border-b-4 px-5 ">
        <a href="" class="flex items-center">
        <img src="../../assets/img/linkedin.png" class="w-[30px] h-[30px]"><small class="ml-5 font-bold">Linkedin</small>
        </a>
        </li>
      </ul>
    </nav>
</template>
<script>
  export default {
    name:'SidebarMenu'
  }
</script>