<template>
	<view>
		<view>B页面</view>
		姓名：{{studentinfo.name}}
		性别：{{studentinfo.gender}}
		年龄：{{studentinfo.age}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:'',//学生id
				studentinfo:{},//单个学生对象信息
	
			}
		},
		onLoad(opt) {
			console.log(opt)
			this.id=opt.id
			this.getSingleStudent()
		},
		methods: {
			
			getSingleStudent(){
				//跟服务端做交互，把学生id传给服务端
				let list=[	//假如liist是服务器的数据库
					{id:1,name:'张三',age:'20',gender:'男'},
					{id:2,name:'李四',age:'21',gender:'女'}
				]
				
				this.studentinfo = list.find(o=>o.id==this.id) //lambda表达式
				
			}
			
		}
	}
</script>

<style>

</style>
