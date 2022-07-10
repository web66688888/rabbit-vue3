import { defineStore } from 'pinia'
import axios from '@/utils/request'
import { CategoryItem,ApiRes, TopBread } from '@/types/data'
import {topCategory} from '../constants'
const defaulttopCategory = topCategory.map(item=>({name:item}))
export default defineStore ('category',{
  state() {
      return {
        list: defaulttopCategory as CategoryItem [],
        TopBread : {} as TopBread
      }
  },
  actions:{
   async getAllCategory () {
      const res = await axios.get<ApiRes<CategoryItem>>('/home/category/head')
      this.list.forEach( item => item.open = false)
      this.list = res.data.result
      // console.log(res);
    },

    show ( id: string ) {
      let item = this.list.find(item => item.id===id )
      item && (item.open = true)
    },

    hide ( id: string ) {
      let item = this.list.find(item => item.id===id )
      item && (item.open = false)
    },
   async getTopBread(id:string) {
      const res = await axios.get('/category',{
        params:{
          id
        }
      })
      console.log(res)
      this.TopBread = res.data.result
    }
  }
})