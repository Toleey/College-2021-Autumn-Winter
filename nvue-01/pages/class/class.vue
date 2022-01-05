<template>
	<view>
		<view>准备接收数据</view>
		<button @click="btnClick">向nvue页面发送数据</button>
		
		<view @click="btnClick">从globalData中获取到的数据{{text}}</view>
	</view>
</template>

<script>
	import store from '@/store/index.js'//必须叫index.js
	import {mapState,mapMutations,mapGetters} from 'vuex'
	
	export default {
		data() {
			return {
				text:''
			};
		},
		onLoad() {
			uni.$on('index',e=>{ //回掉函数都有参数，e相当于回掉函数的参数，传数据全靠这个e
				console.log("注册事件接受数据")
				console.log("注册事件拿过来的数据"+e.data)
				
			})
		},
		methods:{
			btnClick(){
				uni.$emit('msg',10000)
				this.text=getApp().globalData.text
			}
		},
		computed:{
			...mapState({
				// itemList:state=>state.cart.list
			}),
			...mapGetters(['getCartNum'])
		}
	}
</script>

<style lang="scss">

</style>
