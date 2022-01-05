<template>
	<view>
		<button type="default" @click="setStorage()">存储数据</button>
		<button type="default" @click="toS3()">去B页面</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
			setStorage(){
				uni.setStorage({
					key:"person",
					data:{"person":"zhangsan","age":18},
					success() {
						console.log("存储成功")
					}
				})
				
			},
			toS3(){
				uni.redirectTo({
					url:"../storage3/storage3"
				})
			}
			
		}
	}
</script>

<style>

</style>
