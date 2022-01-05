<template>
  <view class="content" v-if="!loading">
    <view class="ts-search">
      <input class="ts-search__input" placeholder="请输入诗名" @input="fuzzyQuery" />
    </view>
    <view class="ts-list" v-for="item in data" :key="item._id" @click="read(item._id)">
      <view class="ts-title">
         <text class="ts-name">{{item.title.split('/')[0]}}</text>
         <text class="ts-dynasty">[{{item.dynasty}}]</text>
         <text class="ts-author">{{item.author}}</text>
      </view>
      <view class="ts-desc">{{ item.text.split('\n')[0] }}</view>
    </view>
  </view>
</template>
<script>
let data = []
export default {
  data() {
    return {
      data: [],
      loading: false
    }
  },
  onLoad() {
    this.list()
  },
  methods: {
    list(e) {
      this.loading = true
      uni.showLoading({
          title: '加载中'
      });
      uniCloud
        .callFunction({
          name: 'list',
          data: {
            limit: 300,
            offset: 0,
            keyWord: e ? e.detail.value : ''
          }
        })
        .then(res => {
          // console.log(res.result.data, 0)
          data = res.result.data
          this.data = res.result.data
		  // console.log(this.data)
          uni.hideLoading();
          this.loading = false
        })
    },
    /**
     * 使用test方法实现模糊查询
     */
    fuzzyQuery(e) {
      const reg = new RegExp(e.detail.value)
      const arr = []
      for (let i = 0; i < data.length; i++) {
        if (reg.test(data[i].title)) {
          arr.push(data[i])
        }
      }
      // console.log(arr)
      this.data = arr
    },
    read(id) {
		console.log(id)
      uni.navigateTo({
         url: `/pages/detail/detail?id=${id}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
	.ts-search{
		
		.ts-search__input{
			margin: 0 auto;
			width: 720rpx;
			height: 80rpx;
			border-bottom: 1rpx solid #F2F2F2 ;
		}
		
	}
	
	.ts-list{
		margin-top: 10rpx;
		border-bottom: 2px solid #F5F5F5;
		margin: 0 auto;
		width: 720rpx;
		
		.ts-title{
			// border: 1px solid black;
			display: flex;
			flex-flow: row nowrap;
			// justify-content: space-between;
			
			.ts-name{
				// border: 1px solid black;
				width: 600rpx;
				color: #313131;
				font-weight: 800;
				font-size: 40rpx;
			}
			
			.ts-dynasty{
				// border: 1px solid black;
				width: 100rpx;
				font-weight: 400;
				color: #474747;
			}
			
			.ts-author{
				// border: 1px solid black;
				width: 150rpx;
				color: #474747;
			}
			
		}
		.ts-desc{
			// border: 1px solid black;
			font-size: 35rpx;
			color: #8E8E8E;
		}
		
	}
</style>