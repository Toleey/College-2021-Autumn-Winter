<template> <!-- 需要有且仅有一个根结点 -->
	<view>
		<view>
			这是个消息页
			<text>哈哈哈哈</text>
			<text>呵呵呵</text> <!-- 行内标签 -->
		</view>
		<view ><!-- 不是行内标签，类似于div -->
		<!-- #ifdef H5 -->
			<text selectable >哈哈哈哈1</text> <!-- selectable是true !selectable是false ="true"是字符串 -->
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
			<text user-select >哈哈哈哈2</text>
		<!-- #endif -->			
		</view>
		<view>
			<text space="ensp">今天天气    很好</text>
		</view>
		<view>
			<text space="emsp">今天天气    很好</text><!-- 每一个空格占一个中文字符 -->
		</view>
		<view>
			<text space="nbsp" style="font-size: 20px;">今天天气     很好</text>
		</view>
		<text decode="true" >1</text>
		<view hover-class="box2">
			<view hover-class="box" hover-start-time="2000" hover-stay-time="2000"  hover-stop-propagation="false">
					方块
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
		height: 100px;
		width: 100px;
		background-color: #F0AD4E;
	}
	.box2{
		height: 200px;
		width: 200px;
		background-color: red;
	}

</style>
