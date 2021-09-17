<template>
	<view>
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
		<view>
			<!-- #ifdef H5 -->
				<text selectable="true">但我是文本，是可选的那种</text>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
				<text user-select="true">但我是文本，是可选的那种</text>
			<!-- #endif -->			
		</view>
		<view class="box">
			<view hover-class="box_1">
				我是一个大盒子
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

<style>
	.box{
		background-color: green;
		width: 100px;
	}
	.box_1{
		background-color: red;
	}

</style>
