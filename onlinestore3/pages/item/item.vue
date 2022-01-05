<template>
	<view>
		
		<view class="carousel">
			<swiper class="carousel-img" :indicator-dots="true" :circular="true" :autoplay="true">
				<swiper-item v-for="(img,i) in carouselList" :key="i">
					<image :src="img.url"></image>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="item-info" v-for="phone in goodList">
		
			<view class="item-title">
				{{phone.name}}
			</view>
			
			<view class="item-desc">
				{{phone.desc}}
			</view>
			
			<view class="item-price">
				<text class="ip-sign">¥</text>
				<text class="ip-num">{{phone.price}}</text>
			</view>
			
			<scroll-view class="item-configBox" scroll-x="true"  >
				<view class="item-configBox-sub">
					<view class="item-config">
						<view class="ic-iconfont">
							<span class="iconfont icon-xingzhuang"></span>
						</view>
						<view class="ic-name">
							CPU
						</view>
						<view class="ic-desc">
							{{phone.cpu}}
						</view>
					</view>
				</view>
			</scroll-view>
			
			<view class="item-choose" @click="openPopUp()">
				<view class="ich-default">已选</view>
				<view class="ich-content">
					<text v-for="(info,t) in phone.attrs" :key="t">
						{{info.list[info.selected].name+" "}}
					</text>
				</view>
			</view>
			
		</view>
			
		<uni-popup ref="popup" type="bottom">
			<view class="popupBox" v-for="(item,i) in goodList" :key="i">
				
				<view class="pb-color">颜色</view>
				<view class="pb-color-content" v-for="(info,t) in item.attrs" :key="t">
					<view></view>
					<!-- <view>{{color.attrs[0].list[c].name}}</view> -->
					<!-- <view>{{color.attrs[0].list[c].name}}</view> -->
					<!-- <view class="pcc01">远峰蓝色</view>
					<view class="pcc02">深空灰色</view>
					<view class="pcc03">金色</view> -->
					<!-- <view class="pcc03">银色</view> -->
				</view>
				
				<view class="pb-capacity">容量</view>
				<view class="pb-capacity-content">
					<view class="pcco01">128GB</view>
					<view class="pcco02">256GB</view>
				</view>
				
				<view class="pb-plan">套餐</view>
				<view class="pb-plan-content">
					<view class="ppc01" >标配</view>
					<view class="ppc02">套餐一</view>
					<view class="ppc03">套餐二</view>
				</view>
				
				<view class="line"></view>
				
				<view class="pb-buyNum">
					<view class="pb-buyNum-title">购买数量</view>
					<view class="numBox">
						<view class="numBoxMinus" @click="toMinus">-</view>
						<view class="numBoxNum">{{buyCount}}</view>
						<view class="numBoxPlus" @click="toAdd">+</view>
					</view>
				</view>
				
			</view>
		</uni-popup>
			
		<uni-goods-nav class="item-operate" :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
	
	</view>
</template>

