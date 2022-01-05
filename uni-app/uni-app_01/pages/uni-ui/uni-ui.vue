<template>
	<view>
		uni-ui的插件使用
		
		<view>
			
			<button @click="selectDate">选择日历</button>
			<text>开始日期</text>
			<input :value="sDate" @click="selectDate" />
			<text>结束日期</text>
			<input :value="eDate" />
			
			<uni-calendar :range="true" @confirm="confirm" startDate="2021-10-10" endDate="2022-11-31" :insert="false"  ref="calendar"></uni-calendar>
			<!-- 加个:说明是绑定，会把""里面的值变成boolean值运算，不加一般是是字符串形式 -->
			
			<button @click="selectDate2">选择日期2</button>
			<uni-calendar :range="true" @confirm="confirm" startDate="2021-10-10" endDate="2022-11-31" :insert="false"  ref="calendar2"></uni-calendar>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sDate:"",
				eDate:""
			};
		},
		methods:{
			selectDate(){
				this.$refs.calendar.open();
			},
			confirm(e){
				console.log(e)
				// this.date=e.month+"月"+e.month+"日"+e.year+"年"
				this.sDate=e.range.before
				this.eDate=e.range.after
				console.log(this.sDate)
			},
			selectDate2(){
				this.$refs.calendar2.open();
			}
		}
	}
</script>

<style lang="scss">
	input{
		border: 1px solid black;
	}

</style>
