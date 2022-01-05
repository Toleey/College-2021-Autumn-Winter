<template>
	<view>
		
		<view>用户名</view>
		<input type="text" v-model="name"  placeholder="输入用户名"/>
		<view>密码</view>
		<input type="password" v-model="password"  placeholder="输入密码"/>
		
		<view>
			<checkbox :checked="check" @click="check=!check"></checkbox>
			<text>已经阅读并同意作为我儿子的协议</text>
		</view>
		
		<button type="default" :disabled="isBtnDisabled" @click="login()">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:"",
				password:"",
				check:false,
				isSubmit:false,
				isBtnDisabled:false,
				rules:{
					name:[
							{
								rule:/^[a-zA-Z0-9_-]{4,16}$/,
								msg:"用户名不规范"
							},
						],
					password:[
							{
								rule: /(\d){2}/,
								msg:"密码输入不规范"
							}
					]
				}
			};
		},
		methods:{
			//页面验证方法
			volidate(key){
				let check=true
				this.rules[key].forEach(
					(v)=>{					//v代表每一项
						if(!(v.rule).test(this[key])){
							uni.showToast({
								title:v.msg,
							})
								check=false
							return false//从这里返回是指结束遍历
						}
					}
				)
				return check
			},
			
			//跟服务器端交互，避免重复提交
			//方式一、添加字段标记提交状态
			//方式二、提交后将按钮设置为不可点击状态
			//提交后
			login(){//获取输入的用户名，密码
				// if(this.isSubmit) return
				// this.isSubmit=true
				
				
				if(!this.check){
					uni.showToast({
						title:"需要同意该协议才可以登录",
						icon:"error"
					})
				}
				//验证用户名
				if(!this.volidate('name')) return //用户名没通过验证
				if(!this.volidate('password')) return //密码没验证通过
				
				//程序执行到这里，就是验证通过了
				this.isBtnDisabled=true;
				//去服务器端验证用户名密码
				uni.showLoading({
					title:"登录中……",
					mask:true
				})
				
				//数据库验证成功
				setTimeout(()=>{
					uni.hideLoading()
					// this.isSubmit=false
					this.isBtnDisabled=false
					uni.navigateBack({
						delta:1 //返回登录前的那个页面
					})
				},6000)
				
				
				// this.isSubmit=false
				// this.isBtnDisabled=false
					
			},
			
			
			toLogin(){
				console.log(this.password)
				this.rules.name.forEach(
					(v)=>{					//v代表每一项
						if(!(v.rule).test(this.name)){
							uni.showToast({
								title:v.msg,
							})
						}
					}
				)
				
				this.rules.password.forEach(
					(v)=>{
						if(!(v.rule).test(this.password)){
							uni.showToast({
								title:v.msg,
							})
						}
					//v代表每一项
					}
				)
				
				// if(/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/.test(this.password)){
				// 	alert("输的很对")
				// }else{
				// 	uni.showToast({
				// 		title:"用户名不规范"
				// 	})
				// }
				
				// if(/^[a-zA-Z0-9_-]{4,16}$/.test(this.name)){
				// 	alert("输的很对")
				// }else{
				// 	uni.showToast({
				// 		title:"密码不规范"
				// 	})
				// }
				
				
			}
		}
	}
</script>

<style lang="scss">

	view{
		// border: 1px solid orange;
	}
	input{
		
		border: 1px solid orange;
		
	}

</style>
