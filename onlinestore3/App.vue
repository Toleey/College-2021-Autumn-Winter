<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./static/iconfonts/iconfont.css");
	
	uni-checkbox .uni-checkbox-input { border-radius: 50%; border: 1rpx solid black; } 
	uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked { background-color: #007AFF; border: 1rpx solid #007AFF; } 
	/* uni-checkbox .uni-checkbox-wrapper { width: 100%; } */
</style>
