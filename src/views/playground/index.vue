<template>
    <div ref="dv"></div>
</template>
  
<script setup lang='ts'>
import { h,onMounted,ref,render } from "vue";
const dv = ref<HTMLDivElement | null>(null)
const vnode = h('h1',{ title:'年龄'},'小姑娘18岁')
onMounted(() => {
  render(vnode , dv.value as HTMLDivElement)
})
</script>
  
<style>
  
</style>