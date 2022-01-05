<template>
	<view class="content">
		
		
		<!-- <view class="header_box"> -->
			<lunbotu :images="imageList"></lunbotu>
			<!-- <swiper class="lunbotu" indicator-dots circular autoplay="">
				<swiper-item v-for="(image,i) in imageList" :key="i">
					<image :src="image.img"></image>
				</swiper-item>
			</swiper> -->
		<!-- </view> -->
		
		<view class="middle_box1">
			<view class="middle_box1_01">
				<view class="middle_box1_01_icon_bgc">
					<span class="icon iconfont icon-fuwuchaoshi"></span>
				</view>
				<text>在线超市</text>
			</view>
			<view class="middle_box1_01">
				<view class="middle_box1_01_icon_bgc">
					<span class="icon iconfont icon-info"></span>
				</view>
				<text>联系我们</text>
			</view>
			<view class="middle_box1_01" @click="toCommunityPictures">
				<view class="middle_box1_01_icon_bgc">
					<span class="icon iconfont icon-tupian"></span>
				</view>
				<text>社区图片</text>
			</view>
			<view class="middle_box1_01">
				<view class="middle_box1_01_icon_bgc">
					<span class="icon iconfont icon-shipin"></span>
				</view>
				<text>学习视频</text>
			</view>
		</view>
		
		<view class="middle_box2">
			<text>推荐商品</text>
		</view>
		
		<view class="down_box">
		
		<items_list :items="itemList" @toDetail="toDetail"></items_list> <!-- 方法加括号默认是无参 -->
		<!-- 	<view class="down_box01" v-for="(item,i) in itemList" :key="i">
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
			</view> -->
			
			
		</view>
		
		<view class="isover" v-if="flag">—————————我是有底线的!—————————</view>
	</view>
</template>

<script>
	import items_list from '../../components/items_list/items_list.vue'
	import lunbotu from '../../components/lunbotu/lunbotu.vue'
	export default {
		data() {
			return {
				imageList:[],
				itemList:[],
				pageIndex:1,
				flag:false //声明变量
			}
		},
		onLoad() {
			this.getLunbo2()
			//this.getItem2()
			this.getItem3()
		},
		onReachBottom() {
			this.pageIndex++
			this.getItem3()
			console.log(this.pageIndex)
		},
		onPullDownRefresh() {
			console.log("下拉刷新")
			this.getLunbo2()
			this.pageIndex=1
			this.itemList=[]
			this.flag=false
			// this.getItem3() 停一秒看看
			setTimeout(()=>{this.getItem3()},1000)
			uni.stopPullDownRefresh()
			
		},
		methods: {
			
			async getLunbo2(){
				const res = await this.$myImage({ 
					url:'/api/getlunbo'
				})
				if(res.data.status==0){
					this.imageList=res.data.message
				}else{
					uni.showToast({
						title:"请求有误"
					})
				}
			},
			
			async getItem2(){ 
				const res = await this.$myItem({ 
					url:'/api/getgoods?pageindex=1'
				})
				if(res.data.status==0){
					this.itemList = res.data.message
				}else{
					uni.showToast({
						title:"请求有误"
					})
				}
			},
			async getItem3(){
				const res = await this.$myItem({
					url:'/api/getgoods?pageindex='+this.pageIndex
				})
				if(res.data.status==0){
					// this.itemList = res.data.message
					this.itemList = [...this.itemList,...res.data.message]
					console.log(this.itemList)
					if(res.data.message.length<10){
						this.flag=true
					}
				}else{
					uni.showToast({
						title:"请求有误"
					})
				}
			},
			
			getLunbo(){
				uni.request({
					url:"http://127.0.0.1:8082/api/getlunbo",
					method:"GET",
					data:{},
					success: (res) => {
						// console.log(res.data.message)
						this.imageList=res.data.message
					},
					fail: () => {
					},
					complete: () => {
						console.log("getLunbo()方法执行了")
					}
				})
			},
			getItem(){
				
				uni.request({
					url:"http://localhost:8082/api/getgoods?pageindex="+this.pageIndex,
					method:"GET",
					data:{},
					success: (res) => {
						console.log(res.data.message)
						this.itemList = res.data.message
						// console.log(this.itemList)
					},
					fail: () => {
					},
					complete: () => {
						console.log("getItem()方法执行了")
					},
					
				})
			},
			
			toDetail(id){
				console.log(id)
				uni.navigateTo({
					url:"../detail/detail?id="+id
				})
			},
			toCommunityPictures(){
				uni.navigateTo({
					url:"../community_pictures/community_pictures"
				})
			}
			
		},
		comments:{
			items_list,
			lunbotu
		}
	}
