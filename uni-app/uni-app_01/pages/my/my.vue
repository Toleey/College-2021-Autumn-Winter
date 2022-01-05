<template>
	<view>
		我的
		<button size="default">保存</button>
		<button size="mini">保存</button>
		
		<button type="default" plain @click="btnclick()">镂空 保存</button> <!-- @ v-on的缩写 -->
		<button type="default">default保存</button>
		
		<button type="primary" disabled > 不能使用状态 primary保存</button>
		<button type="primary">primary保存</button>
		
		<button type="warn" loading > 等待操作 warn保存</button>
		<button type="warn">warn保存</button>
		
		<image src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"
		></image>
		<image src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"
		mode="aspectFill"></image>
		<image src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"
		mode="aspectFit"></image>
		
		<image src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"
		mode="top"></image>
		
		<image src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"
		mode="left"></image>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			btnclick(){
				console.log("按钮点击了")
			}
		}
	}
</script>

<style>
image{
	will-change: transform; /* css写的太多时，加载的图片多，页面会闪烁，加上就不会闪烁了 */
}
</style>
