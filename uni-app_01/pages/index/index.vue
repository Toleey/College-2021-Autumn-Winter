<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<uni-icons type="arrowdown"></uni-icons>
		
		<navigator url="../flex/flex?id=1"><!-- html中的a标签 -->
			<button>传递参数</button>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		// onInit() { //页面初始化，早于onLoad，一般不使用，用onload
		// 	console.log("页面初始化") 仅百度小程序基础库 3.260 以上支持 onInit 生命周期
		// },
		onLoad(opt) { //opt 上个页面传递过来的数据
			console.log("页面加载了"+opt)
		},
		onReady() {
			console.log("页面渲染了")
		},
		onShow() {
			console.log("页面显示了")
		},
		onHide() {
			console.log("页面隐藏了")
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
