<template>
	<div id="login" :style="{background:`url(${bg})`}">
		<div class="login">
			<el-form 
				:model="ruleForm" 
				:label-positio="'right'" 
				status-icon 
				:rules="rules" 
				ref="ruleForm" 
				label-width="80px" 
				class="demo-ruleForm"
				hide-required-asterisk
				>
				<el-form-item label="用户名" prop="userName">
					<el-input type="text" v-model="ruleForm.userName" placeholder="请输入用户名"  autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input type="password" v-model="ruleForm.password" placeholder="请输入密码" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
					<el-button @click="resetForm('ruleForm')">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script lang="js">	
export default {
    name:"Login",
    data(){
        return {
            bg:require("@/assets/images/login.png"),
            ruleForm:{
                userName: '',
                password: ''
            },
            rules:{
                userName: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true,message: '请输入密码', trigger: 'blur' }
                ]
            },
        }
    },
    methods:{
        // 提交账号密码
        submitForm(ruleForm){ 
            this.$refs[ruleForm].validate( (valid) =>{
                if(valid){
                    this.$router.push("/home")
                }
            })
        },
        /** 
         * resetForm 重置密码
        */
        resetForm(ruleForm){
            this.$refs[ruleForm].resetFields();
        }
    }
}
</script>

<style lang="less" scope>
	#login{
		width:100%;
		height:100%;
		.login{
			width:400px;
			position: absolute;
			top:50%;
			left:50%;
			transform: translate(-50%,-50%);
		}
	}
</style>