import { h, render } from "vue";
import message from './message.vue'
type Options = {
  type: 'success' | 'error' | 'warning'
  text: string
  duration?: number
}
export function Message({type , text , duration = 2000} : Options) {
  //避免和别的数据冲突
  const div = document.createElement('div')
  div.setAttribute('class','xtx-message-container')
  document.body.appendChild(div)
  const vnode = h(message, { type , text})
  render(vnode, div)
  //开启定时器:等 3秒让其消失
  setTimeout(() => {
    // 调用render函数 传入 null
    render(null, div)
    // 移除div
    div.remove()
  },duration)
}
//优化访问的方法: Message.success()
Message.success = (text:string,duration:number=2000) => {
  Message({
    type:'success',
    text,
    duration
  })
}
Message.error = (text:string,duration:number=2000) => {
  Message({
    type:'error',
    text,
    duration
  })
}
Message.warning = (text:string,duration:number=2000) => {
  Message({
    type:'warning',
    text,
    duration
  })
}