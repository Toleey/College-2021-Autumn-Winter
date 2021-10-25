<template>
	<view>
		数据绑定
		<view>{{msg}}</view>  <!-- 差值表达式 -->
		<view>{{flag?"是真的":"是假的"}}</view>  <!-- 三元表达式 为真时，为假时 -->
		<view>{{1+1}}</view>  <!-- 三元表达式 为真时，为假时 -->
		
		<view> <image v-bind:src="imgurl"></image> </view>
		<view> <image :src="imgurl"></image> </view> <!-- 缩写方式 -->
		
		<view v-for="(item,i) in arr" :key="i">
			{{item.name}}---{{item.age}}---{{item.gender}}
			
			<button @click="del(i)">删除</button>
			<button @click="display(item)">点击控制台输出人员所有信息</button>
		</view> 
		<hr>
		<view v-for="(item,i) in arr" :key="i">
			{{item.name}}---{{item.age}}---{{item.gender=="male"?"男":"女"}}
		</view>
		
		<!-- <button v-on:click=""> 点击 </button> -->
		<button @click="btnclick"> 点击 </button>
		<button @click="btnclick(111)"> 点击 </button> <!-- 传参数 形参 -->
		<button @click="btnclick(111,$event)"> 点击 </button> <!-- 传对象 $event必须这么写-->
		
		<switch checked @change="switchchange" ></switch>
	</view>
</template>

<script>
	export default {
		data() { 	//所有数据都要放在data里
			return {
				msg:"今天下雨",
				flag:true,
				imgurl:"/Users/toby/Documents/a.png",
				arr:[
					{name:'大水饺',age:'20',gender:'female'},
					{name:'大包子',age:'21',gender:'male'},
					{name:'大饼子',age:'22',gender:'female'},
					{name:'大火烧',age:'23',gender:'male'},
					{name:'大馅饼',age:'24',gender:'female'},
				],
				
			}
		},
		methods: {
			btnclick(num,e){
				console.log("btn被点击")
				console.log(num)
				console.log(e)
			},
			del(num){
				console.log(num)
				console.log(this.arr)
				//splice 参数意义 （从哪个位置开始删除，删除几条数据）
				this.arr.splice(num,1)
			},
			display(item){
				console.log(item.name,item.age,item.gender)
				// this.arr[i].name
			},
			switchchange(e){
				console.log("开关状态"+e.target.value)
				if(e.target.value){
					console.log("Open Bluetooth")
				}
				else{
					console.log("Close Bluetooth")
				}
			}
			
		}
	}
</script>

<style>

</style>
