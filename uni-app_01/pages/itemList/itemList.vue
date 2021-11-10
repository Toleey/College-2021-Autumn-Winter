<template>
	<view class="content">
		
		<scroll-view class="left">
			<view class="type" v-for="(type,i) in typeList" :key="i">
				{{type.name}}
			</view>
		</scroll-view>
		<scroll-view class="right" :scroll-y="true">
			
			<view class="right_box" v-for="(item,i) in itemList" :key="i">
				<view class="right_box_left">
					<image class="right_img" :src="item.img"></image>
				</view>
				<view class="right_box_right">
					<view class="right_box_right_title">
						<text>{{item.title}}</text>
					</view>
					<view class="right_box_right_desc">
						<text>类型：</text>
						<text>{{item.type}}</text>
					</view>
					<view class="right_box_right_desc">
						<text>适合：</text>
						<text>{{item.desc}}</text>
					</view>
				</view>
			</view>
			
		</scroll-view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				typeList:[
					{id:1,name:"分类一"},
					{id:1,name:"分类二"},
					{id:1,name:"分类二"},
					{id:1,name:"分类二"},
				],
				itemList:[
					{id:1,img:"https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/9a952c80-6080-11eb-a16f-5b3e54966275.png",title:"女洋气上衣款",type:"2020年冬装",desc:"40-50岁中老年女装"},
					{id:1,img:"https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/9a952c80-6080-11eb-a16f-5b3e54966275.png",title:"女洋气上衣款",type:"2020年冬装",desc:"40-50岁中老年女装"},
					{id:1,img:"https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/9a952c80-6080-11eb-a16f-5b3e54966275.png",title:"女洋气上衣款",type:"2020年冬装",desc:"40-50岁中老年女装"},
					{id:1,img:"https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/9a952c80-6080-11eb-a16f-5b3e54966275.png",title:"女洋气上衣款",type:"2020年冬装",desc:"40-50岁中老年女装"},
					{id:1,img:"https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/9a952c80-6080-11eb-a16f-5b3e54966275.png",title:"女洋气上衣款",type:"2020年冬装",desc:"40-50岁中老年女装"},
					],
				
			};
		}
	}
</script>

<style lang="scss">
	
	page{
		height: 100%;
	}
	
.content{
	border: 1px solid black;
	display: flex;
	height: 100%;
	width: 750rpx;
	
	.left{
		border: 1px solid black;
		width: 200rpx;
		height: 100%;
		
		.type{
			border: 1px solid black;
			height: 100rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		
	}
	
	// .right{
	// 	border: 1px solid black;
	// 	width: 550rpx;
	// 	height: 100%;
	// }
	
	.right{
		border: 1px solid black;
		// height: 100%;
		width: 530rpx;
		margin: 0 auto;
		// flex-flow: row nowrap;
		
		.right_box{
			border: 1px solid black;
			display: flex;
			margin-top: 20rpx;
			
			.right_box_left{
				border: 1px solid black;
				width: 159rpx;
				height: 159rpx;
				
				.right_img{
					width: 159rpx;
					height: 159rpx;
					
				}
			}
			
			.right_box_right{
				border: 1px solid black;
				height: 159rpx;
				width: 371rpx;
				
				.right_box_right_title{
					border: 1px solid black;
					font-weight: 900;
					font-size: 33rpx;
				}
				
				.right_box_right_desc{
					border: 1px solid black;
					font-weight: 300;
					font-size: 25rpx;
					color: #A8A8A8;
				}
				
				.right_box_right_down{
					border: 1px solid black;
					display: flex;
					justify-content: space-between;
					margin-top: 30rpx;
					
					.right_box_right_down_price{
						
						.rbrdpn,.rbrdpi{
							color: #DE0E21;
						}
						.rbrdpw{
							color: #A9A9A9;
						}
					}
					
					.right_box_right_down_icon{
						border: 1px solid black;
						margin-right: 20rpx;
						display: flex;
						align-items: center;
						// justify-content: center;
						// background-color: #DC0011;
						// color: white;
						// border-radius: 45%;
						// font-size: 25rpx;
						
						.rbrdi{
							width: 50rpx;
							height: 50rpx
						}
						
					}
					
				}
				
				
			}
			
		}
		
		
		
	}
	
}

</style>
