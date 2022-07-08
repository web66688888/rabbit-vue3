import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import '@/assets/styles/common.less'
import router from '@/router'
import { createPinia } from "pinia";
//全局注册组件
// import XtxSkeleton from '@/components/skeleton/index.vue'
import MyUI from '@/components'
const pinia =createPinia()

createApp(App).use(router).use(pinia).use(MyUI).mount('#app')
