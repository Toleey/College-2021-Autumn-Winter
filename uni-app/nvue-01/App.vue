<script>
	export default {
		globalData:{
			text:''
		},
		onUniNViewMessage() {
			console.log(e)
		},
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
	@import url("@/static/iconfonts/iconfont.css");
	@import url("@/common/zcm-main.css");
	@import url("@/common/zcm-main-nvue.css");
</style>
