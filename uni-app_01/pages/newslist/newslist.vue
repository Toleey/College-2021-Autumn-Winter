<template>
	<view>
		
		<view class="box" v-for="news in newsList">
			<view class="box-left">
				<image :src="news.img"></image>
			</view>
			<view class="box-middle">
				<view class="bm-title">{{news.title}}</view>
				<view class="bm-desc">{{news.desc}}</view>
			</view>
			<view class="box-right">
				<view>
					>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsList:[
					{id:1,title:"舌尖美食",desc:"软软香香的美食",img:"https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/9a952c80-6080-11eb-a16f-5b3e54966275.png"},
					{id:1,title:"舌尖美食",desc:"软软香香的美食",img:"https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/9a952c80-6080-11eb-a16f-5b3e54966275.png"},
					{id:1,title:"舌尖美食",desc:"软软香香的美食",img:"https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/9a952c80-6080-11eb-a16f-5b3e54966275.png"},
					{id:1,title:"舌尖美食",desc:"软软香香的美食",img:"https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/9a952c80-6080-11eb-a16f-5b3e54966275.png"},
					{id:1,title:"舌尖美食",desc:"软软香香的美食",img:"https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/9a952c80-6080-11eb-a16f-5b3e54966275.png"},
					{id:1,title:"舌尖美食",desc:"软软香香的美食",img:"https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/9a952c80-6080-11eb-a16f-5b3e54966275.png"},
					{id:1,title:"舌尖美食",desc:"软软香香的美食",img:"https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/9a952c80-6080-11eb-a16f-5b3e54966275.png"},
					{id:1,title:"舌尖美食",desc:"软软香香的美食",img:"https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/9a952c80-6080-11eb-a16f-5b3e54966275.png"},
				]
			};
		}
	}
</script>

<style lang="scss">
	
	.box{
		margin-top: 10rpx;
		// border: 1px solid black;
		display: flex;
		flex-flow: row nowrap;
		width: 750rpx;
		border-bottom: 1px solid #EFEFF0;
		
		.box-left{
			// border: 1px solid black;
			width: 110rpx;
			
			image{
				width: 100rpx;
				height: 100rpx;
			}
			
		}
		.box-middle{
			// border: 1px solid black;
			width: 600rpx;
			display: flex;
			flex-flow: column nowrap;
			justify-content: center;
			
			.bm-title{
				// border: 1px solid black;
				font-weight: 800;
				color: #0E0E0E;
				
			}
			
			.bm-desc{
				// border: 1px solid black;
				color: #89898F;
				margin-top: 10rpx;
				
			}
			
		}
		.box-right{
			// border: 1px solid black;
			width: 40rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			
			
		}
		
	}

</style>
