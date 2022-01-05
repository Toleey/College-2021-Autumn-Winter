<template>
	<view>
		<strong>登录页面</strong>
		<button @click="toMain()">点击登录</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			toMain(){
				getApp().globalData.hasLogin=true
				uni.redirectTo({
					url:"../main6/main6"
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
