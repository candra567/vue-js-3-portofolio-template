<template>
    <div class="fixed bottom-0 w-full p-4 bg-gray-200">
         <form action="" class="md:w-[80%] w-[90%] mx-auto flex items-center">
           <input type="text" class="w-[60%] p-2 rounded-full" placeholder="Message">
           <button type="submit" class="ml-4"><img src="../../assets/img/send.png" class="w-[50px] h-[50px]"></button>
         </form>
    </div>
</template>
<script>
 export default{
    name:'MessageSend'
 }
</script>