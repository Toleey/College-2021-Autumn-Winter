<template>
	<view>
		
		<view>用户名:{{uname}}</view>
		<view>密码:{{uname}}</view>
		{{son}}
		
		<view>mapState的另一种用法</view>
		<view>用户名:{{userinfo.username}}</view>
		<view>用户是否登录:{{haslogin}}</view>
		
		<view>姓名截取:{{uname_letter}}</view>
		
		<view>uname_getter:{{uname_getter}}</view>
		<view>letter_getter:{{letter_getter(1)}}</view>
		<view>letter_getter:{{letter(1)}}</view>
	</view>
</template>

<script>
	import {mapState,mapGetters} from 'vuex'
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			
		},
		// computed:{ //计算属性 把方法当属性 方法名就是属性
		// 			//一个方法只能返回一个值
		// 	uname(){
		// 		return this.$store.state.userinfo.username
		// 	},
		// 	son(){ //方法返回值是什么就是什么
		// 		return '煦稻尘'
		// 	}
		// },
		// computed:mapState({
		// 	uname:state=>state.userinfo.username,
		// 	upwd:state=>state.userinfo.password
		// })
		computed:{ //...对象展开运算符
			// ...mapState(["userinfo"]),
			// ...mapState(["haslogin"]),
			...mapState(["userinfo","haslogin"]),
			...mapGetters([
				"uname_getter",
				"letter_getter"
			]),
			...mapGetters({letter:"letter_getter"}),
			
			
			uname(){
					// return this.$store.state.userinfo.username
					return this.$store.getters.uname_getter
				},
				
			uname_letter(){
				return this.$store.getters.letter_getter(1)
			},
			
			
			
		}
		
	}
</script>

<style lang="scss">

</style>
