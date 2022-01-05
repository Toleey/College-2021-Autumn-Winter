<template>
	<view>
		<view class="down_box">
			<view class="down_box01" v-for="(item,i) in items" :key="item.id" @click="toDetail(item.id)">
					<view class="image_box">
						<image class="image_box_image" :src="item.img_url"></image>
					</view>
					<view class="price_box">
						<text class="price_box_text_now">¥&nbsp;{{item.sell_price}}</text>
						<text class="price_box_text_old">¥&nbsp;{{item.market_price}}</text>
					</view>
					<view class="des_box">
						<view class="des_box_des">
							{{item.title}}
						</view>
					</view>
				</view>
			</view>
		
	</view>
</template>

<script>
	export default {
		name:"items_list",
		data() {
			return {
				
			};
		},
		props:['items'],
		methods:{
			toDetail(id){
				// uni.navigateTo({
				// 	url:"../../pages/detail/detail?id="+id
				// })
				this.$emit("toDetail",id)
			}
		}
	}
</script>

<style lang="scss">
	
	.down_box{
		margin-top: 5rpx;
		// border: 1px solid black;
		width: 730rpx;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		padding-left: 10rpx;
		padding-right: 10rpx;
		}

	.down_box01{
		background-color: white;
		//border: 1px solid black;
		width: 350rpx;
		height: 550rpx;
		margin: 15rpx 3rpx 10rpx 3rpx;
		
		.image_box{
			margin: 15rpx auto;
			// border: 1px solid black;
			width: 300rpx;
			height: 300rpx;
			
			.image_box_image{
				width: 300rpx;
				height: 300rpx;
			}
			
		}
		
		.price_box{
			// border: 1px solid black;
			width: 360rpx;
			height: 60rpx;
			
			.price_box_text_now{
				color: #A72D32;
				font-size: 40rpx;
				margin-left: 20rpx;
			}
			.price_box_text_old{
				text-decoration: line-through;
				color: #C3C4C3;
				font-size: 34rpx;
				margin-left: 20rpx;
			}
			
		}
		
		.des_box{
			// border: 1px solid black;
			width: 360rpx;
			height: 162rpx;
			
			
			.des_box_des{
				// border: 1px solid black;
				text-overflow: ellipsis;
				overflow: hidden;
				width: 320rpx;
				height: 162rpx;
				color: #4D4E4E;
				font-size: 35rpx;
				padding-left: 20rpx;
				padding-right: 20rpx;
			}
			
		}
		
	}
	
</style>