<script>
	import store from '@/store/index.js'//必须叫index.js
	import {mapState,mapMutations,mapGetters} from 'vuex'
	
	export default {
		data() {
			return {
				goodList:[
					{	check:false,
						id:1,
						name:"iPhone 13 Pro 系列",
						desc:"真tm的好用",
						cpu:"A15",
						attrs:[
							
							{	//颜色属性
								title:"颜色",
								selected:0,
								list:[
									{name:"远峰蓝色"},
									{name:"深空灰色"},
									{name:"金色"},
									{name:"银色"},
								]
							},
							{	//内容容量
								title:"容量",
								selected:0,
								list:[
									{name:"128GB"},
									{name:"256GB"},
									{name:"512GB"},
									{name:"1TB"},
								]
							},
							{	//配置
								title:"配置",
								selected:0,
								list:[
									{name:"标配"},
									{name:"套餐1"},
								]
								
							}
						],
						// desc:"远峰蓝 128GB 标配",
						price:7999,
						num:1, //数量
						img:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000"
					},
				],
				carouselList:[
								{url:"https://www.apple.com.cn/newsroom/images/product/iphone/geo/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_GEO_09142021_inline.jpg.small_2x.jpg"},
								{url:"https://www.apple.com.cn/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_Colors_09142021_big.jpg.small_2x.jpg"},
								{url:"https://www.apple.com.cn/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_New-Camera-System_09142021_Full-Bleed-Image.jpg.small_2x.jpg"},
								{url:"https://www.apple.com.cn/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_Notifications_09142021_carousel.jpg.small_2x.jpg"},
							],
				options: [
				{
					icon: 'headphones',
					text: '客服',
					info: 2,
				}, 
				{
					icon: 'shop',
					text: '店铺',
					// infoBackgroundColor:'#007aff',
					// infoColor:"red"
				}, 
				{
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
					text: '加入购物车',
					backgroundColor: '#ff0000',
					color: '#fff'
					},
					{
					text: '立即购买',
					backgroundColor: '#ffa200',
					color: '#fff'
				}],
				buyCount:1
			};
		},
		onLoad(item) {
			//加载商品信息
			//获取商品属性信息
			//this.attrs保存获取到的商品属性信息
			//获取商品信息 商品所属分类的属性信息
			//this.id=item.id;
			// this.getHotGoods();
			
			//加载购物车中商品数量
			this.updateCartNum()
		},
		methods:{
			...mapMutations(['addAnItem']),
			updateCartNum(){
				this.options[2].info=this.getCartNum
			},
			onClick (e) {
				uni.showToast({
				  title: `点击${e.content.text}`,
				  icon: 'none'
				})
				//点击客服
				if(e.content.text=="客服"){
					
				}else if(e.content.text=="购物车"){
					// uni.navigateTo({
					// 	url:"../shoppingcar/shoppingcar"
					// })
					uni.switchTab({
						url:"../shoppingcar/shoppingcar"
					})
				}
			},
			buttonClick (e) {
				console.log(e)
				//加入购物车
				if(e.index==0){
					
					this.addAnItem(JSON.parse(JSON.stringify(this.goodList)));
					this.options[2].info++
					
				}else if(e.index==1){
					//跳转到下单页面 
					//必须带上商品id，以及选择的相关属性
				}
			},
			openPopUp(){
				this.$refs.popup.open()
			},
			toMinus(){
				this.buyCount--
			},
			toAdd(){
				this.buyCount++
			}
		},
		computed:{
			...mapState({
				// itemList:state=>state.cart.list
			}),
			...mapGetters(['getCartNum'])
		}
	}
</script>

