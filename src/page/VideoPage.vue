<template>
 <div class="w-full pt-10 px-3">
        <h1 class="text-center my-3 font-bold text-md">My Video</h1>
        <div class="w-full  flex justify-evenly flex-wrap">
            <div class="md:w-[70%] w-[90%] mx-auto my-2 border-1 shadow-md" v-for="(item,index) in num" :key="index">
                <div class="py-3 px-6 border-b border-gray-300 flex items-center space-x-3 card-header bg-indigo-300">
                    <h3>Hello World</h3>
                </div>
                <video src="../assets/3183647145.mp4" class="w-full h-[350px]" controls></video>
            </div>
        </div>
    </div>
</template>
<script>
  export default{
    name:'VideoPage',
    data() {
      return {
        num:10
      }
    },
  }
</script>