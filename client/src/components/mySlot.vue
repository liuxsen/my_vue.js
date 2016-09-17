<template>
  <div @click='say'>
    <slot></slot>
    <slot name='one'></slot>
    <slot name='two'></slot>
    <div @click='say2'>sdfssddf</div>
  </div>
</template >

<script type = "text/javascript" >
  var myMixins = {
    created:function(){
      console.log('created');
    },
    methods:{
      say:function(){
        console.log('hello mixin')
      }
    }
  };
export default {
  mixins:[myMixins],
  data: function () {
        return {}
    },
  methods: {
    say2:function(){
      console.log('say2')
    }
    }
}
</script >

<style type = "text/css" scoped>

</style >
