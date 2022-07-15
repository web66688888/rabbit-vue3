<script lang="ts" setup name="GoodsImage">
import { ref } from 'vue';
import { useMouseInElement } from '@vueuse/core' 
import { computed } from '@vue/reactivity';
const target = ref(null)
const  { elementX, elementY, isOutside } = useMouseInElement(target)
const position = computed(() => {
  let x = elementX.value -100
  let y = elementY.value -100
  if(x < 0) x = 0
  if(y < 0) y = 0
  if(x > 200) x = 200
  if(y > 200) y = 200
  return {
    x,y
  }
})
defineProps<{
  images:string []
}>()
const active = ref(0)
</script>
<template>
  <div class="goods-image">
    <div class="large" 
    v-if="!isOutside" 
    :style="[{backgroundImage:`url(${images[active]})`,backgroundPosition:` ${-position.x * 2}px ${-position.y * 2}px` }]"></div>
    <div class="middle" ref="target">
      <img
        :src="images[active]"
        alt=""
      />
      <div class="layer"  v-if="!isOutside" :style="{left:position.x +'px',top: position.y + 'px'}"></div>
    </div>
    <ul class="small">
      <li v-for="(item,index) in images" :key="item" :class="{ active: index === active }" @mouseenter="active=index">
        <img
          :src="item"
          alt=""
        />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;
  z-index: 500;
  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    background-repeat: no-repeat;
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }
  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
    position: relative;
   cursor: move;
   .layer {
     width: 200px;
     height: 200px;
     background: rgba(0,0,0,.2);
     left: 0;
     top: 0;
     position: absolute;
   }
  }
  .small {
    width: 80px;
    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;
      &:hover,
      &.active {
        border: 2px solid @xtxColor;
      }
    }
  }
}
</style>