<template>
	<view>
		<button @click="getDailyVideo">发起get请求，获取每日视频列表</button>
		<!-- {{videoList}} -->
		<view v-for="(item,i) in videoList" :key="i">
			<view>{{item.data.content}}</view>
			<!-- <image  :src="item.data.header.icon"></image> -->
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				videoList:[]
			}
		},
		methods: {
			getDailyVideo(){
				uni.request({
					url:"https://api.apiopen.top/todayVideo",
					method:"GET",
					data:{},
					success: (res) => {
						if(res.statusCode==200){
							console.log("请求成功")
							//console.log(res)
							this.videoList=res.data.result
							console.log(res.data.result)
							console.log(this.videoList)
						}else{
							uni.showToast({
								title:"请求有误"
							})
						}
						
					},
					fail: () => {
						console.log("请求出错了")
						uni.showToast({
							title:"请求失败",
							icon:"error"
						})
					},
					complete: () => {
						
					},
					
				})
			}
		}
	}
</script>

<style>

</style>
