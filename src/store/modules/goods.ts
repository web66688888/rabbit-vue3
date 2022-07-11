import { defineStore } from 'pinia'
import axios from '@/utils/request'
import { ApiRes ,GoodResult } from '@/types/data'
export default defineStore('goods',{
    state() {
        return {
          Info: {} as GoodResult
        }
    },
    actions:{
     async getgoods(id:string) {
        const res = await axios.get('/goods',{
          params:{
            id
          }
        })
        console.log(res);
        this.Info = res.data.result
      }
    }
})