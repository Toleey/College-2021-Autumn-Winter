<template>
	<view>
		<view>页面导航的学习</view>
		<navigator url="/pages/news/news?id=1&q=1" open-type="navigate">跳转到news</navigator>
		<navigator url="../message/message?id=2" open-type="switchTab">跳转到message</navigator>
		<navigator url="../news/news?id=3" open-type="redirect"> redirect 跳转到news 使用少</navigator>
		
		<button @click="btnclick()">编程式导航 跳转到news</button>
		<button @click="goType()">编程式导航 跳转到message(TableBar)</button>
		<button @click="btnclick2()">编程式导航 跳转到news redirect</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onUnload() {
			console.log("导航页面卸载了")
		},
		methods: {
		
			btnclick(){ //编程式导航使用场景，先完成业务处理再跳转
			
				console.log("hahah")
				alert("1")
				uni.navigateTo({
					url:"/pages/news/news?id=1",
				})
			},
			
			goType(){
				alert("哈哈哈哈"),
				uni.switchTab({
					url:"../message/message?id=2"
				})
			},
			btnclick2(){ //编程式导航使用场景，先完成业务处理再跳转
			
				console.log("hahah")
				alert("1")
				uni.redirectTo({
					url:"/pages/news/news?id=3",
				})
			},
			
		}
	}
</script>

<style>

</style>
