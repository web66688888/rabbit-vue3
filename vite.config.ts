import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(
    //vue 3.2.25 中要求加的属性,必须在 @vitejs/plugin-vue 是2.0.0以上才可以
    //是实验性语法,将来优化
    { reactivityTransform: true} //给 props 赋值默认值需要打开才可以有响应式
  ),vueSetupExtend()],
  // 更新路径别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `
          @import "@/assets/styles/variables.less";
          @import "@/assets/styles/mixins.less";
        `
      }
    }
  },
  server:{
    host:'www.corho.com',
    port:8080,
    open:true, //打开浏览器
    cors:true  //允许开发跨域
  }
})
