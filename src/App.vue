<template>
   <h1>1111</h1>
</template>
  
<script setup lang='ts'>
  import  axios  from "./utils/request";
   axios.get('/home/index').then(res=>{
    console.log(res);
    
   })
</script>
  
<style scoped lang="less">
@import '@/assets/styles/variables.less';
@import '@/assets/styles/mixins.less';
 h1 {
   color: @xtxColor;
   background-color:pink;
   .hoverShadow ()
 }

  
</style>