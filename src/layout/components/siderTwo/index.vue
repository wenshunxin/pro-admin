<template>
    <div class="siderbar" :style="{width:(collapse?'250px':'65px')}">
        <div class="sider-header">
            <img src="@/assets/logo.png" width="50" alt="">
        </div>
        <el-scrollbar wrap-style="color: red;" view-style="font-weight: bold;height:100%;" view-class="view-box" :native="false">
            <el-menu
                :unique-opened="true"
                :collapse-transition="false"
                :default-active="activeMenu"
                :collapse="!collapse"
                mode="vertical"
                class="sider-menu"
            >
                <SiderItem 
                    v-for="item in routes"
                    :key="item.name"
                    :item="item"
                />
            </el-menu>
        </el-scrollbar>
    </div>
</template>
<script>

import { mapGetters } from 'vuex';
import SiderItem from "./siderItem"
export default {
    name:"Sidebar",
    components:{
        SiderItem
    },
    computed:{
        ...mapGetters({
            collapse:'collapse'
        }),
        routes(){
            return this.$router.options.routes[1].children;
        },
        activeMenu(){
            const route = this.$route
            const { meta, path } = route
            // if set path, the sidebar will highlight the path you set
            if (meta.activeMenu) {
                return meta.activeMenu
            }
            return path
        }
    },
    mounted(){
        // console.log(this.$router.options.routes[1].children)
    }
}
</script>

<style lang="less" scoped>
    .siderbar{
        width:100%;
        transition: width .28s;
        display: flex;
        flex-direction: column;
        .el-scrollbar{
            flex: 1;
        }
    }
    /deep/ .el-scrollbar__wrap{
        overflow-x: hidden !important;
    }
    .sider-menu{
        height:100%;
    }
    .sider-header{
        height:59px !important;
        border-bottom: 1px solid #ae7777;
        text-align: center;
        line-height: 60px;
        border-right: 1px solid #ae7777;
        img{
            vertical-align: middle;
        }
    }
</style>