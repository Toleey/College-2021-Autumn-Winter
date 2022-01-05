<template>
	<view>
		
		<view v-if="haslogin">
			<!-- 已经登陆 -->
			<view>用户名：{{userinfo.username}}</view>
			<!-- <view>密码：{{userinfo.password}}</view> -->
			<button class="dl"@click="btnlogout()">退出</button>
		</view>
		
		<view v-else="haslogin">
			<!-- 还未登录 -->
			<text>用户名：</text>
			<input class="nr" type="text" v-model="loginuser.uname" placeholder="请输入用户名"/>
			<text>密码：</text>
			<input class="nr" type="password" v-model="loginuser.pwd"  placeholder="请输入密码"/>
			<button class="dl" @click="btnlogin()">登录</button>
		</view>
		
		
	</view>
</template>

<script>
	//import store from '@/store/index.js'
	import {mapState,mapMutations,mapActions} from 'vuex' //倒入辅助函数
	export default {
		data() {
			return {
				
				loginuser:{  //一个对象
					uname:"",
					pwd:""
				},
				
			};
		},
		onLoad() {
			
		},
		methods:{
			//vuex中Mutations中都是更新state数据的方法
			//这里使用mapMutations辅助函数的作用
			//就是将Mutations中的方法映射成页面的方法
			//可以在其他方法中使用this.方法名 调用
			//映射后的方法
			
			//对象展开运算符
			...mapMutations(['login','logout']),//把方法映射到这里，可以直接调用
			...mapActions(['logoutaction','loginaction']),
			
			btnlogin(){
				//取页面中的用户名和密码，跟服务端做交互，判断是否正确
				if(this.loginuser.uname=="zhangsan"&&this.loginuser.pwd=="123456"){
					//后台验证通过
					//从服务端拿回来的数据会有很多，也需要处理后再存储到vuex
					let userinfo={}
					userinfo.username=this.loginuser.uname
					userinfo.password=this.loginuser.pwd
					userinfo.headurl="http://xdfsd"
					// store.commit("login",userinfo)
					// this.login(userinfo)  //把vuex里里面的方法映射到这里
					
					//这种方式是调用mutations里面的方法
					 // store.dispatch('loginaction',userinfo)
					
					//以对象属性的方式
					//store.dispatch({type:'loginaction',uinfo:userinfo})
					
					this.loginaction(userinfo)
				}else{
					uni.showToast({
						title:"用户名或密码错误"
					})
				}
			},
			btnlogout(){
				// store.commit("logout")
				
				// this.logout()
				
				//store.dispatch('logoutaction')
				
				this.logoutaction()
			}
			
			
		},
		computed:{
			...mapState(["userinfo","haslogin"]),
		}
	}
</script>

<style lang="scss">
	
	.nr{
		border: 1px solid black;
		width: 700rpx;
		height: 40rpx;
		line-height: 40rpx;
		font-size: 40rpx;
	}
	.dl{
		margin-top: 10rpx;
	}

</style>
