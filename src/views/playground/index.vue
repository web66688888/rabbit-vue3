<template>
<div class="bx"></div>
    <img ref="img" src="@/assets/images/qrcode.jpg" alt="">
</template>
  
<script setup lang='ts'>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
  const target = ref(null)
  useIntersectionObserver(target,(a) => {
    console.log(a);
  })
</script>
  
<style>
  .bx {
    height: 2000px;
  }
</style>