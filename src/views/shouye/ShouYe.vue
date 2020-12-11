<template>
  <div id="home">
    <nav-bar class="shouye-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <swiper>
      <swiper-item v-for="item in banners" :key='item.index'>
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
    <button @click="getStudent">添加</button>

    <button @click="findStudent">查询</button>

    <button @click="delStudent">删除</button>
    <button @click="editStudent">修改</button>
  </div>
</template>

<script>
import NavBar from "components/navbar/NavBar";
import {Swiper, SwiperItem} from "../../components/swiper/index";

import {getHomeMultidata,getStudent,findStudent,delStudent,editStudent} from 'network/home';

export default {
  name: "ShouYe",
  components: {
    NavBar,
    Swiper,
    SwiperItem
  },
  data(){
    return {
      banners:[],
      recommends:[],
    }
  },
  created(){
    this.getHomeMultidata();

  },
  methods:{
    getHomeMultidata(){
       getHomeMultidata().then(res =>{
      console.log(res.data.data.banner.list);
      this.banners=res.data.data.banner.list;
      this.recommends=res.data.data.recommend.list;
      console.log(this.banners[0].height);
    })
    },

    getStudent(){
      getStudent().then(res => {
        console.log(res);
      })
    },

    findStudent(){
    findStudent().then(res=>{
      console.log(res.data);
    })
    },

    delStudent(){
      delStudent().then(res =>{
        console.log(res.data)
      })
      },

    editStudent(){
      editStudent().then(res=>{
        console.log(res.data);
      })
    }
    }
  }
</script>

<style>
.shouye-nav {
  background-color: var(--color-hight-text);
  color: #ffffff;
}
</style>

