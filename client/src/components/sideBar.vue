<template>
<div class="sideBar"
 :show-sidebar="showSidebar"
 v-show="showSidebar"
 transition="show-sidebar">
	<div class="head" @click="hideSidebar">
	
	</div>
	<ul class="bar-list">
		<li v-for="item in items">
			<img :src="item.imgUrl">
			<span>{{item.note}}</span>
		</li>
	</ul>
</div>
</template>

<script>
var xxPng = require('../assets/xx.png')
var grbj = require('../assets/grbj.png')
var tddt = require('../assets/tddt.png')
var kjfs = require('../assets/kjfs.png')
export default {

  name: 'sideBar',
  create:function(){
  	console.log(this.props.showSidebar)
  },
  data () {
    return {
    	items:[
    		{
    			note: '消息中心',
    			imgUrl:xxPng
    		},
    		{
    			note: '个人笔记',
    			imgUrl:grbj
    		},
    		{
    			note: '团队动态',
    			imgUrl:tddt
    		},
    		{
    			note: '快捷方式',
    			imgUrl:kjfs
    		},
    	]
    };
  },
  props:[
  	'showSidebar'
  ],
  methods:{
  	hideSidebar:function(){
  		this.$dispatch('toggle-sideBar')
  	}
  }
};
</script>

<style lang="css" scoped>
.sideBar{
	width: 80%;
	height: 100%;
	background: red;
	position: absolute;
	left: 0%;
	top: 0;
	background-color: #fff;
	z-index: 2;
}
.head{
	height: 166px;
	width: 100%;
	box-sizing: border-box;
	background: url(../assets/bj.png) repeat 0 0;
}
.bar-list{
	list-style: none;
	background-color: #eee;
	padding: 0;
}
.bar-list li{
	padding: 10px 10px;
}
.show-sidebar-transition{
	transition: all ease .5s;
	left: 0;
}
.show-sidebar-enter,.show-sidebar-leave{
	left: -80%;
}
</style>