import Vue  from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	
	state:{
		//state中存放的数据，依据业务写
		userinfo:{
			username:'张三',
			password:'root',
			headurl:'http://www.tobywang.com/123'
		},
		haslogin:false
	},
	getters:{ //store的计算数据，对state里面的数据做加工
		uname_getter:state=>{  //提前把你要数据给你算出来，不会给全部的数据
			return state.userinfo.username;
		},
		letter_getter:(state)=>(i)=>{  //传个参数
			return state.userinfo.username.substr(i)
		}
		
	},
	mutations:{  //定义全局方法
		login(state,provider){ 
			//这里对应方法，只是为了更新state中的数据 这里的state就是上面的state
			//比如provider里面的数据
			state.haslogin=true
			state.userinfo=provider //给provider提供什么格式就是什么
		},
		logout(state){
			state.haslogin=false
			state.userinfo={}
		}
		
	}
	
	
})

export default store