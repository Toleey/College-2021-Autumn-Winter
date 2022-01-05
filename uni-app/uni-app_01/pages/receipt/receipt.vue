<template>
	<view>
		<view>是否开具发票</view>
		<view v-for="(item,i) in arr" :key="i">
			{{item.name}}---{{item.age}}---{{item.gender}}
			<switch checked @change="switchchange(item)" ></switch>
		</view> 
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
			switchchange(item){
				console.log(item.name,item.age,item.gender)
			}
			
		}
	}
</script>

<style>

</style>
