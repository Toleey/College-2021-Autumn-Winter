<template>
	<view>
		<view class="title">
			<text class="title_text">text</text>
		</view>
		<view class="line"></view>
		<view class="box">
			<view class="box_words">
				<view><text id="l1">HBuilder,开发者选择的工具</text></view>
				<view><text id="l2">MUI,轻巧、漂亮的前端开源框架</text></view>
			</view>
		</view>
		<button class="al" type="default" @click="btnclick()">add line</button>
		<button class="rl" type="default" @click="btnclick2()">remove line</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			btnclick(){
				
				var altext=document.getElementById("l1");
				var rltext=document.getElementById("l2");
				var text=document.getElementsByClassName("box_words")
			},
			btnclick2(){
				var altext=document.getElementById("l1");
				var rltext=document.getElementById("l2");
				var text=document.getElementsByClassName("box_words")
			}
		}
	}
</script>

<style>
	page{
		background-color: #F4F5F6;
	}
	.title{
		/* border: 1px solid black; */
		width: 60rpx;
		margin: 0 auto;
		padding-top: 100rpx;
		color: #b1b0ba;
	
	}

	.line{
		border: 1rpx solid #E2E2E2;
		width: 100rpx;
		margin: 0 auto;
		margin-bottom: 60rpx;
	}
	.box{
		/* border: 1px solid black; */
		width: 700rpx;
		height: 300rpx;
		background-color: white;
		margin: 0 auto;
		margin-bottom: 50rpx;
		
	}
	.box_words{
		/* border: 1px solid black; */
		width: 460rpx;
		margin: 20rpx auto;
		font-family: 'Microsoft Yahei';
		padding-top: 100rpx;
	}
	.al{
		background-color: #007AFF;
		color: white;
		width: 700rpx;
	}
	.rl{
		margin-top: 10rpx;
		color: white;
		background-color: #E64340;
		width: 700rpx;
	}
</style>
