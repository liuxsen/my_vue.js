<template>
    <div>
      <input type='radio' id='one' value='fast' v-model='currentView'>
      <label for="one">fast</label>
      <br/>
      <input type='radio' id='two' value='bus' v-model='currentView'>
      <label for="two">bus</label>
      <br/>
      <input type='radio' id='three' value='business' v-model='currentView'>
      <label for="three">business</label>
      <br/>
      <template id='bus'>
        <div>滴滴巴士</div>
      </template>
      <template id='business'>
        <div>滴滴公交1</div>
      </template>
      <template id='fast'>
        <div>滴滴快车</div>
      </template>
      <component :is="currentView" keep-alive transition="fade" transition-mode="out-in">
        <!--组件在vm.currentView 变化时改变-->
      </component>
    </div>
</template>
<style>
  .fade-transition{
    transition: opacity .3s ease;
    height: 30px;
    background: #eee;
  }
  .fade-enter,.fade-leave{
    opacity: 0;
  }
</style>
<script>
  var Vue = require('vue');
  var bus = Vue.extend({
    template:'#bus',
    replace: true
  });
  var business = Vue.extend({
    template:'#business',
    replace: true
  });
  var fast = Vue.extend({
    template:'#fast',
    replace: true
  });
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
          fast:fast,
          bus:bus,
          business: business
        }
    }
</script>
