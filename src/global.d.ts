import XtxSkeleton from '@/components/skeleton/index.vue'
import XtxCarousel from '@/components/carousel/index.vue'
import XtxMore from '@/components/more/index.vue'
import XtxBread from '@/components/Bread/index.vue'
import XtxCity from '@/components/city/index.vue'
import XtxBreadItem from '@/components/Bread/Item.vue'
import XtxNumbox from '@/components/numbox/index.vue'
import XtxCheckbox from '@/components/checkbox/index.vue'
import XtxButton from '@/components/button/index.vue'
declare module 'vue' {
  export interface GlobalComponents {
    XtxSkeleton: typeof XtxSkeleton
    XtxCarousel: typeof XtxCarousel
    XtxMore: typeof XtxMore
    XtxBread: typeof XtxBread
    XtxBreadItem: typeof XtxBreadItem
    XtxCity: typeof XtxCity
    XtxNumbox: typeof XtxNumbox
    XtxButton: typeof XtxButton
    XtxCheckbox: typeof XtxCheckbox
  }
}
export {}