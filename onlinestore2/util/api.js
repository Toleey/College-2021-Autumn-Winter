const BASE_URL="http://127.0.0.1:8082"//定义一个常量 保存服务器地址
//option中封装了请求的所有参数，包括请求方法等
//option中必须包含一个url属性 是方法路径
//option中可以包含一个method属性 是请求方法
//option中可以包含一个data属性，是真正的请求参数

export const myImage=(option)=>{
	
	return new Promise((resolve,reject)=>{ //resolve带会成功的返回结果，rejecr带回失败的返回结果
		uni.request({
			url:BASE_URL+option.url,
			method:option.method||'GET',//假如method不执行，就用get
			data:option.data||{},//有就传，没有就不传
			
			success: (res) => { //请求成功的回调函数
				if(res.data.status!==0){
					return uni.showToast({
						title:"获取数据失败"
					})
				}
				resolve(res)
			},
			
			fail: (err) => {
				return uni.showToast({
					title:"请求接口失败"
				})
				reject(err)
			},
			
		})
		
	})
	
}

export const myItem=(option)=>{
	
	return new Promise((resolve,reject)=>{ //resolve带会成功的返回结果，rejecr带回失败的返回结果
		uni.request({
			url:BASE_URL+option.url,
			method:option.method||'GET',//假如method不执行，就用get
			data:option.data||{},//有就传，没有就不传
			
			success: (res) => { //请求成功的回调函数
				if(res.data.status!==0){
					return uni.showToast({
						title:"获取数据失败"
					})
				}
				resolve(res)
			},
			
			fail: (err) => {
				return uni.showToast({
					title:"请求接口失败"
				})
				reject(err)
			},
			
		})
		
	})
	
}
