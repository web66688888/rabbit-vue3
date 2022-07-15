import XtxSkeleton from '@/components/skeleton/index.vue'
import XtxCarousel from '@/components/carousel/index.vue'
import XtxMore from '@/components/more/index.vue'
import Bread from './Bread/index.vue'
import XtxCity from './city/index.vue'
import BreadItem from './Bread/Item.vue'
import XtxNumbox from '@/components/numbox/index.vue'
import XtxCheckbox from '@/components/checkbox/index.vue'
import { App } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import defaultImg from '@/assets/images/200.png'
import XtxButton from '@/components/button/index.vue'
export default {
  // V2 传入 Vue对象
  // V3 传入 app 对象
  install (app: App) {
    // 全局注册组件
      app.component(XtxSkeleton.name, XtxSkeleton)
      app.component(XtxCarousel.name, XtxCarousel)
      app.component(XtxMore.name, XtxMore)
      app.component(Bread.name, Bread)
      app.component(BreadItem.name, BreadItem)
      app.component(XtxCity.name, XtxCity)
      app.component(XtxNumbox.name, XtxNumbox)
      app.component(XtxButton.name, XtxButton)
      app.component(XtxCheckbox.name, XtxCheckbox)
    // import { useIntersectionObserver } from '@vueuse/core'
    // 全局注册指令
    //参数1 :指令名
    app.directive('lazy', {
      //v2: 当绑定的元素插入到DOM 中时执行, inserted
      //inserted(el,binding) {}
      //v3: 改为了 mounted
      mounted(el , binding) {
        //el: 当前指定绑定的 DOM 元素
        //逻辑: 当 el 进去可视区后,给它设置 src 属性
        useIntersectionObserver(el,( [ {isIntersecting} ] ) => {
          // console.log(isIntersecting,binding);
            if(isIntersecting) el.src = binding.value
        })
        el.onerror = () => {
          el.src = defaultImg
        }
      }
    })
  }
}