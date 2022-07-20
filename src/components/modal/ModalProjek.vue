<template>
  <teleport to="#modal">
  <div class="fixed top-0 left-0  w-full h-full outline-none overflow-x-hidden overflow-y-auto z-[2] bg-[rgba(0,0,0,0.4)]">
            <div class="modal-dialog relative w-auto pointer-events-none">
                <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
                        Detail Projek
                        </h5>
                        <button type="button" class="btn-close box-content "
                        data-bs-dismiss="modal" @click="$emit('close')"></button>
                    </div>
                    <div class="modal-body relative p-4 ">
                    <img src="../../assets/img/post.avif" class="w-full">
                    <p class="p-3">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est fugit ad fugiat maxime expedita, dolorum, perferendis neque quibusdam libero, velit provident fuga molestiae blanditiis unde nostrum quo culpa numquam quis?
                    </p>
                    <a href="" class=" px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg">More</a>
                    </div>
                </div>
            </div>
   </div>
  </teleport>
</template>
<script>
  export default{
    name:'ModalProjek'
  }
</script>