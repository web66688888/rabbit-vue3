<script setup lang="ts" name="GoodsSku">
import { GoodResult, Spec, Value } from '@/types/data';
import bwPowerSet from '@/utils/bwPowerSet'
import { ref } from 'vue';
const props = defineProps<{
  good :GoodResult
}>()
const changeselected = (sub :Value ,item : Spec) => {
      item.values.forEach(i => i.selected = false)
      sub.selected =! sub.selected
}
const skus = props.good.skus.filter(item => item.inventory > 0)
  const obj = {} as any
// skus.forEach((item) => {
//   const arr = item.specs.map(sub => sub.valueName)
//   console.log(arr);
//   const powerset = bwPowerSet(arr)
//   powerset.forEach(sub => {
//     const key = sub.join('✔')
//     if(key in obj) {
//         obj[key].push(item.id)
//     } else {
//       obj[key] = [item.id]
//     }
//   })
// })
const arr = skus.map(item => item.specs.map(i => i.valueName))
arr.forEach(item => {
    const powerset = bwPowerSet(item)
    // console.log(powerset);
    powerset.forEach(sub=> {
      const key = sub.join('$')
      if(key in obj) {
        obj[key].push(true)
      } else {
        obj[key] = [true]
      }
    })
})
// console.log(arr);
console.log(obj);



//  arr.map(i => )
</script>
<template>
  <div class="goods-sku">
    <dl v-for="item in good.specs" :key="item.id">
      <dt>{{ item.name }}</dt>
      <dd>
        <template v-for="sub in item.values" :key="sub.name">
          <img v-if="sub.picture"
          @click="changeselected(sub,item)"
          :class="{selected : sub.selected}"
          :src="sub.picture"
          alt=""
        />
        <span 
        @click="changeselected(sub,item)"
        :class="{selected : sub.selected}" v-else>{{ sub.name }}</span>       
        </template>
      </dd>
    </dl>
  </div>
</template>

<style scoped lang="less">
.sku-state-mixin () {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;
  &.selected {
    border-color: @xtxColor;
  }
  &.disabled {
    opacity: 0.6;
    border-style: dashed;
    cursor: not-allowed;
  }
}
.goods-sku {
  padding-left: 10px;
  padding-top: 20px;
  dl {
    display: flex;
    padding-bottom: 20px;
    align-items: center;
    dt {
      width: 50px;
      color: #999;
    }
    dd {
      flex: 1;
      color: #666;
      > img {
        width: 50px;
        height: 50px;
        margin-top: 5px;
        .sku-state-mixin ();
      }
      > span {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        padding: 0 20px;
        margin-top: 5px;
        .sku-state-mixin ();
      }
    }
  }
}
</style>
