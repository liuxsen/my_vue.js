<template>
  <div id="app">
  <!-- 头部 -->
    <head-bar></head-bar>
    <article-vue></article-vue>
  <!-- 侧按钮 -->
    <side-bar :show-sidebar="showSidebar"></side-bar>
    <!-- <p>
      <a href="#" v-link="{path:'/myForm'}">myForm</a>
      <a href="#" v-link="{path:'/getData'}">getData</a>
    </p>
    <router-view></router-view> -->
  </div>
</template>

<script>
import sideBar from './components/sideBar'
import headBar from './components/headBar'
import articleVue from './components/articleVue'

export default {
  data () {
    return {
      showSidebar: false
    };
  },
  components:{
    sideBar,headBar,articleVue
  },
  methods:{

  },
  events:{
    'toggle-sideBar':function(){
      this.showSidebar = !this.showSidebar
    }
  }
};

</script>

<style type="text/css">
html,body{
  width: 100%;
  padding: 0;
  margin: 0;
  background: #fff;
}
</style>
