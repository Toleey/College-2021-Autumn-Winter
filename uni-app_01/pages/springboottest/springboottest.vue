<template>
	<view>
		<button type="default" @click="getUserInfo()">获取所有用户信息</button>
		<button type="default" @click="getUserInfoPassword()">获取指定用户名的密码</button>
		<button type="default" @click="login()">登陆，用户名和密码</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			async getUserInfo(){
				const res = await this.$myRequest({
					url:'/userInfo/getUserInfo'
				})
				console.log(res)
			},
			
			async getUserInfoPassword(){
				const res = await this.$myRequest({
					url:'/userInfo/getUserInfoPassword?username=admin'
				})
				console.log(res)
			},
			
			async login(){
				uni.request({
					url:"http://127.0.0.1:8082/userInfo/login",
					method:"POST",
					header: {
						'content-type':'application/x-www-form-urlencoded' 
					},
					data:{
						uname:"admin",
						upwd:"admin",
						},
					success: (res) => {
						console.log(res)
					},
					fail: (res) => {
						console.log(res)
					},
					complete: () => {
						console.log("完成了")
					}
				})
				
			}
		}
	}
</script>

<style>

</style>
