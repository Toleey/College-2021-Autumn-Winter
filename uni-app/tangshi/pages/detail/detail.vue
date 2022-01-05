<template>
  <view class="content" v-if="!loading">
    <view class="ts-title">{{ detail.title }}</view>
    <view class="ts-author">[{{ detail.dynasty }}] {{ detail.author }}</view>
    <view class="ts-content" v-for="item in (detail.text || '').split('\n')" :key="item">{{ item }}</view>
    <view class="ts-subtitle" v-if="detail.translation">译文</view>
    <view class="ts-desc" v-if="detail.translation">{{ detail.translation }}</view>
    <view class="ts-subtitle" v-if="detail.appreciation">赏析</view>
    <view class="ts-desc" v-if="detail.appreciation">{{ detail.appreciation }}</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      detail: {},
      loading: false
    }
  },
  onLoad(option) {
    this.read(option.id || '5f64c4cca2a89f21dbd4fd66')
  },
  methods: {
    read(id) {
      this.loading = true
      uni.showLoading({
          title: '加载中'
      });
      uniCloud
        .callFunction({
          name: 'read',
          data: { id }
        })
        .then(res => { //执行云函数后返回的值怎么做
          // console.log(res.result.data[0], 1)
          this.detail = res.result.data[0] || {}
          uni.setNavigationBarTitle({
            title: `${this.detail.title} - 作者${this.detail.author}`
          })
          this.loading = false
          uni.hideLoading();
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
