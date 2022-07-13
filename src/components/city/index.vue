<script lang="ts" setup name="XtxCity">
import { ref, watchEffect } from 'vue';
import axios from 'axios'
import { onClickOutside  } from '@vueuse/core'
export type CityObj = {
    provinceCode: string,
    provinceName: string,
    cityCode: string,
    cityName: string,
    countyCode: string,
    countyName: string
}
defineProps<{
  adress:string
}>()
const emits = defineEmits<{
  (e:'changeCity',value:CityObj) :void
}>()
const target = ref(null)
onClickOutside(target,() => {
    active.value =false
})
const CityList = ref<CityItem[]>([])
const CacheList = ref<CityItem[]>([])
interface CityItem {
  code:string
  level:number
  name:string
  areaList:CityItem[]
}

async function getCity () {
  const res = await axios.get<CityItem[]>('https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json')
  // console.log(res);
  CityList.value = res.data
  CacheList.value = res.data
}
getCity ()
const active = ref(false)
const CityResault = ref<CityObj>({} as CityObj)
const selectCity = (city:CityItem) => {
    if(city.level===0) {
      CityResault.value.provinceName = city.name
      CityResault.value.provinceCode = city.code
    }
    if(city.level===1) {
      CityResault.value.cityName = city.name
      CityResault.value.cityCode = city.code
    }
    if(city.level===2) {
      CityResault.value.countyName= city.name
      CityResault.value.countyCode = city.code
      emits('changeCity',CityResault.value)
    }
    if(!city.areaList) return active.value = false
    CityList.value = city.areaList
}
watchEffect(() => {
  if(!active.value) {    
    CityList.value = CacheList.value
  }
})
</script>
<template>
  <div class="xtx-city" ref="target">
    <div class="select" @click="active = !active" :class="{ active }">
      <span v-if="adress" class="placeholder">{{ adress }}</span>
      <span v-else class="placeholder">请选择配送地址</span>
      <span class="value"></span>
      <i class="iconfont icon-angle-down"></i>
    </div>
    <div class="option" v-if="active">
      <span class="ellipsis" @click="selectCity(item)" v-for="item in CityList" :key="item.name">{{ item.name }}</span>
    </div>
  </div>
</template>

<style scoped lang="less">
.xtx-city {
  display: inline-block;
  position: relative;
  z-index: 400;
  .select {
    border: 1px solid #e4e4e4;
    height: 30px;
    padding: 0 5px;
    line-height: 28px;
    cursor: pointer;
    &.active {
      background: #fff;
    }
    .placeholder {
      color: #999;
    }
    .value {
      color: #666;
      font-size: 12px;
    }
    i {
      font-size: 12px;
      margin-left: 5px;
    }
  }
  .option {
    width: 542px;
    border: 1px solid #e4e4e4;
    position: absolute;
    left: 0;
    top: 29px;
    background: #fff;
    min-height: 30px;
    line-height: 30px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    > span {
      width: 130px;
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
      padding: 0 3px;
      &:hover {
        background: #f5f5f5;
      }
    }
  }
}
</style>