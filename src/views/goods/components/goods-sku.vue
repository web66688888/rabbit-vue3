<script setup lang="ts" name="GoodsSku">
import { GoodResult, Spec, Value } from '@/types/data';
import bwPowerSet from '@/utils/bwPowerSet'
const props = defineProps<{
  good :GoodResult
  skuID ?:string
}>()
const emits = defineEmits<{
  (e:'changeSku',skuID:string ):void
}>()
  const Sparator = '✔'
const changeselected = (sub :Value ,item : Spec) => {
      if (sub.disabled) return
      item.values.filter(k => k.name !== sub.name).forEach(i => i.selected = false)
      sub.selected = !sub.selected
      updateDisabledStatus()
      const resault = getSelectedSpec()
      if(resault.every(item => item)) {
        const key = resault.join(Sparator)
        const val = pathMap[key]
        console.log(val[0]);
        emits('changeSku',val[0])
      }
}
//获取路径字典
function getPathMap()  {
  const skus = props.good.skus.filter(item => item.inventory > 0)
  const pathMap: any = {}
skus.forEach(item => {
  const arr = item.specs.map(v => v.valueName)
  // console.log(arr);
  const resault = bwPowerSet(arr)
  resault.forEach(sub => {
    const key = sub.join(Sparator)
    if(key in pathMap) {
        pathMap[key].push(item.id)
    } else {
      pathMap[key] = [item.id]
    }
  })
})
return pathMap
}

function updateDisabledStatus() {
  props.good.specs.forEach((item,index) => {
  item.values.forEach(sub => {
    const selectedArr = getSelectedSpec()
    selectedArr[index] = sub.name
    const key = selectedArr.filter(v => v).join(Sparator)
    sub.disabled = !(key in pathMap)
  })
})
}
// console.log(('10cm' in pathMap));
function getSelectedSpec() {
  const arr :string [] = []
  props.good.specs.forEach(item =>{
        const res = item.values.find(sub => sub.selected)
        arr.push(res?.name || '')
  })
  return arr
}
// console.log(getSelectedSpec());

// console.log(pathMap);
const initSelectedSpec = () => {
  const sku = props.good.skus.find(item => item.id === props.skuID)
  if (sku) {
    props.good.specs.forEach((item,index) => {
      const value = sku.specs[index].valueName
      const spec = item.values.find(item => item.name === value)
      spec!.selected = true
    })

  }
}
const pathMap = getPathMap()
initSelectedSpec()
updateDisabledStatus()

</script>
<template>
  <div class="goods-sku">
    <dl v-for="item in good.specs" :key="item.id">
      <dt>{{ item.name }}</dt>
      <dd>
        <template v-for="sub in item.values" :key="sub.name">
          <img v-if="sub.picture"
          @click="changeselected(sub,item)"
          :class="{selected : sub.selected,disabled : sub.disabled }"
          :src="sub.picture"
          :title="sub.name"
          alt=""
        />
        <span 
        @click="changeselected(sub,item)"
        :class="{selected : sub.selected,disabled : sub.disabled }" v-else>{{ sub.name }}</span>       
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