</script>

<style lang="scss">

	.content{
		background-color: #EAEAEA;
		font-family: 'Microsoft Yahei';
		
		.isover{
			margin-top: 20rpx;
			width: 100%; //页面上下布局用px
			height: 50px;
			line-height: 50px;
			text-align: center;
			font-size: 28rpx;
			background-color: #F0AD4E;
		}
		
	}
	
	// .header_box{
	// 	background-color: white;
	// 	// border: 1px solid black;
	// 	width: 750rpx;
	// 	height: 300rpx;
	// 	margin: 0 auto;
		
		// .lunbotu{
			
		// 	width: 100%;
		// 	height: 100%;
			
		// 	image{
		// 		width: 100%;
		// 		height: 100%;
		// 	}
	 // 	}
		
	// }
	.middle_box1{
		background-color: white;
		// border: 1px solid black;
		width: 750rpx;
		// height: 220rpx;
		display: flex;
		flex-flow: row nowrap; 
		justify-content: space-between;
		padding-top: 10rpx;
		padding-bottom: 15rpx;
		
		.middle_box1_01{
			// border: 1px solid black;
			height: 220rpx;
			width: 187.5rpx;
			display: flex;
			flex-flow: column nowrap;
			// justify-content: center;
			align-items: center;
			
			.middle_box1_01_icon_bgc{
				margin-top: 10rpx;
				padding: 5rpx;
				// border: 1px solid black;
				border-radius: 50%;
				background-color: #A30007;
				// height: 150rpx;
				// width: 187.5rpx;
				height: 140rpx;
				width: 160rpx;
				margin-bottom: 10rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				
				.icon-fuwuchaoshi{
					margin-top: -20rpx;
					margin-left: 10rpx;
					font-size: 80rpx;
					color: white;
				}
				
				.icon-info{
				// border: 1px solid black;
				font-size: 80rpx;
				color: white;
				}
				
				.icon-tupian{
					font-size: 80rpx;
					color: white;
				}
				.icon-shipin{
					font-size: 70rpx;
					color: white;
				}
				
			}
			
			text{
				color: #3D3840;
				margin-top: 10rpx;
			}
		}
		
	}
	
	.middle_box2{
		margin-top: 10rpx;
		background-color: white;
		// border: 1px solid black;
		width: 750rpx;
		height: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		
		text{
			color: #AB3748;
			letter-spacing: 40rpx;
			font-size: 36rpx;
		}
	}
	
	// .down_box{
	// 	margin-top: 5rpx;
	// 	// border: 1px solid black;
	// 	width: 730rpx;
	// 	display: flex;
	// 	flex-flow: row wrap;
	// 	justify-content: space-between;
	// 	padding-left: 10rpx;
	// 	padding-right: 10rpx;
		
		// .down_box01{
		// 	background-color: white;
		// 	// border: 1px solid black;
		// 	width: 350rpx;
		// 	height: 550rpx;
		// 	margin: 15rpx 3rpx 10rpx 3rpx;
			
		// 	.image_box{
		// 		margin: 15rpx auto;
		// 		// border: 1px solid black;
		// 		width: 300rpx;
		// 		height: 300rpx;
				
		// 		.image_box_image{
		// 			width: 300rpx;
		// 			height: 300rpx;
		// 		}
				
		// 	}
			
		// 	.price_box{
		// 		// border: 1px solid black;
		// 		width: 360rpx;
		// 		height: 60rpx;
				
		// 		.price_box_text_now{
		// 			color: #A72D32;
		// 			font-size: 40rpx;
		// 			margin-left: 20rpx;
		// 		}
		// 		.price_box_text_old{
		// 			text-decoration: line-through;
		// 			color: #C3C4C3;
		// 			font-size: 34rpx;
		// 			margin-left: 20rpx;
		// 		}
				
		// 	}
			
		// 	.des_box{
		// 		// border: 1px solid black;
		// 		width: 360rpx;
		// 		height: 162rpx;
				
				
		// 		.des_box_des{
		// 			// border: 1px solid black;
		// 			text-overflow: ellipsis;
		// 			overflow: hidden;
		// 			width: 320rpx;
		// 			height: 162rpx;
		// 			color: #4D4E4E;
		// 			font-size: 35rpx;
		// 			padding-left: 20rpx;
		// 			padding-right: 20rpx;
		// 		}
		
				
		// 	}
			
			
		// }
		
		
	//}
</style>


