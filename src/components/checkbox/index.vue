<script lang="ts" setup name="XtxCheckbox">
defineProps<{
  modelValue ?:boolean 
}>()
const emit = defineEmits<{
  (e:'update:modelValue',val:boolean):void
}>()
</script>

<template>
  <div class="xtx-checkbox" @click="emit('update:modelValue',!modelValue)">
    <i class="iconfont icon-checked" v-if="modelValue"></i>
    <i class="iconfont icon-unchecked" v-else></i>
    <span><slot></slot></span>
  </div>
</template>

<style scoped lang="less">
.xtx-checkbox {
  display: inline-block;
  margin-right: 2px;
  .icon-checked {
    color: @xtxColor;
    ~ span {
      color: @xtxColor;
    }
  }
  i {
    position: relative;
    top: 1px;
  }
  span {
    margin-left: 2px;
  }
}
</style>
