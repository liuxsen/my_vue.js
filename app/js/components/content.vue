<template>
  <div class="content">{{ msg }}</div>
</template>

<script>
module.exports =  {
 data:function(){
 	return {
 		msg: 'content'
 	}
 }
}
</script>

<style>
.content {
  color: red;
  font-size: 14px;
  top: 30px;
  bottom: 30px;
  left: 0;
  right: 0;
  position: absolute;
}
</style>