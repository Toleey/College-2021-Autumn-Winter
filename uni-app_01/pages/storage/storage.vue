<template>
	<view>
		<view>数据缓存</view> 
		<!-- 异步 -->
		<button type="default" @click="setStorage()">存储数据</button>
		<button type="default" @click="removeStorage()">清除数据</button>
		<button type="default" @click="getStorage()">获取数据</button>
		<button type="default" @click="getStorageInfo()">获取缓存信息</button>
		<button type="default" @click="clearStorage()">清除数据</button>
										<!-- 一般真正项目不用,所有缓存都被清理了-->
		<br />
		
		<!-- 同步 -->
		<button type="default" @click="setStorageSync()">同步存储数据</button>
		<button type="default" @click="removeStorageSync()">同步清除数据</button>
		<button type="default" @click="getStorageSync()">同步获取数据</button>
		<button type="default" @click="getStorageInfoSync()">同步获取缓存信息</button>
		<button type="default" @click="clearStorageSync()">同步清除数据</button>
										<!-- 一般真正项目不用,所有缓存都被清理了-->
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
			
			
			//Sync
			setStorageSync(){
				uni.setStorageSync("id",1000)
			},
			
			removeStorageSync(){
				uni.removeStorageSync("id")
			},
		
			getStorageSync(){
				let val = uni.getStorageSync("id")
				console.log(val)
			},
			
			getStorageInfoSync(){
				let val = uni.getStorageInfoSync()
				console.log(val)
			},
			
			clearStorageSync(){
				uni.clearStorageSync("id")
			}
		
			
			
		}
	}
</script>

<style>

</style>
