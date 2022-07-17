import { useIntersectionObserver, useIntervalFn } from "@vueuse/core"
import { ref } from "vue"

// export function useLzayData(target:any,callback:() => void) {
//   const { stop } = useIntersectionObserver(target,([{ isIntersecting } ]) => {
//     if(isIntersecting) {
//       callback()
//     stop()
//     }
// })
// }
export function useLzayData(callback:() => void) {
  const target = ref(null)
  const { stop } = useIntersectionObserver(target,([{ isIntersecting } ]) => {
    if(isIntersecting) {
      //进入可视区要做的事情
      callback()
      //停止监视, 以后不会再触发
      stop()
    }
  },{ //阈值 threshold 设置为 0 可以解决没有阈值 看到一丢丢就可以加载
    threshold:0
   })
  return target
}
export function useCountDown(count :number) {
  const time = ref(0)
  const { pause, resume } = useIntervalFn(() => {
    time.value --
    if(time.value === 0) pause()
  },1000,{
    immediate:false
  })
  const start = () => {
    if(time.value >0) return
    time.value = count
    resume()
  }
  return {
    time,
    start
  }
}