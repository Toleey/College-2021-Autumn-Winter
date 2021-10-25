<template>
	<view>
		<view>
			<input placeholder=""></input>
			<text>用户名:</text>
			<input type="text" placeholder="请输入手机或邮箱" v-model="uname" />
		</view>
		<view>
			<text>密码：</text>
			<input type="text" password placeholder="请输入密码" v-model="upwd" />
		</view>
		<view>
			<button @click="login">确认</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				uname:"",
				upwd:"",
				
			}
		},
		methods: {
			login(){
				//获取输入的用户名和密码
				console.log("用户名："+this.uname+"密码："+this.upwd)
			}
		}
	}
</script>

<style>

</style>
