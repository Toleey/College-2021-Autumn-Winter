<template>
	<view>
		123
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onNavigationBarSearchInputChanged() {  //监听搜索栏输入内容变化
			
		},
		onNavigationBarSearchInputClicked() { //监听搜索栏点击事件,
			console.log("搜索栏被点击了")
			
			//执行的时间，通常是跳转到真正的页面
			
		},
		onNavigationBarButtonTap(obj) {
			console.log(obj)
			if(obj.float=="left"){
				console.log("执行扫一扫")
			}else{
				console.log("执行更多")
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
