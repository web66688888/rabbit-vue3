import XtxSkeleton from '@/components/skeleton/index.vue'
import XtxCarousel from '@/components/carousel/index.vue'
import { App } from 'vue'
export default {
  // V2 传入 Vue对象
  // V3 传入 app 对象
  install (app: App) {
    // 全局注册组件
      app.component(XtxSkeleton.name, XtxSkeleton)
      app.component(XtxCarousel.name, XtxCarousel)
  }
}