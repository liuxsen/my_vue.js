<style lang="css" scoped>
.msg{
	font-size: 16px;
	margin-top: -2px;
}
.head{
	height: 207px;
	width: 100%;
	box-sizing: border-box;
	padding: 35px 0;
	background-color: #438AFE;
	color: #fff;
	font-size: 14px;
	position: relative;
}
.iconBox .icon{
	vertical-align: bottom;
	width: 35px;
	height: 35px;
	display: inline-block;
	cursor: pointer;
}
.iconBox .iconList{
	background: url(../assets/list.png) center center no-repeat/90%;
}
.iconBox .refresh{
	background: url(../assets/refresh.png) center center no-repeat/90%;
}
.iconBox .search{
	background: url(../assets/serch.png) center center no-repeat/90%;
}
.iconBox .setting{
	background: url(../assets/setting.png) center center no-repeat/90%;
}
</style>


<template>
<div class="head">
	<div class="iconBox">
		<div class="col-xs-6">
			<span class="icon iconList" @click="showSideBar"></span>
			<b class="msg">{{msg}}</b>
		</div>
		<div class="col-xs-6 text-right">
			<span class="icon refresh"></span>
			<span class="icon search"></span>
			<span class="icon setting"></span>
		</div>
	</div>
</div>
</template>

<script>
export default {

  name: 'headBar',

  data () {
    return {
    	msg:'个人笔记'
    };
  },
  methods:{
  	showSideBar:function(){
  		this.$dispatch('toggle-sideBar')
  	}
  }
};
</script>

