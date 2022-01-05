<template>
	<view>
		
		<view class="mapBox">
			<map :longitude="longitude" :latitude="latitude" :scale="scale" :markers="markers"></map>
		</view>
		
		<view class="number" @click="callPhone()">
			联系电话：010-81303630（点击拨打）
		</view>
		<view class="location">
			地址：北京市房山区窦店镇北京网络职业学院
		</view>
		<view class="email">
			Email:xxx@126.com
		</view>
		<view class="contact">
			联系人：张老师
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:116.06963605557249,
				latitude:39.69278252780471,
				scale:13,//默认16
				markers:[
					{
						longitude:116.06963605557249,
						latitude:39.69278252780471,
						title:"我在这里",
						iconPath:"../../static/images/logo.png",
						label:{
							content:"北网",
							color:"#fd8008",
							fontSize:20,
							
						}
					},
					{
						longitude:116.060,
						latitude:39.690,
						title:"我在这里",
						iconPath:"../../static/images/logo.png",
						label:{
							content:"北网",
							color:"#fd8008",
							fontSize:20,
							
						}
					}
				]
				
			};
		},
		methods:{
			callPhone(){
				uni.makePhoneCall({
					phoneNumber:'18265888527'
				})
			}
		}
	}
</script>

<style lang="scss">
	.mapBox{
		border: 1px solid black;
		height: 450rpx;
		width: 750rpx;
		
		map{
			width: 100%;
			height: 100%;
		}
		
	}
	.number,.location,.email,.contact{
		margin: 10rpx;
		border-bottom: 1px solid #EFEFEF;
		height: 60rpx;
		font-size: 25rpx;
		line-height: 60rpx;
	}
	

</style>
