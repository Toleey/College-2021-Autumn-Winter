<template>
	<view>
		
		<button size="default">保存</button>
		<button size="mini">保存</button>
		
		<button class="bt1" type="default">按钮</button>
		<button class="bt2" type="default" >按钮</button> 
		<button class="bt3" type="default" disabled >按钮</button>
		<button class="bt4" type="default" loading > </button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	body{
		background-color: white;
	}
	.bt1{
		background-color: #0072FC;
		color: white;
	}
	.bt2{
		color: #85B8EC;
	}
	.bt3{
		background-color: #55A9FE;
		color: #8DC8FD;
	}
	
	
</style>
