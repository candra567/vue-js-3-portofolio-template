<template>
    <div class="card-footer py-3 px-6 border-t border-gray-300 text-gray-600 flex space-x-5">
        <div class="post-like"><button><img src="../../assets/img/like.png" class="w-[30px] h-[30px]"><small>Like</small></button></div>
        <div class="post-comment"><button><img src="../../assets/img/comment.png"  class="w-[30px] h-[30px] block mx-auto" ><small>Comment</small></button></div>
        <div class="post-share"><button><img src="../../assets/img/share.png"  class="w-[30px] h-[30px]" ><small>Share</small></button></div>
    </div>
</template>
<script>
  export default {
    name:'CardFooterPost'
  }
</script>