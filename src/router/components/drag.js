export const drag = [
    {
        path: "/example/drag-kanban/simple",
        name: "Simple",
        hidden: true,
        component: () => import("@/views/example/components/simple.vue"),
        meta: {
            name: "简单",
            activeMenu: "/example/drag-kanban",
        }
    },
    {
        path: "/example/drag-kanban/two-lists",
        name: "Two-Lists",
        hidden: true,
        component: () => import("@/views/example/components/two-lists.vue"),
        meta: {
            name: "",
            activeMenu: "/example/drag-kanban"
        }
    },
    {
        path: "/example/drag-kanban/clone",
        name: "Clone",
        hidden: true,
        component: () => import("@/views/example/components/clone"),
        meta: {
            name: "克隆",
            activeMenu: "/example/drag-kanban"
        }
    }
]