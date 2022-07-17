<script lang="ts" setup name="LoginForm">
import { Message } from '@/components/message';
import useStore from '@/store';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import  { useField, useForm } from 'vee-validate'
import { useCountDown } from '@/utils/hooks';
const active = ref<'account' | 'mobile'>('mobile')
const router = useRouter()
const {user} = useStore()
// const form = ref<{
//   account:string
//   password:string
//   isAgree:boolean
// }>({
//   account:'',
//   password:'',
//   isAgree:false
//   })
const { validate, resetForm } = useForm({
  validationSchema : {
    account(value : string) {
      if(value?.trim().length === 0 ) return '用户名不能为空'
      if(!/^[a-zA-Z]\w{5,19}$/.test(value)) return '用户名必须是6-20字符且字母开头'
      return true
    },
    password(value: string) {
      if(value?.trim().length === 0 ) return '密码不能为空'
      if(!/^\w{6,24}$/.test(value)) return '用户名必须是6-24字符'
      return true
    },
    isAgree(value: boolean) {
      if(!value ) return '请勾选同意条款'
      return true
    },
    
    mobile(value:string) {
        if(!value)  return '手机号不能为空'
        if(!/^1[3-9]\d{9}$/.test(value)) return '手机号格式错误'
      return true
    },
    code(value:string) {
      if(!value)  return '验证码不能为空'
      if(!/^\d{6}$/.test(value))  return '验证码格式错误'
      return true
    }
  }
})
// =================
type valid = {
    errors:[]
    valid:boolean
}
type item = {
  account:valid
  code:valid
  isAgree:valid
  mobile:valid
  password:valid
}
// ===============
 const { value : account, errorMessage : accountMessage } = useField<string>('account')
 const { value : password, errorMessage: passwordMessage } = useField<string>('password')
 const { value : isAgree, errorMessage: isAgreedMessage } = useField<boolean>('isAgree')
 const { value : mobile, errorMessage: mobileMessage ,validate :validMobile} = useField<string>('mobile')
 const { value : code, errorMessage: codeMessage } = useField<string>('code')
  const login = async () => {
  const res = await validate()
  const  as = res.results as item
  if(active.value === 'mobile') {
      if(as.account.valid && as.password.valid &&as.isAgree.valid) {
          try {
          await user.getUserInfo({ account:account.value,password:password.value })
          router.push('/')
        } catch (e) {
          Message.error('用户名或者密码错误')
        }
      }
 } else {
  if(as.mobile.valid && as.code.valid &&as.isAgree.valid) {
          try {
          await user.mobileLogin({ mobile:mobile.value,code:code.value })
          router.push('/')
        } catch (e) {
          Message.error('用户名或者密码错误')
        }
      }
 }
}
watch(active,() => {
    resetForm()
})
const  codeRef = ref<HTMLInputElement | null>(null)
const  mobileRef = ref<HTMLInputElement | null>(null)
const { time, start } = useCountDown(5)
const send =async () => {
   // 校验通过后开始倒计时
  if (time.value > 0) return
  start()
//   if(time.value > 0) return
//     time.value = 5
//  const timer = setInterval(()=> {
//     time.value --
//     if(time.value === 0)  clearInterval(timer)
//   },1000)
  // const res = await validMobile()
  // if(!res.valid) return  mobileRef.value?.focus()
  // codeRef.value?.focus()
  // try {
  //   await user.getCode(mobile.value)
  //   Message.success('获取验证码成功')
  // } catch {
  //   Message.error('获取验证码失败')
  // }
}
</script>
<template>
  <div class="account-box">
    <div class="toggle">
      <!-- <a href="javascript:;" v-if="active==='account'" @click="changelogin('mobile')"> -->
      <a href="javascript:;" v-if="active==='account'" @click="active='mobile'">
        <i class="iconfont icon-user"></i> 使用账号登录
      </a>
      <!-- <a href="javascript:;" v-else @click="changelogin('account')"> -->
      <a href="javascript:;" v-else @click="active='account'">
        <i class="iconfont icon-msg"></i> 使用短信登录
      </a>
    </div>
    <div class="form">
      <template v-if="active==='mobile'">
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-user"></i>
            <input v-model="account" type="text" placeholder="请输入用户名或手机号" />
          </div>
          <div class="error"><i class="iconfont icon-warning" v-if="accountMessage"/>{{accountMessage }}</div>
        </div>
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-lock"></i>
            <input type="password" v-model="password" placeholder="请输入密码" />
          </div>
          <div class="error"><i class="iconfont icon-warning" v-if="passwordMessage"/>{{ passwordMessage }}</div>
        </div>
      </template>
      <template v-else>
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-user"></i>
            <input v-model="mobile" ref="mobileRef" type="text" placeholder="请输入手机号" />
          </div>
          <div class="error"><i class="iconfont icon-warning" v-if="mobileMessage"/>{{ mobileMessage }}</div>
        </div>
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-code"></i>
            <input type="password" ref="codeRef" v-model="code" placeholder="请输入验证码" />
            <span class="code" @click="send">{{ time === 0 ? '发送验证码' : `${ time }s后重新发送` }}</span>
          </div>
          <div class="error"><i class="iconfont icon-warning" v-if="codeMessage"/>{{ codeMessage }}</div>
        </div>
      </template>
      <div class="form-item">
        <div class="agree">
         <xtx-checkbox  v-model="isAgree"> <span>我已同意</span></xtx-checkbox>
          <a href="javascript:;">《隐私条款》</a>
          <span>和</span>
          <a href="javascript:;">《服务条款》</a>
        </div>
        <div class="error"><i class="iconfont icon-warning" v-if="isAgreedMessage"/>{{isAgreedMessage }}</div>
      </div>
      <a href="javascript:;" class="btn" @click="login">登录</a>
    </div>
    <div class="action">
      <a href="https://graph.qq.com/oauth2.0/authorize?client_id=100556005&amp;response_type=token&amp;scope=all&amp;redirect_uri=http%3A%2F%2Fwww.corho.com%3A8080%2F%23%2Flogin%2Fcallback"
        ><img
          src="https://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/Connect_logo_7.png"
          alt="QQ登录"
          border="0"/></a>
      <div class="url">
        <a href="javascript:;">忘记密码</a>
        <a href="javascript:;">免费注册</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
