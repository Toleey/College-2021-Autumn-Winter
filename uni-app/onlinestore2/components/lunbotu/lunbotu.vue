<template>
	<view>
		
		<view class="header_box">
			<swiper class="lunbotu" indicator-dots circular autoplay="">
				<swiper-item v-for="(image,i) in images" :key="i">
					<image :src="image.img"></image>
				</swiper-item>
			</swiper> 
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"lunbotu",
		data() {
			return {
				
			};
		},
		props:['images']
	}
</script>

<style lang="scss">
	
	.header_box{
		background-color: white;
		// border: 1px solid black;
		width: 750rpx;
		height: 300rpx;
		margin: 0 auto;
		
		.lunbotu{
			
			width: 100%;
			height: 100%;
			
			image{
				width: 100%;
				height: 100%;
			}
		}
		
	}

</style>
