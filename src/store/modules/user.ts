import { defineStore } from 'pinia'
import axios from '@/utils/request'
import { ApiRes  } from '@/types/data'
import { LoginResult } from "@/types/user";
import { getStorage, removeStorage, setStorage } from '@/utils/storage';
export default defineStore('user',{
    state() {
        return {
          profile: getStorage()  as LoginResult
        }
    },
    actions:{
     async getUserInfo(data:{ account:string, password:string}) {
        const res = await axios.post('/login',data)
        console.log(res);
        this.profile = res.data.result
        setStorage(res.data.result)
      },
      async getCode(mobile :string) {
        const res = await   axios.get('/login/code',{params:{mobile}})
        console.log(res);
      },
      async mobileLogin(data: { mobile: string, code: string }) {
        const res = await axios.post('/login/code', data)
        // 1. 保存用户信息到 state 中
        this.profile = res.data.result
        setStorage(res.data.result)
      },
      Logout() {
        this.profile = {}  as LoginResult
        removeStorage()
      }
    }
})