<template>
  <div class="w-full rounded-lg shadow-lg bg-white  my-2 card-posts">
  <CardHeaderPostVue/>
  <CardBodyPostVue/>
  <CardFooterPostVue/>
  </div>
</template>
<script>
import CardFooterPostVue from './CardFooterPost.vue';
import CardBodyPostVue from './CardBodyPost.vue';
import CardHeaderPostVue from './CardHeaderPost.vue';
  export default {
    name:'CardPost',
    components:{
    CardHeaderPostVue,
    CardBodyPostVue,
    CardFooterPostVue
}
  }
</script>