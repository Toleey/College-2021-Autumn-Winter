<template>
	<view>
		<view v-for="(item,i) in arr5" :key="i">
			<view style="border: 1px solid black; width: 700rpx; height: 300rpx; border: 1px solid black;">
				<view style="width:700rpx;background-color: #F2F2F2; height: 50rpx; ">{{item.title}}</view>
				<view style="display: flex;flex-flow: row nowrap; width: 700rpx; border: 1px solid black;">
					<view style="border: 1px solid black;width:100rpx; height: 250rpx; display: flex; flex-flow: column nowrap">
						<view></view>
					</view>
					<view style="border: 1px solid black;width:80rpx; height: 250rpx; display: flex; justify-content: center; align-items: center;">
						<view style="width: 5px ; height: 200rpx;background-color: #67CCD4;"></view>
					</view>
					<view style="border: 1px solid black;width:520rpx; height: 250rpx;">
						
					</view>
				</view>
				
			</view>
		</view>
		
		<view style="height: 100rpx;"></view>
		
		<view v-for="(item,i) in arr4" :key="i" style="margin-left: 20rpx;">
			<view style="width: 700rpx; height: 300rpx; border: 1px solid black;">
				<view  style="background-color: item.bgc;">
					<view style="display: flex; flex-flow: row nowrap">
						<view style="width: 500rpx; margin-top: 40rpx;margin-left: 20rpx;display: flex; flex-flow: column nowrap">
								<text>{{item.title}}</text>
								<text>{{item.context}}</text>
						</view>
						<view style="width: 150rpx; height: 200rpx;margin-top: 40rpx; background-color: red;">
							<text>{{item.img}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		
		<view>
			<table>
				<tr>
					<td>索引</td>
					<td>姓名</td>
					<td>年龄</td>
				</tr>
				<tr v-for="(item,i) in arr3" :key="i">
					<td>{{item.num}}</td>
					<td>{{item.name}}</td>
					<td>{{item.age}}</td>
				</tr>
			</table>
		</view>
		
		
		<view v-for="(item,i) in arr2" :key="i">
			种类：{{item.kind}}---颜色：{{item.color}}
		</view>
		
		<view v-for="(item,i) in arr" :key="i">
			{{item.name}}---{{item.age}}---{{item.skill}}
		</view>
		
		<view>
			<view>{{msg1}}</view>	
			<view>{{msg2}}</view>	
			<view>{{msg3}}</view>	
			<view>{{msg4}}</view>	
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				arr5:[
					{bgc:"#68CDD4",time:["01/31","02/02"],title:"课程",context:["森林运动会","一起斗怪兽","小兔过河","猪猪侠大寻宝"]},
					{bgc:"#FA5E8A",time:["",""],title:"师训",context:["第一节《指南》健康领域","第二节 玩几个游戏究竟算"]},
					{bgc:"#7E8FEF",time:["",""],title:"家长工作",context:["家长工作","家庭健康讲座"]},
					
				],
				arr4:[
					{bgc:"#A269D4",title:"体测数据录入",context:"体测数据现场“录入+上传”，一步到位!",img:""},
					{bgc:"#FA5E8A",title:"入园师训",context:"提高幼师对于体育与运动领域基本知识，基本技能，实践操作能力",img:""},
					{bgc:"#57C4CC",title:"体能课程",context:"提升幼师对于体青与运动领城基本知识，基本技能，实践提作能力",img:""},
					{bgc:"#7E8FEF",title:"家长工作",context:"确保每位家长都能收到孩子的体能成果",img:""},
				],
				arr3:[
					{num:"1",name:"张三",age:20},
					{num:"2",name:"张四",age:21},
					{num:"3",name:"张五",age:22},
				],
				arr2:[
					{kind:"苹果",color:"red"},
					{kind:"香蕉",color:"yellow"},
					{kind:"橙子",color:"orange"},
				],
				arr:[
					{name:"jack",age:"18",skill: ["java","css","rap"]},
					{name:"rose",age:"18",skill: ["java","dance","rap"]},
					{name:"Dereak",age:"18",skill: ["baseball","css","rap"]},
					{name:"Demone",age:"18",skill: ["java","rap"]}
				],
				msg:"hello",
				msg1:"数据绑定的学习",
				msg2:"hello",
				msg3:"你好时节",
				msg4:"2"
			}
		},
		methods: {
		
		}
	}
</script>

<style>

</style>
