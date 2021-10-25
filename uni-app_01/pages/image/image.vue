<template>
	<view>
		
		<button type="default" @click="chooseImage">上传图片</button>
		<image v-for="(item,i) in imagesArr" :key="i" :src="item"></image>
		
		<progress stroke-width="100" :percent="50"></progress>
		<button type="default" @tap="uploadImage">真正的图片上传</button>
		
		<button type="default" @tap="previewImage" >预览图片</button>
		
	</view>
</template>

<script>
	var _self
	export default {
		data() {
			return {
				imagesArr:[],
				percent:0,
			}
		},
		onLoad() {
			_self=this
			this.getImages()
		},
		methods: {
			chooseImage(){
				
				uni.chooseImage({
					count:5,
					success:(res) => {
						console.log(res)
						this.imagesArr=res.tempFilePaths
						console.log(this.imagesArr)
					}
					
				})
			},
			
			uploadImage(){
				uni.chooseImage({
					count:1,
					sizeType:['original'],//上传图片 原图（不压缩）
					extension:['jpg','jpeg','png'],//限制上传图片格式
					//sourceType:[],
					success: (res) => { //选择完图片 进入上传操作
						let imageFile = res.tempFilePaths[0]
						console.log(imageFile)
						
						var uploadTask = uni.uploadFile({
							url:"http://172.16.77.15:8081/user2/upload",
							filePath:imageFile,//要上传的图片资源路径
							name:"file",
							success: (res1) => {
								console.log(res1)
							}
						})
						//onProgressUpdate上传对象更新的方法
						uploadTask.onProgressUpdate(function(re){
						 _self.percent = re.progress
						 re.totalBytesExpectedToSend //预期需要上传的数据总长度，单位 Bytes 
						 re.totalBytesSent//已经上传的数据长度，单位 Bytes
						})
					
					}
					
				})
			},
			getImages(){
				//获取网络图片地址保存到imagesArr
				this.imagesArr=[
					'https://www.mxbc.com/media/upload/index/%E4%B8%BB%E9%A1%B5banner1920x900--2_1.jpg',
					'https://www.mxbc.com/media/upload/LargeFile/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210430214158.jpg'
				]
			},
			
			previewImage(){
				uni.previewImage({
					current:0,
					urls:this.imagesArr,
					loop:true ,//app可用
					indicator:"default"
				})
			}
			
		}
	}
</script>

<style>

</style>
