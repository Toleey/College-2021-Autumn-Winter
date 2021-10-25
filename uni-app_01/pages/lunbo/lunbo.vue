<template>
	<view>
		<swiper indicator-dots circular class="swiper_content" autoplay="" >
			<swiper-item v-for="(item,i) in imageList" :key="i">
				<image :src="item.img"></image>
			</swiper-item>
			
			<!-- <swiper-item>
				<image src="https://www.mxbc.com/media/upload/LargeFile/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210430214158.jpg"></image>
			</swiper-item>
			<swiper-item>
				<image src="https://www.mxbc.com/media/upload/index/%E4%B8%BB%E9%A1%B5banner1920x900--2_1.jpg"></image>
			</swiper-item> -->
		</swiper>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageList:[]
			}
		},
		// onReady() {
		// 	this.getLunbo2()	
		// },
		onLoad() {
			
		},
		methods: {
			
			async getLunbo2(){ //async 异步调用
				const res = await this.$myRequest({ //await 异步调用
					url:'/api/getlunbo'
				})
				if(res.data.status==0){
					this.imageList=res.data.message
					console.log(res)
					console.log(this.imageList)
				}else{
					uni.showToast({
						title:"请求有误"
					})
				}
			},
				
			getLunbo(){
				uni.request({
					url:"http://127.0.0.1:8082/api/getlunbo",
					method:"GET",
					data:{},
					success: (res) => {
						this.imageList=res.data.message
						console.log(res)
						console.log(this.imageList)
					},
					fail: () => {
						
					},
					complete: () => {
						console.log("方法执行了")
					}
				})
			},
						
		},
	}
</script>

<style lang="scss">
	.swiper_content{
		width: 80%;
		height: 380rpx;
		margin: 0 auto;

		image{
			width: 100%;
			height: 100%;
		}
		
	}

</style>
