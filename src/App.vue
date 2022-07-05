<template>
<router-view ></router-view>
</template>
  
<script setup lang='ts'>
  import  axios  from "./utils/request";
   axios.get('/home/index').then(res=>{
    console.log(res);
    
   })
</script>
  
<style scoped lang="less">

  
</style>