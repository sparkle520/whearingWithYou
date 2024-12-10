<template>

  <div class="yourname-main w-100vw">
    <div class="fixed top-0 left-0 w-100vw h-50px pt-17px pb-13px bg-[#ffff] z-10 animate__animated "
    :class="{ animate__fadeInDown: roleAnimation, animate__fadeOut: !roleAnimation }"
    >
        <div class="w-1180px mx-auto flex justify-between items-center">
            <img src="https://pic.imgdb.cn/item/67518478d0e0a243d4de44e1.png" alt="">

        </div>
    </div>
    <section class="w-100vw h-100vh overflow-hidden "
   
    >
        <div
        class=" transition-duration-10000"
        :class="{ 'translate-y-[calc(-100vh)] ': startAnimation }">
            <div class="w-full h-100vh bg-[#255089] relative z-10">
                <div class="absolute bg-[#255089] bottom-0 w-100vw h-148px translate-y-20 blur-2xl"></div>
            </div>
            <div class="w-full h-100vh bg-[#255089] relative">
                <img class="absolute z-1 left-[-28px] top-14 animate__animated animate-delay-[1000ms] animate-duration-2000" src="/src/assets/img/y1.webp" alt=""
                :class="{ animate__fadeIn: roleAnimation, animate__fadeOut: !roleAnimation }"
                >
                <img class="absolute z-1 top-14 animate__animated animate-delay-[2000ms] animate-duration-2000" src="/src/assets/img/y2.webp" alt=""
                :class="{ animate__fadeIn: roleAnimation, animate__fadeOut: !roleAnimation }"
                >
                <img class="absolute left-0 top-0 w-full h-100vh" src="/src/assets/img/y3.png" alt="">
            </div>
        </div>
</section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const startAnimation = ref(false);
const roleAnimation = ref(false)
onMounted(() => {
    setTimeout(() => {
    startAnimation.value = true;
  }, 3000);
    setTimeout(() => {
        roleAnimation.value = true;
  }, 8000);
})
</script>

<style scoped>

</style>