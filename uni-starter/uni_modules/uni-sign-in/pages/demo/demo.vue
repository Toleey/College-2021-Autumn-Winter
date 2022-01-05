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