// 账号容器
.account-box {
  .toggle {
    padding: 15px 40px;
    text-align: right;
    a {
      color: @xtxColor;
      i {
        font-size: 14px;
      }
    }
  }
  .form {
    padding: 0 40px;
    &-item {
      margin-bottom: 28px;
      .input {
        position: relative;
        height: 36px;
        > i {
          width: 34px;
          height: 34px;
          background: #cfcdcd;
          color: #fff;
          position: absolute;
          left: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 18px;
        }
        input {
          padding-left: 44px;
          border: 1px solid #cfcdcd;
          height: 36px;
          line-height: 36px;
          width: 100%;
          &.error {
            border-color: @priceColor;
          }
          &.active,
          &:focus {
            border-color: @xtxColor;
          }
        }
        .code {
          position: absolute;
          right: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 14px;
          background: #f5f5f5;
          color: #666;
          width: 90px;
          height: 34px;
          cursor: pointer;
        }
      }
      > .error {
        position: absolute;
        font-size: 12px;
        line-height: 28px;
        color: @priceColor;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
      }
    }
    .agree {
      a {
        color: #069;
      }
    }
    .btn {
      display: block;
      width: 100%;
      height: 40px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      background: @xtxColor;
      &.disabled {
        background: #cfcdcd;
      }
    }
  }
  .action {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      cursor: pointer;
    }
    .url {
      a {
        color: #999;
        margin-left: 10px;
      }
    }
  }
}
</style>
