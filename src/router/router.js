import { drag } from "./components/drag"
export const routes = [
    {
        path:"/",
        name:"login",
        component:()=>import("@/views/login"),
        hidden:true
    },
    {
        path:"/home",
        redirect: "/dashboard",
        component:()=>import("@/layout"),
        children:[
            {
                path:"/dashboard",
                name:"dashboard",
                component:()=>import("@/views/dashboard"),
                meta:{
                    title:"dashboard",
                    icon:"dashboard",
                    name:"首页"
                }
            },
            {
                path:"/guide",
                name:"guide",
                component:()=>import("@/views/guide"),
                meta:{
                    title:"guide",
                    icon:"guide",
                    name:"导航页"
                }
            },
            {
                path:"/permission",
                name:"permission",
                meta:{
                    title:"permission",
                    icon:"lock",
                    name:"权限测试页"
                },
                component:()=>import("@/views/permission/index.vue"),
                children:[
                    {
                        path:"/permission/page",
                        name:"page",
                        component:()=>import("@/views/permission/page.vue"),
                        meta:{
                            title:"page",
                            icon:"page",
                            name:"页面权限"
                        }
                    },
                    {
                        path:"/permission/role",
                        name:"role",
                        component:()=>import("@/views/permission/role.vue"),
                        meta:{
                            title:"role",
                            icon:"role",
                            name:"角色权限"
                        }
                    },
                    {
                        path:"/permission/directive",
                        name:"directive",
                        component:()=>import("@/views/permission/directive.vue"),
                        meta:{
                            title:"directive",
                            icon:"directive",
                            name:"指令权限"
                        }
                    },
                    {
                        path:"/permission/detail",
                        name:"detail",
                        hidden:true,
                        component:()=>import("@/views/permission/detail.vue"),
                        meta:{
                            title:"role",
                            icon:"role",
                            activeMenu: '/permission/role',
                            name:"详情页面"
                        }
                    }
                ]
            },
            {
                path:"/example",
                name:"example",
                meta:{
                    title:"example",
                    icon:"example",
                    name:"综合案例"
                },
                component:()=>import("@/views/example"),
                children:[
                    {
                        path:"/example/table",
                        name:"table",
                        component:()=>import("@/views/table"),
                        meta:{
                            name:"表格"
                        }
                    },
                    {
                        path:"/example/form",
                        name:"form",
                        component:()=>import("@/views/form"),
                        meta:{
                            name:"表单"
                        }
                    },
                    {
                        path:"/example/drag-kanban",
                        name:"drag-kanban",
                        component:()=>import("@/views/example/drag-kanban"),
                        redirect:"/example/drag-kanban/simple",
                        meta:{
                            name:"拖动看板",
                            hasShow:true,
                        },
                        children: drag
                    },
                    {
                        path:"/example/tab",
                        name:"tab",
                        component:()=>import("@/views/example/tab"),
                        meta:{
                            name:"tab面板",
                            
                        }
                    }
                ]
            }
        ]
    },
    {
        path:"/redirect/:path*",
        component:()=>import("@/views/redirect")
    },
    {
        path: "/datav",
        name: "Datav",
        hidden: true,
        component: () => import("@/views/dataV")
    },
]

import Vue from 'vue'
import vueRouter from 'vue-router'

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