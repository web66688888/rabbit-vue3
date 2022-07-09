import {createRouter, createWebHashHistory} from 'vue-router'
import Layout from '@/views/layout/index.vue'
import Login from '@/views/login/index.vue'
import Home from '@/views/home/index.vue'
import playground from '@/views/playground/index.vue'
import Category from '@/views/category/index.vue'
import Sub from '@/views/category/sub.vue'
const router = createRouter({
    routes : [
    {
        path:'/',
        component: Layout,
        children:[
        {
            path:'',
            component: Home
        },
        {
            path:'Category/:id',
            component: Category
        },
        {
            path:'Category/sub/:id',
            component: Sub
        }
    ]
    },
    {
        path:'/login',
        component: Login
    },
    {
        path:'/playground',
        component: playground
    }
],
    history: createWebHashHistory()
})
export default router