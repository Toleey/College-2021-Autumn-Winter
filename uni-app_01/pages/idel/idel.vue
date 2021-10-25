<template>
	<view>
		<!-- #ifdef H5 -->
		<view class="onlyH5">仅在H5呈现</view>
		<!-- #endif -->
		
		<view class="onlyH52">仅在H5呈现2</view>
		
		<!-- #ifdef MP-WEIXIN -->
		<view class="onlyWechat">仅在Wechat呈现</view>
		<!-- #endif -->
		
		<!-- #ifndef MP-WEIXIN -->
		<view class="onlyWechat">仅不出现在Wechat</view>
		<!-- #endif -->
		
		<button type="default" @click="btnclick()">H5点击</button>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad() {
			
			// #ifdef H5
			console.log("仅在H5中打印")
			// #endif
			
			// #ifdef MP-WEIXIN
			console.log("仅在Wechat中打印")
			// #endif
			
		},
		methods:{
			
			// #ifdef H5
			btnclick(){
				console.log("按钮被点击了")
			}
			// #endif
			
			// #ifdef MP-WEIXIN
			
			// #endif
		}
	}
</script>

<style lang="scss">
	
	.onlyH5{
		width: 300rpx;
		height: 300rpx;
		background-color: #8A6DE9;
	}
	.onlyH52{
		width: 300rpx;
		height: 300rpx;
		/* #ifdef H5 */
		background-color: red;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		background-color: orange;
		/* #endif */
	}
	.onlyWechat{
		width: 300rpx;
		height: 300rpx;
		background-color: #2c9ae8;
	}

</style>
