<template>
	<view> <!-- 微信小程序不是别div，h5可以用 -->
		<view>
			<text>信息页</text>
			<text>信息页</text>
		</view>
		<view>
			<text>信息页</text>
		</view>
		<view>
			<text space="emsp">信 息页</text>
		</view>
		<view>
			<text space="emsp" style="font-size: 20px;">信 息页</text>
		</view>
		
		<view>
			<text>我是文本，是不可选的那种</text>
		</view>
		<view class="animate__animated animate__flip">
			<!-- #ifdef H5 -->
				<text selectable="true">但我是文本，是可选的那种</text>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
				<text user-select="true">但我是文本，是可选的那种</text>
			<!-- #endif -->			
		</view>
		<view class="box animate__animated animate__backInDown">
			<view hover-class="box_1">
				我是一个大盒子
			</view>
		</view>
		
		<view class="box_3 animate__animated animate__bounceIn">
			rpx学习
		</view>
		
		<view id="a"></view>
		
		<view class="cube animate__animated animate__bounceIn">
			<view class="cube1"></view>
			<view class="cube2"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(opt) {
			console.log(opt)
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.box{
		background-color: green;
		width: 100px;
	}
	.box_1{
		background-color: red;
	}
	.box_3{
		
		background-color: #4CD964;  /*rpx自适应，会根据屏幕变大变小*/
		/* width: 750rpx;	 /*不管多大，默认屏幕750，全屏*/
		/*height: 750rpx; */
		/* width: 375rpx;  /*屏幕宽度占一半，不管多大都是占一半*/
		/*height: 375rpx; */
		width: 225rpx; /*占三分之一*/
		height: 225rpx;
		font-size: 30rpx;
	}
	#a{
		width: 750rpx;
		height: 750rpx;
		background-color: blue;
	}
	// .cube{
	// 	/* border: 1px solid;
	// 	width: 748rpx;
	// 	height: 375rpx; */
	// 	display:flex;
	// 	justify-content:space-around;
	// }
	// .cube1{
	// 	background-color: orange;
	// 	width: 350rpx;
	// 	height: 350rpx;
	// }
	// .cube2{
	// 	background-color: green;
	// 	width: 350rpx;
	// 	height: 350rpx;
	// }
	
	
	
	view{ 	/* 元素选择器 */
		background-color: pink;
	}
	
	
	page{   
		/* 没有body节点,对应的是page */
		background-color: brown;
		.cube{ /*最外层不用非得写page，最大的样式要写到外面*/
		/* border: 1px solid;
		width: 748rpx;
		height: 375rpx; */
		display:flex;
		justify-content:space-around;
		
		.cube1{
			background-color: orange;
			width: 350rpx;
			height: 350rpx;
		}
		.cube2{
			background-color: green;
			width: 350rpx;
			height: 350rpx;
		}
	}
	}
</style>
