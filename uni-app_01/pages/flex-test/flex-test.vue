<template>
	<view>
		<view class="content">
			<view class="box1"></view>
			<view class="box2">
				<view class="text">description</view>
				<view class="text">description</view>
				<view class="text">description</view>
				<view class="text">description</view>
			</view>
			<view class="box3">
				<button class="box3_btn" type="default">
					<text>确认</text>
				</button>
			</view>
			<view class="box4">
				<button class="box4_btn" type="default">
					<text>取消</text>
				</button>
			</view>
		</view>
		
		<view class="content2">
			<view class="c2_box1"></view>
			<view class="c2_box2">
				<view class="c2_box2_1">
					<text class="c2_box2_1_text">迟到</text>
				</view>
				<view class="c2_box2_2">
					<text class="c2_box2_2_text">缺勤</text>
				</view>
			</view>
			<view class="c2_box3">
				<view class="c2_box3_1">
					<text class="c2_box3_1_text">早退</text>
				</view>
				<view class="c2_box3_2">
					<text class="c2_box3_2_text">正常</text>
				</view>
			</view>
		</view>
		
		<view class="content3">
			<view class="c3_box1">
				<view class="c3_box1_1">
					<image src="https://home.baidu.com/Public/img/logo.png?v=15"></image>
				</view>
				<view class="c3_box1_2">
					<image src="https://home.baidu.com/Public/img/logo.png?v=15"></image>
				</view>
				<view class="c3_box1_3">
					<image src="https://home.baidu.com/Public/img/logo.png?v=15"></image>
				</view>
			</view>
			<view class="c3_box2">
				<view class="c3_box2_1">
					<image src="https://home.baidu.com/Public/img/logo.png?v=15"></image>
				</view>
				<view class="c3_box2_2">
					<image src="https://home.baidu.com/Public/img/logo.png?v=15"></image>
				</view>
				<view class="c3_box2_3">
					<image src="https://home.baidu.com/Public/img/logo.png?v=15"></image>
				</view>
			</view>
			<view class="c3_box3">
				<view class="c3_box3_1">
					<image src="https://home.baidu.com/Public/img/logo.png?v=15"></image>
				</view>
				<view class="c3_box3_2"></view>
				<view class="c3_box3_3"></view>
			</view>
			<view class="c3_box4">
				<view class="c3_box4_1"></view>
				<view class="c3_box4_2"></view>
				<view class="c3_box4_3"></view>
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
	.content3{
		width: 742rpx;
		height: 800rpx;
		margin: 0 auto;
		display: flex;
		flex-flow: column nowrap;
		
		image{
			height: 246rpx;
			width: 246rpx;
		}
		
		
		.c3_box1{
			width: 742rpx;
			display: flex;
			flex-flow: row nowrap;
			align-items: center;
			justify-content: center;
				
			.c3_box1_1{
				border: 1rpx solid red;
				height: 246rpx;
				width: 246rpx;
				
			}
			.c3_box1_2{
				border: 1rpx solid red;
				border-left: 0rpx;
				height: 246rpx;
				width: 246rpx;
			}
			.c3_box1_3{
				border: 1rpx solid red;
				border-left: 0rpx;
				height: 246rpx;
				width: 246rpx;
			}
		}
		.c3_box2{
			width: 742rpx;
			display: flex;
			flex-flow: row nowrap;
			align-items: center;
			justify-content: center;
			.c3_box2_1{
				border: 1rpx solid red;
				border-top: 0rpx;
				height: 246rpx;
				width: 246rpx;
			}
			.c3_box2_2{
				border: 1rpx solid red;
				border-left: 0rpx;
				border-top: 0rpx;
				height: 246rpx;
				width: 246rpx;
			}
			.c3_box2_3{
				border: 1rpx solid red;
				border-left: 0rpx;
				border-top: 0rpx;
				height: 246rpx;
				width: 246rpx;
			}
		}
		.c3_box3{
			width: 742rpx;
			display: flex;
			flex-flow: row nowrap;
			align-items: center;
			justify-content: center;
				
			.c3_box3_1{
				border: 1rpx solid red;
				border-top: 0rpx;
				height: 246rpx;
				width: 246rpx;
			}
			.c3_box3_2{
				border-left: 0rpx;
				border-top: 0rpx;
				height: 246rpx;
				width: 246rpx;
				background-color: #C6EFE9;
			}
			.c3_box3_3{
				border-left: 0rpx;
				border-top: 0rpx;
				height: 246rpx;
				width: 246rpx;
				background-color: #C6EFE9;
			}
		}
		.c3_box4{
			width: 742rpx;
			display: flex;
			flex-flow: row nowrap;
			align-items: center;
			justify-content: center;
				
			.c3_box4_1{
				border-top: 0rpx;
				height: 246rpx;
				width: 246rpx;
				background-color: #C6EFE9;
			}
			.c3_box4_2{
				border-left: 0rpx;
				border-top: 0rpx;
				height: 246rpx;
				width: 246rpx;
				background-color: #C6EFE9;
			}
			.c3_box4_3{
				border-left: 0rpx;
				border-top: 0rpx;
				height: 246rpx;
				width: 246rpx;
				background-color: #C6EFE9;
			}
		}
		
		
	}
	
	.content2{
		// border: 1px solid black;
		width: 740rpx;
		height: 400rpx;
		display: flex;
		flex-direction: row;
		margin: 10rpx 5rpx ;
		
		.c2_box1{
			// border: 1px solid black;
			width: 230rpx;
			height: 373.3rpx;
			margin-top: 10rpx;
			margin-left: 12.5rpx;
			margin-right: 12.5rpx;
			background-color: #EBEBEB;
		}
		.c2_box2{
			// border: 1px solid black;
			width: 230rpx;
			height: 400rpx;
			margin-right: 12.5rpx;
			display: flex;
			flex-direction: column;
			
			
			.c2_box2_1{
				background-color: #EBEBEB;
				height: 180rpx;
				width: 230rpx;
				margin-top: 13.3rpx;
				justify-content: center;
				align-items: center;
				display: flex;
				
				.c2_box2_1_text{
					justify-content: center;
					align-items: center;
					
				}
				
			}
			.c2_box2_2{
				background-color: #EBEBEB;
				margin-top: 13.3rpx;
				height: 180rpx;
				justify-content: center;
				align-items: center;
				display: flex;
				
				.c2_box2_2_text{
					justify-content: center;
					align-items: center;
					
				}
			}
		}
		.c2_box3{
			// border: 1px solid black;
			width: 230rpx;
			height: 400rpx;
			margin-right: 12.5rpx;
			display: flex;
			flex-direction: column;
			
			.c2_box3_1{
				background-color: #EBEBEB;
				height: 180rpx;
				margin-top: 13.3rpx;
				justify-content: center;
				align-items: center;
				display: flex;
				
				.c2_box3_1_text{
					justify-content: center;
					align-items: center;
				}
			}
			.c2_box3_2{
				background-color: #EBEBEB;
				margin-top: 13.3rpx;
				height: 180rpx;
				justify-content: center;
				align-items: center;
				display: flex;
				
				.c2_box3_2_text{
					justify-content: center;
					align-items: center;
				}
			}
		}
	}
	
	.content{
		display: flex;
		border: 1px solid #E0DFE0;
		height: 200rpx;
		flex-flow: no nowrap;
		justify-content: space-between;
		align-items: center;
		
		
		
		.box1{
			width: 187.5rpx;
			height: 187.5rpx;
			background-color: #B5B5A9;
		
		}
		
		.box2{
			width: 187.5rpx;
			height: 187.5rpx;
		}
		.box3{
			// display: flex;
			// align-items: center;
			.box3_btn{
				margin-top:80rpx ;
				color: white;
				background-color: #0DD5F7;
				height: 80rpx;
				
			}
			
		}
		.box4{
			// display: flex;
			// align-items: center;
			.box4_btn{
				margin-top:80rpx ;
				color: white;
				background-color: #0DD5F7;
				height: 80rpx;
			}
			
		}
	}
	
	

</style>
