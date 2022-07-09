<script lang="ts" setup>
import useStore from '@/store';

const { home } = useStore()
home.getBannerlist()
</script>
<template>
  <div class="home-banner">
    <!-- 轮播图 -->
    <XtxCarousel :autoplay="true" :duration="1500" :slides="home.Bannerlist"/>
  </div>
</template>

<style scoped lang="less">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
  background-color: pink;
  :deep(.xtx-carousel .carousel-btn.prev) {
    left: 270px;
  }
  :deep(.carousel-indicator) {
  padding-left: 200px;
}
}
</style>