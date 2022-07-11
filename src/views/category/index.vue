<template>
  <div class="top-category">
  <div class="container">
    <XtxBread>
      <XtxBreadItem to="/">首页</XtxBreadItem>
      <XtxBreadItem>{{ category.TopBread.name }}</XtxBreadItem>
    </XtxBread>
    <XtxCarousel :slides="home.Bannerlist" style="height: 500px;"/>
  <div class="sub-list">
  <h3>全部分类</h3>
  <ul>
    <li v-for="item in TopBread.children" :key="item.id">
      <a href="javascript:;">
        <img v-lazy="item.picture" >
        <p>{{item.name}}</p>
      </a>
    </li>
  </ul>
  <div class="ref-goods" v-for="item in TopBread.children">
  <div class="head">
    <h3>- {{item.name}} -</h3>
    <p class="tag">温暖柔软，品质之选</p>
    <XtxMore />
  </div>
  <div class="body">
    <GoodsItem v-for="good in item.goods" :key="good.id" :goods="good"/>
  </div>
</div>
</div>
 </div>
 </div>
</template>

<script lang="ts" name="TopCategory" setup>
import { watch, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import useStore from '@/store'
import { useLzayData } from '@/utils/hooks';
import { storeToRefs } from 'pinia';
import GoodsItem from './components/goods-item.vue';
const { home } = useStore()
const { category } = useStore()
const  route = useRoute()
// useLzayData
home.getBannerlist()
const { TopBread } = storeToRefs(category)
//watch 第一次进入页面不会执行,需要加上配置项:immediate
// watch(() => route.params.id,() => {
//     if(route.fullPath===`/category/${route.params.id}`) {
//       category.getTopBread(route.params.id as string) 
//     }
// },{immediate:true})
//传入一个回调函数, 内部用到的数据如果发生变化会触发
watchEffect(() => {
  console.log(route.params.id);
  if(route.fullPath===`/category/${route.params.id}`) {
      category.getTopBread(route.params.id as string) 
    }
})

</script>

<style scoped lang="less">
.top-category {
   .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;
    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }
      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }
    .body {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding: 0 65px 30px;
    }
  }
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  .sub-list {
    margin-top: 20px;
    background-color: #fff;
    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;
      li {
        width: 168px;
        height: 160px;
        a {
          text-align: center;
          display: block;
          font-size: 16px;
          img {
            width: 100px;
            height: 100px;
          }
          p {
            line-height: 40px;
          }
          &:hover {
            color: @xtxColor;
          }
        }
      }
    }
  }
}
</style>