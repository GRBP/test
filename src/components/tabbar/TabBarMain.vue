<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/shouye">
        <div slot="text">首页</div>
        <div slot="icon" class="iconfont icon-shouye"></div>
      </tab-bar-item>
      <tab-bar-item path="/fenlei">
        <div slot="text">分类</div>
        <div slot="icon" class="iconfont icon-fenlei"></div>
      </tab-bar-item>
      <tab-bar-item path="/gouwuche">
        <div slot="text">购物车</div>
        <div slot="icon" class="iconfont icon-gouwuche"></div>
      </tab-bar-item>
      <tab-bar-item path="/wode">
        <div slot="text">我的</div>
        <div slot="icon" class="iconfont icon-wode"></div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>

import TabBar from './TabBar'
import TabBarItem from './TabBarItem'

export default {
    name:'TabBarMain',
  components: { 
    TabBar,
    TabBarItem,
  }
};
</script>

<style scoped>
@import url('../../assets/icon/tabbar/iconfont.css');

</style>