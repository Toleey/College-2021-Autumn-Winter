<template>
	<view>
		<strong>我的</strong>
		<view>{{userInfo.username}}</view>
		<button @click="toLogin()">退出</button>
	</view>
</template>

<script>
	import store from '@/store/index.js'
	import {mapMutations,mapState} from 'vuex' 
	export default {
		data() {
			return {
				user:{
					username:"",
					password:""
				}
			}
		},
		onLoad() {
			console.log(this.loginStatus)
			let user = uni.getStorageSync("userinfo")//sync同步
			if(user){
				this.login(user)
			}else{
				if(this.loginStatus){
					
				}else{
					uni.redirectTo({
						url:"../login/login"
					})
				}
			}
		},
		methods: {
			...mapMutations(['login','logout']),
			
			toLogin(){
				getApp().globalData.hasLogin=false
				
				this.logout()
				uni.removeStorage({
					key:"userinfo"
				})
				
				uni.redirectTo({
					url:"../login/login"
				})
				
			}
			
		},
		computed:{
			...mapState(["userInfo","loginStatus"]),
			
		}
	}
</script>

<style>

</style>
