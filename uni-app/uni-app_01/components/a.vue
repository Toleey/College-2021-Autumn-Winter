<template>
	<view>
		这是a组件
		<button @click="changeNum">修改b组件中的数据</button>
		
	</view>
</template>

<script>
	export default {
		name:"a",
		data() {
			return {
				
			};
		},
		methods:{
			changeNum(){
				uni.$emit('updateNum',10)//触发全局自定义事件
			}
		}
	}
</script>

<style>

</style>
