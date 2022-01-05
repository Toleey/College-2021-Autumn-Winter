<template>
	<view>
		
		<progress stroke-width="100" :percent="percent"></progress>
		<button type="default" @tap="uploadFile">文件上传</button>
		
	</view>
</template>

<script>
	 var _self;
	export default {
		data() {
			return {
				percent:0,
			}
		},
		onLoad() {
			_self=this
		},
		methods: {
			uploadFile(){
				uni.chooseFile({
					count:5,
					type:"all",
					success: (res) => { //选择完图片 进入上传操作
						let file = res.tempFilePaths[0]
						console.log(file)
						
						var uploadTask = uni.uploadFile({
							url:"http://172.16.77.15:8081/user2/upload",
							filePath:file,//要上传的文件资源路径
							name:"file",
							success: (res1) => {
								console.log(res1)
							}
						})
						//onProgressUpdate上传对象更新的方法
						uploadTask.onProgressUpdate(function(re){
						 _self.percent = re.progress
						 //re.totalBytesExpectedToSend //预期需要上传的数据总长度，单位 Bytes 
						 //re.totalBytesSent//已经上传的数据长度，单位 Bytes
						
						console.log(_self.percent)
						
						})
					
					}
					
				})
				
				
			}
			
		}
	}
</script>

<style>

</style>
