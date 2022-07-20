<template>
  <div class="md:w-[65%] w-[30%] px-4 ">
    <div class="md:hidden block w-full">
      <button class="d-block mx-auto" @click="showNavbarPhone">
         <img src="../../assets/img/list-menu.png"  class="w-[30px] h-[30px] block mx-auto">
      </button>
    </div>

    <div class="w-full md:block hidden">
      <ul class="flex items-center space-x-10 justify-end">
        <li>
              <a href=""><img src="../../assets/img/fb.png" class="w-[30px] h-[30px] block mx-auto">
                <p class="text-sm">Facebook</p>
              </a>
        </li>
        <li>
            <a href=""><img src="../../assets/img/wa.png" alt="" class="w-[30px] h-[30px] block mx-auto">
                <p class="text-sm">WhatsApp</p>
            </a>
        </li>
        <li>
            <a href=""><img src="../../assets/img/github.png" alt="" class="w-[30px] h-[30px] block mx-auto">
              <p class="text-sm">Github</p>
            </a>
        </li>
        <li>
          <a href=""><img src="../../assets/img/linkedin.png" alt="" class="w-[30px] h-[30px] block mx-auto">
              <p class="text-sm">Linkedin</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavbarDesktopMenu',
  methods: {
    showNavbarPhone(){
          this.$store.commit('showNav')

      console.log(this.$store.state.count)
    }
  },

}

</script>