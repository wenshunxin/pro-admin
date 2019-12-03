<template>
    <el-dropdown
        :placement="'bottom'"
        @command="handleCommand"
    >
        <div class="dropdowm">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar> 
            <span>admin</span>
        </div>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="dashboard">首页</el-dropdown-item>
            <el-dropdown-item>Github</el-dropdown-item>
            <el-dropdown-item divided command="outlogin">退出</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
export default {
    name:"dropdown",
    methods:{
        handleCommand(command){
            console.log(command)
            switch(command){
                case 'dashboard':
                    this.$router.push("/dashboard");
                    break;

                case "outlogin" : 
                    this.$confirm('确定退出?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(()=>{
                        this.$router.push("/login")
                    })

                    break;
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .el-dropdown{
        height:60px;
        line-height: 60px;
        margin-left: 10px;
        .dropdowm{
            display: flex;
            .el-avatar{
                margin:10px 5px 0 0;
            }
        }
    }
</style>