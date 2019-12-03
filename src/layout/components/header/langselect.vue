<template>
    <el-dropdown
        :placement="'bottom'"
        @command="handleCommand"
    >
        <div class="dropdowm">
            <i class="iconfont iconlanguage"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zh" :disabled="$i18n.locale ==='zh'">中文</el-dropdown-item>
            <el-dropdown-item command="en" :disabled="$i18n.locale ==='en'">English</el-dropdown-item>
            <el-dropdown-item command="es" :disabled="$i18n.locale ==='es'">English</el-dropdown-item>
            <el-dropdown-item command="ja" :disabled="$i18n.locale ==='ja'">日本语</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
export default {
    name:"dropdown",
    methods:{
        handleCommand(command){
            this.$i18n.locale = command;
            this.$store.dispatch("handleSetLanguage",command).then(()=>{
                this.$message.success("切换语言成功")
            });
            localStorage.setItem("store",JSON.stringify(this.$store.state.layout))
        }
    }
}
</script>

<style lang="less" scoped>
    .el-dropdown{
        height:60px;
        line-height: 60px;
    }
</style>