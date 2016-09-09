<template>
  <component
   :is='currentView' 
   keep-alive 
   transition="fade" 
   transition-mode='out-in'>
   </component> 
  <button @click="change">点击变化模板</button>
</template>

<script>
var myHead = require('./myHead.vue')
var myFooter = require('./myFooter.vue')
var myContent = require('./myContent.vue')
module.exports = {
  data: function(){
    return {
      currentView: 'myHead',
      items:[
        {name: 'zhangsan',age: 13,sex: 'man'},
        {name: 'lisi',age: 15,sex: 'wman'},
        {name: 'wangwu',age: 16,sex: 'man'},
      ]
    }
  },
  components:{
    myHead: myHead,
    myFooter: myFooter,
    myContent: myContent
  },
  methods:{
    change:function(){
      this.currentView =  this.currentView === 'myFooter'? 'myHead':'myFooter';
    }
  }
}
</script>

<style lang="css" scoped>
.fade-transition{
  transition: opacity .3s ease;
}
.fade-enter,.fade-leave{
  opacity: 0;
}
</style>