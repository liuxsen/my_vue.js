<template>
  <div class="footer-icon">{{ msg }}</div>
</template>

<script>
module.exports =  {
 data:function(){
 	return {
 		msg: 'footer'
 	}
 }
}
</script>

<style>
.footer-icon {
  width: 25%;
  box-sizing: border-box;
  padding: 5px;
  color: #eee;
  font-size: 12px;
  float: left;
}
</style>