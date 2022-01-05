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
		methods: {
			submit(){
				const db = uniCloud.database();
				db.collection('contacts').add(this.item).then(e=>{
					console.log(e)
				})
			}
		}
	}
</script>

<style>

</style>
