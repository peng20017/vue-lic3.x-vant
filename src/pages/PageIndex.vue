<template>
  <div class="home">
    <div class="test"></div>
    <van-button type="primary">默认按钮</van-button>
    <van-cell-group>
      <van-cell title="单元格" value="内容"/>
      <van-cell title="单元格" value="内容" label="描述信息"/>
    </van-cell-group>
    <van-picker :columns="columns" @change="onChange"/>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20">标签</van-tabbar-item>
    </van-tabbar>
    <van-button type="primary" @click="show=true">弹出</van-button>
    <van-popup v-model="show" position="right" style="width:100%;height:100%">
      <h1 style="text-align:center">内容</h1>
    </van-popup>
  <van-tabs v-model="tactive" @click="onClick">
    <van-tab title="标签 1">内容 1</van-tab>
    <van-tab title="标签 2">内容 2</van-tab>
    <van-tab title="标签 3">内容 3</van-tab>
    <van-tab title="标签 4">内容 4</van-tab>
  </van-tabs>

  </div>

</template>

<script>
// @ is an alias to /src

import { Button, Cell, CellGroup, Picker, Tabbar, TabbarItem, Popup, Tab, Tabs, Toast } from 'vant'
export default {
  name: 'home',
  components: {
    'van-button': Button,
    'van-cell-group': CellGroup,
    'van-cell': Cell,
    'van-picker': Picker,
    'van-tabbar': Tabbar,
    'van-tabbar-item': TabbarItem,
    'van-popup': Popup,
    'van-tabs': Tabs,
    'van-tab': Tab
  },
  data () {
    return {
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      active: 0,
      show: false,
      tactive: 2
    }
  },
  methods: {
    onChange (picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`)
    },
    onClick (index, title) {
      this.$toast(title)
    }
  },
  async created () {
    Toast.loading({
      message: 'loading',
      position: 'top',
      mask: !0
    })
    const res = await this.$api.test.jssdk()
    console.log(res)
    alert(await this.$api.test.jssdk())
  }
}
</script>
<style scoped>
  .test{
    width: 375px;
    height: 100px;
    background-color: red;
  }
</style>
