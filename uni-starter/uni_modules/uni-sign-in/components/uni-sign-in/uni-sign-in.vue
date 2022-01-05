<template>
	<view>
		<uni-popup ref="popup" type="center">
			<image class="background-img" src="@/static/uni-sign-in/background.png" mode="width">
			</image>
			<view class="content">
				<view class="main">
					<text class="title">今日签到成功</text>
					<text class="total">本轮已签到{{signInRes.days.length}}天</text>
					<text class="scores">当前积分：{{signInRes.score}}</text>
				</view>
				<view>
					<view class="days-box">
						<view class="days" v-for="(item,index) in weekdays" :key="index">
							<uni-icons v-if="signInRes.days.includes(item-1)" class="icon active" color="#FFFFFF"
								type="checkmarkempty"></uni-icons>
							<template v-else>
								<uni-icons v-if="item<signInRes.n" class="icon active" color="#FFFFFF"
									type="closeempty"></uni-icons>
								<uni-icons v-else class="icon" type="checkmarkempty" color="#FFFFFF"></uni-icons>
							</template>
							<template v-if="signInRes.days.includes(item-1)||item>signInRes.n">
								<text class="day" :class="{grey:item>signInRes.n}">第{{item}}天</text>
							</template>

							<text v-else class="day">缺卡</text>
						</view>
					</view>
					<view class="tip-box">
						<text class="tip">签到一次得10积分</text>
						<view class="row">
							<text class="tip">连续签到7天可多得</text>
							<text class="red">50</text>
							<text class="tip">积分</text>
						</view>
					</view>
				</view>
				<uni-icons @click="closeMe" class="close-icon" type="closeempty" size="20" color="#AAAAAA"></uni-icons>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	const db = uniCloud.database();
	const signInTable = db.action('signIn').collection('opendb-sign-in')
	export default {
		name: "uni-signIn",
		data() {
			return {
				total: 0,
				scores: 0,
				weekdays: [1, 2, 3, 4, 5, 6, 7],
				signInRes: {
					days: [],
					n: 0
				}
			}
		},
		mounted() {},
		methods: {
			closeMe(e) {
				this.$refs.popup.close()
			},
			async open() {
				uni.showLoading({
					mask: true
				});
				try{
					const date = new Date(new Date().toLocaleDateString()).getTime()
					let res = await signInTable
						.where(`'user_id' == $env.uid && 'date' == ${date} && 'isDelete' == false`)
						.get()
					this.signInRes = res.result
					console.log(res);
					if (res.result.data.length) {
						uni.hideLoading()
						uni.showToast({
							title: '今日已签过',
							duration: 3000,
							icon: 'none'
						});
					} else {
						let res = await signInTable.add({});
						console.log(res);
						uni.hideLoading()
						this.signInRes = res.result
						if (this.signInRes.days.length == 7) {
							uni.showToast({
								title: "你已完成7日连续签到，获得60积分！",
								icon: "none",
								duration: 5000
							})
						} else {
							uni.showToast({
								title: "签到成功,获得10积分！",
								icon: "none",
								duration: 5000
							})
						}
					}
					this.$refs.popup.open()
				}catch(e){
					console.error(e)
					uni.hideLoading()
				}
				
			}
		}
	}
</script>

<style lang="scss">
	view {
		display: flex;
		box-sizing: border-box;
		flex-direction: column;
	}

	.background-img {
		width: 600rpx;
		height: 600rpx;
	}

	.content {
		position: absolute;
		width: 600rpx;
		height: 600rpx;
		justify-content: space-around;
		align-items: center;
		border-radius: 10px;
		z-index: 5;
	}

	.background-img,
	.content {
		top: 0;
	}

	.main {
		align-items: center;
	}

	.title {
		font-size: 44rpx;
		color: #FFFFFF;
		font-weight: 600;
	}

	.total {
		background-color: #FFFFFF;
		color: #ed5200;
		text-align: center;
		border-radius: 100px;
		font-size: 30rpx;
		margin: 16rpx 0;
		width: 230rpx;
	}

	.scores {
		text-align: center;
		color: #FFFFFF;
	}

	.days-box {
		flex-direction: row;
	}

	.days {
		margin: 12rpx;
		font-size: 19rpx;
		justify-content: center;
		align-items: center;
		color: #f8692c;
	}

	.grey {
		color: #C0C0C0;
	}

	.days-box .icon {
		background-color: #feefeb;
		border-radius: 100px;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
		width: 50rpx;
		margin-bottom: 6rpx;
	}

	.days-box .icon.active {
		background-image: linear-gradient(to top, #FF9002, #FF5100);
		background-color: #ffff7f;
	}

	.content,
	.days-box {
		padding: 26rpx;
	}

	.tip-box {
		justify-content: center;
	}

	.tip-box .row {
		flex-direction: row;
		justify-content: center;
	}

	.tip,
	.red {
		text-align: center;
		font-size: 24rpx;
		color: #999999;
		height: 30rpx;
		line-height: 30rpx;
	}

	.red {
		color: #ff0000;
	}

	.close-icon {
		margin-bottom: -180rpx;
		background-color: #FFFFFF;
		border-radius: 100px;
		text-align: center;
		height: 46rpx;
		line-height: 46rpx;
		width: 46rpx;
	}
</style>
