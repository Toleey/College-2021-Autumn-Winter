export default{  //模块化，不同业务的状态管理都分开
	state:{
		userInfo:{
			username:'',
			password:'',
		},
		loginStatus:false
	},
	// getters:{
	// 	uname_getter:state=>{  
	// 		return state.userInfo.username;
	// 	},
	// },
	mutations:{
		login(state,ui){
			state.loginStatus=true
			state.userInfo=ui
			//缓存写到这 登录成功 不写到这里了。每次登录都要缓存一遍
			// uni.setStorage({
			// 	key:"userinfo",
			// 	data:ui
			// })
			
		},
		logout(state){
			state.loginStatus=false
			state.userInfo={}
			
			// uni.removeStorage({
			// 	key:"userinfo"
			// })
		}
	},
	// actions:{ //可以异步
	// 	logoutaction(context){ //触发执行mutation里的logout的方法
	// 		context.commit("logout")
	// 	},
	// 	loginaction(context,ui){
	// 		context.commit("login",ui)
	// 	},
	// }
	
	
}