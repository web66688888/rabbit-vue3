<template>
  <div class="category">分类组件</div>
  <XtxBread>
  <XtxBreadItem to="/">首页</XtxBreadItem>
  <XtxBreadItem>{{ category.TopBread.name }}</XtxBreadItem>
</XtxBread>
</template>

<script lang="ts" name="TopCategory" setup>
import useStore from '@/store'
import { watch } from 'vue';
import { useRoute } from 'vue-router';
const { category } = useStore()
const  route = useRoute()
watch(() => route.params.id,() => {
    if(route.fullPath===`/category/${route.params.id}`) {
      category.getTopBread(route.params.id as string) 
    }
},{immediate:true})


</script>

<style></style>