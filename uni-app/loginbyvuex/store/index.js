import Vue from 'vue'
import Vuex from 'vuex'

import user from "@/store/modules/user.js" //@是根目录
// import cart from "@/store/modules/cart.js"

Vue.use(Vuex)

const store = new Vuex.Store({
	
	modules:{
		user
	}
})
export default store