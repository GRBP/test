<template>
  <div class="tabbar-item" @click="itemClick">
    <slot name="icon"></slot>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
      path:String,
    },
    data(){
      return {

      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path);
      },
    },
};
</script>

<style scoped>
.tabbar-item {
  height: 49px;
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.tabbar-item:hover{
    color: var(--color-hight-text);
}
</style>