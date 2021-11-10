<template>
	<view>
		
	</view>
</template>

<script>
	import helper from'../../common/helper.js'
	export default {
		data() {
			return {
				list:[],
				a:''
				
			};
		},
		onLoad() {
			// console.log(helper.websiteUrl)
			// console.log(helper.isArray(this.list))
			// console.log(helper.now())
			
			// console.log(this.$websiteUrl)
			// console.log(this.$isArray(this.list))
			// console.log(this.$now())
			
			// console.log(this.$helper.websiteUrl)
			// console.log(this.$helper.isArray(this.list))
			// console.log(this.$helper.now())
			
			let a = getApp().globalData.text
			console.log("globalData中全局变量text的值是:"+a)
			
			getApp().globalData.text="654321"//更新globaldata中全局变量的值
			a = getApp().globalData.text
			console.log("globalData中全局变量text的值是:"+a)
			
		},
		
	}
</script>

<style lang="scss">

</style>
