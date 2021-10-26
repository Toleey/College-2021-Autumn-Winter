<template>
	<view>
		这是个test组件
		{{msg}}
		
		<button @click="sendNum">给爸爸（父组件）传值</button>
	</view>
</template>

<script>
	export default {
		name:"test",
		data() {
			return {
				num:100,
			};
		},
		beforeCreate() {
			console.log("实例开始初始化了beforecreate")
			console.log(this.num)//没出来
		},
		created() {
			console.log("初始化了created")
			console.log(this.num)
		},
		beforeDestroy() {
			console.log("组件开始销毁了beforedestroy")
		},
		destroyed() {
			console.log("组件已经销毁了destroyed")
		},
		props:['msg'],//props 可以是数组或对象，用于接收来自父组件的数据。
		methods:{
			sendNum(){
				console.log("准备给父组件传值")
				this.$emit("myEvent",this.num)//事件，数据，向这个“事件”发送“数据”
			}
		}
	}
</script>

<style>

</style>
