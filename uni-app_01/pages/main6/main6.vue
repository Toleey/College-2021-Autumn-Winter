<template>
	<view>
		<strong>
			这是登录成功后的主页面，欢迎你！
		</strong>
		
		<button @click="toLogout()">你是不是想退出了？！</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad() {
			this.checkLogin()
		},
		methods:{
			checkLogin(){
				
				console.log(getApp().globalData.hasLogin)
				if(!getApp().globalData.hasLogin){ //!fasle=true
					uni.redirectTo({
						url:"../login6/login6"
					})
				}else{
					console.log("登录成功")
				}
			},
			toLogout(){
				getApp().globalData.hasLogin=false
				console.log(getApp().globalData.hasLogin)
				uni.redirectTo({
					url:"../login6/login6"
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
