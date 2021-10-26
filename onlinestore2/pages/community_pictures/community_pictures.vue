<template>
	<view class="content">
		
			<scroll-view class="left" scroll-y="true"> <!-- boolean值不写值默认是true -->
				<view @click="picActive(i,picName.id)" :class="active===i?'active':''  " v-for="(picName,i) in picNameList" :key="i">{{picName.title}}</view>
			</scroll-view>
			
			<scroll-view class="right" scroll-y >
				<view class="pic" v-for="(pic,i) in picList" :key="i">
					<image :src="pic.img_url" @click="previewImg(pic.img_url)"></image>
					<view><text>{{pic.title}}</text></view>
					<view><text>{{pic.zhaiyao}}</text></view>
				</view>
				<text v-if="flag">暂无数据</text>
			</scroll-view>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				picNameList:[],
				active:0 ,//记录当前选中项
				picList:[],
				flag:true
				
				
			}
		},
		onLoad() {
			this.getPicList()
		},
		methods: {
			async getPicList(){
				const res = await this.$myImage({
					url:'/api/getimgcategory'
				})
				if(res.data.status==0){
					this.picNameList=res.data.message
				}else{
					uni.showToast({
						title:"请求有误"
					})
				}
				//页面刷新时默认加载第一项的图片
				this.picActive(0,this.picNameList[0].id)
				
			},
			picActive(i,id){
				this.active=i
				console.log(id)
				this.getPics(id) //获取分类对应的图片信息
				console.log(this.picList)
			},
			async getPics(id){
				const res = await this.$myImage({
					url:'/api/getimages/'+id
				})
				if(res.data.status==0){
					this.picList=res.data.message
				}else{
					uni.showToast({
						title:"请求有误"
					})
				}
				// if(this.picList.length>0){
				// 	this.flag=false
				// }else{
				// 	this.flag=true
				// }
				this.flag=this.picList.length>0?false:true
				
			},
			previewImg(img_url){
				//遍历集合，拿到每一项的img_url，重新映射成一个集合
				const urls = this.picList.map(item=>{
					return item.img_url
				})
				console.log(urls)
				uni.previewImage({
					//urls:urls
					urls,//参数和值一样只写一个也行
					current:img_url
				})
			}
		}
	}
</script>

<style lang="scss">
	page{ //页面的根结点
		height: 100%;
	}
	.content{
		height: 100%;
		display: flex;
			
		.left{
			width: 200rpx;
			height: 100%;
			
			view{
				border: 1px solid #eee;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				font-size: 32rpx;
				color: #333;
				
			}
			.active{
				color: #FFFFFF;
				background-color: #A30007;
			}
			
		}
		.right{
			height: 100%;
			width: 530rpx;
			margin: 0 auto;
			// flex-flow: row nowrap;
			
			.pic{
				image{
					width: 520rpx;
					height: 520rpx;
					border-radius: 5rpx;
				}
				text{
					font-size: 32rpx;
					color: #333;
					line-height: 50rpx;
				}
			}
			
		}
			
	}
	

</style>
