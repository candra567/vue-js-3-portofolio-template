<template>
<template v-if="show">
<ModalProjekVue @close="show=false"/>
</template>
    <div class="w-full pt-10 px-3">
        <h1 class="text-center my-3 font-bold text-md">My Projek</h1>
        <div class="w-full  flex justify-evenly flex-wrap">
            <div class="md:w-[26%] w-[45%] my-2 border-1 shadow-md" v-for="(item,index) in num" :key="index">
                <div class="py-3 px-6 border-b border-gray-300 flex items-center space-x-3 card-header bg-indigo-300">
                    <h3>Hello World</h3>
                </div>
                <div class=" card-body">
                    <img src="../assets/img/post.avif" class="w-full h-[150px]">
                </div>
                <div class="card-footer py-3 px-6 border-t border-gray-300 text-gray-600 flex space-x-5">
                  <button class="md:w-[90%] w-[70%] block mx-auto text-center px-2 py-2 md:w-1/2 bg-purple-600 text-white font-medium text-xs leading-tight  rounded " @click="show=true">More</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ModalProjekVue from '@/components/modal/ModalProjek.vue'
export default {
    name: 'ProjekPage',
    data() {
        return {
            num:10,
            show:false
        }
    },
    components:{
        ModalProjekVue
    }
}
</script>