<template>
  <div class="pt-10 min-h-screen w-full relative">
  <MessageHeaderVue/>
  <MessageSendVue/>
  </div>
</template>
<script>
import MessageHeaderVue from '@/components/message/MessageHeader.vue';
import MessageSendVue from '@/components/message/MessageSend.vue';
  export default{
    name:'MessageVue',
    components:{
    MessageHeaderVue,
    MessageSendVue
    }
  }
</script>