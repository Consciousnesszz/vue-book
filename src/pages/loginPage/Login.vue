<template>
	<div class="login">
    <h3>登录页</h3>
		<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
		  <el-form-item label="账号" prop="pass">
		    <el-input type="text" v-model="ruleForm2.pass" auto-complete="off"></el-input>
		  </el-form-item>
		  <el-form-item label="密码" prop="checkPass">
		    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
		    <el-button @click="resetForm('ruleForm2')">重置</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>
<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账户'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }

        if (this.tryLogin === 'true' && value !== 'admin') {
          callback(new Error('没有该账户'));
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: this.$store.state.account.username,
          checkPass: this.$store.state.account.password
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        
        if (this[formName].pass === 'admin') {
          if (this[formName].checkPass === 'admin') {
            var user = this.ruleForm2.pass;
            var pass = this.ruleForm2.checkPass;
            this.$store.commit('setUser', {user, pass});
            this.$store.commit('login');
          } else {
            alert('密码与账户不匹配')
          }
        } else {
          alert('没有该账户')
        }
      },
      resetForm() {
        this.$store.commit('resetUser');
        this.ruleForm2.pass = '';
        this.ruleForm2.checkPass = '';
      }
    }
  }
</script>
<style lang='sass'>
	.login {
		width: 400px;
    height: 200px;
    margin: 100px auto;
    padding: 30px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    .el-input {
      width: 250px;
    }
    h3 {
      font-weight: normal;
      text-align: center;
      margin-bottom: 30px;
    }
	}
</style>