<style lang="scss">
	page{
		padding-bottom: 150rpx;
	}
	.item-info{
		//border: 1px solid black;
		width: 730rpx;
		margin: 0 auto;
	}
	.carousel{
		//border: 1px solid black;
		width: 750rpx;
		height: 700rpx;
		
		.carousel-img{
			width: 100%;
			height: 100%;
		
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
	.item-title{
		//border: 1px solid black;
		margin: 10rpx 0 10rpx 0;
		font-size: 40rpx;
		font-weight: 500;
		height: 60rpx;
	}
	.item-desc{
		//border: 1px solid black;
		color: #A5A9B1;
		height: 110rpx;
		margin: 10rpx 0 10rpx 0;
	}
	.item-price{
		//border: 1px solid black;
		color: #F94C09;
		margin: 10rpx 0 10rpx 0;
		padding-left: 10rpx;
		height: 60rpx;
		
		.ip-sign{
			
		}
		
		.ip-num{
			font-size: 50rpx;
			font-weight: bold;
			
		}
		
	}
	.item-configBox{
		//border: 1px solid black;
		height: 150rpx;
		width: 100%;
		white-space: nowrap;
		
		.item-configBox-sub{
			display: inline-block;
			
			.item-config{
				//border: 1px solid black;
				width: 150rpx;
				height: 130rpx;
				display: flex;
				flex-flow: column nowrap;
				justify-content: center;
				align-items: center;
				padding: 5rpx;
				
				.ic-iconfont{
					font-size: 30rpx;
				}
				.ic-name{
					font-size: 32rpx;
				}
				.ic-desc{
					font-size: 25rpx;
				}
				
			}
			
		}
		
	}
	
	
	.item-choose{
		//////border: 1px solid black;
		width: 750rpx;
		height: 100rpx;
		background-color: #F2F3F1;
		display: flex;
		z-index: 1;
		margin: 20rpx 0 20rpx 0;
		
		.ich-default{
			//////border: 1px solid black;
			line-height: 100rpx;
			text-align: center;
			padding: 0 20rpx 0 20rpx;
			color: #878588;
		}
		
		.ich-content{
			display: flex;
			color: #748198;
			line-height: 100rpx;
			text-align: center;
			
			.ich-clolor{
				////border: 1px solid black;
			}
			.ich-capacity{
				////border: 1px solid black;
			}
			.ich-config{
				////border: 1px solid black;
			}
			
		}
		
		
	}
	
	.item-operate{
		// //border: 1px solid black;
		height: 100rpx;
		width: 750rpx;
		position: fixed;
		bottom: 0rpx;
		z-index: 9999;
		
	}
	
	.popupBox{
		width: 750rpx;
		height: 900rpx;
		// position: absolute;
		// bottom: 0;
		background-color: white;
		
		.pb-color{
			//border: 1px solid black;
			width: 750rpx;
			height: 100rpx;
			line-height: 100rpx;
			padding-left: 20rpx;
			font-size: 38rpx;
		}
		
		.pb-color-content{
			//border: 1px solid black;
			width: 750rpx;
			height: 100rpx;
			display: flex;
			flex-flow: row nowrap;
			justify-content: left;
			line-height: 100rpx;
			text-align: center;
			.pcc01{
				border: 1px solid #F59054;
				width: 210rpx;
				background-color: #FAD9CC;
				color: #F68C52;
				cursor: pointer;
				
				
			}
			.pcc02{
				//border: 1px solid black;
				width: 210rpx;
				background-color: #F6F7F9;
				margin-left: 50rpx;
				cursor: pointer;
			}
			.pcc03{
				//border: 1px solid black;
				width: 210rpx;
				background-color: #F6F7F9;
				margin-left: 50rpx;
				cursor: pointer;
			}
			
		}
		
		.pb-capacity{
			//border: 1px solid black;
			width: 750rpx;
			height: 100rpx;
			line-height: 100rpx;
			padding-left: 20rpx;
			font-size: 38rpx;
			
		}
		.pb-capacity-content{
			//border: 1px solid black;
			width: 750rpx;
			height: 100rpx;
			display: flex;
			flex-flow: row nowrap;
			justify-content: left;
			line-height: 100rpx;
			text-align: center;
			
			.pcco01{
				border: 1px solid #F59054;
				width: 210rpx;
				background-color: #FAD9CC;
				color: #F68C52;
				cursor: pointer;
			}
			.pcco02{
				//border: 1px solid black;
				width: 210rpx;
				margin-left: 50rpx;
				cursor: pointer;
			}
		}	
		
		.pb-plan{
			//border: 1px solid black;
			width: 750rpx;
			height: 100rpx;
			line-height: 100rpx;
			padding-left: 20rpx;
			font-size: 38rpx;
			
		}
		
		.pb-plan-content{
			//border: 1px solid black;
			width: 750rpx;
			height: 100rpx;
			display: flex;
			flex-flow: row nowrap;
			justify-content: left;
			line-height: 100rpx;
			text-align: center;
			
			.ppc01{
				border: 1px solid #F59054;
				width: 210rpx;
				background-color: #FAD9CC;
				color: #F68C52;
				cursor: pointer;
			}
			
			.ppc02{
				//border: 1px solid black;
				width: 210rpx;
				margin-left: 50rpx;
				cursor: pointer;
			}
			
			.ppc03{
				//border: 1px solid black;
				width: 210rpx;
				margin-left: 50rpx;
				cursor: pointer;
			}
		}
		
		.line{
			height: 1px;
			width: 750rpx;
			border: 1px solid #F5F5F5;
			margin-top: 20rpx;
			margin-bottom: 20rpx;
		}
		
		.pb-buyNum{
			// border: 1px solid black;
			width: 730rpx;
			height: 100rpx;
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			line-height: 100rpx;
			text-align: center;
			margin: 0 auto;
			
			.pb-buyNum-title{
				
			}
			.numBox{
				border: 1px solid #F4F4F4;
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-between;
				min-width: 210rpx;
				height: 80rpx;
				
				.numBoxMinus{
					//border: 1px solid black;
					background-color: #F6F6F6;
					width: 70rpx;
					text-align: center;
					line-height: 80rpx;
					font-size: 56rpx;
					font-weight: 500;
					cursor: pointer;
				}
				.numBoxNum{
					//border: 1px solid black;
					min-width: 70rpx;
					text-align: center;
					line-height: 80rpx;
					font-size: 56rpx;
					
				}
				.numBoxPlus{
					//border: 1px solid black;
					background-color: #F6F6F6;
					width: 70rpx;
					text-align: center;
					line-height: 80rpx;
					font-size: 56rpx;
					font-weight: 500;
					cursor: pointer;
				}
				
			}
		}
		
		
	}

</style>
