<template>
    <el-breadcrumb id="breadcrumb" separator="/">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path+index">
                <span v-if="index===levelList.length-1" class="no-redirect">{{ item.meta.name}}</span>
                <a v-else @click="$router.push(item.path)">{{item.meta.name}}</a>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script>
export default {
    name:'breadcrumb',
    data(){
        return {
            levelList:[]
        }
    },
    watch: {
        $route() {
            this.getBreadcrumb()
        }
    },
    created(){
        this.getBreadcrumb()
    },
    methods:{
        getBreadcrumb(){
            let matched = this.$route.matched.filter(item => item.meta && item.meta.title);
            const first = matched[0];
            if(!this.isDashboard(first)){
                matched = [{
                    path:"/dashboard",
                    meta:{
                        title:"dashboard"
                    }
                }].concat(matched);
            }
            this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false);
        },
        isDashboard(row){
            const name = row && row.name;
            if(!name){
                return false;
            }
            return name.trim().toLocaleLowerCase === "Dashboard".toLocaleLowerCase();
        }
    }
}
</script>

<style lang="less" scoped>
    #breadcrumb{
        display: inline-block;
    }
</style>