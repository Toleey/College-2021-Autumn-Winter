<template>
	<view>
		<h3>首页</h3>
		<text>欢迎你：</text>
		<text>{{userInfo.username}}</text>
	</view>
</template>

<script>
	import store from '@/store/index.js'//必须叫index.js
	import {mapState,mapMutations} from 'vuex'
	
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
			
			if(!getApp().globalData.hasLogin){
				
			}
			
			
			//从本地缓存中获取用户信息
			//如果获取到用户信息，
			//更新登录状态 反之去判断vuex中的登录状态再操作
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
			...mapMutations(['login']),
		},
		computed:{
			...mapState(["userInfo","loginStatus"]),
			
		}
	}
</script>

<style lang="scss">
	
</style>
