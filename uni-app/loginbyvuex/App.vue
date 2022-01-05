<script>
	import store from '@/store/index.js'
	import {mapMutations} from 'vuex'
	
	
	export default {
		globalData:{
			hasLogin:false
		},
		methods:{
			...mapMutations(['login']),
		},
		onLaunch: function() { 
			console.log('App Launch')
			
			let user = uni.getStorageSync("userinfo")||''//sync同步
			console.log(user)
			if(user.username){
				getApp().globalData.hasLogin=true
				this.login(user)
			}
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		
	}
</script>

<style>
	/*每个页面公共css */
</style>
