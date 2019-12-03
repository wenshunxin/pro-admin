
/**  
 *  hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
        roles: ['admin','editor']    control the page roles (you can set multiple roles)
        title: 'title'               the name show in sidebar and breadcrumb (recommend set)
        icon: 'svg-name'             the icon show in the sidebar
        noCache: true                if set true, the page will no be cached(default is false)
        affix: true                  if set true, the tag will affix in the tags-view
        breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
        activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
    }
 * 
 */


import { drag }  from "./components/drag"

export const routes =[
    {
        path: '/redirect',
        component: Layout,
        hidden: true,
        children: [
            {
                path: '/redirect/:path*',
                component: () => import('@/views/redirect/index')
            }
        ]
    },
    {
        path:"/login",
        component:()=>import("@/views/login"),
        hidden: true
    },
    {
        path:"/",
        component:Layout,
        redirect: "/dashboard",
        children:[
            {
                path:"dashboard",
                name:"Dashboard",
                component:()=>import("@/views/dashboard/index"),
                meta:{
                    title:"dashboard",
                    icon:"dashboard",
                    breadcrumb:false,
                    affix: true
                }
            }
        ]
    },
    {
        path:"/guide",
        component:Layout,
        redirect:"/guide/index",
        children:[
            {
                path:"index",
                name:"Guide",
                component:()=>import("@/views/guide/index"),
                meta:{
                    title:"guide",
                    icon:'guide',
                    breadcrumb:false
                }
            }
        ]
    },
    {
        path:"/permission",
        component:Layout,
        redirect:"/permission/page",
        name:"Permission",
        meta:{
            title:"permission",
            icon:"lock"
        },
        children:[
            {
                path:"page",
                name:"page",
                component:()=>import("@/views/permission/page"),
                meta:{
                    title:"pagePermission"
                }
            },
            {
                path:"directive",
                name:"directive",
                component:()=>import("@/views/permission/directive"),
                meta:{
                    title:"directivePermission"
                }
            },
            {
                path:"role",
                name:"role",
                component:()=>import("@/views/permission/role"),
                meta:{
                    title:"rolePermission",
                    alwaysShow:false
                }
            },
            {
                path: "detail",
                name: "dashboard",
                hidden: true,
                component: () => import("@/views/permission/detail"),
                meta: {
                    title: "dashboard",
                    icon: "dashboard",
                    activeMenu: '/permission/role',
                    hiddenTagView:false
                }
            }
        ]
    },
    {
        path:"/example",
        component:Layout,
        redirect:"/example/table",
        name:"Example",
        meta:{
            title:"example",
            icon:"example"
        },
        children:[
            {
                path:"table",
                name:"Table",
                component:()=>import("@/views/table/index"),
                meta:{
                    title:"table"
                }
            },
            {
                path:"form",
                name:"form",
                component:()=>import("@/views/form/index"),
                meta:{
                    title:"form"
                }
            },
            {
                path:"drag-kanban",
                name:"draggableKanban",
                redirect:"/example/drag-kanban/simple",
                component:()=>import("@/views/example/drag-kanban"),
                meta:{
                    title:"draggableKanban"
                },
                children:drag
            }
        ]
    }
]
import Vue from 'vue'
import vueRouter from 'vue-router'
import Layout from "@/layout"

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.inc(0.2);
NProgress.configure({ easing: 'ease', speed: 500 })

Vue.use(vueRouter);
// 简单配置




const router = new vueRouter({
    routes // (缩写) 相当于 routes: routes
});
const originalPush = vueRouter.prototype.push
vueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
router.beforeEach((to, from, next) => {
    NProgress.start()
    if(to.name === 'login'){
         NProgress.done() // 结束Progress
    }
    next()   
});
router.afterEach(() => {
     NProgress.done() // 结束Progress
});
export default router