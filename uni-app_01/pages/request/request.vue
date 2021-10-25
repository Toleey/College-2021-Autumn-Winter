<template>
	<view>
		<button @click="getLunbo">发起get请求</button>
		<button @click="getLunbo2">发起get请求2</button>
		<view v-for="(item,i) in imageList" :key="i">
			<image  :src="item.img">1</image>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageList:[
					// {id:1,url:"http://www.taobao.com",img:"https://img.alicdn.com/simba/img/TB1HQihQxv1gK0jSZFFSuv0sXXa.jpg"},
					// {id:2,url:"http://www.taobao.com",img:"https://img.alicdn.com/imgextra/i4/6000000001122/O1CN01h1tZ5p1K9v0sfGQ4D_!!6000000001122-0-octopus.jpg"},
					// {id:3,url:"http://www.taobao.com",img:"https://aecpm.alicdn.com/simba/img/TB1sv_jkQ9l0K4jSZFKSutFjpXa.jpg"}
				 ]
			}
		},
		methods: {
			//在网络请求的时候，要是用箭头函数的回调方法，否则this指的是回调函数本身
			getLunbo(){
				uni.request({
					url:"http://127.0.0.1:8082/api/getlunbo",
					method:"GET",//get是method的默认值，可以不写,
					data:{ //传输数据过去
						// text:'1'
					},
					// success(res) { //请求成功的回调函数
					// 	console.log(res);
					// 	//绑定到页面上去
					// 	this.imageList = res.data.message
						
					// },
					success:(res)=> {
						console.log(res)
						console.log(res.data.message)
						if(res.data.status==0){
							this.imageList=res.data.message
						}else{
							uni.showToast({
								title:"请求有误"
							})
						}
					
					},
					fail:()=> {	//请求失败的回调函数
						console.log("请求出错了")
						uni.showToast({
							title:"请求失败",
							icon:"error"
						})
					},
					complete:()=> {
						console.log("请求成功了")
					},
				    post(){ //发送post请求
						uni.request({
							url:"",
							method:"POST",
							header:{
								'content-type':"application/x-www-form-urlencoded"
							},
							timeout:30,
							success: () => {
								
							}
						})
					}
				})
			},
			async getLunbo2(){ //async 异步调用
				const res = await this.$myRequest({ //await 异步调用
					url:'/api/getlunbo'
				})
				console.log(res)
				
				if(res.data.status==0){
					this.imageList=res.data.message
				}else{
					uni.showToast({
						title:"请求有误"
					})
				}
				
				
			}
		}
	}
</script>

<style>

</style>
