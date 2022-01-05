#### 简介：培养应用用户习惯，提升用户粘性。签到得积分的应用营销功能。
#### 功能支持：
1. 每日签到奖励 
2. 周期性连续7日签到，奖励翻倍

##### 使用方式

```js
<template>
	<uni-sign-in ref="signIn"></uni-sign-in>
<template>
<script>
	export default {
		methods: {
			signIn() { //签到
				this.$refs.signIn.open()
			}
		}
	}
<script>
```

> 详情参考[uni-starter](https://ext.dcloud.net.cn/plugin?id=5057)

##### 插件组成
1. 前端组件

<img style="margin-left:30px;width:60vw;max-width:300px;" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/ff94178d-6d67-4408-8dde-b06eee8212c9.jpg" />

2. `DB Schema`表结构,
	- 描述签到表字段及含义以及读写权限。 
	- 路径：`/uniCloud/database/opendb-sign-in.schema.json` 
> 更多表结构说明详情：[https://uniapp.dcloud.io/uniCloud/schema](https://uniapp.dcloud.io/uniCloud/schema)

3. `uni-clientDB-actions` 一个可编程的 `clientDB` 前置后置操作
	- 前置操作，添加操作时检查今日是否未签到，否则拦截
	- 后置操作，判断是否已经连续签到7天，决定本次签到用户可得积分
	- 后置操作，输出本轮已签到几天，当前积分，已签到的日期数组，本轮签到可得多少分


#### 常见问题
1. 是否支持配置积分数

	答：暂不支持，今后的版本有计划支持


2. 有没有更多玩法

	答：计划今后推出需要看广告才能签到或者补签的玩法