import {createRouter, createWebHashHistory} from 'vue-router'
import Layout from '@/views/layout/index.vue'
import Login from '@/views/login/index.vue'
const router = createRouter({
    routes : [
    {
        path:'/',
        component:Layout
    },
    {
        path:'/login',
        component:Login
    }
],
    history:createWebHashHistory()
})
export default router