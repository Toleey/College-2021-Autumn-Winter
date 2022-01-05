<template>
	<view class="bodybox">
		<view class="content">
			
			<view class="upbox">
				<view class="upbox_words">
					<view class="upbox_words01">布艺软装</view>
					<view class="upbox_words02">各种风格软装装点你的家</view>
				</view>
			</view>
			
			<view class="itembox">
					<view class="item" v-for="(item,i) in itemList" :key="i" @click="itemClick(item.id)">
						<!-- <navigator :url="'/pages/item/item?id='+item.id"> -->
						<image class="item_img" :src="item.imgurl"></image>
						<view class="item_title">{{item.title}}</view>
						<view class="item_price">{{item.price}}</view>
						<!-- </navigator> -->
					</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemList:[
					{id:1,imgurl:"https://t7.baidu.com/it/u=4005341374,2965405433&fm=193&f=GIF",title:"日式和风懒人沙发",price:"¥599"},
					{id:2,imgurl:"https://img2.baidu.com/it/u=1841333958,4028142123&fm=26&fmt=auto",title:"典雅美式刺绣抱枕",price:"¥59"},
					{id:3,imgurl:"https://img0.baidu.com/it/u=1292112176,2911856685&fm=253&fmt=auto&app=120&f=JPEG?w=480&h=480",title:"升级款记忆棉护椎腰靠",price:"¥79"},
					{id:4,imgurl:"https://img2.baidu.com/it/u=3212113770,2818738861&fm=26&fmt=auto",title:"160*230羊毛手工地毯",price:"¥969"},
					{id:5,imgurl:"https://img2.baidu.com/it/u=3212113770,2818738861&fm=26&fmt=auto",title:"160*230羊毛手工地毯",price:"¥969"},
					{id:6,imgurl:"https://img2.baidu.com/it/u=3212113770,2818738861&fm=26&fmt=auto",title:"160*230羊毛手工地毯",price:"¥969"},
				]
				
			}
		},
		onLoad() {

		},
		methods: {
			itemClick(id){ 
				console.log(id)
				uni.navigateTo({
					url:"/pages/item/item?id="+id,
				})
			},
		}
	}
</script>

<style lang="scss">
	.bodybox{
		width: 750rpx;
		background-color: #F9F9F9;
		
		.content{
			// border: 1px solid black;
			width: 720rpx;
			// height: 1000rpx;
			margin: 0 auto;
			
			.upbox{
				// border: 1px solid black;
				width: 720rpx;
				height: 200rpx;
				// background-color: #F9F9F9;
				display: flex;
				justify-content: center;
				align-items: center;
				
				.upbox_words{
					// border: 1px solid black;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-flow: column nowrap; 
					
					.upbox_words01{
						color: #626164;
						font-size: 40rpx;
					}
					.upbox_words02{
						color: #BDBEC8;
					}
				}
			}
			
			.itembox{
				// border: 1px solid black;
				width: 710rpx;
				// height: 8000rpx;
				padding-bottom: 10rpx;
				margin: 0 auto;
				
				display: flex;
				flex-flow: row wrap;
				justify-content: space-between;
				align-content: flex-start;
				
				
				.item{
					// border: 1px solid black;
					margin-top: 10rpx;
					width: 350rpx;
					height: 400rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-flow: column wrap; 
					background-color: #FFFFFF;
					
					.item_img{
						// border: 1px solid black;
						width: 250rpx;
						height: 250rpx;
					}
					.item_title{
						color: #57585F;
					}
					.item_price{
						color: #D7BF9A;
					}
				}
			}
			
		}
		
	}
	
	
</style>
