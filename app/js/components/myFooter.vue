<template>
  <div class="footer">{{ msg }}</div>
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
.footer {
  color: red;
  height: 30px;
  background-color: #333;
  color: #fff;
  line-height: 30px;
  font-size: 14px;
  width: 100%;
}
</style>