<template>
	<view>
		<button type="default" @click="getStorage()">获取数据</button>
		<button type="default" @click="removeStorage()">清除数据</button>
		<button type="default" @click="getStorageInfo()">获取缓存信息</button>
		<button type="default" @click="clearStorage()">清除数据</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			removeStorage(){
				uni.removeStorage({
					key:"person",
					success() {
						console.log("清理成功了！！！！")
					}
				})
			},
			
			getStorage(){
				uni.getStorage({
					key:"person",
					success(res) {
						console.log(res)
					}
				})
			},
			
			getStorageInfo(){
				uni.getStorageInfo({
					success(res) {
						console.log(res)
					}
				})
			},
			
			clearStorage(){
				uni.clearStorage()
			},
			
		}
	}
</script>

<style>

</style>
