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

</style>
