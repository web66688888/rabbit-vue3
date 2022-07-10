<script lang="ts" setup>
import useStore from '@/store'
import HomePanel from './home-panel.vue'
import HomeSkeleton from './home-skeleton.vue'
import { useLzayData } from '@/utils/hooks'
const { home } = useStore()
//   const target = ref(null)
//   //数据懒加载
// const { stop } = useIntersectionObserver(target,([{isIntersecting}]) => {
//     if(isIntersecting) {
// home.getHotList()
//     //加载过后就不要再发请求了
//     stop()
//     }
// })
const target = useLzayData(home.getHotList)
</script>
<template>
  <HomePanel ref="target" :title="'人气推荐'" :sub-title="'人气爆款 不容错过'">
   <template v-if="home.hotGoodList.length">
   <Transition name="fade">
     <ul ref="pannel" class="goods-list" v-if="home.hotGoodList.length">
      <li v-for="item in home.hotGoodList" :key="item.id">
        <RouterLink to="/">
          <img v-lazy="item.picture" alt="" />
          <p class="name">{{ item.title }}</p>
          <p class="desc">{{ item.alt }}</p>
        </RouterLink>
      </li>
    </ul>
    </Transition>
   </template>
     <HomeSkeleton v-else :count="4"/>
  </HomePanel>
</template>

<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
.home-skeleton {
  width: 1240px;
  height: 406px;
  display: flex;
  justify-content: space-between;
  .item {
    width: 306px;
    .xtx-skeleton ~ .xtx-skeleton {
      display: block;
      margin: 16px auto 0;
    }
  }
}
</style>