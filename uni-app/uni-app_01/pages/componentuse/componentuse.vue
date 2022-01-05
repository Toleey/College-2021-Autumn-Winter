<template>
	<view>
		
		<button @click="changeStatus()">显示/隐藏</button>
		
		<test v-show="show" :msg="title" @myEvent="getNum"></test>  <!-- 父传子属性绑定 -->
		{{num}}
		<hello v-show="show"></hello>
		
		<hr />
		<br />
		
		<test v-if="show"></test>
		<hello v-if="show"></hello>
		
		<hr />
		<br />
		
		<text-a></text-a>
		<text-b></text-b>
		
		<button @click="removeListener">移除事件监听器</button>
		
		<!-- 
		v-if 
			是动态添加，当值为 false 时，是完全移除该元素，即 dom 树中不存在该元素。
			性能消耗大，创建组件销毁组件
			只用一次比较合适
		v-show 
			仅是隐藏 / 显示，值为 false 时，该元素依旧存在于 dom 树中。
			若其原有样式设置了 display: none 则会导致其无法正常显示。
			适合频繁切换
		-->
		 
		
		 
		 <!--
			父给子是属性绑定
			子给父是事件绑定
			可以是对象，数组，数据
		 -->
		
	
	</view>
</template>

<script>
	import test from '../../components/test.vue'  //引用组件
	import hello from '../../components/hello.vue'
	import a from '../../components/a.vue'
	import b from '../../components/b.vue'
	export default {
		data() {
			return {
				show:true,
				title:"这是爸爸（父组件）传给儿子（子组件）的数据111",
				num:""
			}
		},
		methods: {
			
			changeStatus(){
				this.show=!this.show
			},
			getNum(aaa){
				console.log("子组件给父组件传递的数据"+aaa)
				this.num=aaa
			},
			removeListener(){
				uni.$off("updateNum")
			}
			
		},
		components:{
			test,
			hello,
			'text-a':a, //起个别名 test-a
			'text-b':b
		}
	}
</script>

<style>

</style>
