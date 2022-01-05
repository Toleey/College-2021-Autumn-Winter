<template>
	<view>
		
		<button @click="showSon()">展示我的儿子</button>
		
		<view v-show="show">
			<son :relative="mySon" @heyDad="getSon"></son>
		</view>
		
		<text>您点击的儿子是：</text>
		<h1>{{son}}</h1>
		
		
		
		
	</view>
</template>

<script>
	import son from '../../components/son.vue'
	export default {
		data() {
			return {
				mySon:[
					{id:1,name:"叙稻尘",age:"20"},
					{id:2,name:"大包子",age:"20"},
					{id:3,name:"真可乐",age:"29"},
				],
				son:"",
				show:false,
				singleSon:false,
			}
		},
		methods: {
			getSon(p){
				this.son=p
				this.show=false
			},
			showSon(){
				this.show=true
			},
			
		},
		components:{
			son
		}
	}
</script>

<style>

</style>
