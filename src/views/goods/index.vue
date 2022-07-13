<script lang="ts" setup>
import useStore  from '@/store'
import { watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import GoodsImage from './components/goods-image.vue';
import GoodsSales from './components/goods-sales.vue';
import GoodsName from './components/goods-name.vue';
import GoodsSku from './components/goods-sku.vue';
const { goods } = useStore()
const route = useRoute()
watchEffect(() => {
    if(route.fullPath!=='/goods/'+ route.params.id) return
    goods.clearInfo()
    goods.getgoods(route.params.id as string)
})
</script>
<template>
  <div class="xtx-goods-page" v-if="goods.Info.categories">
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread v-if="goods.Info.categories">
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem :to="`/category/${  goods.Info.categories[0].id }`">{{ goods.Info.categories[1].name }}</XtxBreadItem>
        <XtxBreadItem :to="`/category/sub/${  goods.Info.categories[0].id }`">{{ goods.Info.categories[0].name }}</XtxBreadItem>
        <XtxBreadItem >{{ goods.Info.name }}</XtxBreadItem>
      </XtxBread>
      <div v-else>
      <XtxSkeleton bg="#e4e4e4" :width="160" :height="24" />
      <XtxSkeleton bg="#e4e4e4" :width="120" :height="24" />
      <XtxSkeleton bg="#e4e4e4" :width="120" :height="24" />
      <XtxSkeleton bg="#e4e4e4" :width="306" :height="306" />
      </div>
      <!-- 商品信息 -->
      <div class="goods-info">
        <div class="media">
          <GoodsImage :images="goods.Info.mainPictures"></GoodsImage>
          <GoodsSales/>
        </div>
        <div class="spec">
          <GoodsName :good="goods.Info"/>
           <GoodsSku :good="goods.Info"/>
        </div>
      </div>
      <!-- 商品详情 -->
      <div class="goods-footer">
        <div class="goods-article">
          <!-- 商品+评价 -->
          <div class="goods-tabs"></div>
        </div>
        <!-- 24热榜+专题推荐 -->
        <div class="goods-aside"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;
  .media {
    width: 580px;
    height: 600px;
    padding: 30px 50px;
  }
  .spec {
    flex: 1;
    padding: 30px 30px 30px 0;
  }
}
.goods-info {
  min-height: 600px;
  background: #fff;
}
.goods-footer {
  display: flex;
  margin-top: 20px;
  .goods-article {
    width: 940px;
    margin-right: 20px;
  }
  .goods-aside {
    width: 280px;
    min-height: 1000px;
  }
}
.goods-tabs {
  min-height: 600px;
  background: #fff;
}
.goods-warn {
  min-height: 600px;
  background: #fff;
  margin-top: 20px;
}
</style>