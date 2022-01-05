<template>
	<view>
		<uni-collapse>
		    <uni-collapse-item title="默认开启" :open="true">
		        <text>折叠内容</text>
		    </uni-collapse-item>
		    <uni-collapse-item title="折叠内容">
		            <text>折叠内容</text>
		    </uni-collapse-item>
		    <uni-collapse-item title="禁用状态" disabled>
		        <text>折叠内容</text>
		    </uni-collapse-item>
		</uni-collapse>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>
