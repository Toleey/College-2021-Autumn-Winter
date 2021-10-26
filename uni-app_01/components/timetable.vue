<template>
	<view>
		
		<view class="chooseBox">
			
			<tr>
				<td>时间</td>
				<td>输入</td>
			</tr>
			<tr>
				<td>年份</td>
				<input type="text" name="year" />
			</tr>
			<tr>
				<td>月份</td>
				<input type="text" name="month" />
			</tr>
			<tr>
				<td>日期</td>
				<input type="text" name="date" />
			</tr>
			<tr>
				<td>时间</td>
				<input type="text" name="time" />
			</tr>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"timetable",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	
	.chooseBox{
		border: 1px solid black;
		width: 600rpx;
		height: 600rpx;
		margin: 0 auto;
		
	}
	input{
		border: 1px solid black;
	}

</style>
