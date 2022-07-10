import { defineStore } from 'pinia'
import http from '@/utils/request'
import { ApiRes, BannerItem, NewItem, HotItem ,BrandItem ,productItem ,specialItem} from '@/types/data'
export default defineStore ('home',{
  state() {
      return {
        Bannerlist:[] as BannerItem[],
        newList:[] as NewItem[],
        hotGoodList:[] as HotItem[],
        brandList: [] as BrandItem[],
        productList:[] as productItem[],
        specialList:[] as specialItem[]
      }
  },
  actions:{
    async  getBannerlist () {
        const res = await http.get<ApiRes<BannerItem>>('/home/banner')
        this.Bannerlist = res.data.result
      },

    async  getNewList () {
    const res = await http.get<ApiRes<NewItem>>('/home/new')
      // console.log(res);
      this.newList = res.data.result
      },

     async getHotList() {
      const res = await http.get<ApiRes<HotItem>>('/home/hot')
      this.hotGoodList = res.data.result
      },

      async getBrandList() {
        const res = await http.get<ApiRes<BrandItem>>('/home/brand')
        // console.log(res)
        this.brandList = [...res.data.result,...res.data.result]
        // this.brandList = res.data.result
      },
      async getproductList() {
        const res = await http.get<ApiRes<productItem>>('/home/goods')
        // console.log(res);
        this.productList = res.data.result
        },
    async getspecialList() {
      const res = await http.get<ApiRes<specialItem>>('/home/special')
      console.log(res);
      this.specialList = res.data.result
      },
    
  }
})