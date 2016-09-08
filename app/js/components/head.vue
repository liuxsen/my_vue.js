<template>
  <div class="head">{{ msg }}</div>
</template>

<script>
module.exports =  {
 data:function(){
 	return {
 		msg: 'head'
 	}
 }

}
</script>

<style>
.head {
  color: red;
  height: 30px;
  background-color: #333;
  color: #fff;
  line-height: 30px;
  font-size: 14px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}
</style>