import { defineStore } from 'pinia'
import axios from '@/utils/request'
import { CategoryItem,ApiRes } from '@/types/data'
import {topCategory} from '../constants'
const defaulttopCategory = topCategory.map(item=>({name:item}))
export default defineStore ('category',{
  state() {
      return {
        list: defaulttopCategory as CategoryItem []
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
    }
  }
})