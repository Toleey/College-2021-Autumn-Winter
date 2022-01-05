export default{
	
	state:{
		list:[
			{	check:false,
				id:1,
				name:"iPhone 13 Pro 系列",
				attrs:[
					{	//颜色属性
						title:"颜色",
						selected:0,
						list:[
							{name:"远峰蓝色"},
							{name:"深空灰色"},
							{name:"金色"},
							{name:"银色"},
						]
					},
					{	//内容容量
						title:"容量",
						selected:0,
						list:[
							{name:"128GB"},
							{name:"1256GB"},
							{name:"512GB"},
							{name:"1TB"},
						]
					},
					{	//配置
						title:"配置",
						selected:0,
						list:[
							{name:"标配"},
							{name:"套餐1"},
						]
						
					}
				],
				// desc:"远峰蓝 128GB 标配",
				price:7999,
				num:1, //数量
				img:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000"
			},
			{	check:false,
				id:2,
				name:"iPhone 13 系列",
				attrs:[
					{	//颜色属性
						title:"颜色",
						selected:0,
						list:[
							{name:"粉色"},
							{name:"蓝色"},
							{name:"午夜色"},
							{name:"星光色"},
							{name:"红色"},
						]
					},
					{	//内容容量
						title:"内容",
						selected:0,
						list:[
							{name:"128GB"},
							{name:"1256GB"},
							{name:"512GB"},
						],
					},
					{	//配置
						title:"配置",
						selected:0,
						list:[
							{name:"标配"},
							{name:"套餐1"},
						]
						
					}
				],
				// desc:"远峰蓝 128GB 标配",
				price:5199,
				num:1 ,//数量
				img:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000"
			},
			
			
		]
	},
	mutations:{
		toMinusNum(state,id){
			
			state.list.find(item=>item.id==id).num--
			
			// if(state.list[i].num==1){
			// 	alert('再减就没有了')
			// }else{
			// 	state.list[i].num--
			// }
			
		},
		toAddNum(state,id){
			state.list.find(item=>item.id==id).num++
			// state.list[i].num++
		},
		toChooseAllSelected(state){
			for(let i = 0;state.list.length;i++){
				state.list[i].check=true
			}
		},
		toChooseAllUnSelected(state){
			for(let i = 0;state.list.length;i++){
				state.list[i].check=false
			}
		},
		selectAll(state){
			state.list.forEach(item=>item.check=true)
		},
		unSelectAll(state){
			state.list.forEach(item=>item.check=false)
		},
		changeItemStatus(state,i){
			state.list[i].check=!state.list[i].check
		},
		removeItem(state){

			for(let i in state.list){
				if(state.list[i].check){
					// state.list[i]={}
					state.list.splice(i,1)
				}
			}
		},
		clearCart(state){
			state.list=[]
		},
		addAnItem(state,goodInfo){
			state.list.push(goodInfo[0]) //把商品放到list里面
			// console.log(goodInfo)
			// console.log(goodInfo[0])//__ob__: Observer 没有办法循环获取值
			// console.log(state.list)//只能用[0]
			
			let addFinish=false
			
			//判断购物车为空
			if(state.list.length<1){
				state.list.push(goodInfo[0])
				return
			}
			//判断购物车有没有这个商品
			let exist = state.list.some(item=>item.id==goodInfo.id)
			if(!exist){//购物车没有这个商品
				state.list.push(goodInfo[0])
				return
			}else{//商品每一个属性判断是否一致
				for(let i in state.list){
					if(state.list[i].id==goodinfo.id){
						let n=0	//统计有几个属性值一样
						for(let j in state.list[i].attrs){
							if(state.list[i].attrs[j].selecte==goodInfo.attrs[j].selected){
								n++
							}
						}
						if(n==state.list[i].attrs.length){
							state.list[i].num+=goodInfo.num
							addFinsh=true
						}
					}
				}
				 if(!addfinish){
				      state.list.push(goodinfo)
				     }

			}
			
			//如果名字一样，就num增加 只加数量，不加手机
		}
	
		
		
	},
	actions:{
		toMinusAC(){
			
		},
		toPlusAC(){
			
		}
	},
	getters:{
		
		getAttrs:(state)=>(index)=>{
			let attrs=""
			// state.index[index] 确定了当前是购物车里的哪个商品
			for(let i in state.list[index].attrs){
				// console.log(i) 这里i是该属性再属性列表里的索引
				let attr=state.list[index].attrs[i]
				// console.log(attr) 这里attr就是具体一个属性对象
				attrs+=""+attr.list[attr.selected].name
			}
			return attrs
		},
		getCheckFalse:(state)=>{
			// let c = true;
			// for(let i in state.list){
			// 	if(!state.list[i].check){
			// 		c=false
			// 		break
			// 	}
			// }
			// return c
			// return state.list.every(item=>item.check==true) if(a==true) 和 if(a)
			return state.list.every(item=>item.check) //都满足返回true，否则返回false
			
		},
		getTotalPrice:(state)=>{
			let tp = 0;
			for(let i in state.list){
				if(state.list[i].check){
					tp+=state.list[i].price*state.list[i].num
				}
			}
			return tp
		},
		getCartNum:(state)=>{
			return state.list.length
		}
		
	}
	
	
	
}