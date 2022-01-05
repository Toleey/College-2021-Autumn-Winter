<template>
	<view class="content">
		
		<view class="item">
			<image class="item_img" :src="iteminfo.imgurl"></image>
			<view class="item_des">
				<view class="item_title">{{iteminfo.title}}</view>
				<view class="item_detail">优质和风纯棉，和风居家新体验</view>
				<view class="item_price">
					<strike class="oprice">原价：{{iteminfo.price}}</strike>
					<text class="cprice">现价：{{iteminfo.price}}</text>
				</view>
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
		onLoad(o) {
			console.log(o)
			this.id=o.id
			this.getSingleItem()
		},
		methods: {
			
			getSingleItem(){
				let itemlist=[
					{id:1,imgurl:"https://t7.baidu.com/it/u=4005341374,2965405433&fm=193&f=GIF",title:"日式和风懒人沙发",price:"¥599"},
					{id:2,imgurl:"https://img2.baidu.com/it/u=1841333958,4028142123&fm=26&fmt=auto",title:"典雅美式刺绣抱枕",price:"¥59"},
					{id:3,imgurl:"https://img0.baidu.com/it/u=1292112176,2911856685&fm=253&fmt=auto&app=120&f=JPEG?w=480&h=480",title:"升级款记忆棉护椎腰靠",price:"¥79"},
					{id:4,imgurl:"https://img2.baidu.com/it/u=3212113770,2818738861&fm=26&fmt=auto",title:"160*230羊毛手工地毯",price:"¥969"},
					{id:5,imgurl:"https://img2.baidu.com/it/u=3212113770,2818738861&fm=26&fmt=auto",title:"160*230羊毛手工地毯",price:"¥969"},
					{id:6,imgurl:"https://img2.baidu.com/it/u=3212113770,2818738861&fm=26&fmt=auto",title:"160*230羊毛手工地毯",price:"¥969"},
				]
				
				this.iteminfo = itemlist.find(o=>o.id==this.id) //lambda表达式
			}
		}
	}
</script>

<style lang="scss">
	
	.content{
		// border: 1px solid black;
		width: 720rpx;
		height: 1000rpx;
		margin: 0 auto;
		display: flex;
		flex-flow: column wrap;
		justify-content: flex-start;
		
		
		.item{
			
			.item_img{
				// border: 1px solid black;
				width: 720rpx;
				height: 720rpx;
			}
			
			.item_des{
				// border: 1px solid black;
				padding-left: 10rpx;
				padding-right: 10rpx;
				
				.item_title{
					// border: 1px solid black;
					background-color: #F4F4F4;
					color: #363534;
					font-weight: 900;
					font-size: 40rpx;
					height: 80rpx;
					display: flex;
					justify-content: flex-start;
					align-items: center;
				}
				.item_detail{
					// border: 1px solid black;
					color: #D3C5BB;
					height: 50rpx;
					font-size: 20rpx;
					display: flex;
					justify-content: flex-start;
					align-items: center;
				}
				.item_price{
					// border: 1px solid black;
					height: 50rpx;
					font-size: 20rpx;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					
					.oprice{
						color: #626164;
					}
					.cprice{
						color: #E3D4B1;
					}
					
				}
				
			}
			
		}
		
		
		
	}

</style>
