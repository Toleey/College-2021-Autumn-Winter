<template>
	<view>
		<view v-for="(item,i) in relative" :key="i" @click="sendDad(i)" style="border: 1px solid black;height: 100rpx;">
			{{item.id}}---{{item.name}}---{{item.age}}
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"son",
		data() {
			return {
				toDad:this.relative
			};
		},
		props:['relative'],
		methods:{
			sendDad(i){
				this.$emit("heyDad",this.relative[i].name)
			}
		}
		
	}
</script>

<style>

</style>
