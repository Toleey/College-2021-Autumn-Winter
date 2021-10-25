<template>
	<view>
			<view>A页面</view>
			<view v-for="(item,i) in list" :key="i">
				{{item.id}}---{{item.name}}---{{item.age}}---{{item.gender}} 
				<navigator :url="'/pages/student/student?id='+item.id" ><text>详情</text></navigator> 
				<!-- v-band = :  自动计算拼接起来-->
			</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
				
			}
		},
		onLoad() {
			this.getStudent()
		},
		methods: {
			getStudent(){	//从学生端获取学生信息   从这里跟服务端交互
			this.list=[
				{id:1,name:'张三',age:'20',gender:'男'},
				{id:2,name:'李四',age:'21',gender:'女'}
			]
			},
			
		}
	}
</script>

<style>

</style>
