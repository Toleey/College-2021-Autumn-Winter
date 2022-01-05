<template>
	<view>
		<view class="content0">
			<view class="content">
				<view class="box b1">1</view>
				<view class="box b2">2</view>
				<view class="box b3">3</view>
				<view class="box b4">4</view>
			</view>
<!-- 			<view class="content">
				<view class="box"></view>
				<view class="box"></view>
				<view class="box"></view>
				<view class="box"></view>
			</view> -->
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
			console.log("上一个页面传递过来的参数"+opt)
			console.log(opt)
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	// .content0{
	// 	align-content: space-between;
	// 	height: 1000rpx;
	// }
	.content{
		display: flex;
		// flex-direction:row;
		// margin-bottom: 10rpx;
		// margin-top: 10rpx;
		height: 1000rpx;
		// flex-wrap: nowrap;
		flex-flow: row nowrap;
		// justify-content: center;
		justify-content: space-around;
		// align-items: center;
		
		
		.box{
			width: 400rpx;
			height: 200rpx;
			background-color: pink;
			// margin-left: 38rpx; //算好左边的，正好最后右边的剩下相同的
			margin-left: 2rpx;
		}
		
		.b1{
			order: 1;
			// flex-grow: 1;
			flex-shrink:1 ;
			flex-basis: auto;
		}
		.b2{
			order: 2;
			// flex-grow: 2;
			flex-shrink: 3; //设成0不缩放
			flex-basis: auto;
		}
		.b3{
			order: 3;
			// flex-grow: 2;
			flex-shrink: 3;
			flex-basis: auto;
			align-self: flex-end;//覆盖align-items的属性
		}
		.b4{
			order: 4;
			// flex-grow: 1;
			flex-shrink: 1;
			flex-basis: auto;
		}
	}

</style>
