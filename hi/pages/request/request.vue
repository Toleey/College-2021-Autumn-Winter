<template>
	<view>
		<button @click="getLunbo">发起get请求</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			getLunbo(){
				uni.request({
					url:"http://127.0.0.1:8082/api/getlunbo",
					method:"GET",//get是method的默认值，可以不写,
					success(res) {
						console.log(res)
					}
				})
			}
			
		}
	}
</script>

<style>

</style>
