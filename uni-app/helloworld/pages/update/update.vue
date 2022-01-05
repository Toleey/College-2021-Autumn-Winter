<template>
	<view>
		
		<uni-easyinput v-model="item.name" placeholder="name"></uni-easyinput>
		<uni-easyinput v-model="item.phone" placeholder="phone"></uni-easyinput>
		<button @click="submit">提交</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item:{
					"name":"",
					"phone":""
				}
			}
		},
		onLoad(it) {
			console.log(it.item)
			this.item=JSON.parse(it.item)//将JSON格式字符串转换成对象
		},
		methods: {
			submit(){
				const db = uniCloud.database();
				let item2 = {...this.item}//剥离对象或数组 取到里面的内容
				delete item2._id
				db.collection('contacts').doc(this.item._id).update(item2).then(e=>{
					console.log(e)
				})
			}
		}
	}
</script>

<style>

</style>
