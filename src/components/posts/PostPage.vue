<template>
      <div class="md:w-[80%] w-[90%]  mx-auto my-2 pt-10 ">
        <CardPostVue v-for="(item,index) in num" :key="index" />
      </div>
</template>
<script>
import CardPostVue from '@/components/posts/CardPost.vue';
  export default{
    name:'PostPage',
    components:{
            CardPostVue
    },
    data() {
        return {
            num:10
        }
    },
  }
</script>