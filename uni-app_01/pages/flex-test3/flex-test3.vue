<template>
	<view>
		<view class="content">
			<view class="box1">
				<text>A</text>
			</view>
			<view class="box2">
				<text>B</text>
			</view>
			<view class="box3">
				<text>C</text>
			</view>
			<view class="box4">
				<text>D</text>
			</view>
			<view class="box5">
				<text>E</text>
			</view>
		</view>
		
		<view class="content2">
			<view class="box1">
				<image src="https://consumer.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/phones/p50-pro/images/intro/kv-back@2x.webp"></image>
			</view>
			<view class="box2">
				<image src="https://consumer.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/phones/p50-pro/images/intro/kv-back@2x.webp"></image>
			</view>
			<view class="box3">
				<image src="https://consumer.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/phones/p50-pro/images/intro/kv-back@2x.webp"></image>
			</view>
			<view class="box4">
				<image src="https://consumer.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/phones/p50-pro/images/intro/kv-back@2x.webp"></image>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.content2{
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		
		image{
			width: 340rpx;
			height: 340rpx;
		}
		
		.box1{
			width: 340rpx;
			height: 340rpx;
			
		}
		.box2{
			width: 340rpx;
			height: 340rpx;
		}
		.box3{
			width: 340rpx;
			height: 340rpx;
		}
		.box4{
			width: 340rpx;
			height: 340rpx;
		}
	}
	
	.content{
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		
		text{
			font-size: 80rpx;
		}
		.box1{
			width: 120rpx;
			height: 100rpx;
			background-color: green;
		}
		.box2{
			width: 120rpx;
			height: 100rpx;
			background-color: blue;
		}
		.box3{
			width: 120rpx;
			height: 100rpx;
			background-color: red;
		}
		.box4{
			width: 120rpx;
			height: 100rpx;
			background-color: orange;
		}
		.box5{
			width: 120rpx;
			height: 100rpx;
			background-color: black;
		}
		
	}
	

</style>
