import { defineStore } from 'pinia'
import http from '@/utils/request'
import { ApiRes, BannerItem } from '@/types/data'
export default defineStore ('home',{
  state() {
      return {
        Bannerlist:[] as BannerItem[]
      }
  },
  actions:{
    async  getBannerlist () {
        const res = await http.get<ApiRes<BannerItem>>('/home/banner')
        this.Bannerlist = res.data.result
      }
  }
})