<template>
    <div>
        <!-- 账号框 -->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <h1 class="title">欢迎使用Aiden管理系统</h1>
            <el-form-item label="账号" prop="account">
                <el-input v-model="ruleForm.account"></el-input>
            </el-form-item>
            <!-- 密码框 -->
            <el-form-item label="密码" prop="password">
                <el-input  type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>
            <!-- 按钮 -->
            <el-button type="primary" @click="onSubmit">登录</el-button>
            <el-button>注册</el-button>
        </el-form>

    </div>
</template>
<script>
export default {
    data() {
        return {
            ruleForm: { //数据存储
                account: '',
                password: '',
            },
            rules: {  //校验
                account: [
                    { required: true, message: '请输入账号', trigger: 'blur' },
                    { min: 6, max: 8, message: '长度在 6 到 8 个数字', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 8, message: '长度在 6 到 8 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        onSubmit() {
            this.$router.push("/home") //登录完成后的页面跳转 跳转到主页
        }
    }
}
</script>

<style>
.demo-ruleForm{
    display: fixed;
    margin: 0 auto;
    text-align: center;
    width: 400px;
    height: 400px;
    justify-content: center;
    margin-top: 250px;
    margin-left: 500px;
}
body{
    background-color: rgb(226, 172, 240);
}
.title{
    margin-top: 80px;
    margin-left: 10px;
    justify-content: center;
    font-family: Georgia, serif;
}
</style>