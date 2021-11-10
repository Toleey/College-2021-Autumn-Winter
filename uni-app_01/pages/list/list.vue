<template>
	<view>
		列表页
		
		<view v-for="item in list" class="box_item">
			{{item}}
		</view>
		
		<button @click="pullDown">下拉刷新</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					"旭稻尘","沓堡孜","笑穗福","旭稻尘","沓堡孜","笑穗福",
					"旭稻尘","沓堡孜","笑穗福","旭稻尘","沓堡孜","笑穗福",
					"旭稻尘","沓堡孜","笑穗福","旭稻尘","沓堡孜","笑穗福",
				],
				list2:[
					["111","asd","zxc"],
					["222","asd","zxc"],
					["333","asd","zxc"],
				],
				a:0,
				pageIndex:0
			};
		},
		//下拉刷新通常是从服务器端那数据
		//重新从服务器端拿数据更新到页面
		onPullDownRefresh() {
			console.log("触发了下拉刷新")
			this.list=["xdc","大包子","休闲鞋"]
			uni.stopPullDownRefresh()
			
			// setTimeout(()=>{
			// 	this.list=["xdc","大包子","休闲鞋"]
			// 	uni.stopPullDownRefresh()
			// },2000)
			
		},
		onReachBottom() {
			//页面触底时就要加载下一页数据了
			console.log("页面触底") //...剥离出来数据
			// this.list=[...this.list,...['须导沉','大包子','哈哈哈']]
			console.log(this.a)
			this.list=[...this.list,...this.list2[this.a]]
			this.a++
			console.log(this.a)
			
			// if(this.pageIndex==3)return
			// this.list=[...this.list,...this.list2[this.pageIndex]]
			//this.pageIndex++
		},
		methods:{
			pullDown(){
				uni.startPullDownRefresh({
					
				})
			},
			getNewData(pageIndex){ //pageIndex指的是你要第几页数据
				//从服务器端获取数据
				return this.list2[a]
				
			}
		}
	}
</script>

<style lang="scss">
	.box_item{
		border: 1px solid black;
		height: 100rpx;
		
	}
</style>
