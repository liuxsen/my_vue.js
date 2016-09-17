<template>
	<div class="wzbox">
		<div class="clearfix">
			<div class="col-xs-4 text-center" @click="showAticle(0)">
				近期
			</div>
			<div class="col-xs-4 text-center" @click="showAticle(1)">
				文件夹
			</div>
			<div class="col-xs-4 text-center" @click="showAticle(2)">
				标签
			</div>
		</div>
		<div class="articleBox">
			<div class="articleList" v-show="articleShow == 0" transition="pl">
				1
			</div>
			<div class="articleList" v-show="articleShow == 1" transition="pl">
				2
			</div>
			<div class="articleList" v-show="articleShow == 2" transition="pl">
				3
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'article',

  data () {
    return {
    	articleShow:0
    };
  },
  methods:{
  	showAticle:function(value){
  		console.log(value)
  		this.articleShow = value;
  	}
  }
};
</script>

<style lang="css" scoped>
.wzbox{
	color: #fff;
	height: 30px;
	width: 100%;
	font-weight: 600;
	font-size: 16px;
	line-height: 30px;
	background-color: #438AFE;
}
.articleBox{
	width: 300%;
	height: 100px;
	background-color: red;
	position: relative;
	color: #fff;
}
.articleList{
	position: absolute;
	left: 10%;
	top: 0;
	width: 33.33%;
}
.pl-transition{
	transition: all ease-in .3s;
	left: 0;
}
.pl-enter{
	opacity: 1;
	left: 33.33%;
}
.pl-leave{
	opacity: 0;
	left: 33.33%;
}
</style>