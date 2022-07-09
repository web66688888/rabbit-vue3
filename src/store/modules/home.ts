import { defineStore } from 'pinia'
import http from '@/utils/request'
import { ApiRes, BannerItem, NewItem, HotItem} from '@/types/data'
export default defineStore ('home',{
  state() {
      return {
        Bannerlist:[] as BannerItem[],
        newList:[] as NewItem[],
        hotGoodList:[] as HotItem []
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
      }
  }
})