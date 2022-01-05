<template>
	<view>
		
		<view>
			<text>用户名</text>
			<input type="text" v-model="user.username" placeholder="请输入用户名" />
			<text>密码</text>
			<input type="password" v-model="user.password" placeholder="请输入密码" />
			<button @click="toIndex()">登录</button>
			
		</view>
		
	</view>
</template>

<script>
	import store from '@/store/index.js'
	import {mapMutations} from 'vuex' 
	
	export default {
		data() {
			return {
				user:{
					username:"",
					password:""
				}
			};
		},
		methods:{
			...mapMutations(['login']),
			
			toIndex(){
				if(this.user.username=="r"&&this.user.password=="r"){
					
					let userInfo={}
					userInfo.username=this.user.username
					userInfo.password=this.user.password
					
					this.login(userInfo)
					getApp().globalData.hasLogin=true
					
					uni.setStorage({
						key:"userinfo",
						data:userInfo
					})
					
					uni.switchTab({
						url:"../index/index"
					})
					
				}else{
					uni.showToast({
						title:"用户名或密码错误"
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	input{
		border: 1px solid black;
	}
	button{
		margin-top: 20rpx;
	}
	

</style>
