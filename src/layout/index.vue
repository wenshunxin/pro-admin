<template>
    <el-container>
        <!-- <Siderbar/> -->
        <SiderTwo/>
        <el-container>
            <el-header>
                <navbar/>
            </el-header>
            <el-main>
                <TagView/>
                <app-main  style="padding:20px;"/>
                <Setting/>
            </el-main>
            <el-footer v-show="isShowFooter">Footer</el-footer>
        </el-container>
    </el-container>
</template>

<script>
// import Siderbar from "./components/sider/sidebar"
import AppMain from "./components/AppMain"
import navbar from "./components/header/navbar"
import Setting from "@/components/setting"
import { mapGetters } from "vuex"
import TagView from "./components/tagViewTwo/index.vue"
import SiderTwo from "./components/siderTwo/index.vue"

export default {
    name:"Layout",
    components:{
        SiderTwo,
    //    Siderbar,
       AppMain,
       navbar,
       Setting,
       TagView
    },
    data(){
        return {
            
        }
    },
    
    computed:{
        ...mapGetters({
            isShowFooter:'isShowFooter'
        }),
        fixedHeader() {
            return true || this.$store.state.settings.fixedHeader 
        },
    }
}
</script>

<style lang="less">
    .el-container{
        width:100%;
        height:100%;
        box-sizing: border-box;
    }
    .el-header{
        border-bottom: 1px solid #ae7777;
    }
    .el-footer{
        border-top:1px solid #ae7777;
    }
    .el-main{
        padding: 0 !important;
    }
</style>