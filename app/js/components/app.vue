<template>
  <div class="app">
  	<component-head></component-head>
  	<component-footer></component-footer>
  </div>
</template>

<script>
var ComponentHead = require('./head.vue');
var ComponentFooter = require('./footer.vue');
module.exports =  {
 data:function(){
 	return {
	 		msg: 'hello world!'
	 	}
	 },
 components:{
 		ComponentHead,
 		ComponentFooter
 	}
}
</script>

<style>
html,body{
	height: 100%;
	margin: 0;
}
.app {
  background-color: #eee;
  position: relative;
  height: 100%;
}
</style>