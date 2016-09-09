<template>
  <div class="footer">
  	<component-footericon>{{msg}}</component-footericon>
  	<component-footericon>{{msg}}</component-footericon>
  	<component-footericon>{{msg}}</component-footericon>
  	<component-footericon>{{msg}}</component-footericon>
  </div>
</template>

<script>
import componentFootericon from './footIcon.vue'





























module.exports =  {
 data:function(){
 	return {
 		msg: 'footer'
 	}
 },
 components:{
 	componentFootericon:componentFootericon
 }
}
</script>

<style>
.footer {
  color: red;
  height: 30px;
  background-color: #333;
  color: #fff;
  line-height: 30px;
  font-size: 14px;
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
}
</style>