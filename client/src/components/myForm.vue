<template>
	<div class="myForm col-md-9 form-horizontal">
	<validator name="validation" :groups="['passwordGroup']">
			<div v-if="$validation.username.touched && $validation.username.required" class='col-md-offset-2'>
				请输入用户名
			</div>
			<div v-if="$validation.username.touched && $validation.username.minlength" class='col-md-offset-2'>
				用户名至少要输入6位字符
			</div>
			<div v-if="$validation.username.touched && $validation.username.maxlength" class='col-md-offset-2'>
				用户名至多只能输入10位字符
			</div>
			<div v-if="$validation.username.touched && $validation.username.required" class='col-md-offset-2'>
				用户名至多只能输入10位字符
			</div>

			<!-- 密码提示 -->
			<div v-if="$validation.password.touched && $validation.password.minlength" class='col-md-offset-2'>
				密码至少要输入6位字符
			</div>
			<div v-if="$validation.password.touched && $validation.password.maxlength" class='col-md-offset-2'>
				密码至多只能输入10位字符
			</div>
			<div v-if="$validation.password.touched && $validation.password.required" class='col-md-offset-2'>
				请输入密码
			</div>
			<!-- 重复密码提示 -->
			<div v-if="$validation.repassword.touched && $validation.repassword.minlength" class='col-md-offset-2'>
				重复密码至少要输入6位字符
			</div>
			<div v-if="$validation.repassword.touched && $validation.repassword.maxlength" class='col-md-offset-2'>
				重复密码至多只能输入10位字符
			</div>
			<div v-if="$validation.repassword.touched && $validation.repassword.required" class='col-md-offset-2'>
				请输入重复密码
			</div>
		<form v-validate-class>
			<div class="form-group">
				<label for="" class="col-md-2 control-label">用户名</label>
				<div class="col-md-10">
					<input type="text" class="form-control" name="username" v-validate:username="usernameRules" placeholder="请输入名字">
				</div>
			</div>
			<div class="form-group">
				<label for="" class="col-md-2 control-label">密码</label>
				<div class="col-md-10">
					<input type="password" name="password" group="passwordGroup" placeholder="请输入密码" v-validate:password="passwordRules" class='form-control'>
				</div>
			</div>
			<div class="form-group">
				<label for="" class="col-md-2 control-label">确认密码</label>
				<div class="col-md-10">
				<input type="password" name="repeatpwd" group="passwordGroup" placeholder="请却确认密码" v-validate:repassword="rePasswordRules" class='form-control'>
				</div>
			</div>
			<div class="form-control" v-if="$validation.passwordGroup.dirty && $validation.passwordGroup.invalid">
				两次输入的密码不一致
			</div>
			<div class="form-group">
				<label for="" class="col-md-2 control-label"></label>
				<div class="col-md-10">
					<input type="button" class="btn btn-success" value="登录">
					<input type="button" @click="resetValidate" class="btn btn-info" value="重置表单">
				</div>
			</div>
			<div class="col-md-offset-2 col-md-10">
				<div class="kj">
					<input type="checkbox" value="apple" v-validate:fruits="{
						required:{rule:true,message:requireErrorMsg},
						minlength :{rule:1,message:minlengthErrorMsg},
						maxlength :{rule:2,message:maxlengthErrorMsg},
					}">
					<label>apple</label>
					<input type="checkbox" value="orange" value="orange" v-validate:fruits>
					<label>orange</label>
					<input type="checkbox" value="banana" value="banana" v-validate:fruits>
					<label>banana</label>
					<ul>
						<li v-for="msg in $validation.fruits.errors">
							{{msg|json}}
						</li>
					</ul>
				</div>
				<div class="kj" v-validate-class>
					<input type="radio"
					 name="radiaApple"
					 value="apple"
					 :classes="{valid:'valid-radio',invalid:'invalid-radio'}"
					 v-validate:radiofruits="{
						required:{rule:true,message:requireRaduioErrorMsg}
					}">
					<label>apple</label>
					<input type="radio" name="radiaApple" value="orange" v-validate:radiofruits>
					<label>orange</label>
					<input type="radio" name="radiaApple" value="orange" v-validate:radiofruits>
					<label>banana</label>
					<ul>
						<li v-for="msg in $validation.radiofruits.errors">
							{{msg|json}}
						</li>
					</ul>
				</div>
			</div>
			<div class="col-md-10 col-md-offset-2">
				
				
			</div>
			<div class="col-md-offset-2">
				{{$validation|json}}
			</div>
		</form>
	</validator>
	</div>
</template>

<script>
import Vue from 'vue'
import VueValidator from 'vue-validator'

Vue.use(VueValidator)

export default {

  name: 'myForm',

  data () {
    return {
    	usernameRules:{
    		maxlength:10,
    		minlength:6,
    		required:true
    	},
    	passwordRules:{
    		maxlength:10,
    		minlength:6,
    		required:true
    	},
    	rePasswordRules:{
    		maxlength:10,
    		minlength:6,
    		required:true
    	}
    };
  },
  computed:{
  	requireErrorMsg:function(){
  		return '请选择喜欢的水果'
  	},
  	minlengthErrorMsg:function(){
  		return '至少选择1个水果'
  	},
  	maxlengthErrorMsg:function(){
  		return '最多选择两个水果'
  	},
  	requireRaduioErrorMsg:function(){
  		return '用单选选择一种水果'
  	}
  },
  methods:{
  	resetValidate:function(){
  		this.$resetValidation()
  	}
  }
};
</script>

<style lang="css" scoped>
.kj{
	border: 1px solid #eee;
	border-radius: 4px;
	margin-top: 15px;
	padding: 5px;
}
</style>