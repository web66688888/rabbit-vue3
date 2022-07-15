import { defineStore } from 'pinia'
import axios from '@/utils/request'
import { ApiRes  } from '@/types/data'
import { LoginResult } from "@/types/user";
export default defineStore('user',{
    state() {
        return {
          profile: {} as LoginResult
        }
    },
    actions:{
     async getUserInfo(data:{ account:string, password:string}) {
        const res = await axios.post('/login',data)
        console.log(res);
        this.profile = res.data.result
      },

    }
})