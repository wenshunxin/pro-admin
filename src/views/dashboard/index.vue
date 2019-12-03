<template>
    <div>
       Dashboard
       <el-button type="primary" @click="reload2">刷新</el-button>
       <el-button type="primary" @click="reload1">刷新</el-button>
        <el-button type="primary" @click="reload3">刷新3</el-button>
    </div>
</template>

<script>
export default {
    name:"Dashboard",
    inject: ['reload'],
    methods:{
        reload2(){
            this.$router.go(0)
        },
        reload1(){
            this.reload();
        },
        reload3(){
            const { fullPath } = this.$route;
            this.$nextTick(() => {
                this.$router.replace({
                    path: '/redirect' + fullPath
                })
            })
        }
    }
}
</script>

<style>

</style>