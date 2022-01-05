<template>
	<view>
		这是b组件，数据是{{num}}
		
	</view>
</template>

<script>
	export default {
		name:"b",
		data() {
			return {
				num:0
			};
		},
		created() {
			uni.$on('updateNum',(n1)=>{ //注册了一个全局函数叫updateNum
				this.num+=n1
			})
		},
		methods:{
			
		}
	}
</script>

<style>

</style>
