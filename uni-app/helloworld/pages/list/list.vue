<template>
	<view>
		
		<unicloud-db ref="udb" v-slot:default="{data, loading, error, options}" collection="contacts">
			<view v-if="error">{{error.message}}</view>
			<view v-else>
				<uni-list>								<!-- native原生事件 -->
					<uni-list-item v-for="item in data" @longpress.native="rmItem(item._id)" :key="item._id" :title="item.name" :note="item.phone" link @click.native="updateItem(item)"></uni-list-item>
				</uni-list>
			</view>
		</unicloud-db>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			rmItem(id){
				this.$refs.udb.remove(id)
			},
			updateItem(item){
				uni.navigateTo({
					url:"../update/update?item="+JSON.stringify(item)
					//没办法传item对象过去，一般都写成字符串
				})
			}
		}
	}
</script>

<style>

</style>
